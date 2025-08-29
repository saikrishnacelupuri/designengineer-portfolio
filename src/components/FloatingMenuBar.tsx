import { useRouter } from "next/navigation";

interface FloatingMenuBarProps {
  isDeveloperMode: boolean;
  setIsDeveloperMode: (mode: boolean) => void;
}

export default function FloatingMenuBar({ 
  isDeveloperMode, 
  setIsDeveloperMode 
}: FloatingMenuBarProps) {
  const router = useRouter();
  
  const menuItems = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'works' },
    { name: 'Playground', id: 'playground' }
  ];

  const handleNavigation = (item: { name: string; id: string }) => {
    if (item.name === 'Work' && !isDeveloperMode) {
      // Navigate to design works page for designer mode
      router.push('/design/works');
    } else if (item.name === 'About' || item.name === 'Playground') {
      // Navigate back to home page for other sections
      if (window.location.pathname !== '/') {
        router.push('/');
        // Small delay to ensure page loads before scrolling
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start' 
            });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
      }
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`flex items-center gap-6 px-8 py-4 rounded-full backdrop-blur-md border transition-all duration-300 ${
        isDeveloperMode 
          ? 'bg-black/80 border-white/20 text-white' 
          : 'bg-white/80 border-black/20 text-black'
      }`}>
        
        {/* Menu Items */}
        <div className="flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={`text-sm font-medium tracking-wider uppercase transition-colors hover:opacity-70 ${
                isDeveloperMode ? 'text-white' : 'text-black'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className={`w-px h-6 ${
          isDeveloperMode ? 'bg-white/30' : 'bg-black/30'
        }`} />

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
              isDeveloperMode ? 'bg-[#38BDF8]' : 'bg-[#12B67A]'
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
      </div>
    </div>
  );
}