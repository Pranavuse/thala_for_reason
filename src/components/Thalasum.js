import React, { useState } from 'react';
import "..//components/style.css"
import thala from '..//components/thala.mp3'
import moye from '..//components/moye.mp3'
import confetti from '..//components/6ob.gif'


const Thalasum = () => {
    const[input, setinput]=useState('');
    const[result, setResult]= useState(null)
    
    const handlevaluechange=(e)=>{
        setinput(e.target.value);
        setResult(null)

    }
    const playAudio=()=>{
      const audio = new Audio(thala);
      audio.play();
    }
    const playMoye=()=>{
      const audio2 = new Audio(moye);
      audio2.play();
    }
    const checkThala = () => {
        const sum = input.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        setResult(sum === 7 ? 'Thala For a Reason' : "Moye Moye: Not a Thala😂");
        // alert(setResult)
        if(sum==7){
          playAudio();
          document.body.style.backgroundColor="#eff6ff";
          
          document.body.style.backgroundImage = `url(${confetti})`;

        }
        else{
          playMoye();
          document.body.style.backgroundColor="#ffffff";
          document.body.style.backgroundImage = null;
        }
      };

  return (
    <div>
      <div className='card container'>
        <h3>Thala For A Reason</h3>
        <div className="gap-3 flex flex-row">
            <input type="text"  value={input} onChange={handlevaluechange} placeholder="Enter your number" autocomplete="off" className="w-full outline-none p-2 border rounded m-2" />
            <button onClick={checkThala} type="submit" className="btn btn-primary text-white bg-blue-500 rounded shadow shadow-black">Check Thalavity</button>
        </div>
        <button className='btn btn-success mt-5'>Share Snippet</button>
        <p>Made in love with Pranav Jain<br/>❤️❤️</p>
        <p className='h5'>{result}</p>
        {/* <img src={confetti}>{result}</img> */}
      </div>
    </div>
  );
};

export default Thalasum;