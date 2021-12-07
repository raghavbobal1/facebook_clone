import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg"
                profileSrc="https://avatars.githubusercontent.com/u/60201836?v=4"
                title="Raghav Bobal"
            />
            <Story
                image="https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0"
                profileSrc="https://avatars.githubusercontent.com/u/13360498?v=4"
                title="Prakash Rana"
            />
            <Story
                image="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11ZQ76b2hn50uMKFZMM8yPQ5X9G-qT00Gng&usqp=CAU"
                title="Abhishek Santosh Jaya"
            />
             <Story
            image="https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            profileSrc="https://avatars.githubusercontent.com/u/13292472?v=4"
            title="Pritesh Patel"
           />
        </div>


    )
}

export default StoryReel
