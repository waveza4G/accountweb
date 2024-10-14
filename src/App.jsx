import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Overview from './components/Overview';
import Account from './components/Account';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
     
            <Router>
                <Routes>
                    <Route path="/" element={<DashboardLayout />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/account" element={<Account />} />
                    {/* เพิ่มเส้นทางอื่นๆ ได้ที่นี่ */}
                </Routes>
            </Router>
        
    );
}

export default App;
