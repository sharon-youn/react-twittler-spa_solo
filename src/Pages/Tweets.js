import React from 'react'
import { dummyTweets } from '../static/dummyData'
import './Tweets.css'

export default function Tweets() {
  return (
    <div>
      <div className='tweetForm__container'>
        <div className='tweetForm__wrapper'>
          <div className='tweetForm__input'>
            <div className='tweetForm__inputWrapper'>
              <div className='tweetForm__count'>
                <span className='tweetForm__count__text'>
                    {'total : ' + dummyTweets.length} 
                </span>
              </div>
            </div>
          </div>
        </div>
     
      </div>
      <ul className='tweets'>
        {dummyTweets.map((tweet) => {
          return (
            <li className='tweet' key={tweet.id}>
            <div className='tweet__profile'>
              <img src={tweet.picture} />
            </div>
            <div className='tweet__content'>
              <div className='tweet__userInfo'>
                <span className='tweet__username'>{tweet.username}</span>
                <span className='tweet__createdAt'>{tweet.createdAt}</span>
              </div>
              <div className='tweet__message'>{tweet.content}</div>
            </div>
          </li>
          )
        })}
    
      </ul>

    </div>
  )
}
