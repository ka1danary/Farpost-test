interface RadioCheckbox {
  title: string;
}

export const RadioCheckbox: React.FC<RadioCheckbox> = ({ title }) => {
  return (
    <div>
      <input type="radio" />
      {title}
    </div>
  );
};
