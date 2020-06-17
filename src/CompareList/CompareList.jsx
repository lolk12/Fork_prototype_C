import React from "react";
import { useCompareList } from "./hooks/useCompareList";
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import { Wrapper } from "./CompareList.styles";

export const CompareList = () => {
  const {
    isIntersected,
    intersectionTargetRef,
    sliderContainerRef
  } = useCompareList();
  return (
    <Wrapper>
      <div ref={intersectionTargetRef} />
      <Header isSticked={isIntersected} ref={sliderContainerRef} />
      <Content />
    </Wrapper>
  );
};
