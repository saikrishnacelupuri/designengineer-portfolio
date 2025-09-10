
interface FloatingMenuBarProps {
  isDeveloperMode: boolean;
  setIsDeveloperMode: (mode: boolean) => void;
}

export default function FloatingMenuBar({ 
  isDeveloperMode, 
  setIsDeveloperMode 
}: FloatingMenuBarProps) {

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div 
        className={`glass-container relative flex items-center gap-6 px-8 py-4 rounded-full backdrop-blur-xl backdrop-saturate-200 border transition-all duration-300 shadow-2xl ${
          isDeveloperMode 
            ? 'bg-black/15 border-white/10 text-white shadow-black/50' 
            : 'bg-white/15 border-white/20 text-black shadow-black/10'
        }`} 
        style={{
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)'
        }}
      >
        {/* Glass effect pseudo-element */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: `
              inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
              inset 0 0 3px 1px rgba(255, 255, 255, 0.7)
            `,
            WebkitBoxShadow: `
              inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
              inset 0 0 3px 1px rgba(255, 255, 255, 0.7)
            `,
            zIndex: 1
          }}
        />
        
        {/* Content wrapper to ensure text stays above glass effect */}
        <div className="relative z-10 flex items-center justify-center w-full">
        
        {/* Toggle Section */}
        <div className="flex items-center gap-4">
          <span 
            onClick={() => setIsDeveloperMode(false)}
            className={`text-sm font-bold tracking-wider cursor-pointer transition-colors ${
              !isDeveloperMode 
                ? (isDeveloperMode ? 'text-white' : 'text-black') + ' underline' 
                : 'text-gray-500'
            }`}
          >
            DESIGNER
          </span>
          
          <button
            onClick={() => setIsDeveloperMode(!isDeveloperMode)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              isDeveloperMode ? 'bg-[#40A0FF]' : 'bg-[#12B67A]'
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                isDeveloperMode ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
          
          <span 
            onClick={() => setIsDeveloperMode(true)}
            className={`text-sm font-bold tracking-wider cursor-pointer transition-colors ${
              isDeveloperMode 
                ? (isDeveloperMode ? 'text-white' : 'text-black') + ' underline' 
                : 'text-gray-500'
            }`}
          >
            DEVELOPER
          </span>
        </div>
        
        </div> {/* Close content wrapper */}
      </div>
    </div>
  );
}