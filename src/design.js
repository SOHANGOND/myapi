import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./design.css";
import data from './data';


const Design = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  // const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const temp = e.target.innerText;
    const val = data.find(item => item.state === temp);
    navigate("/chart", { state: { key: val } });


    // setPopupVisible(!isPopupVisible);   
  }


  // {isPopupVisible && (
  //   <div  className='main'>
  //     <Chart object={data} />
  //   </div>
  // )}
  // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

  return (
    <div className='box'>

      <div className="container1">
        <div className="container11">
        {/* <button onClick={handleClick} > <span  >New Delhi</span></button> */}
         <span value="New Delhi" onClick={handleClick} className='span'>New Delhi</span>
         {/* {isPopupVisible &&  (Navigate('/new-page', { state: { someProp: city } } ))} */}
        

        </div>
        <div className="container12">
          <span value ="Kolkata" onClick={handleClick} className='span'>Kolkata</span>
         

        </div>
      </div>


      <div className="container2">
        <div className="container21">
          <span onClick={handleClick} className='span'>Mumbai</span>
        </div>
        <div className="container22">
          <span onClick={handleClick} className='span'>Ahmedabad</span>
        </div>
      </div>


      <div className="container3">
        <div className="container31">
          <div className="container311"><span onClick={handleClick} className='span'>Bengaluru</span></div>
          <div className="container312"><span onClick={handleClick} className='span'>Pune</span></div>
        </div>

        <div className="container32">
          <div className="container321">
            <div className="container3211"><span onClick={handleClick} className='span'>Chennai</span></div>
            <div className="container3212"><span onClick={handleClick} className='span'>Jaipur</span></div>
          </div>

          <div className="container322">
            <div className="container3221">
              <div className="container3221a"><span onClick={handleClick} className='span'>Surat</span></div>
              <div className="container3221b"><span onClick={handleClick} className='span'>Hyderabad</span></div>
            </div>
            <div className="container3222">
              <div className="container3222a"><span onClick={handleClick} className='span'>Lucknow</span></div>
              <div className="container3222b"><span onClick={handleClick} className='span'>Indore</span></div>
              <div className="container3222c" ><span onClick={handleClick} className='span'>Kanpur</span>
                          
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Design
