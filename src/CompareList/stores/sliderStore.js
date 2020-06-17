import create from "zustand";
import produce from "immer";

export const [useSliderStore] = create(set => ({
  index: 0,
  /**
   * link to mutable spring params array
   */
  xyz: null,
  showPrevArrow: false,
  showNextArrow: false,
  setXYZ: xyz => set(state => ({ ...state, xyz })),
  setShowPrevArrow: flag => set(produce(state => (state.showPrevArrow = flag))),
  setShowNextArrow: flag => set(produce(state => (state.showNextArrow = flag))),
  setIncrease: () =>
    set(
      produce(state => {
        state.index += 1;
      })
    ),
  setDecrease: () =>
    set(
      produce(state => {
        state.index -= 1;
      })
    ),
  set: fn => set(produce(fn))
}));
