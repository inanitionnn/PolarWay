export const leftSlideAnimation = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.6 },
  }),
  end: { x: 20, opacity: 0, transition: { delay: 0, duration: 0.6 } },
};
export const rightSlideAnimation = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.6 },
  }),
  end: { x: 20, opacity: 0, transition: { delay: 0, duration: 0.6 } },
};

export const rightSlideRotatedAnimation = {
  hidden: {
    x: 20,
    rotate: -90,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    rotate: -90,
    transition: { delay: custom * 0.1, duration: 0.6 },
  }),
  end: { x: -20, opacity: 0, transition: { delay: 0, duration: 0.6 } },
};

export const slideUpAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.2 },
  }),
  end: { y: -20, opacity: 0, transition: { delay: 0, duration: 0.2 } },
};

export const opacityAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.4 },
  }),
  end: { opacity: 0, transition: { delay: 0, duration: 0.2 } },
};
