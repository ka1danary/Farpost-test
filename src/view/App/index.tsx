import React from "react";
import styles from "./index.module.scss";

import { useFarpostStore } from "../../data/stores/useFarpostStore";
import { ListTaskCard } from "../components/ListTaskCard";
import { ButtonAdd } from "../components/buttons/ButtonAdd";
import { SortBox } from "../components/SortBox";
import { RadioCheckbox } from "../components/RadioCheckbox";
import { Checkbox } from "../components/Checkbox";

export const App: React.FC = () => {

  const [
    tasks,
    sortTaskByNewDate,
    sortTaskByOldDate
  ] = useFarpostStore(state => [
    state.tasks,
    state.sortTaskByNewDate,
    state.sortTaskByOldDate
  ]
  )

  const arrayComponentSort = [
    <RadioCheckbox title='Новые'/>,
    <RadioCheckbox title='Старые'/>
  ]

  const arrayComponentPriyority = [
    <Checkbox title='Low'/>,
    <Checkbox title='Medium'/>,
    <Checkbox title='Hight'/>
  ]

  const arrayComponentMark = [
    <Checkbox title='Research'/>,
    <Checkbox title='Design'/>,
    <Checkbox title='Development'/>
  ]

  return (
    <article className={styles.article}>
      <h1>Список задач</h1>
      <button onClick={sortTaskByNewDate}>
        Новые
      </button>
      <button onClick={sortTaskByOldDate}>
        Старые
      </button>
      <ListTaskCard/>
      <SortBox
        title={'Сортировка'}
        Component={arrayComponentSort}
      />
      <SortBox
        title={'Приоритет'}
        Component={arrayComponentPriyority}
      />
      <SortBox
        title={'Метка'}
        Component={arrayComponentMark}
      />
      <section>
        <div>
        </div>
        <div></div>
      </section>
    </article>
  );
};
