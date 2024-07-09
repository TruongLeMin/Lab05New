import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EventDetail from './components/EventDetail';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Thêm file CSS nếu cần

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-primary text-white text-center py-4 mb-3">
          <h3>PHÒNG QUAN HỆ DOANH NGHIỆP</h3>
          <h3>ĐẠI HỌC FPT CẦN THƠ</h3>
        </header>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:id" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
