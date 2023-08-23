import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import profile from "./image/img.jpeg";

function Hi() {
  return (
    <><>
    <div className="img">
      <h1>Curriculum Vitae</h1>
      <h1>MY CV</h1>
      <img src={profile} width={200} alt=""></img>
      <h2>Name: Abdullah Rana</h2>
      <h2>Education: Matriculation From Oxford School</h2>
      <h2>Skill:
        HTML
        CSS
        Javascript
        Node Js
        Mongo Db</h2>
    </div><div className="about">
        <h1>About Me :</h1>
        <p> Abdullah is a versatile web designer due to his extensive history in
          graphic and web design. His dedication to continuously learning about new web
          design trends and concepts has made him a valuable member of the team. With eight
          years of experience and a master's in web design, his expertise can help
          customers modernize with websites and appeal to expanding customer populations.</p>

      </div></><div className='contact'>
        <h1>Contact Me :</h1>
        <h2>Email : abullahr8@gmail.com</h2>
        <h2>Number : 03102881969</h2>
        </div></>
  )
}
ReactDOM.render(<Hi/>, document.querySelector('#root'));