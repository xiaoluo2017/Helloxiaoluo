import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

const titles = ["VOTING APP", "IPICTURE", "STOCK MARKET", "RECIPE BOX", "GAME OF LIFE"];

const introductions = ["A powerful voting website supporting users to create polls and vote for options, users can manage their own polls",
                       "A Picture-Sharing Website which supports create/edit/delete image, description and user comments.",
                       "Track stocks, users can customize their concerned stocks",
                       "A recipe box support create/edit/delete recipes with names and ingredients",
                       "A simulator for Conway's Game of Life"
];

const site_urls = ["https://cryptic-plateau-68929.herokuapp.com/",
                   "https://murmuring-beyond-26768.herokuapp.com/",
                   "https://guarded-lowlands-11750.herokuapp.com/",
                   "https://ancient-lowlands-51718.herokuapp.com/",
                   "https://shielded-badlands-20882.herokuapp.com/",
];

const source_urls = ["https://github.com/xiaoluo2017/Voting_app",
                     "https://github.com/xiaoluo2017/iPicture",
                     "https://github.com/xiaoluo2017/recipe_box",
                     "https://github.com/xiaoluo2017/Stock_Market",
                     "https://github.com/xiaoluo2017/Game_of_Life"
];

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

class Profolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      introduction: "",
      site_url: "",
      source_url: ""
    }
  }

  displayModal = () => {
    this.setState({
      display: true,
    });
  }

  closeModal = () => {
    this.setState({
      display: false,
    });
  }

  handleClick = (i) => {
    this.setState({
      title: titles[i],
      introduction: introductions[i],
      img_url: "images/" + i + ".PNG",
      site_url: site_urls[i], 
      source_url: source_urls[i],
      display: true
    });
  }

  handleGithub = () => {
    window.open("https://github.com/xiaoluo2017","_blank");
  }

  handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/gwuxl/","_blank");
  }

  handleFacebook = () => {
    window.open("https://www.facebook.com/xiao.luo.376043","_blank");
  }

  render() {
    const aboutInstance = (
      <div className="container" id="about">
        <hr className="hr" />
        <div className="col-md-8 col-sm-10 col-xs-12 mx-auto">
          <h1 className="text-center">XIAO LUO</h1>
          <div className="col-md-8 col-sm-10 col-xs-12 mx-auto">
            <p className="text-center remark">A GRADUATE STUDENT IN EE, GWU<br />
            SEEkING FOR FULL-TIME POSITIONS IN SOFTWARE ENGINEER</p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-8 mx-auto">
            <img src="images/xiaoluo.jpg" alt="XIAO LUO" className="img-fluid photo" />
          </div>
          <div>
            <p className="text-left introduce">Hi, my name is Xiao Luo. I graduated from <strong>George Washington University</strong>  on 05/2017 with a MS degree in <strong>Electrical Engineering</strong>.</p>
            <p className="text-left introduce">I has a great understanding in algorithms and problem solving in general. During graduate study, I built a movie recommend system with Hadoop on docker, and I also had industrial experience as a software engineer intern working on Java and MySQL projects. I am always willing to study, communicate and learn new knowledge. To make up for the lack of major, I learned new knowledge from online courses. I developed an impressive Picture Shard Website while learning Javascipt. I am a quick learning, capable, and talented software programmer. </p>
            <p className="text-left introduce">I am seeking for <strong>FULL-TIME</strong> positions starting on Dec 2017 in <strong>SOFTWARE ENGINEER</strong>. Take some time to look at my work and if you would like to discuss further, let&apos;s <a href="#contact">get in touch</a>.</p>
          </div>
        </div>
      </div>
    );

    const profolioInstance = (
      <div className="container" id="profolio">
        <hr className="hr" />
        <div className="col-md-10 col-xs-12 mx-auto">
          <h2 className="text-center">PROFOLIO</h2>
          <div className="col-md-6 col-sm-8 col-xs-12 mx-auto">
            <p className="text-center remark">A ShOWCASE OF DESIGN & DEVELOPMENT</p>
          </div>
          <div className="row">
            <div className="col-md-12 container-img">
              <img onClick = {() => {this.handleClick(0)}} src="images/vote.png" alt="vote app" className="img-fluid link profolio-img" />
            </div>
          </div>
          <hr className="hr" />
          <div className="row">
            <div className="col-md-12">
              <img onClick = {() => {this.handleClick(1)}} src="images/ipicture.PNG" alt="ipiture" className="img-fluid link profolio-img" />
            </div>
          </div>
          <hr className="hr" />
          <div className="col-md-6 col-sm-8 col-xs-12 mx-auto">
            <p className="text-center remark">OTHER PROJECTS</p>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <img onClick = {() => {this.handleClick(2)}} src="images/stock.jpg" alt="stock market" className="img-fluid img-thumbnail link" />
            </div>
            <div className="col-md-4 col-sm-12 topics">
              <div className="topic">React</div>
              <div className="topic">Node</div>
              <div className="topic">Express.js</div>
              <div className="topic">Mongodb</div>
              <div className="topic">Recharts</div>
              <div className="topic">React-bootstrap</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <img onClick = {() => {this.handleClick(3)}} src="images/recipe.jpg" alt="recipe box" className="img-fluid img-thumbnail link" />
            </div>
            <div className="col-md-4 col-sm-12 topics">
              <div className="topic">React</div>
              <div className="topic">Node</div>
              <div className="topic">Express.js</div>
              <div className="topic">Mongodb</div>
              <div className="topic">React-bootstrap</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <img onClick = {() => {this.handleClick(4)}} src="images/game.jpg" alt="game of life" className="img-fluid img-thumbnail link" />
            </div>
            <div className="col-md-4 col-sm-12 topics">
              <div className="topic">React</div>
              <div className="topic">React-bootstrap</div>
              <div className="topic">HTML</div>
              <div className="topic">CSS</div>
              <div className="topic">jQuery</div>
            </div>
          </div>
        </div>
      </div>
    );

    const modalInstance = (
      <div>
        <Modal.Dialog bsSize="large" className="modal-backdrop">
          <Modal.Header>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.state.img_url} alt={this.state.title} className="img-fluid" />
            <p className="text-center introduction col-md-8 col-sm-12 mx-auto">{this.state.introduction}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button className="link btn-outline-primary" target="_blank" href={this.state.site_url}>
              VISIT SITE
            </Button>
            <Button className="link btn-outline-primary" target="_blank" href={this.state.source_url}>VIEW SOURCE</Button>
            <Button className="link btn-outline-dark" onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );

    const footerInstance = (
      <div id="contact">
        <div className="col-xs-12 mx-auto">
          <h1 className="text-center">CONTACT</h1>
          <div className="col-md-6 col-sm-8 col-xs-12 mx-auto">
            <p className="text-center" id="email"><a href="mailto:xiao2017luo@gmail.com" target="_blank" rel="noopener noreferrer">Email: xiao2017luo@gmail.com</a></p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 mx-auto">
            <FontAwesome className='icon social link' name='linkedin-square' onClick={this.handleLinkedin} size='2x' />
            <FontAwesome className='icon social link' name='github' size='2x' onClick={this.handleGithub}/>
            <FontAwesome className='icon social link' name='facebook-square' onClick={this.handleFacebook} size='2x' />
          </div>
        </div>
      </div>
    );

    const resumeInstance = (
      <div className="resume fix-background fix-background">
        <h2 className="text-center" id="resume">VIEW MY RESUME!</h2>
        <div className="col-md-6 col-sm-8 col-xs-12 mx-auto text-center">
          <Button className="btn btn-outline-dark" href="RESUME.pdf" target="_blank">RESUME</Button>
        </div>
      </div>
    );

    const greetingInstance = (
      <div className="greeting-background text-center fix-background">
        <h1 className="greetings">HI, I&apos;M XIAO</h1>
      </div>
    );

    return (
      <div>
        {greetingInstance}
        {aboutInstance}
        {resumeInstance}
        {profolioInstance}
        {footerInstance}
        {this.state.display && modalInstance}
      </div>
    );
  }
}

export default Profolio;
