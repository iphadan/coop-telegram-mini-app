
import './Cob.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Cob() {
    console.log(process.env.REACT_APP_USERNAME)

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [givenDate, setgivenDate] = useState('')


    const [progressValues, setProgressValues] = useState([]); // Example progress values
  

    const getData = async () => {
      setLoading(true);
      const requestBody = {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
          wsdl: process.env.REACT_APP_WSDL,
      };
      
      try {
          // Hardcoded result instead of fetch
          const result = {
            application: Math.floor(Math.random() * 101),  // Random number between 0 and 100
            systemWide: Math.floor(Math.random() * 101),
            reporting: Math.floor(Math.random() * 101),
            startOfDay: Math.floor(Math.random() * 101),
            online: Math.floor(Math.random() * 101),
        };

          // Set the data state with hardcoded values
          setData([result['application'], result['systemWide'], result['reporting'], result['startOfDay'], result['online']]);
          
          // Set progress values
          setProgressValues([result['application'], result['systemWide'], result['reporting'], result['startOfDay'], result['online']]);
      } catch (err) {
          setError(err);
      } finally {
          setLoading(false);
      }
  };

  // Run getData on component mount (equivalent to running on page load)
  useEffect(() => {
      getData();
  }, []);  // Empty dependency array makes it run once when the component mounts



    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    function goToHome() {
        navigate('/home')
    }


    return (
        <div className="container">
            <div className="logo">
                <svg width="131" height="53" viewBox="0 0 131 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_53_18)">
                        <path d="M78.0705 0.0763415C78.0356 0.069368 78.0008 0.0763415 77.9659 0.0763415C77.9381 0.0763415 77.9102 0.0763415 77.8754 0.0763415V0.0833152C72.6354 0.146078 67.8134 2.81002 64.9496 5.74594C66.7334 7.97057 68.0504 10.5718 68.775 13.41C70.2802 10.6973 74.1683 7.63583 78.0426 7.79623C83.861 7.85899 88.6829 12.5941 88.6829 18.4241V18.4939C88.648 24.3378 83.9028 29.052 78.0635 29.052C72.2173 29.052 67.479 24.3378 67.4441 18.4939V18.4241C67.4441 14.212 66.0227 10.3346 63.6396 7.23833C60.2949 2.87976 55.034 0.0763415 49.1181 0.0763415C39.0004 0.0763415 30.8059 8.27044 30.7781 18.3893V18.4939C30.799 23.5428 32.8546 28.1175 36.1714 31.4231C39.4882 34.7286 45.5504 37.6018 51.0691 36.8137V36.7719C55.3615 36.2419 59.1939 34.2335 62.0439 31.2627C60.2391 29.052 58.8943 26.4648 58.1417 23.6335C56.6436 26.395 53.9539 28.4174 50.7556 29.0102V29.059C43.9269 30.0423 38.5266 24.2472 38.4917 18.4939C38.5127 15.5789 39.7042 12.9358 41.6274 11.025C43.5436 9.11425 46.1845 7.9357 49.1111 7.9357C54.9782 7.9357 59.7305 12.5523 59.7305 18.4241V18.4311C59.7305 18.452 59.7305 18.4799 59.7305 18.5008C59.7444 22.7478 61.2007 26.66 63.6396 29.7633C66.9912 34.0382 72.2103 36.7858 78.0635 36.7858C88.1881 36.7858 96.4035 28.7103 96.4035 18.5706V18.4311C96.4105 8.35412 88.1115 0.180947 78.0705 0.0763415Z" fill="white" />
                        <path d="M31.2728 31.3746C29.4611 29.1639 28.1093 26.5628 27.3567 23.7175C25.8516 26.4861 23.1549 28.4038 19.9566 29.0036C19.4479 29.0733 18.9323 29.1151 18.4027 29.1151C15.4691 29.1151 12.8143 27.9296 10.8911 26.0118C8.96793 24.0941 7.76941 21.4441 7.74851 18.5151C7.79032 12.7409 13.1976 6.9179 20.0611 7.90816C20.1656 7.92211 20.2702 7.93605 20.3747 7.95697C23.1828 8.70316 25.5241 10.4675 26.8898 12.9153C27.6424 10.1397 28.9942 7.60132 30.8059 5.43947C27.8723 2.46171 23.9075 0.460263 19.4758 0V0.0348684V0.0418421C15.2044 -0.271974 10.7099 1.4575 7.48372 3.79368C6.71723 4.35158 6.02043 4.93737 5.4142 5.53711C2.08346 8.86355 0.0209043 13.4522 0 18.5221V18.6267C0 18.7941 0 18.9545 0.00696809 19.1218V19.1288C0.29266 29.0524 8.41745 37.0093 18.4027 37.0093C18.9253 37.0093 19.441 36.9884 19.9496 36.9466V36.9536C24.3883 36.4793 28.3462 34.4291 31.2728 31.3746Z" fill="white" />
                        <path d="M115.252 0.132812C106.542 0.132812 99.4902 7.22505 99.4902 15.991C99.4902 16.3187 99.5042 16.6535 99.5251 16.9743V49.2345L100.995 50.5804V25.1404H101.03C101.121 24.8685 101.379 24.6732 101.692 24.6732C102.006 24.6732 102.264 24.8685 102.354 25.1404H102.382C102.382 25.1474 102.389 25.1544 102.389 25.1544V52.3866H102.459L103.929 50.9361L106.403 47.9723V46.5706L105.197 45.4966L105.866 43.8927V42.6862L104.995 42.2818L104.932 40.0083L105.866 39.1366V37.2677L104.661 36.396V34.8687L107.002 33.46V29.499C109.406 30.9844 112.228 31.8422 115.252 31.8422C123.948 31.8422 131 24.736 131 15.984C131 7.22505 123.941 0.132812 115.252 0.132812ZM115.252 25.3357C110.117 25.3357 105.957 21.1585 105.957 15.991C105.957 10.8235 110.117 6.62531 115.252 6.62531C120.381 6.62531 124.534 10.8165 124.534 15.984C124.534 21.1515 120.381 25.3357 115.252 25.3357Z" fill="white" />
                        <path d="M0.132324 39.9805C0.703706 39.8689 1.87434 39.7852 2.96137 39.7852C4.29924 39.7852 5.12147 39.9108 5.82525 40.3152C6.50115 40.6639 6.98892 41.3055 6.98892 42.1563C6.98892 42.9931 6.48722 43.7741 5.39323 44.1716V44.1996C6.50115 44.4925 7.32339 45.3013 7.32339 46.5217C7.32339 47.3725 6.91924 48.0421 6.31998 48.5233C5.61621 49.0672 4.4386 49.374 2.50844 49.374C1.42839 49.374 0.627058 49.3042 0.139292 49.2345V39.9805H0.132324ZM2.2994 43.5858H3.01711C4.16684 43.5858 4.787 43.1256 4.787 42.4282C4.787 41.7169 4.22956 41.3403 3.23312 41.3403C2.75929 41.3403 2.48754 41.3683 2.2994 41.3961V43.5858ZM2.2994 47.763C2.51541 47.7909 2.77323 47.7909 3.1495 47.7909C4.13897 47.7909 5.01695 47.4283 5.01695 46.438C5.01695 45.4896 4.13897 45.1131 3.04498 45.1131H2.2994V47.763Z" fill="white" />
                        <path d="M12.7794 49.2689L12.647 48.5855H12.6052C12.1453 49.1294 11.4276 49.4223 10.5914 49.4223C9.16993 49.4223 8.31982 48.4181 8.31982 47.3232C8.31982 45.5519 9.95732 44.6941 12.4449 44.7081V44.6105C12.4449 44.2478 12.2429 43.7318 11.1628 43.7318C10.4451 43.7318 9.6786 43.9689 9.21871 44.2478L8.81456 42.881C9.30232 42.616 10.2639 42.2812 11.546 42.2812C13.8873 42.2812 14.6399 43.6202 14.6399 45.2311V47.6091C14.6399 48.2647 14.6677 48.8923 14.7374 49.2689H12.7794ZM12.5216 46.0401C11.3718 46.0261 10.4799 46.2911 10.4799 47.114C10.4799 47.658 10.8562 47.923 11.344 47.923C11.8875 47.923 12.3334 47.5743 12.4798 47.1419C12.5076 47.0303 12.5216 46.9048 12.5216 46.7793V46.0401Z" fill="white" />
                        <path d="M16.3751 44.6174C16.3751 43.7666 16.3472 43.0414 16.3193 42.4347H18.2147L18.3122 43.3691H18.354C18.6397 42.9368 19.3574 42.2812 20.5281 42.2812C21.9635 42.2812 23.0435 43.2018 23.0435 45.2172V49.2689H20.8556V45.4822C20.8556 44.6035 20.542 44.0037 19.7476 44.0037C19.1414 44.0037 18.786 44.4082 18.6397 44.7987C18.584 44.9243 18.5561 45.1335 18.5561 45.3287V49.2689H16.3751V44.6174Z" fill="white" />
                        <path d="M26.9803 45.315H27.0082C27.1685 45.0361 27.3357 44.7571 27.5099 44.4921L28.9314 42.4419H31.5653L29.0498 45.2104L31.9277 49.2761H29.238L27.5447 46.4657L26.9873 47.1351V49.2761H24.7993V39.3525H26.9873V45.315H26.9803Z" fill="white" />
                        <path d="M42.4357 45.7751C42.4357 48.2786 40.61 49.4223 38.7287 49.4223C36.6731 49.4223 35.0913 48.1112 35.0913 45.9006C35.0913 43.6899 36.5894 42.2812 38.8471 42.2812C41.0002 42.2812 42.4357 43.7248 42.4357 45.7751ZM37.349 45.8448C37.349 47.0164 37.8507 47.902 38.7844 47.902C39.6345 47.902 40.178 47.0791 40.178 45.8448C40.178 44.8266 39.7739 43.7876 38.7844 43.7876C37.7392 43.7945 37.349 44.8406 37.349 45.8448Z" fill="white" />
                        <path d="M44.0314 49.2692V44.0041H43.1116V42.442H44.0314V42.177C44.0314 41.3541 44.2892 40.4475 44.9233 39.8826C45.4668 39.3805 46.2333 39.1992 46.8674 39.1992C47.3551 39.1992 47.7314 39.255 48.031 39.3387L47.9474 40.9705C47.7593 40.9147 47.5293 40.8729 47.2436 40.8729C46.5259 40.8729 46.2263 41.4168 46.2263 42.0863V42.435H47.6339V43.9971H46.2402V49.2622H44.0314V49.2692Z" fill="white" />
                        <path d="M60.5387 44.4642C60.5387 47.5535 58.6086 49.4225 55.7795 49.4225C52.9017 49.4225 51.2224 47.3095 51.2224 44.6316C51.2224 41.8072 53.0759 39.7012 55.9398 39.7012C58.9152 39.7012 60.5387 41.863 60.5387 44.4642ZM53.5358 44.5897C53.5358 46.4308 54.4277 47.7349 55.891 47.7349C57.3752 47.7349 58.2184 46.368 58.2184 44.5339C58.2184 42.8463 57.3822 41.3888 55.8771 41.3888C54.3999 41.3888 53.5358 42.7556 53.5358 44.5897Z" fill="white" />
                        <path d="M61.9464 44.6872C61.9464 43.683 61.9185 43.0274 61.8906 42.4347H63.772L63.8417 43.6899H63.8974C64.2598 42.6997 65.1168 42.2813 65.7928 42.2813C65.9948 42.2813 66.0924 42.2812 66.2526 42.3091V44.3106C66.0924 44.2827 65.9042 44.2548 65.6604 44.2548C64.8521 44.2548 64.3086 44.6732 64.1622 45.3287C64.1343 45.4682 64.1204 45.6356 64.1204 45.803V49.2689H61.9464V44.6872Z" fill="white" />
                        <path d="M74.2518 45.7751C74.2518 48.2786 72.4262 49.4223 70.5448 49.4223C68.4892 49.4223 66.9075 48.1112 66.9075 45.9006C66.9075 43.6899 68.4056 42.2812 70.6633 42.2812C72.8094 42.2812 74.2518 43.7248 74.2518 45.7751ZM69.1582 45.8448C69.1582 47.0164 69.6599 47.902 70.5936 47.902C71.4437 47.902 71.9872 47.0791 71.9872 45.8448C71.9872 44.8266 71.5831 43.7876 70.5936 43.7876C69.5484 43.7945 69.1582 44.8406 69.1582 45.8448Z" fill="white" />
                        <path d="M75.6036 44.6174C75.6036 43.7666 75.5757 43.0414 75.5479 42.4347H77.3874L77.485 43.3552H77.5268C77.8264 42.9228 78.4466 42.2812 79.6521 42.2812C80.5579 42.2812 81.2756 42.7276 81.5822 43.4389H81.6101C81.8679 43.0902 82.1884 42.8112 82.5159 42.616C82.9061 42.3928 83.3382 42.2812 83.8538 42.2812C85.2056 42.2812 86.223 43.2018 86.223 45.2451V49.2689H84.0977V45.5519C84.0977 44.5616 83.7702 43.9898 83.0594 43.9898C82.5577 43.9898 82.1954 44.3245 82.056 44.729C82.0003 44.8824 81.9724 45.1056 81.9724 45.273V49.2689H79.8472V45.4403C79.8472 44.5756 79.5336 43.9898 78.8438 43.9898C78.2863 43.9898 77.9518 44.4082 77.8264 44.7569C77.7567 44.9243 77.7428 45.1195 77.7428 45.2869V49.2689H75.6175V44.6174H75.6036Z" fill="white" />
                        <path d="M90.2226 40.5378C90.2226 41.1236 89.7628 41.5978 89.045 41.5978C88.3552 41.5978 87.8953 41.1236 87.9092 40.5378C87.8953 39.9241 88.3552 39.4639 89.059 39.4639C89.7628 39.4639 90.2087 39.9241 90.2226 40.5378ZM87.965 49.2689V42.4347H90.153V49.2689H87.965Z" fill="white" />
                        <path d="M95.9017 49.2689L95.7693 48.5855H95.7275C95.2676 49.1294 94.5499 49.4223 93.7137 49.4223C92.2923 49.4223 91.4421 48.4181 91.4421 47.3232C91.4421 45.5519 93.0796 44.6941 95.5672 44.7081V44.6105C95.5672 44.2478 95.3652 43.7318 94.2851 43.7318C93.5674 43.7318 92.8009 43.9689 92.341 44.2478L91.9369 42.881C92.4246 42.616 93.3862 42.2812 94.6684 42.2812C97.0096 42.2812 97.7622 43.6202 97.7622 45.2311V47.6091C97.7622 48.2647 97.7901 48.8923 97.8597 49.2689H95.9017ZM95.6369 46.0401C94.4872 46.0261 93.5953 46.2911 93.5953 47.114C93.5953 47.658 93.9716 47.923 94.4593 47.923C95.0028 47.923 95.4488 47.5743 95.5951 47.1419C95.623 47.0303 95.6369 46.9048 95.6369 46.7793V46.0401Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_53_18">
                            <rect width="131" height="53" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="content">
        {/* Progress Bar Section */}
        <div className="progress-container">

          {/* Blue Progress Bar */}
          <div className="progress-bar blue">
            <div className="progress-background"></div>
            <div
              className="progress-foreground"
              style={{ width: `${progressValues[0]}%` }}
            ></div>
            <span className="progress-text">{`${progressValues[0]}%`}</span>
          </div>

          {/* Orange Progress Bar */}
          <div className="progress-bar orange">
            <div className="progress-background"></div>
            <div
              className="progress-foreground"
              style={{ width: `${progressValues[1]}%` }}
            ></div>
            <span className="progress-text">{`${progressValues[1]}%`}</span>
          </div>

          {/* Green Progress Bar */}
          <div className="progress-bar green">
            <div className="progress-background"></div>
            <div
              className="progress-foreground"
              style={{ width: `${progressValues[2]}%` }}
            ></div>
            <span className="progress-text">{`${progressValues[2]}%`}</span>
          </div>

          {/* Red Progress Bar */}
          <div className="progress-bar red">
            <div className="progress-background"></div>
            <div
              className="progress-foreground"
              style={{ width: `${progressValues[3]}%` }}
            ></div>
            <span className="progress-text">{`${progressValues[3]}%`}</span>
          </div>

          {/* Black Progress Bar */}
          <div className="progress-bar black">
            <div className="progress-background"></div>
            <div
              className="progress-foreground"
              style={{ width: `${progressValues[4]}%` }}
            ></div>
            <span className="progress-text">{`${progressValues[4]}%`}</span>
          </div>
        </div>

        {/* Home Button */}
        <div className="button" onClick={getData}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75 16.5V9H11.25V16.5M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Home</span>
        </div>
      </div>


        </div>
    );
}

export default Cob;


// import './Cob.css';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { fetchCOB } from '../../services/cobService';

// function Cob() {
//     console.log(process.env.REACT_APP_USERNAME)

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     const [givenDate, setGivenDate] = useState('');

//     const [progressValue, setProgressValue] = useState(70); // Single progress value

//     const getData = async () => {
//         setLoading(true);
//         const requestBody = {
//             username: process.env.REACT_APP_USERNAME,
//             password: process.env.REACT_APP_PASSWORD,
//             wsdl: process.env.REACT_APP_WSDL,
//         };
//         try {
//             const result = await fetchCOB(requestBody);
//             setData(result);

//             // Assuming 'app0', 'app1', 'app2', 'app3' represent some progress values
//             const total = Number(result["app0"]) + Number(result["app1"]) + Number(result["app2"]) + Number(result["app3"]);
//             const progress = (Number(result["app2"]) / total) * 100; // Calculate progress based on 'app2' value
//             setProgressValue(progress);

        

            
//         } catch (err) {
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     function goToHome() {
//         getData();
//         navigate('/home');
//     }

//     // Function to calculate the width of each section
//     const getSectionWidth = (startPercentage, endPercentage) => {
//       console.log(progressValue)
//         if (progressValue >= endPercentage) {
//             return 20; // Fully filled section
//         } else if (progressValue > startPercentage) {
//             return (progressValue - startPercentage) / (endPercentage - startPercentage) * 20;
//         }
//         return 0; // Empty section
//     };

//     return (
//         <div className="container">
//             <div className="logo">
//                 {/* Your logo SVG here */}
//             </div>
//             <div className="content">
//                 {/* Progress Bar Section */}
//                 <div className="progress-container">
//                     {/* Single Divided Progress Bar */}
//                     <div className="progress-bar">
//                         <div className="progress-section" style={{ width: `${ getSectionWidth(0, 20)}%`, backgroundColor: '#48bd4e' }}></div>
//                         <div className="progress-section" style={{ width: `${getSectionWidth(20, 40)}%`, backgroundColor: '#f1eb27' }}></div>
//                         <div className="progress-section" style={{ width: `${getSectionWidth(40, 60)}%`, backgroundColor: '#33f0ff' }}></div>
//                         <div className="progress-section" style={{ width: `${getSectionWidth(60, 80)}%`, backgroundColor: '#f1bd27' }}></div>
//                         <div className="progress-section" style={{ width: `${getSectionWidth(80, 100)}%`, backgroundColor: '#13120f' }}></div>

//                     </div>
//                     <p className="progress-text">{Math.round(progressValue)}%</p> {/* Show the percentage */}
//                 </div>

//                 {/* Other UI Components */}
//                 <button onClick={goToHome}>Go to Home</button>
//                 {/* Add more UI as required */}
//             </div>
//         </div>
//     );
// }

// export default Cob;


// import './Cob.css';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { fetchCOB } from '../../services/cobService';

// function Cob() {
//     const [data, setData] = useState({}); // Holds the data for the current stage
//     const [loading, setLoading] = useState(false); // Loading state
//     const [error, setError] = useState(null); // Error handling
//     const [currentStage, setCurrentStage] = useState(0); // Tracks the current stage
//     const [progressValues, setProgressValues] = useState([0, 0, 0, 0, 0]); // Progress values for each stage
//     const navigate = useNavigate();

//     // Stages to track (Application, System Wide, etc.)
//     const stages = ['Application', 'System Wide', 'Daily', 'Start of Day', 'Online'];

//     // Function to calculate the progress for a single stage
//     const calculateStageProgress = (stageData) => {
//         const totalBatches = stageData.app0 + stageData.app1 + stageData.app2 + stageData.app3;
//         const completedBatches = stageData.app2; // Completed batches
//         return (completedBatches / totalBatches) * 100; // Percentage completion for that stage
//     };

//     // Fetch the data and progress for the next stage
//     const getData = async () => {
//         setLoading(true);
//         const requestBody = {
//             username: process.env.REACT_APP_USERNAME,
//             password: process.env.REACT_APP_PASSWORD,
//             wsdl: process.env.REACT_APP_WSDL,
//         };

//         try {
//             const result = await fetchCOB(requestBody);
//             setData(result); // Store the data for the current stage

//             // Calculate progress for the current stage
//             const stageProgress = calculateStageProgress(result);

//             // Update the progress for the current stage
//             const updatedProgressValues = [...progressValues];
//             updatedProgressValues[currentStage] = Math.min(stageProgress, 100); // Ensure progress doesn't exceed 100%

//             setProgressValues(updatedProgressValues); // Set the updated progress values

//             // Check if the current stage is complete and move to the next stage
//             const totalBatchesForCurrentStage = result.app0 + result.app1 + result.app2 + result.app3;
//             if (result.app2 >= totalBatchesForCurrentStage && currentStage < 4) {
//                 setCurrentStage(currentStage + 1); // Move to the next stage
//             }
//         } catch (err) {
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Use effect to automatically fetch data for each stage every 10 seconds
//     useEffect(() => {
//         if (currentStage < 5) {
//             const interval = setInterval(() => {
//                 getData(); // Fetch data every 10 seconds
//             }, 10000);

//             // Cleanup on component unmount or stage change
//             return () => clearInterval(interval);
//         }
//     }, [currentStage]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     // Function to calculate the width for each progress section (representing each stage)
//     const getSectionWidth = (progress) => {
//         return Math.min(progress, 100); // Ensure progress does not exceed 100%
//     };

//     return (
//         <div className="container">
//             <div className="logo">
//                 {/* Your logo SVG here */}
//             </div>
//             <div className="content">
//                 {/* Progress Bar Section */}
//                 <div className="progress-container">
//                     <div className="progress-bar">
//                         {/* Dynamic Progress Sections */}
//                         {stages.map((stage, index) => (
//                             <div
//                                 key={index}
//                                 className="progress-section"
//                                 style={{
//                                     width: `${getSectionWidth(progressValues[index])}%`,
//                                     backgroundColor: index === 0 ? '#48bd4e' : 
//                                                       index === 1 ? '#f1eb27' : 
//                                                       index === 2 ? '#33f0ff' : 
//                                                       index === 3 ? '#f1bd27' : '#13120f',
//                                 }}
//                             />
//                         ))}
//                     </div>
//                     <p className="progress-text">{Math.round(progressValues[currentStage])}%</p> {/* Show the current stage percentage */}
//                 </div>

//                 <p>Current Stage: {stages[currentStage]}</p> {/* Show current stage name */}
                
//                 {/* Manually Trigger Data Fetch */}
//                 <button onClick={getData}>Fetch Data Manually</button>
//                 {/* Go to Home Button */}
//                 <button onClick={() => navigate('/home')}>Go to Home</button>
//             </div>
//         </div>
//     );
// }

// export default Cob;




// import './Cob.css';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { fetchCOB } from '../../services/cobService';

// function Cob() {
//     console.log(process.env.REACT_APP_USERNAME);

//     const [data, setData] = useState([]); // Holds the data for the current stage
//     const [loading, setLoading] = useState(false); // Loading state
//     const [error, setError] = useState(null); // Error handling
//     const navigate = useNavigate();
//     const [currentStage, setCurrentStage] = useState(0); // Tracks the current stage
//     const [progressValues, setProgressValues] = useState([10, 0, 0, 0, 0]); // Progress values for each stage

//     // Stages to track (Application, System Wide, etc.)
//     const stages = ['Application', 'System Wide', 'Daily', 'Start of Day', 'Online'];

//     // Function to calculate the progress for a single stage
//     const calculateStageProgress = (stageData) => {
//         const totalBatches = stageData.app0 + stageData.app1 + stageData.app2 + stageData.app3;
//         const completedBatches = stageData.app2; // Completed batches
//         return (completedBatches / totalBatches) * 100; // Percentage completion for that stage
//     };

//     // Fetch the data and progress for the next stage
//     const getData = async () => {
//         setLoading(true);
//         const requestBody = {
//             username: process.env.REACT_APP_USERNAME,
//             password: process.env.REACT_APP_PASSWORD,
//             wsdl: process.env.REACT_APP_WSDL,
//         };

//         try {
//             const result = await fetchCOB(requestBody);
//             setData(result); // Store the data for the current stage

//             // Calculate progress for the current stage
//             const stageProgress = calculateStageProgress(result);

//             // Update the progress for the current stage
//             const updatedProgressValues = [...progressValues];
//             updatedProgressValues[currentStage] = Math.min(stageProgress, 100); // Ensure progress doesn't exceed 100%

//             setProgressValues(updatedProgressValues); // Set the updated progress values

//             // Check if the current stage is complete and move to the next stage
//             const totalBatchesForCurrentStage = result.app0 + result.app1 + result.app2 + result.app3;
//             if (result.app2 >= totalBatchesForCurrentStage && currentStage < 4) {
//                 setCurrentStage(currentStage + 1); // Move to the next stage
//             }
//         } catch (err) {
//             setError(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Use effect to automatically fetch data for each stage every 10 seconds
//     useEffect(() => {
//         if (currentStage < 5) {
//             const interval = setInterval(() => {
//                 getData(); // Fetch data every 10 seconds
//             }, 10000);

//             // Cleanup on component unmount or stage change
//             return () => clearInterval(interval);
//         }
//     }, [currentStage]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     // Function to calculate the width of each section (based on progress)
//     const getSectionFillWidth = (progress) => {
//         return (progress / 100) * 20; // Progress of a stage fills only 20% of the bar (but it's percentage based on 0-100% progress)
//     };

//     // Function to determine the color for each stage based on the stage's index
//     const getColorForStage = (index) => {
//         switch (index) {
//             case 0: return '#48bd4e'; // Application stage - Green
//             case 1: return '#f1eb27'; // System Wide stage - Yellow
//             case 2: return '#33f0ff'; // Daily stage - Cyan
//             case 3: return '#f1bd27'; // Start of Day stage - Orange
//             case 4: return '#13120f'; // Online stage - Dark
//             default: return '#ccc';
//         }
//     };

//     return (
//         <div className="container">
//             <div className="logo">
//                 {/* Your logo SVG here */}
//             </div>
//             <div className="content">
//                 {/* Progress Bar Section */}
//                 <div className="progress-container">
//                     <div className="progress-bar">
//                         {/* Dynamic Progress Sections */}
//                         {stages.map((stage, index) => (
//                             <div
//                                 key={index}
//                                 className="progress-section"
//                                 style={{
//                                     width: '20%', // Each stage gets 20% of the total bar
//                                     backgroundColor: progressValues[index] === 0 ? '#e0e0e0' : // Unfilled (gray) if progress is 0%
//                                                       progressValues[index] === 100 ? getColorForStage(index) : // Fully filled with respective color
//                                                       getColorForStage(index), // Partial fill color for active progress
//                                     transition: 'width 0.3s ease-in-out' // Smooth transition for filling progress
//                                 }}
//                             >
//                                 {/* Show Progress Text in filled stages */}
//                                 {progressValues[index] === 100 ? 'Completed' : `${Math.round(progressValues[index])}%`}
//                             </div>
//                         ))}
//                     </div>
//                     <p className="progress-text">{Math.round(progressValues[currentStage])}%</p> {/* Show the current stage percentage */}
//                 </div>

//                 <p>Current Stage: {stages[currentStage]}</p> {/* Show current stage name */}
                
//                 {/* Manually Trigger Data Fetch */}
//                 <button onClick={getData}>Fetch Data Manually</button>
//                 {/* Go to Home Button */}
//                 <button onClick={() => navigate('/home')}>Go to Home</button>
//             </div>
//         </div>
//     );
// }

// export default Cob;
