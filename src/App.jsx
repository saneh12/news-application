import Navbar from './Components/Navbar.jsx'
import NewsBoard from './Components/NewsBoard.jsx'
import { useState,useEffect } from 'react';
const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div style={{backgroundColor : "#E99660"}}>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App;

