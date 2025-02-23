import React from 'react'
import logo from '../images/git.png'
import linklogo from '../images/linkdin.png'
import avatar from '../images/avatar.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div id='about'>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">SOCIALS</div>
          <div className="card-back">
            <div className='icons'>
              <p><a href="https://github.com/abisheksinghnegi">
                  <img className='giticon' src={logo} alt="GitHub"/>
              </a></p>
              <h2 className='iconname'>GITHUB</h2>
            </div>
            <div className='icons'>
              <p><a href="http://linkedin.com/in/abishek-singh-negi-a980222b0">
                  <img className='giticon' src={linklogo} alt="LinkedIn"/>
              </a></p>
              <h2 className='iconname'>LINKEDIN</h2>
            </div>
          </div>
         </div>
       </div>
       
        <div className="card">
          <div className="card-inner">
            <div className="card-front">ABOUT SITE</div>
          <div className="card-back">
            <div id='paragraph'>
              This web app is created by a front-end React developer as a project to showcase his skills and enhance his resume. The primary purpose of this application is to provide users with a seamless and engaging platform to track calories, protein, carbs, fats for particular likes breakfast and all, and gives out at the end total intake of the day.
              This project not only demonstrates the developer's proficiency in React and front-end development but also the vision.
            </div>
          </div>
         </div>
       </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">ABOUT CREATOR</div>
          <div className="card-back">
            <div id='avatarcon'>
              <img id='avatar' src={avatar} alt="Avatar"/>
            </div>
            <div id='avatardetail'>
              <div className='details'>
                 <h3 className='ad'>NAME:</h3>
                 <h3 className='ad'>SKILLS:</h3>
                 <h3 className='ad'>D.O.B:</h3>
                 <h3 className='ad'>FAV HEALTHY FOOD:</h3>
                 <h3 className='ad'>FAV CHEAT MEAL:</h3>
              </div>
              <div className='details'>
                <h3 className='ad'>Abishek Singh Negi</h3>
                <h3 className='ad'>React.js, API implementation</h3>
                <h3 className='ad'>30.07.2003</h3>
                <h3 className='ad'>Oreo oat meal</h3>
                <h3 className='ad'>Any sweet food</h3>
              </div>
            </div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default About
