import React, { useState, useEffect } from 'react';

const PageTransition = ({ children, pageKey, direction = 'slide' }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setIsAnimating(true);
    
    // 根据方向设置不同的动画类
    switch (direction) {
      case 'slide-left':
        setAnimationClass('animate-slide-in-left');
        break;
      case 'slide-right':
        setAnimationClass('animate-slide-in-right');
        break;
      case 'fade':
        setAnimationClass('animate-fade-in');
        break;
      case 'scale':
        setAnimationClass('animate-scale-in');
        break;
      case 'flip':
        setAnimationClass('animate-flip-in');
        break;
      default:
        setAnimationClass('animate-slide-in-up');
    }

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pageKey, direction]);

  return (
    <div 
      key={pageKey} 
      className={`${animationClass} ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
    >
      {children}
    </div>
  );
};

export default PageTransition;