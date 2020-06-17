import create from "zustand";
import produce from "immer";

import { COMPARE_LIST } from "../stubs/compareList.stubs";

export const [useListStore] = create(set => ({
  list: COMPARE_LIST,
  set: fn => set(produce(fn)),
  removeByIndex: index =>
    set(
      produce(state => {
        state.list.splice(index, 1);
      })
    )
}));
