import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert, Image } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Header from './Header';
import '../index.css';

const Account = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // State สำหรับข้อมูลส่วนตัว
  const [firstName, setFirstName] = useState('X');
  const [lastName, setLastName] = useState('AE_A');
  const [email, setEmail] = useState('elementary221b@gmail.com');
  const [phone, setPhone] = useState('012-345-6789');

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน');
    } else if (newPassword.length <= 10) {
      setError('รหัสผ่านต้องมีความยาวมากกว่า 10 ตัวอักษร');
    } else {
      alert('รหัสผ่านถูกอัปเดตเรียบร้อย');
      setError('');
    }
  };

  const handleUpdateProfile = () => {
    alert('ข้อมูลโปรไฟล์ถูกอัปเดตเรียบร้อย');
  };

  const handleLogout = () => {
    alert('ออกจากระบบเรียบร้อยแล้ว');
  };

  return (
    <div className="account-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Header />
        <Container className="content-container">
          <Row className="mt-5 align-items-stretch">
            <Col md={3} className="text-center profile-column">
              <Image 
                src="https://cdn.readawrite.com/articles/4970/4969273/thumbnail/large.gif?2" 
                roundedCircle 
                alt="Profile" 
                className="profile-image"
              />
              <h2>{firstName} {lastName}</h2>
              <Button variant="danger" onClick={handleLogout} className="mt-3">
                ออกจากระบบ
              </Button>
            </Col>
            <Col md={8}>
              <Row>
                <Col md={6} className="pe-3">
                  <div className="profile-box">
                    <h3>ข้อมูลโปรไฟล์</h3>
                    <Form>
                      <Form.Group controlId="firstName">
                        <Form.Label>ชื่อ</Form.Label>
                        <Form.Control
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="กรุณากรอกชื่อ"
                        />
                      </Form.Group>

                      <Form.Group controlId="lastName" className="mt-3">
                        <Form.Label>นามสกุล</Form.Label>
                        <Form.Control
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="กรุณากรอกนามสกุล"
                        />
                      </Form.Group>

                      <Form.Group controlId="email" className="mt-3">
                        <Form.Label>อีเมล</Form.Label>
                        <Form.Control
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="กรุณากรอกอีเมล"
                        />
                      </Form.Group>
                    </Form>

                    <div className="d-flex justify-content-end mt-4">
                      <Button variant="secondary" className="me-2" onClick={handleUpdateProfile}>
                        อัปเดตโปรไฟล์
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="ps-5">
                  <div className="profile-box mt-5 mt-md-0">
                    <h3>เปลี่ยนรหัสผ่าน</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                      <Form.Group controlId="currentPassword">
                        <Form.Label>รหัสผ่านปัจจุบัน</Form.Label>
                        <Form.Control
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="กรุณากรอกรหัสผ่านปัจจุบัน"
                        />
                      </Form.Group>

                      <Form.Group controlId="newPassword" className="mt-3">
                        <Form.Label>รหัสผ่านใหม่</Form.Label>
                        <Form.Control
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="กรุณากรอกรหัสผ่านใหม่"
                        />
                        <Form.Text className="text-muted">
                          รหัสผ่านต้องมีความยาวมากกว่า 10 ตัวอักษร
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="confirmPassword" className="mt-3">
                        <Form.Label>ยืนยันรหัสผ่านใหม่</Form.Label>
                        <Form.Control
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="กรุณายืนยันรหัสผ่านใหม่"
                        />
                      </Form.Group>

                      <div className="d-flex justify-content-end mt-4">
                        <Button variant="secondary" className="me-2">ยกเลิก</Button>
                        <Button variant="primary" onClick={handleUpdatePassword}>
                          อัปเดตรหัสผ่าน
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Account;
