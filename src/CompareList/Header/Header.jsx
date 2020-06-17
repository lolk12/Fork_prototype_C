import React, { forwardRef } from "react";

import { useListStore } from "../../stores/listStore";
import { useSliderStore } from "../stores/sliderStore";

import { itemWidth } from "../constants/sizes";

import { Slider } from "../../components/Slider/Slider";
import { TableHeader } from "../Table/TableHeader/TableHeader";

import { Wrapper } from "./Header.styles";

export const Header = forwardRef(({ isSticked }, ref) => {
  const listStore = useListStore();
  const sliderStore = useSliderStore();

  return (
    <Wrapper isSticked={isSticked}>
      <Slider
        ref={ref}
        xyz={sliderStore.xyz}
        showPrevArrow={sliderStore.showPrevArrow}
        showNextArrow={sliderStore.showNextArrow}
        onClickNext={() => sliderStore.setIncrease()}
        onClickPrev={() => sliderStore.setDecrease()}
      >
        <TableHeader
          itemWidth={itemWidth}
          items={listStore.list}
          onItemCloseClick={index => {
            if (index !== 0 && sliderStore.index === index) {
              sliderStore.setDecrease();
            }
            listStore.removeByIndex(index);
          }}
        />
      </Slider>
    </Wrapper>
  );
});
