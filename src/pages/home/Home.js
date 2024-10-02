import {useNavigate} from 'react-router-dom';
import './Home.css'
export default function Home(){

    const navigate = useNavigate();
    function handleBatch(){
        navigate('/batch')
    }
    function handleCob(){
        navigate('/cob')
    }
 
    return (

        <>
   <div className='container'>
        <button className="btnCob" onClick={handleCob}>
            Go to COB
        </button>
        <button className="btnBatch" onClick={handleBatch}>
            Go to Batch
        </button>
      
</div>
        </>
    );
}

