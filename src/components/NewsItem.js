import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,Author,date,source} = this.props;
    return (
      <div> 
        <div className="card my-3" style={{width: "18rem"}}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style = {{zIndex : 1}}>
          {source}
          <span class="visually-hidden">unread messages</span>
        </span>
        <img src={imageUrl?imageUrl:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl}rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
            <p className="card-text"><small className="text-muted">By {Author} on {new Date(date).toGMTString()}</small></p>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem