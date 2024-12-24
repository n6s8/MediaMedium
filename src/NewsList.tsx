import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function NewsList() {
    const newsData = [
      {
        id: 1,
        title: '7 Practical CSS Tips',
        description: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
        image: './laptop.png',
      },
      {
        id: 2,
        title: '7 Practical CSS Tips',
        description: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        image: './draw.png',
      },
      {
        id: 3,
        title: '7 Practical CSS Tips',
        description: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        image: './meditation.png',
      },
    ];
  
    return (
      <div className="NewsList">
        {newsData.map((news) => (
          <Link to={`/personal-news/${news.id}`} key={news.id} className="NewsLink">
            <div className="News" id={String(news.id)}>
              <div className="Left" id={String(news.id) + "Left"}> 
                <div className="Top">
                  <div className="InfoTop">
                    <img src="./image.png" className="Author-Image"></img>
                    <p className="Authors-name">Authors name</p>
                    <p className="delimeter-1">in</p>
                    <p className="Topics-name">Topics Name</p>
                    <p className="delimeter-2">·</p>
                    <p className="July">7 july</p>
                  </div>
                  <div className="main-part" id={String(news.id) + "MainPart"}>
                    <h1>
                      {news.title}
                    </h1>
                    <p>
                      {news.description}
                    </p>
                  </div>
                </div>
  
                <div className="InfoBottom">
                  <div className="Info">
                    <button className="btn">
                      <span>Java Script</span>
                    </button>
                    <p className="date">12 min read</p>
                    <p className="delimeter-3">·</p>
                    <p className="Recommendation">Selected for you</p>
                  </div>
  
                  <div className="Actions">
                    <div className='Box'></div>
                    <div className='Box'></div>
                    <div className='Box'></div>
                  </div>
                </div>
              </div>
  
              <div className="Image">
                  {news.id === 1 && <img src="/laptop.png" alt="Laptop" />}
                  {news.id === 2 && <img src="/draw.png" alt="Drawing" />}
                  {news.id === 3 && <img src="/meditation.png" alt="Meditation" />}
              </div>
            </div>
  
          </Link>
        ))}
      </div>
    );
  }

  export default NewsList;
