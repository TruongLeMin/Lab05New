import React from 'react';
import Carousel from './Carousel'; // Đảm bảo đường dẫn đúng
import { News } from '../data/news';

const HomePage = () => {
    return (
        <div className="container">
            <Carousel />
            <div className="mt-5">
                <h2 className="text-center">Tin Tức & Sự Kiện</h2>
                <div className="row">
                    {News.map(item => (
                        <div className="col-md-4 d-flex align-items-stretch" key={item.id}>
                            <div className="card mb-4 w-100">
                                <img src={item.image} className="card-img-top w-100 h-50" alt={item.title} />
                                <div className="card-body d-flex flex-column text-center">
                                    <p className="card-text">{item.date} | Leave a comment</p>
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text truncate-text">{item.description.substring(0, 51)}...</p>
                                    <a href={`/event/${item.id}`} className="btn btn-primary mt-auto align-self-center" style={{ backgroundColor: 'orange', borderColor: 'orange' }}>Xem thêm</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default HomePage;
