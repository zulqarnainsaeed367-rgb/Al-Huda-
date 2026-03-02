import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls the window to the top whenever the route changes.
 * Place this component inside Router but before Routes for it to work with all route changes.
 * 
 * @returns {null} - Returns null as this component handles side effects only
 */
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]); // Re-run whenever pathname changes

    // This component doesn't render anything
    return null;
}

export default ScrollToTop;
