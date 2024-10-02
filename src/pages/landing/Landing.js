import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
function handleClick(){
    navigate('/home')
}
    return (
        <>
   
<button className="btn" onClick={handleClick}>
    Start
</button>
</>
    );

}


export default Landing;