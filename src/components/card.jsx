import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux'


export function TaskCard({task,num}) {
    const dispatch = useDispatch()

    const handleDelete=()=>{
        dispatch({type:"DELETE_TODO",payload:task})
    }
  return (
    <Card  style={{ width: '50rem'}}>
      
      <Card.Body style={{display:"flex",justifyContent:"space-between"}}>
        <h5>{num}</h5>
        <Card.Title>{task.task}</Card.Title>
        <Card.Text>
        <h4>
         <Badge bg={task.completed?"success":"warning"} color>{task.completed?"Completed":"Not Completed"}</Badge>
      </h4>
        </Card.Text>
        
        <Button style={{height:"35px"}} onClick={handleDelete} variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

