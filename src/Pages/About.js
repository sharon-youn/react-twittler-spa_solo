import React from 'react'
import "./About.css"
import { faUsers } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 


export default function About() {
  return (
    <section className='aboutTwittler'>
      <div className='aboutTwittler__container'>
        <div className='aboutTwittler__wrapper'>
            <div className='aboutTwittler__detail'>
                <p className='aboutTwittler__detailName'>React Twittle</p>
            </div>
        </div>
      </div>
      <div className='aboutTwittler__content'>
      <FontAwesomeIcon icon={faUsers} className='fas' size='5x'/>
        <p>나만의 Twittler 소개페이지를 꾸며보세요</p>
      </div>
    </section>
  )
}
