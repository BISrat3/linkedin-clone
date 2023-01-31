import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div class="widgets__article">
            <div class="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div class="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div class="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle(' Linkedin using React', " New Project")}
        {newsArticle(' Linkedin using React', " New Project")}
        {newsArticle(' Linkedin using React', " New Project")}
        {newsArticle(' Linkedin using React', " New Project")}
        {newsArticle(' Linkedin using React', " New Project")}
    </div>
  )
}

export default Widgets