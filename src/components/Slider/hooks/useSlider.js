import { useState, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

export function useSlider({ activeIndex = 0, itemWidth, count }) {
  const sliderContainerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handler = () => {
      setContainerWidth(
        sliderContainerRef &&
          sliderContainerRef.current &&
          sliderContainerRef.current.offsetWidth
      );
    };

    handler();
    // TODO: add throttle or replace to our resize observer
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const left = activeIndex * itemWidth * -1;
  const right =
    (count * itemWidth - activeIndex * itemWidth - containerWidth) * -1;

  const prevLeft = useRef(left);
  const prevCount = useRef(count);

  const [{ xyz }, set] = useSpring(() => ({
    from: {
      xyz: [left, 0, 0]
    }
  }));
  const showPrevArrow = left !== 0;
  const showNextArrow = right <= 0;
  const direction = prevLeft.current > left ? "next" : "prev";

  useEffect(() => {
    set({ xyz: [left, 0, 0] });
    prevLeft.current = left;
    prevCount.current = count;
  }, [left, count]);

  return {
    direction,
    xyz,
    showPrevArrow,
    showNextArrow,
    sliderContainerRef
  };
}
