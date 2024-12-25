import MainBody from './MainBody';

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
            <MainBody key={news.id} news={news} />
          ))}
        </div>
    );
  }

  export default NewsList;
