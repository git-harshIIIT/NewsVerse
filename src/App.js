import './App.css';
import NavBar from './components/NavBar';

import React, { Component } from 'react'
import News from './components/News';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 6;
  //hidden API KEY
  apikey = process.env.REACT_APP_NEWS_API;
  state = {
    progress : 0
  }
  //We have to pass it as arrow function
  setProgress = (progress) => {
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
       <NavBar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
       <Routes>
        <Route exact path = "/" element = {<News setProgress =  {this.setProgress} apikey = {this.apikey} key = "general" pageSize = {this.pageSize} country = "in" category = "general" />}/>
        <Route exact path = "/home" element = {<News setProgress =  {this.setProgress} apikey = {this.apikey} key = "general" pageSize = {this.pageSize} country = "in" category = "general" />}/>
        <Route exact path = "/science" element = {<News setProgress =  {this.setProgress} apikey = {this.apikey} key = "science" pageSize = {this.pageSize} country = "in" category = "science" />}/>
        <Route exact path = "/business" element = {<News setProgress =  {this.setProgress} apikey = {this.apikey} key = "business" pageSize = {this.pageSize} country = "in" category = "business" />}/>
        <Route exact path = "/sports" element = {<News setProgress =  {this.setProgress} apikey = {this.apikey} key = "sports" pageSize = {this.pageSize} country = "in" category = "sports" />}/>
        <Route exact path = "/technology" element = {<News setProgress =  {this.setProgress} apikey = {this.apikey} key = "technology" pageSize = {this.pageSize} country = "in" category = "technology" />}/>
        <Route exact path = "/health" element = {<News setProgress =  {this.setProgress} apikey = {this.apikey} key = "health" pageSize = {this.pageSize} country = "in" category = "health" />}/>
        <Route exact path = "/entertainment" element = {<News setProgress =  {this.setProgress} apikey = {this.apikey} key = "entertainment" pageSize = {this.pageSize} country = "in" category = "entertainment" />}/>
       </Routes>
       </BrowserRouter>
      </div>
    )
  }
}

