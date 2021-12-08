import './App.css';
import {Component} from "react";


class App extends Component {
  state={
    fullName:'Haifa Rejeb',
    bio:'...',
    profession:'WEB developer',   
    isShow: false,
    x:0
  }
  handleClick=()=>{this.setState({isShow:!this.state.isShow})}
  componentDidMount() {
    setInterval(() => {this.setState(prevState => {
      return {
        x: prevState.x + 1,
      };
    });

    }, 1000);
  }
  render() { 
    
    return <div>
<div  style={{width:'500px', marginLeft:'500px'}} className="container">
  <div className="row">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3"> 
    {this.state.isShow? 
     <div  className="our-team">
        <div className="picture">
          <img className="img-fluid" src='https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/116134109_1012885009145811_6323133446336148012_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=NVANoEo3GSgAX9PdZsv&_nc_ht=scontent.fnbe1-2.fna&oh=c2049cd97ffa2c04525db961d2babeef&oe=61D3AB8F' alt='..'/>
        </div>
        <div className="team-content">
          <h3 className="name">{this.state.fullName} {this.handleClick} </h3>
          <h4 className="title">{this.state.profession} </h4>
        </div>
        <ul className="social">
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true" /></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true" /></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true" /></li>
          <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true" /></li>
        </ul>
      </div>:null}
    </div>
  </div></div>
  <center>
  <button  onClick={this.handleClick}>{this.state.isShow?'hide profile':'show my profile'} </button> </center>
  <h1 >{this.state.x} </h1>

    </div>;
  }
}
 
export default App
 ;


