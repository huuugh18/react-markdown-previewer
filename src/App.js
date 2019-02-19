import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class App extends Component {
  constructor(){
    super()
    this.state={
        quotes:[],
        currentQuote:{
          quote:'something',
          author:'homer j'
        }
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    fetch('https://aitorp6.herokuapp.com/quotes/api/quote/Homer%20J.%20Simpson')
    .then(results => {
        return results.json();
    }).then(data => {
        return this.setState({quotes:data.quotes})
    }).then(() => {
      let randomNum = Math.floor(Math.random() * 211)
      let randomQuote = this.state.quotes[randomNum]
      return this.setState({currentQuote:randomQuote})
    })
  }
  handleClick () {
    let randomSelection = Math.floor(Math.random() * 211);
    this.setState((state) => ({
      currentQuote: state.quotes[randomSelection]
    }))
  }
  render() {
    return (
      <div className="App">
          <img src={'https://s-media-cache-ak0.pinimg.com/236x/33/58/18/335818b563208954ab8fc8896d2d3a18.jpg'} className="App-logo" alt="logo" />
          <Card id="quote-box">
            <CardActionArea>
                <CardContent>
                  <Typography component="h1" id="text">
                    "{this.state.currentQuote.quote ? this.state.currentQuote.quote : 'placeholder'}"
                  </Typography>
                  <Typography variant="h5" component="h2" id="author">
                    - {this.state.currentQuote.author ? this.state.currentQuote.author + ` #${this.state.currentQuote.id}` : 'some author'}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" id="new-quote" onClick={this.handleClick}>
                  New Quote
                </Button>
                <Button  size="small" color="primary"  href={`https://twitter.com/intent/tweet?text=${this.state.currentQuote.quote}`} id="tweet-quote">
                  Tweet It
                </Button>
              </CardActions>
            </Card>
      </div>
    );
  }
}

export default App;
