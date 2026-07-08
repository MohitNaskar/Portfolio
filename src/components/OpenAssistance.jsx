import { useState } from "react";
import LiveKitModal from "./LiveKitModal";

const OpenAssistance = () => {
  const [open, setOpen] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(true);
  };

  return (
    <div className="open-assistance">
      {showSupport && <LiveKitModal setShowSupport={setShowSupport} />}
      {open && (
        <div className="open-assistance-menu">
          <button
            className="assistance-option-btn"
            onClick={handleSupportClick}
          >
            🎙 Voice
          </button>
          <button className="assistance-option-btn">💬 Chat</button>
        </div>
      )}
      <button
        className="open-assistance-trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "✕" : "🤖"}
      </button>
    </div>
  );
};

export default OpenAssistance;
