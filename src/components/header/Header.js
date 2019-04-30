import React from 'react';
import './Header.css';
import likedin from '../../api/linkedin';
import { Container, Row, Col, Media,ProgressBar } from 'react-bootstrap';
import Dp from './avatar.png';
import NumOfDays from './NumOfDays';

let code;

class Header extends React.Component {
    state = { dataResponse: []};
   
    componentDidMount(){
        const str = this.props.location.search,
        regx = /\bcode=[^&;]*/;
        code = str.match(regx)[0].split("code=")[1];        
       // console.log(code)
        this.onSearchSubmit();
    } 
    onSearchSubmit = async (term) => {
        const response = await likedin.post(`/oauth/v2/${code} HTTP/1.1`, {
            params: { query: term}            
        });
        //console.log(response); 
        //this.setState({ dataResponse : response });
    }
    render(){
        return(
            <Container className='header'>
                <Row className="header-row">
                    <Col xs={9}>
                        <Media>
                        <img
                            className="mr-3"
                            src={Dp}
                            alt="Profile"
                        />
                            
                            <Media.Body className="align-self-center">
                                <h5>Shrilekha Handa</h5>
                                <p>Frontend Developer</p>
                                <p>D.O.B: Oct 12, 1995</p>
                                <NumOfDays DOB="Oct 12, 1995" />
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col xs={3} className="align-self-center">
                        <p>Tel: 8495808235</p>
                        <p>shreeli.handa@gmail.com</p>
                    </Col>
                </Row>
                
                <Row className="header-row">
                    <Col xs={5}>
                        <div className="exp">
                            <h4>EXPERIENCE</h4>
                            <div className="w-25 text-center">
                                <h1>1</h1>
                            </div>
                            
                            <div className="w-75">
                                <p>Year <br /> Worked at Apoxeo solutions Pvt.Ltd Startup as Associate Software Engineer</p>
                            </div>
                        </div> 


                        <div className="skill mb-4 mt-5 pt-1">
                            <h4>SKILLS</h4>

                            <div className="px-4">
                                <p className="w-50 d-inline-block">JavaScript</p>    
                                <p className="w-50 d-inline-block text-right">4/10</p>                    
                                <ProgressBar variant="info" now={40} />

                                <p className="w-50 d-inline-block">Bootstrap</p>  
                                <p className="w-50 d-inline-block text-right">4.5/10</p>                       
                                <ProgressBar variant="info" now={45} />

                                <p className="w-50 d-inline-block">HTML & CSS</p>  
                                <p className="w-50 d-inline-block text-right">6.5/10</p>                       
                                <ProgressBar variant="info" now={65} />

                                <p className="w-50 d-inline-block">jQuery</p>    
                                <p className="w-50 d-inline-block text-right">5.5/10</p>                     
                                <ProgressBar variant="info" now={55} />

                                <p className="w-50 d-inline-block">ReactJS</p> 
                                <p className="w-50 d-inline-block text-right">3.5/10</p>                        
                                <ProgressBar variant="info" now={35} />

                                <p className="w-50 d-inline-block">SCSS</p>  
                                <p className="w-50 d-inline-block text-right">2/10</p>                       
                                <ProgressBar variant="info" now={20} />
                            </div>
                            
                        </div>  


                        <div className="lang mb-4">
                            <h4>LANGUAGE</h4>

                            <div className="px-4">
                                <p className="w-50 d-inline-block">English</p>  
                                <p className="w-50 d-inline-block text-right">4.5/10</p>                       
                                <ProgressBar variant="success" now={45} />

                                <p className="w-50 d-inline-block">Kannnda</p>   
                                <p className="w-50 d-inline-block text-right">7/10</p>                      
                                <ProgressBar variant="success" now={70} />

                                <p className="w-50 d-inline-block">Hindi</p>   
                                <p className="w-50 d-inline-block text-right">4/10</p>                      
                                <ProgressBar variant="success" now={40} />
                            </div>
                        </div>   


                        <div className="edu mb-4">
                            <h4>EDUCATION</h4>

                            <div className="px-4">
                                <div className="edu-detail">
                                    <h5>PUC 2011-2013</h5>
                                    <p>GPU college, Shankaranarayana, Udupi, Karnataka</p>
                                </div>                            

                                <div className="edu-detail">
                                    <h5>B.E 2013-2017</h5>
                                    <p>Vidya Vikas Institute of Engineering and Technology, Mysuru, Karnataka</p>
                                </div>
                            </div>
                        </div>                                      
                    </Col>

                    <Col xs={7} className="pl-5">
                        <div className="works mb-4">
                            <h4>CHECK OUT MY WORKS HERE</h4>

                            <div className="px-4">
                                <p>https://github.com/ShrilekhaHanda</p>

                                <p>http://fotostory.in</p>

                                <p>http://vdesign.company</p>

                                <p>https://www.apoxeo.com</p>
                            </div>
                        </div>

                        <div className="role mb-5 pb-2">
                            <h4>ROLE AND RESPONSIBILITIES</h4>

                            <div className="px-4">
                                <p className="w-50 d-inline-block">Associate Software Engineer </p>  
                                <p className="w-50 d-inline-block text-right">Feb  2018 - Current</p> 

                                <div className="role-details pl-5">
                                    <p>I started with a basic website development using Bootstrap-4 and CSS3, HTML5.</p>

                                    <p>Implemented several types of UI Animations from scratch. With the help of jQuery and Javascript.</p>

                                    <p>Worked on Apoxeo Solutions official site.</p>

                                    <p>Worked on an user subscription system with mailchimp.</p>

                                    <p>Implemented facebook pixels to track down the user activities on the website and also for advertising purpose</p>

                                    <p>Implemented Hotjar to track down the user activities including a small cursor movement.</p>
                                    
                                    <p>Worked with Agile methodologies.</p>

                                    <p>Working with ReactJS framework.</p>
                                </div>
                            </div>                        
                        </div>


                        <div className="award mb-4">
                            <h4>AWARD</h4>

                            <div className="px-4">
                                <p>Received appreciation award for best performance of the quarter.</p>                            
                            </div>
                        </div>  
                    </Col>
                </Row>

                <Row className="header-row">
                    <Col xs={12}>
                        <div className="projects">
                            <h4>PROJECTS</h4>

                            <div className="px-4">
                                <div className="projects-detail">
                                    <h5>Fotostory</h5>
                                    <p>This is a branding site for a to be developing app called Fotostory. I’ve implemented google analytics, facebook pixel, hotjar and mailchimp in this project. 
                                    This site is completely responsive and also implemented UI animations for better user experiences.
                                    This also contains a feature to sent a mail for the user who registers to the site. This has been acquired with the help of mailchimp.
                                    </p>
                                </div>                            

                                <div className="projects-detail">
                                    <h5>V Design</h5>
                                    <p>This help the developers and designers to come together and share their work. I’ve implemented chatbot in this project which was quite challenging.
                                        This includes a bunch of case studies in which I’ve implemented many animations with help of Javascript and jQuery.
                                    </p>
                                </div>

                                <div className="projects-detail">
                                    <h5>V Cinema</h5>
                                    <p>This is a site related to entertainment. User can watch movies, news about celebrities, details about celebrities, listen to songs and much more. This is being developed with the help of ReactJS. 
                                        Since this is a site which includes large amount of data handling it’s quite challenging. Everything is connected to one another and I get to explore Javascript in a deeper level.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="other-projects my-5 ">
                            <h4>OTHER PROJECTS</h4>

                            <div className="px-4">
                                <div className="projects-detail">
                                    <h5>Autopower systems & solutions</h5>
                                    <p>This was my first project. This is an official website of Autopower systems and solutions. I’ve mainly worked on Bootstrap-4 with this project.
                                    </p>
                                </div>                            

                                <div className="projects-detail">
                                    <h5>Apoxeo Official site</h5>
                                    <p>This is an official website of Apoxeo solutions. I’ve used Bootstrap-4 and jQuery in this project.
                                    </p>
                                </div>

                                <div className="projects-detail">
                                    <h5>KloveChef</h5>
                                    <p>This is also an branding site, which is developed with the help of Bootstrap-4 and jQuery.
                                    </p>
                                </div>

                                <div className="projects-detail">
                                    <h5>KloveChef</h5>
                                    <p>This is also an branding site, which is developed with the help of Bootstrap-4 and jQuery.
                                    </p>
                                </div>

                                <div className="projects-detail">
                                    <h5>Job Portal site</h5>
                                    <p>This is my own mini project. While learning ReactJS I’ve created this one. This will allow an user to login/register as candidate/recruiter and they will see a list of jobs created by recruiters or a list of registered candidates accordingly. 
                                        I’ve implemented socket.io in this one to get instant updations and  for real time user experiences.
                                        I’m storing the user data in a JSON file with the help of api server.
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                    </Col>                
                </Row>
            </Container>
        )
    }
}
export default Header;


//?code=AQT4Cb5psjsensVwG0zsAdqLJFRDrlCrKDiU-RLHFlGlnR8yPsqFfHPS41aZJNENpi8hwwPZTyBJX4hWLghhZTEzPbNm0-brmvBltRvrc4wDTuooIPifzxqu11MAzz0R135aFIHRdirz0DyOQGNbp4lcAS-i7EIzDC1PPx7CHufPHkYJvttHjgaB1y-3Yg&state=2522abcde12345