import { CustomSelectMarks } from "../CustomSelectMarks";
import { CustomSelectPriority } from "../CustomSelectPriority";
import MarkBox from "../MarkBox";
import { PriorityBox } from "../PriorityBox";


interface Props {
    priority : string[];
    mark : string[];
    setPriority: 
    setMarks: 
}

export const index: React.FC<Props> = ({proprity, mark, setPriority, setMarks}) => {
    return (
        <div>
           <CustomSelectPriority
                    values={["Low", "Medium", "High"]}
                    setPriority={(temp) => setPriority(temp)}
                    priority={priority}
                  />
                
                  <CustomSelectMarks
                    values={["Development", "Design", "Research"]}
                    setMarks={setMark}
                    marks={mark}
                  />
            <PriorityBox/>
            <MarkBox/>
        </div>
    )
};