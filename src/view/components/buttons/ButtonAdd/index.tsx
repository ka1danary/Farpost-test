import React from "react";
//import styles from "./index.module.scss";

interface Props {
    sort: () => void
}

export const ButtonAdd: React.FC<Props> = ({sort}) => {
    return (
        <button onClick={sort}>
            Добавить задачу
        </button>
    )
};