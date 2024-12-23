import React from 'react'
import image from "/assets/image.png";
import './NewsItem.css';
export const NewsItem = ({title,description, src, url}) => {
  return (
    <>
      <div className="card bg-light text-dark mb-1 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"280px"}}>
        <img src={src?src:image} style = {{height:"200px" ,width:"260px"}} className="card-img-top " alt=".." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,120):"Quickly and easily generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"}</p>
          <a href={url} className="btn btn-secondary">Read the full article</a>
        </div>
      </div>
    </>
  )
}

export default NewsItem;