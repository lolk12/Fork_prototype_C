import React from "react";

import { useListStore } from "../../stores/listStore";
import { useSliderStore } from "../stores/sliderStore";

import { itemWidth } from "../constants/sizes";
import { TITLES } from "../../constants/titles";
import { TABLE_LAYOUT } from "../../constants/layouts";

import { TableContent } from "../Table/TableContent/TableContent";

import { Wrapper, CollapseStyled } from "./Content.styles";

export const Content = () => {
  const list = useListStore(state => state.list);
  const xyz = useSliderStore(state => state.xyz);

  return (
    <Wrapper>
      {TABLE_LAYOUT.groups.map(group => (
        <CollapseStyled title={TITLES[group.key]} key={`collapse-${group.key}`}>
          <TableContent
            itemWidth={itemWidth}
            items={list}
            layoutRows={group.values}
            xyz={xyz}
          />
        </CollapseStyled>
      ))}
      {TABLE_LAYOUT.groups.map(group => (
        <CollapseStyled title={TITLES[group.key]} key={`collapse-${group.key}`}>
          <TableContent
            itemWidth={itemWidth}
            items={list}
            layoutRows={group.values}
            xyz={xyz}
          />
        </CollapseStyled>
      ))}
      {TABLE_LAYOUT.groups.map(group => (
        <CollapseStyled title={TITLES[group.key]} key={`collapse-${group.key}`}>
          <TableContent
            itemWidth={itemWidth}
            items={list}
            layoutRows={group.values}
            xyz={xyz}
          />
        </CollapseStyled>
      ))}
    </Wrapper>
  );
};
