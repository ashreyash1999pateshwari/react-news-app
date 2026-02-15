import React, { Component } from 'react'

export class NewsItems extends Component {
   
    render() {
        let {title,description,imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",newsUrl} = this.props;
        return (
            <div>
                <div className="card my-3 mx-auto">
                    <img src={imageUrl?imageUrl:"https://s.hdnux.com/photos/01/63/16/61/30207079/6/rawImage.jpg"} className="card-img-top" alt="crickImg"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
