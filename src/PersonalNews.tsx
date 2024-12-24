import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './PersonalNews.css';
const newsDetails = {
  1: {
    title: '7 Practical CSS Tips',
    content: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
    subcontent: 'How product designers can break from the status quo and help our planet'
  },
  2: {
    title: '7 Practical CSS Tips',
    content: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..." ,
    subcontent: 'How product designers can break from the status quo and help our planet'
  },
  3: {
    title: '7 Practical CSS Tips',
    content: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
    subcontent: 'How product designers can break from the status quo and help our planet'
  },
};

function PersonalNews() {
  const { id } = useParams();
  const IdNews = Number(id) as keyof typeof newsDetails; 
  const news = newsDetails[IdNews];
  const navigate = useNavigate();

  if (!news) {
    return <p>News not found</p>;
  }

  return (
    
    <div className="PersonalNews">
        <div className="BackX">
            <div className="LogoX"
                onClick={() => navigate('/')}>
                <img src="/left.png"></img>
            </div>
        </div>

        <div className="NewsFillX">
            <div className="LeftX">
                <div className="FrameX">
                    <div className="InfoTopX">
                        <img className="GirlX" src="/image.png"></img>
                        <div className="InfoX">
                            <p className="Authors-nameX">Authors Name</p>
                            <div className="Info-BottomX">
                                <span className="JulyX">7 july</span>
                                <span className="delimeterX">·</span>
                                <span className="dateX">12 min read</span>
                                <span className="delimeterX">·</span>
                                <span className="AvaibilityX">Member-only</span>
                            </div>
                        </div>
                    </div>
                    <div className="MediaX">
                        <img src='/link.png'></img>
                        <img src='/face.png'></img>
                        <img src='/twt.png'></img>
                    </div>
                </div>

                <div className="main-partX">
                    <h1>{news.title}</h1>
                    <p>{news.subcontent}</p>
                </div>

                {IdNews === 1 && <img className="Main-ImageX" src="/laptop.png" alt="Laptop" />}
                {IdNews === 2 && <img className="Main-ImageX" src="/draw.png" alt="Drawing" />}
                {IdNews === 3 && <img className="Main-ImageX" src="/meditation.png" alt="Meditation" />}

                <div className="DetailsX">
                    <h1 className="SubTitleX">
                        Subheader
                    </h1>

                    <p className="FullInfoX">
                    <p>How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.</p><br className="Break-Lines"></br>
<p>And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as <br></br> the natural gas heating your shower water or the electricity powering your coffee maker.</p><br className="Break-Lines"></br>
<p>But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and <br></br> access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes<br></br>connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports<br></br>livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.</p>
                    </p>
                </div>

                <div className="EndX">
                    <div className="LikeCommentsX">
                        <div className="LikeX">
                            <img src='/like.png'></img>
                            <span>180</span>
                        </div>

                        <div className="CommentsX">      
                            <img src='/comment.png'></img>
                            <span>12</span>
                        </div>
                    </div>

                    <div className="BookmarkX">
                        <img src='/bookmark.png'></img>
                    </div>
                </div>
            </div>
        </div>        
    </div>


  );
}

export default PersonalNews;
