import React from 'react'
import { Link } from 'react-router-dom'
import {faCommentDots, faQuestionCircle, faUser} from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export default function Sidebar() {
  return (
    <section className='sidebar'>
      <Link to="/" className='icon'>
      <FontAwesomeIcon icon={faCommentDots} size="2x"/> 
      </Link>
      <Link to="/about"  className='icon'>
      <FontAwesomeIcon icon={faQuestionCircle} size="2x"/> 
      </Link>
      <Link to="/mypage"  className='icon'>
      <FontAwesomeIcon icon={faUser} size="2x"/> 
      </Link>
    </section>
  )
}