const SkillCard = ({ icon, name }) => {
  return (
    <div className="relative flex flex-col items-center gap-2">

      {/* Soft Glow Light Behind */}
      <div className="absolute inset-0 blur-2xl bg-white/20 rounded-xl"></div>

      {/* Glassmorphism Card */}
      <div className="relative w-24 h-24 rounded-xl backdrop-blur-lg bg-white/20 border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform duration-300">
        <img
          src={icon}
          alt={name}
          className="w-12 h-12 object-contain"
        />
      </div>

      <p className="text-white text-sm opacity-100">{name}</p>
    </div>
  );
};

export default SkillCard;
