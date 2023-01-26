import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import dividerDesktop from './images/dividerDesktop.svg'
import dividerMobile from './images/dividerMobile.svg'
import dice from './images/dice.svg'


const adviceUrl = 'https://api.adviceslip.com/advice' 

const Advice = () => {
    const [advice, setAdvice] = useState('')

    const fetchAdvice = async(url) =>{
        try{
            const {data} = await axios.get(url)
            setAdvice(data.slip)
            console.log(advice)
        }catch(e){
            console.log(e.response)
        }
      
    }

    useEffect(() =>{
        fetchAdvice(adviceUrl)
    },[])
  return (
    <div className='main'>
        <div className="advice-container">
            <div className="advice-title">
                <h6 className='title'>ADVICE #{advice.id}</h6>
            </div>
            <div className="advice-contents">
                <p className='advice'>"{advice.advice}"</p>
                <picture>
                    <source srcSet={dividerDesktop} media='(min-width:600px)'/>
                    <img src={dividerMobile} alt="" id='divider' />
                </picture>
                <div className='dice-con'>
                 <img src={dice} alt=""  id='dice' onClick={() => fetchAdvice(adviceUrl)}/>
                </div>
            </div>

        </div>
       
    </div>
  )
}

export default Advice