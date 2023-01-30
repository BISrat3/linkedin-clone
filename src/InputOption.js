import React from 'react'
import "./InputOption.css"
import PhotoIcon from '@mui/icons-material/Photo';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

function InputOption({title, Icon, color}) {
  return (
    <div className='inputOption'>
        <Icon style={{color:color}}/>
        <h4>{title}</h4>
        {/* <div class="inputOption__photo">
            <PhotoIcon />
            Photo</div>
        <div class="inputOption__video">
            <SlideshowIcon />Video</div>
        <div class="inputOption__event">
            <EventIcon/>
            Event</div>
        <div class="inputOption__writeArticle">
            <ArticleIcon/>
            Write article</div> */}
        
    </div>
  )
}

export default InputOption