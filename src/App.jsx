import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileWrapper from './components/Layout/MobileWrapper';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import RoleSelection from './pages/Auth/RoleSelection';
import ParentSignup from './pages/Auth/ParentSignup';
import SchoolSignup from './pages/Auth/SchoolSignup';
import Home from './pages/Home';
import CountingApples from './pages/Games/CountingApples';
import OfflineMission from './pages/Missions/OfflineMission';
import ParentDashboard from './pages/Dashboards/ParentDashboard';
import TeacherDashboard from './pages/Dashboards/TeacherDashboard';

function App() {
  return (
    <Router>
      <MobileWrapper>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/auth/role-selection" element={<RoleSelection />} />
          <Route path="/auth/parent-signup" element={<ParentSignup />} />
          <Route path="/auth/school-signup" element={<SchoolSignup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games/counting-apples" element={<CountingApples />} />
          <Route path="/offline-mission" element={<OfflineMission />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          {/* Add more routes here */}
        </Routes>
      </MobileWrapper>
    </Router>
  );
}

export default App;
