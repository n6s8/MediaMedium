import { Link } from "react-router-dom";

interface NewsProps {
  id: number;
  title: string;
  description: string;
}

const MainBody = (props: { news: NewsProps }) => {
  const news = props.news; 

  return (
    <Link to={`/personal-news/${news.id}`} key={news.id} className="NewsLink">
      <div className="News" id={String(news.id)}>
        <div className="Left" id={String(news.id) + "Left"}>
          <div className="Top">
            <div className="InfoTop">
              <img src="./image.png" className="Author-Image" alt="Author" />
              <p className="Authors-name">Authors name</p>
              <p className="delimeter-1">in</p>
              <p className="Topics-name">Topics Name</p>
              <p className="delimeter-2">·</p>
              <p className="July">7 July</p>
            </div>
            <div className="main-part" id={String(news.id) + "MainPart"}>
              <h1>{news.title}</h1>
              <p>{news.description}</p>
            </div>
          </div>

          <div className="InfoBottom">
            <div className="Info">
              <button className="btn">
                <span>JavaScript</span>
              </button>
              <p className="date">12 min read</p>
              <p className="delimeter-3">·</p>
              <p className="Recommendation">Selected for you</p>
            </div>

            <div className="Actions">
              <div className="Box"></div>
              <div className="Box"></div>
              <div className="Box"></div>
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
  );
};

export default MainBody;
