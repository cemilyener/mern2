import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import ListStudents from './pages/ListStudents';
import TakeAttendance from './pages/TakeAttendance';
import GenerateReport from './pages/GenerateReport';
import ProfileStudent from './pages/ProfileStudent'; // ProfileStudent import edildi

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/list-students" element={<ListStudents />} />
        <Route path="/take-attendance" element={<TakeAttendance />} />
        <Route path="/generate-report" element={<GenerateReport />} />
        <Route path="/profile-student/:id" element={<ProfileStudent />} /> {/* Path güncellendi */}
      </Routes>
    </Router>
  );
}

export default App;

