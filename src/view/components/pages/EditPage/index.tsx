import { Link } from "react-router-dom";
import { CustomSelect } from "../../CustomSelect";

interface Props {}

export const EditPage: React.FC<Props> = () => {

  return (
    <div>
      <Link to="/view">
        <button>Назад</button>
      </Link>
      <CustomSelect title={'Выберите метку'} values={['Develop', 'Design', 'Research']} />
    </div>
  );
};
