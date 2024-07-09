import React from 'react';
import { Link } from 'react-router-dom';

const NewEvent = ({ id, title, date, description }) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <img src={`/assets/images/new_${id}.jpg`} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{date}</p>
          {/* <p className="card-text">{description.split('</br>')[0]}...</p> */}
          <p className="card-text">{description.split('</br>')[0]}...</p>
          <Link to={`/event/${id}`} className="btn btn-primary">Xem thêm</Link>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
