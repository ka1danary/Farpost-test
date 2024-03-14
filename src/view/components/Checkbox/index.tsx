interface Checkbox {
    title: string;
  }
  
  export const Checkbox: React.FC<Checkbox> = ({ title }) => {
    return (
      <div>
        <input type="checkbox" />
        {title}
      </div>
    );
  };
  