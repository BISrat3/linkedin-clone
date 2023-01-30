import  CreateIcon from '@mui/icons-material/Create'
import React, {useState, useEffect} from 'react'
import './Feed.css'
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'
import { db } from './firebase'
import firebase from './firebase'

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    // to fire the node if we didn't pass any other dependencies
    useEffect (() => {
        db.collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
        // snapshot it gives raw time listener to the database
                // in the collections there is different docs
                setPosts(
                    snapshot.docs.map((doc) =>({
                        id: doc.id,
                        data: doc.data(),
                    }))
            ))
    }, [])

    // every time there is an event in the function we created
    const sendPost = (e) => {
        // it preventing refreshing behaviour 
        e.preventDefault()
        db.collection('posts').add({
            name: 'Bisrat',
            description: "this is a test",
            message: input,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

  return (
    <div className='feed'>
        <div class="feed__inputContainer">
            <div class="feed__input">
                <CreateIcon />
                <form>
                    <input 
                        value={input} 
                        type="text" 
                        placeholder='Start Post'
                        onChange={(e) => setInput(e.target.value)}/>
                    <button 
                        onClick={sendPost}
                        type="submit">
                            Send
                    </button>
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
        {/* every time I have a post there is rendering it. for every single post */}
        {posts.map(({id, data:{name, description, message, photoUrl }}) => (
             <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
         />
        ))}
    </div>
  )
}

export default Feed