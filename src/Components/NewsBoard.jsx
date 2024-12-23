import React, { useState ,useEffect} from 'react';
import NewsItem from './NewsItem';
import './NewsBoard.css'
const NewsBoard = ({category}) => {
  const [articles,setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
  },[category])
  return (
    <>
      <h2 className="text-center my-3">Get the Latest <span className='badge bg-danger'>News</span> at one place!</h2>
      {articles.map((news,index)=>{
        return <NewsItem key = {index} title = {news.title}
        description = {news.description} src = {news.urlToImage}
        url = {news.url}/> 
      })}
    </>
  )
}

export default NewsBoard;
