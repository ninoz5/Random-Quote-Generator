import logo from './logo.svg';
import './App.css';
import RandomQuote from './RandomQuote'
import React, { useState,Component } from 'react';
import './App.scss';
import {Quotes} from './Quotes'


class App extends Component {
  constructor(props){
    super(props)
    var quotenbr= (Math.floor(Math.random()*Quotes.length))
    var quote = Quotes[quotenbr]['quote']
    var author = Quotes[quotenbr]['author']
    this.state = {
      quote:quote, author: author, color: this.color()
    }
  }

  color(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = '#' + randomColor;
    return randomColor
  }

  newQuote(){
    var quotenbr= (Math.floor(Math.random()*Quotes.length))
    var quote = Quotes[quotenbr]['quote']
    var author = Quotes[quotenbr]['author']
    this.setState( {quote:quote , author: author, color: this.color()})
  }

  render() {
    const {quote,author,color} = this.state
    var posttwitter =' https://twitter.com/intent/tweet?url=' + quote  + ' - ' + author
    var posttumblr = "https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=" + author + "&content=" + quote + "&canonicalUrl=https://www.tumblr.com"
    return (
     <div className = 'App' style = {{'backgroundColor': this.state.color}}>
       <div id = 'quote-box' >

         <RandomQuote quote = {quote}
                      author = {author}
                      color = {color}/>

         <div className = 'buttons'>
           <a   style = {{'backgroundColor': color}}
                id='tweet-quote' 
                className="btn-floating btn btn-tw" 
                type="button" role="button" 
                title="Share on twitter" 
                target="_blank"
                href= {posttwitter}
                rel="noopener">

             <i className="fab fa-2x fa-twitter"></i>
           </a>

           <a   style = {{'backgroundColor': color}} 
                className="button"
                id="tumblr-quote"
                title="Post this quote on tumblr!"
                target="_blank" 
                href={posttumblr}>

            <i className="fab fa-tumblr"></i> 
           </a>

           <button  style = {{'backgroundColor': color}} id = 'new-quote' onClick = {() => this.newQuote()}>New quote </button>
         
         </div>
       
       </div>
       
       <small><a className = 'by' href = 'https://aniszportfolio.netlify.app/'> By Anis Zoghbi </a></small>
     
     </div>

     );
  }
}

export default App;
