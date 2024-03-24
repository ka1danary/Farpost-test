import { useState } from "react";
import styles from "./index.module.scss";
//import { useFarpostStore } from "../../../data/stores/useFarpostStore";
interface Props {
  set: (value: string) => void;
  placeholder?: string;
  newValue?: string;
}

export const Input: React.FC<Props> = ({ set, placeholder, newValue }) => {

  // const [setTaskInfoString] = useFarpostStore(state => [
  //   state.setTaskInfoString
  // ])

  const [value, setValue] = useState(newValue);

  const helper = (temp: string) => {
    
    setValue(temp);
    set(temp);
  };
  return (
    <div>
      <input
        className={styles.Input}
        placeholder={placeholder}
        onChange={(e) => helper(e.target.value)}
        value={value}
        type="text"
      />
      {/* <div>
        {value.length} / {maxlenght}
      </div> */}
    </div>
  );
};
