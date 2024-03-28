import styles from "./index.module.scss";

interface Props {
  set: (value: string) => void;
  placeholder?: string;
  newValue: string;
  width? : string;
  height? : string;
  
}

export const Input: React.FC<Props> = ({ set, placeholder, newValue, width, height }) => {
  
  const helper = (temp: string) => {
    set(temp);
  };

  return (
    <div>
      <input
      style={{width : width, height : height}}
        className={styles.Input}
        placeholder={placeholder}
        onChange={(e) => helper(e.target.value)}
        value={newValue}
        
      />
    </div>
  );
};

