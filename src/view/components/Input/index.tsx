import styles from "./index.module.scss";

interface Props {
  set: (value: string) => void;
  placeholder?: string;
  newValue: string;
}

export const Input: React.FC<Props> = ({ set, placeholder, newValue }) => {
  
  const helper = (temp: string) => {
    set(temp);
  };

  return (
    <div>
      <input
        className={styles.Input}
        placeholder={placeholder}
        onChange={(e) => helper(e.target.value)}
        value={newValue}
        type="text"
      />
    </div>
  );
};

