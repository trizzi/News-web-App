import React, { useState } from 'react';
import './Newsfeed.css';

const Newsfeed = () => {
  const [news] = useState([
    {
      id: '1',
      img: 'https://guardian.ng/wp-content/uploads/2021/07/000_9EH6W3-1-e1626284236411.jpg',
      newsHeading:
        'Fuel subsidy thieves threatened my life, Okonjo-Iweala says - Guardian',
      newsDescription:
        "Ngozi Okonjo-Iweala has said she received death threats when she tried to sanitise Nigeria's fuel subsidy payments.",
    },
    {
      id: '2',
      img: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60ef237d9c4e68c2c7201fb8%2F0x0.jpg',
      newsHeading:
        'Zoho Updated Its BI And Analytics Suite For Its Unique Full Stack - Forbes',
      newsDescription:
        '1-Ranked Industry Analyst Patrick Moorhead dives deeper into Zoho’s recent announcement of its new self-service BI platform.',
    },
    {
      id: '3',
      img: 'https://www.channelstv.com/wp-content/uploads/2021/01/UNILAG.jpg',
      newsHeading:
        'COVID-19 Third Wave: UNILAG Asks Students To Vacate Hostels - Channels Television',
      newsDescription:
        'The management of the University of Lagos (UNILAG) has ordered students to vacate hostels on campus over fears of COVID-19.',
    },
  ]);
  //   const state = {
  //     news:
  //   };

  return (
    <div className='container'>
      {news.map((item) => (
        <ul>
          <li key={item.id} className='news-list'>
            <div className='news-info'>
              <h3>{item.newsHeading}</h3>
              <p>{item.newsDescription}</p>
            </div>
            <img className='img' src={item.img} alt='' />
          </li>
        </ul>
      ))}

      {/* <ul>
        <li className='news-list'>
          <div className='news-info'>
            <h3>News Heading</h3>
            <p>lorem fksnfokjnfggns sdgnsljkgn sgnwpgnl </p>
          </div>
          <img
            className='img'
            src='https://source.unsplash.com/random'
            alt=''
          />
        </li>
        <li className='news-list'>
          <div className='news-info'>
            <h3>News Heading</h3>
            <p>lorem fksnfokjnfggns sdgnsljkgn sgnwpgnl </p>
          </div>
          <img
            className='img'
            src='https://source.unsplash.com/random'
            alt=''
          />
        </li>
        <li className='news-list'>
          <div className='news-info'>
            <h3>News Heading</h3>
            <p>lorem fksnfokjnfggns sdgnsljkgn sgnwpgnl </p>
          </div>
          <img
            className='img'
            src='https://source.unsplash.com/random'
            alt=''
          />
        </li>
        <li>
          <h3>Loading...</h3>
        </li>
      </ul> */}
    </div>
  );
};

export default Newsfeed;
