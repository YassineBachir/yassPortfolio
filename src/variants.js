export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        x: direction === "left" ? -30 : direction === "right" ? 30 : 0, 
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.9, 
          delay: delay,
        },
      },
    };
  };
  