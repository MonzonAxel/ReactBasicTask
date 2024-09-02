
export const TaskList = ({array, setArray}) => {

    const deleteTask = (index) => {
        const updateArray = [...array.slice(0,index),
            ...array.slice(index + 1)
        ]
        setArray(updateArray)
      };
      

    return(
        <div>
            <ul>
                {array.map((item,index)=>(
                    <div key={index}>
                    <li>{item}</li>
                    <button onClick={() => deleteTask(index)}>Eliminar</button>
                    </div>        
            ))}   
            </ul>         
        </div>  
    )
}