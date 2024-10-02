import {useNavigate} from 'react-router-dom';


export default function Batch(){

    const navigate = useNavigate();

    function handleCob(){
        navigate('/cob')
    }
    function handleHome(){
        navigate('/home')
    }
    
        return (
            <>
       
  
       <button className="btnCob" onClick={handleCob}>
            Go to COB
        </button>
   
        <button className="btnBatch" onClick={handleHome}>
            Home
        </button>
    </>);
}