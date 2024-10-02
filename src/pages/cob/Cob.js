import {useNavigate} from 'react-router-dom';

export default function Cob(){


 
    const navigate = useNavigate();
    function handleBatch(){
        navigate('/batch')
    }

    function handleHome(){
        navigate('/home')
    }
    
        return (
            <>
       
  
     
        <button className="btn" onClick={handleBatch}>
            Go to Batch
        </button>
        <button className="btn" onClick={handleHome}>
            Home
        </button>
    </>);

}