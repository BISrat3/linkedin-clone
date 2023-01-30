import  CreateIcon from '@mui/icons-material/Create'
import React, {useState} from 'react'
import './Feed.css'
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'

function Feed() {
    const [posts, setPosts] = useState([]) 

  return (
    <div className='feed'>
        <div class="feed__inputContainer">
            <div class="feed__input">
                <CreateIcon />
                <form action="">
                    <input type="text" placeholder='Start Post'/>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div class="feed__inputOptions">
                {/* import option */}
                <InputOption 
                    Icon={ImageIcon} 
                    title="Photo" 
                    color="#70B5F9"
                />
                <InputOption 
                    Icon={SubscriptionsIcon} 
                    title="Video" 
                    color="#E7A33E"
                />
                <InputOption 
                    Icon={EventNoteIcon} 
                    title="Event" 
                    color="#C0CBCD"
                />
                <InputOption 
                    Icon={CalendarViewDayIcon} 
                    title="Write Article" 
                    color="#7FC15E"
                />
            </div>
        </div>

        {/* Posts */}
        {/* every time there is a post I would like to render it for every single post */}
        {posts.map((post)=> (
            <Post />
        ))}
        <Post 
            name='Bisrat M' 
            description='This is a test' 
            message='this worked'/>

    </div>
  )
}

export default Feed