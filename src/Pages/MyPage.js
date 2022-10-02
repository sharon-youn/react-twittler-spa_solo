import React from 'react'
import { dummyTweets } from '../static/dummyData'
import "./MyPage.css";

export default function MyPage() {
 const filteredTweets = dummyTweets.filter((el) => {
    return el.username === 'kimcoding'
 })
    return (
    <section className='myInfo'>
      <div className='myInfo__container'>
        <div className='myInfo__wrapper'>
            <div className='myInfo__profile'>
                <img src={filteredTweets[0].picture}></img>
            </div>
            <div className='myInfo__detail'>
                <p className='myInfo__detailName'>
                {filteredTweets[0].username} Profile
                </p>
                <p>28팔로워 100팔로잉</p>
            </div>
        </div>
        </div>
        <ul className='tweets__mypage'>
            {filteredTweets.map((tweet) => {
                return (
                    <li className='tweet' key={tweet.id}>
                    <div className='tweet__profile'>
                        <img src={tweet.picture}></img>
                    </div>
                    <div className='tweet__content'>
                        <div className='tweet__userInfo' >
                            <span className='tweet__username'>{tweet.username}</span>
                            <span className='tweet__createdAt'>{tweet.createdAt}</span>
                        </div>
                        <div className='tweet__message'>{tweet.content}</div>
                    </div>
                </li>
                )
            })}
           
        </ul>
     
    </section>
  )
}
