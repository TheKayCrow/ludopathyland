import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Get current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Get total height of the page
      const totalHeight = document.documentElement.scrollHeight;
      
      // Get viewport height
      const viewportHeight = window.innerHeight;
      
      // Calculate distance from bottom
      const distanceFromBottom = totalHeight - (scrollTop + viewportHeight);
      
      // Show button when scrolled down 300px AND not at the bottom
      // Hide when either at top or bottom of page
      setIsVisible(scrollTop > 300 && distanceFromBottom > 100);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-pastel-purple hover:bg-pastel-pink text-gray-900 rounded-full shadow-pastel hover:shadow-pastel-lg transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}