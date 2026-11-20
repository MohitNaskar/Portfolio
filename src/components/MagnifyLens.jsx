import { useEffect, useRef } from "react";

const ZOOM   = 1.42;  // magnification factor
const LENS_R = 92;    // px radius → 124px diameter
const LENS_D = LENS_R * 2;

// ── Component ───────────────────────────────────────────────────────────────
const MagnifyLens = () => {
  const lensRef  = useRef(null);
  const cloneRef = useRef(null);
  const pos      = useRef({ x: 0, y: 0, visible: false });
  const rafRef   = useRef(null);

  useEffect(() => {
    // Only activate on laptop/desktop: fine pointer + hover capability + screen ≥ 1024px
    const fineHover = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)"
    ).matches;
    if (!fineHover) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lens = lensRef.current;
    if (!lens) return;

    // ── Build a DOM snapshot clone ────────────────────────────────────────
    // cloneNode(true) copies the full rendered DOM so the lens shows genuine
    // page content — same text, images, colours and layout as the original.
    let fixedPairs = []; // { cloneEl, originalEl } — updated each draw frame

    const buildClone = () => {
      while (lens.firstChild) lens.removeChild(lens.firstChild);
      fixedPairs = [];

      const src   = document.getElementById("root") || document.body;
      const clone = src.cloneNode(true);

      // Housekeeping on the clone
      clone.removeAttribute("id");                                   // no duplicate id="root"
      clone.querySelectorAll("canvas").forEach((el) => el.remove()); // pixel content can't clone
      clone.querySelectorAll("script").forEach((el) => el.remove());

      // Convert position:fixed elements to absolute so they render at the correct
      // document position inside the clone (fixed would pin them to the clone's
      // containing block, not the cursor's scroll-offset location).
      const srcFixedEls = [...src.querySelectorAll(".fixed")];
      clone.querySelectorAll(".fixed").forEach((cloneEl, i) => {
        const originalEl = srcFixedEls[i];
        if (!originalEl) return;
        const rect = originalEl.getBoundingClientRect();
        cloneEl.style.position = "absolute";
        cloneEl.style.top      = `${rect.top  + (window.scrollY || 0)}px`;
        cloneEl.style.left     = `${rect.left + (window.scrollX || 0)}px`;
        cloneEl.style.width    = `${rect.width}px`;
        fixedPairs.push({ cloneEl, originalEl });
      });
      clone.querySelectorAll("input, textarea").forEach((el) => {
        el.setAttribute("tabindex", "-1");                           // not focusable in clone
      });

      clone.style.cssText = [
        "position:absolute",
        "top:0",
        "left:0",
        `width:${src.offsetWidth}px`,
        "pointer-events:none",
        "transform-origin:0 0",
        "will-change:transform",
        "user-select:none",
      ].join(";");

      lens.appendChild(clone);
      cloneRef.current = clone;
    };

    buildClone();

    // ── RAF draw — runs only when pointer is active ───────────────────────
    const draw = () => {
      rafRef.current = null;
      const clone = cloneRef.current;
      if (!clone) return;

      const { x, y, visible } = pos.current;

      if (!visible) {
        lens.style.opacity = "0";
        return;
      }

      const sx = window.scrollX || 0;
      const sy = window.scrollY || 0;

      // Document-space coordinates of the cursor
      const docX = x + sx;
      const docY = y + sy;

      // Translate clone so the cursor's document position lands at the lens centre.
      // After scale(ZOOM) with origin 0,0: point (docX, docY) → (docX*ZOOM, docY*ZOOM).
      // Shift by (-docX*ZOOM + LENS_R, -docY*ZOOM + LENS_R) to place it at the centre.
      const tx = -docX * ZOOM + LENS_R;
      const ty = -docY * ZOOM + LENS_R;

      lens.style.transform  = `translate(${x - LENS_R}px,${y - LENS_R}px)`;
      lens.style.opacity    = "1";
      clone.style.transform = `translate(${tx}px,${ty}px) scale(${ZOOM})`;

      // Keep fixed elements (e.g. Navbar) anchored at their current document position
      fixedPairs.forEach(({ cloneEl, originalEl }) => {
        const r = originalEl.getBoundingClientRect();
        cloneEl.style.top  = `${r.top  + sy}px`;
        cloneEl.style.left = `${r.left + sx}px`;
      });
    };

    const schedule = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(draw);
    };

    // ── Event listeners ───────────────────────────────────────────────────
    // pointermove covers mouse, trackpad and pen in one handler.
    // pointerType guard keeps touch interactions clean on hybrid devices.
    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      pos.current = { x: e.clientX, y: e.clientY, visible: true };
      schedule();
    };

    // mouseleave/enter on document catches cursor leaving / re-entering the window
    const onLeave = () => { pos.current.visible = false; schedule(); };
    const onEnter = () => { pos.current.visible = true;  schedule(); };

    const onScroll = () => schedule();
    const onResize = () => { buildClone(); schedule(); };

    document.addEventListener("pointermove",  onMove,   { passive: true });
    document.addEventListener("mouseleave",   onLeave);
    document.addEventListener("mouseenter",   onEnter);
    window.addEventListener("scroll",   onScroll, { passive: true });
    window.addEventListener("resize",   onResize, { passive: true });

    return () => {
      document.removeEventListener("pointermove",  onMove);
      document.removeEventListener("mouseleave",   onLeave);
      document.removeEventListener("mouseenter",   onEnter);
      window.removeEventListener("scroll",   onScroll);
      window.removeEventListener("resize",   onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={lensRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         `${LENS_D}px`,
        height:        `${LENS_D}px`,
        borderRadius:  "50%",
        overflow:      "hidden",
        pointerEvents: "none",
        zIndex:        9998,
        opacity:       0,
        // Start well off-screen so it doesn't flash at 0,0 before first move
        transform:     "translate(-9999px,-9999px)",
        // Thin silver-grey ring — matches dark editorial palette
        border:        "1px solid rgba(155,162,158,0.42)",
        boxShadow:     [
          "0 2px 24px rgba(0,0,0,0.55)",
          "inset 0 0 0 0.5px rgba(155,162,158,0.10)",
        ].join(","),
        transition:    "opacity 0.14s ease",
        willChange:    "transform,opacity",
      }}
    />
  );
};

export default MagnifyLens;
