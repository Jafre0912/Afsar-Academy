import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Components ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Courses from './pages/Courses';

// --- Pages ---
import Home from './pages/Home';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import CourseView from './pages/CourseView';
import AdminPanel from './pages/AdminPanel';
import ContactUs from './pages/ContactUs'; 
// (Agar aapne ContactUs.jsx nahi banaya hai, toh neeche main uska code bhi de raha hoon)

function App() {
  return (
    <Router>
      {/* flex aur min-h-screen ensure karta hai ki Footer hamesha bottom par rahe */}
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
        
        {/* Navbar hamesha upar rahega */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
           
            <Route path="/course/:id" element={<CourseView />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>

        {/* Footer hamesha neeche rahega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;