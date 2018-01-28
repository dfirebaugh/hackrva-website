import React, { Component } from 'react';
import MainSlider from './Components/MainSlider.js';
import TopNav from './Components/TopNav.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
          <TopNav />
        </div>
        <div className='container'>
        </div>
        <MainSlider />
        <div className="mainPage-content">
        <div className="container">
        <div className='content'>
          HackRVA is a member-run and organized non-profit makerspace in Richmond, Virginia. HackRVA is a space filled with tools, computers, and people who like to build, invent, tinker, expand their minds, and learn and share new skills. You’ll find a diverse group of individuals who are into electronics, robots, woodworking, embedded software, metalworking, music, art, video, photography, 3D printing, sewing, textiles, and virtual reality—for starters. HackRVA members have access to the makerspace, tools, community, and learning opportunities through member-lead workshops, events and projects. We schedule our workshops on Meetup.com and stay digitally connected through social media (Facebook and Twitter), our mailing list, an irc-style messaging system and Slack. We also post projects and pics around the web to inspire other Richmond makers and those abroad. Location 1600 Roseneath Road Suite E Richmond, VA 23230 We’re located in Scott’s Addition immediately behind The Dairy Bar. If you’re using GPS, enter 3420 W. Moore Street 23230 to get to the parking lot. The entrance to our space is on West Moore Street. You’ll see our sign and door in the parking lot with the chain-link fence. Open House Anyone can visit during our open house events every first and third Thursday nights. You don’t need to be a member to hang out; lots of members will be at the open house to show you around. If it’s your first time at HackRVA or you want to become a member, this is the best night to learn about us. Also check Meetup.com and our calendar for additional meetings when members will be at the space and the door will be open. Contact In-Person: Visit the HackRVA makerspace anytime during a calendar event. You’ll be able to meet face-to-face with a member and get answers to your questions about our organization and how you can become a member. Email: info [at] hackrva [dot] org Announcements: HackRVA Announce Mailing list: Hack.RVA Listserve Twitter: @hackRVA Google+: +hackRVAorg Facebook: hack.rva Meetup: HackRVA FAQ I read the above, but what are you exactly … and whats going on? We’re a makerspace/hackerspace. Sometimes we’re referred to as a gym for the brain, a clubhouse for nerds, a mad-scientists layer, or a preeminent basement . We’re essentially a space filled with tools, computers, and people interested in knowledge and hands-on experience. Members pay dues and that provides the money to keep the space going. We are run by volunteers who are also members. No one owns the space and everyone contributes as they are able to see it flourish. If you’re interested in a hobby or subject of knowledge that is technology or “makery” related you will likely find comradery here and a place to work on projects. For more FAQ go here. Our interests include: Inventing Learning Prototyping Design General Science and Engineering Open Source Hardware and Software Computing Fabric Needlework CNC Biology Teaching Electronics Robotics 3D Printing Computer Programming Machining Micro-controllers Woodworking Networking IT Security Mechanical Engineering Soft Circuits / Wearables Arts and Crafts … and much more! You provide the enthusiasm and we provide the tools and community. Come visit us or become a member and let the joy of making begin! HackRVA Labs, Inc. a is nonprofit corporation managed by a Board of Directors and organized exclusively for educational and scientific purposes as defined by section 501(c)(3) of the Internal Revenue Code. Donations submitted to HackRVA Labs are tax deductible.
        </div>
        </div>
        </div>
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; hackrva.org 2018</p>
          </div>

        </footer>
      </div>
    );
  }
}

export default App;
