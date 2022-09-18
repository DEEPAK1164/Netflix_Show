import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css';
import Sdata from "./Sdata";

// function Card(props)
// {
//   return (
//     <>
//     <div className='cards'>s
//   <div className='card'>
//   <img src={props.imgsrc} alt="myPic" className='scard__img'/>
//     <div className='card__info'>
//      <span className='card__catogry'>{props.title}</span>
//      <h3 className='card__title'>{props.sname}</h3>s
//      <a href={props.link} target="blank">
//      <button>Watch Now</button>
//      </a>
//     </div>
//   </div>
// </div>
// </>
//   );
// }
// khud k props..

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className='heading_style'> My fav Netflix Show</h1>
  {/* <Card
   imgsrc={Sdata[0].imgscr}
   title={Sdata[0].title}
   sname={Sdata[0].sname}
   link={Sdata[0].links}
  /> */}
  {/* <Card
   imgsrc={Sdata[1].imgscr}
   title={Sdata[1].title}
   sname={Sdata[1].sname}
   link={Sdata[1].links}
  />
  <Card
   imgsrc={Sdata[2].imgscr}
   title={Sdata[2].title}
   sname={Sdata[2].sname}
   link={Sdata[2].links}
  />
   <Card
   imgsrc={Sdata[3].imgscr}
   title={Sdata[3].title}
   sname={Sdata[3].sname}
   link={Sdata[3].links}
  />
    <Card
   imgsrc={Sdata[4].imgscr}
   title={Sdata[4].title}
   sname={Sdata[4].sname}
   link={Sdata[4].links}
  /> */}
 <Card imgsrc="https://m.media-amazon.com/images/I/61ZAjvmdA1L._SL1101_.jpg" title="A Netflix Series" sname="The King Eternal Monarch" link="https://www.netflix.com/in/title/81260283"/>
 <Card imgsrc="https://larepublica.pe/resizer/O9Y2AueO8D_-Z5q2JUwsItD9vUM=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/EFGJD5CSCZGAPC53W7FQXLEWAM.jpg" title="A Netflix Series" sname="STARTUP" link="https://www.netflix.com/in/title/81290293"/>
 <Card imgsrc="https://i0.wp.com/error404.fr/wp-content/uploads/2016/09/cover-stranger-things.jpg?resize=537%2C800&ssl=1" title="A Netflix Series" sname="STRANGER THINGS" link="https://www.netflix.com/in/title/80057281"/>
 <Card imgsrc="https://spoilmovieclub.com/wp-content/uploads/2020/08/Its-Okay-to-Not-Be-Okay-Poster.jpg" title="A Netflix Series" sname="It's Okay to Not Be Okay" link="https://www.netflix.com/in/title/81243992"/>
 <Card imgsrc="https://1.bp.blogspot.com/-L9PiuoRHos0/Xs-ooaxb_EI/AAAAAAAAAIU/nju1msmOJTA-TbZqlTXW7ABRNb-5JYk-gCLcBGAsYHQ/s640/Money-Heist-Plot-Hole-Revealed-TVWeb-Entertainment-DKODING.jpg" title="A Netflix Series" sname="MONEY HEIST" link="https://www.netflix.com/in/title/80192098"/>
 <Card imgsrc="https://occ-0-999-1009.1.nflxso.net/art/962dd/eb55cfa2d44210967dd380d0e56b64c44ac962dd.jpg" title="A Netflix Series" sname="THE LAST KINGDOM" link="https://www.netflix.com/in/title/80074249"/>
 
 
 </>
);


