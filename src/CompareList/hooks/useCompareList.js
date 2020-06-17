import { useEffect } from "react";
import { itemWidth } from "../constants/sizes";
import { useSlider } from "../../components/Slider/hooks/useSlider";
import { useIsIntersected } from "../../hooks/useIsIntersected";

import { useListStore } from "../../stores/listStore";
import { useSliderStore } from "../stores/sliderStore";

export function useCompareList() {
  const list = useListStore(state => state.list);
  const sliderStore = useSliderStore();
  const { isIntersected, intersectionTargetRef } = useIsIntersected();

  const { xyz, showPrevArrow, showNextArrow, sliderContainerRef } = useSlider({
    activeIndex: sliderStore.index,
    itemWidth,
    count: list.length
  });

  useEffect(() => {
    sliderStore.set(state => {
      state.xyz = xyz;
      state.showPrevArrow = showPrevArrow;
      state.showNextArrow = showNextArrow;
    });

    return () => {
      sliderStore.setXYZ(null);
    };
  }, []);

  useEffect(() => {
    sliderStore.set(state => {
      state.showPrevArrow = showPrevArrow;
      state.showNextArrow = showNextArrow;
    });
  }, [showPrevArrow, showNextArrow]);

  return {
    isIntersected,
    intersectionTargetRef,
    sliderContainerRef
  };
}
