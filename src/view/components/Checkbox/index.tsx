import styles from './index.module.scss'

interface Checkbox {
    title: string;
  }
  
  export const Checkbox: React.FC<Checkbox> = ({ title }) => {
    return (
      <div className={styles.Checkbox}>
        <input type="checkbox"  className={styles.CheckboxInput}/>
        {title}
      </div>
    );
  };
  