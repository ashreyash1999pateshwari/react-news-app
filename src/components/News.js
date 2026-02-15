import React, { Component } from 'react'
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        category: "general",
        country: "us",
        pageSize: 20
    }
    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
        pageSize: PropTypes.number
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    fetchNews = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8f8dac897ea4acabb6bebcf371a3197&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
    }
    hasFetched = false;
    async componentDidMount() {
        if (this.hasFetched) return;
        this.hasFetched = true;
        this.props.setProgress(20);
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8f8dac897ea4acabb6bebcf371a3197&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await data.json();
        this.props.setProgress(100);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }
    // async componentDidUpdate(prevProps, prevState) {
    //     if (this.state.page !== prevState.page) {
    //         this.setState({ loading: true });
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8f8dac897ea4acabb6bebcf371a3197&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    //     }
    // }
    // handlePreClick = () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.fetchNews();
    // }
    // handleNextClick = () => {
    //     this.setState({ page: this.state.page + 1 });
    //     this.fetchNews();
    // }

    render() {
        return (
            <>
                <h2 className='text-center my-3'>Daily Bites - Top {this.props.category} Headlines</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchNews}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner/>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map(({ title, description, urlToImage, url }) => (
                                <div className="col-md-3">
                                    <NewsItems key={url} title={title?.slice(0, 50)} description={description?.slice(0, 150)} imageUrl={urlToImage} newsUrl={url} />
                                </div>
                            ))}
                            {/* <div className="container">
                        {this.state.loading && <Spinner />}
                    </div> */}
                        </div>
                    </div>

                </InfiniteScroll>
                {/* <div className="container my-4 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News
