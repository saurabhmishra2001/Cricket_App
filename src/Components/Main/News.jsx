import React from 'react';
import './NewsComponent.css';
import image from "../../img/playerAvatar.png"

const NewsCard = ({ title, description, imageURL }) => {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={imageURL} alt={title} />
      </div>

      <div className="news-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const NewsComponent = () => {
  const newsData = [
    {
      title: 'First News Article',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod enim eget metus faucibus, ac interdum quam tincidunt.',
      imageURL: 'https://picsum.photos/200/300',
    },
    {
      title: 'Second News Article',
      description: 'Fusce quis enim in eros vehicula volutpat. Sed ut magna semper, feugiat nisl eget, luctus nulla. Nullam id tellus ac quam eleifend tincidunt.',
      imageURL: 'https://picsum.photos/200/301',
    },
    {
      title: 'Third News Article',
      description: 'Donec et quam eget mi semper iaculis. Sed id nisi eget mi faucibus vulputate. Nullam sit amet turpis eget enim faucibus vehicula.',
      imageURL: 'https://picsum.photos/200/302',
    },
  ];

  return (
    <>
     <div className="news-container">
      {newsData.map((newsItem) => (
        <NewsCard key={newsItem.title} {...newsItem} />
      ))}
    </div>
    <div className='containerforteam1_team2 row'>
    <div class="team1 col">
    <div class="image-div">
     
    <img src={image} alt="vcavjh" />
    </div>
    <div class="content-div">
      <div class="content-top">
        <h2>Content Title</h2>
        <p>This is some content that will appear above the image.</p>
      </div>
      <div class="content-bottom">
        <p>This is some content that will appear below the image.</p>
      </div>
    </div>
  </div>


  <div class="team2 col">
   
    <div class="content-div2">
      <div class="content-top2">
        <h2>Content Title</h2>
        <p>This is some content that will appear above the image.</p>
      </div>
      <div class="content-bottom2">
        <p>This is some content that will appear below the image.</p>
      </div>
    </div>
    <div class="image-div2">
     
     <img src={image} alt="vcavjh" />
     </div>
  </div>
    </div>

<div className="testNews">
<div class="card mb-3 container" >
  <div class="row no-gutters cardDetails">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
 
 
    </>
   
  );
};

export default NewsComponent;