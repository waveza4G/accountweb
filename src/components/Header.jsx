import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#f8f9fa", // สีพื้นหลัง
    };
  
    const leftSectionStyle = {
        display: "flex",
        alignItems: "center",
    };
  
    const rightSectionStyle = {
        display: "flex",
        alignItems: "center",
    };
  
    return (
        <div style={headerStyle}>
            <div style={leftSectionStyle}>
                <span style={{ fontFamily: 'sans-serif', fontSize: "1.67rem", color: "#FF69B4", fontWeight: 'bold' }}>
                    Home
                </span>
            </div>
            <div style={rightSectionStyle}>
                <i className="fas fa-users" style={{ marginRight: '1rem' }} />
                <i className="fas fa-bell" style={{ marginRight: '1rem' }} />
                <img
                    src="https://cdn.readawrite.com/articles/4970/4969273/thumbnail/large.gif?2" // แทนที่ด้วย URL รูปโปรไฟล์
                    alt="Profile"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
            </div>
        </div>
    );
}

export default Header;
