import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tweets from './Pages/Tweets';
import './App.css';
import Sidebar from './Sidebar';
import About from './Pages/About';
import MyPage from './Pages/MyPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='App'>
        <main>
        <Sidebar/>
       
        <section className='features'>
        <Routes>
          <Route path="/" element={ <Tweets/>}/>
          <Route path="/about" element={ <About/>}/>
          <Route path="/mypage" element={ <MyPage/>}/>


          </Routes>
          </section>
          </main>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
