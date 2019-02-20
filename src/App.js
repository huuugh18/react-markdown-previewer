import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import marked from 'marked'

marked.setOptions({
  breaks:true
})

class App extends Component {
  constructor(){
    super()
    this.state={
        input: previewText,
    }
    this.handleChange = this.handleChange.bind(this)
    this.markup = this.markup.bind(this)
  }
  
  handleChange = e => {
    this.setState({
      input: e.target.value,
    })
  }
  markup = () => {
    console.log('state',this.state.input)
    const rawMarkup = marked(this.state.input.toString())
    return {__html:rawMarkup}
  }
  render() {
    return (
      <div className="App">
          <Paper id="app-header">
            <Typography component="h2" variant="h2" align="center" id="app-header-type">
              Markdown Previewer
            </Typography>
          </Paper>
          <Card id="card-editor" className='text-card-container'>
            <CardHeader 
              title="Markdown Editor"
            />
              <CardContent>
                  <TextField 
                    id="editor"
                    multiline
                    value={this.state.input}
                    onChange={this.handleChange}
                    margin="normal"
                    fullWidth
                    variant="filled"
                  />
              </CardContent>
            </Card>
          <Card id="card-previewer" className='text-card-container'>
            <CardHeader
              title="Markdown Preview"
            />
              <CardContent id="preview-area">
                  <span 
                    id="preview"
                    dangerouslySetInnerHTML={this.markup()}
                  />
              </CardContent>
            </Card>
            <div id="footer">
              <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by kjpargeter - www.freepik.com</a>
            </div>
      </div>
    );
  }
}
const previewText = 'Markdown Quick Start\
                  \r\r # A large heading \r ## Next largest \r ###### Smallest \
                  \r\r **This is bold text**  \r __So is this__  \
                  \r\r *This text is italicized*  \r _So is this_  \
                  \r\r ~~This was mistaken text~~  \
                  \r\r To quote use  \r > to denote the quoted text  \
                  \r\r Use `backticks` for codes or commands  \
                  \r Use \r ``` \r triple backticks \r for multiple lines \r of code \r ```  \
                  \r\r Create inline links like so  \
                  \r This app was built using [React](https://facebook.github.io/react/index.html)  \
                  \r\r Unordered lists\
                  \r\r * Fish  \r * Chips  \r * Peas\
                  \r\r Nested & ordered Lists\
                  \r\rq ![Image of Yaktocat](https://openclipart.org/download/288754/laptop-personification-work-ready-body-builder.svg) \
                  \r\r1. Breakfast\r    - Toast\r    - Cereal  \r2. Dinner\r    * Fish & Chips\r      - Peas\r    * Pie & Chips';


export default App;
