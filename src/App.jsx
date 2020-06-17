import React from "react";
import { Fish } from "./components/Fish/Fish";

import { useListStore } from "./stores/listStore";

import { CompareList } from "./CompareList/CompareList";

import { Wrapper } from "./App.styles";

export default function App() {
  const list = useListStore(state => state.list);

  return (
    <Wrapper>
      Контент для проскролла (шапка сайта):
      <Fish />
      {!list.length ? <div>Список пуст</div> : <CompareList />}
      Футер:
      <Fish />
    </Wrapper>
  );
}
