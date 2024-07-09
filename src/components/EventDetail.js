import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { News } from '../data/news';
//import './EventDetail.css'; // Thêm file CSS nếu cần

const EventDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const event = News.find(item => item.id.toString() === id);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <div dangerouslySetInnerHTML={{ __html: event.description }}></div>
          <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
