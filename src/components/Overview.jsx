import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Header from './Header';
import LatestProducts from './LatestProducts';
import LatestOrders from './LatestOrders';
import TrafficSourceChart from './TrafficSourceChart';
import SalesBarChart from './SalesBarChart';
import DateFilter from './DateFilter';

function Overview() {
  const [selectedDateProducts, setSelectedDateProducts] = useState("");
  const [selectedDateOrders, setSelectedDateOrders] = useState("");
  const [selectedTypeProducts, setSelectedTypeProducts] = useState("รวม");
  const [selectedTypeOrders, setSelectedTypeOrders] = useState("รวม");
  const [productData, setProductData] = useState([]);
  const [orderData, setOrderData] = useState([]);

  const handleDateChangeProducts = (filter) => {
    setSelectedDateProducts(filter.date);
  };

  const handleDateChangeOrders = (filter) => {
    setSelectedDateOrders(filter.date);
  };

  const handleTypeChangeProducts = (type) => {
    setSelectedTypeProducts(type);
  };

  const handleTypeChangeOrders = (type) => {
    setSelectedTypeOrders(type);
  };

  return (
    <div style={{ display: "flex", width: "100vw", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <div style={{
        backgroundColor: "#F8E7EF", color: "#333", width: "240px", minHeight: "100vh", boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
        padding: "1rem", position: "fixed", top: 0, left: 0,
      }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1, padding: "2rem", marginLeft: "260px" }}>
        <Header />
        <Container style={{ padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
          <Row className="mb-4" style={{ gap: '20px' }}>
            <Col md={5} style={{
              padding: '20px', 
              backgroundColor: '#f4f6f8', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid #ddd',
              flexBasis: '47%',
              marginRight: '0px'
            }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>รายการทั้งหมด</h4>
                <div className="d-flex align-items-center">
                  <ButtonGroup size="sm" className="me-2">
                    <Button
                      variant={selectedTypeProducts === "รายรับ" ? "success" : "outline-success"} 
                      onClick={() => handleTypeChangeProducts("รายรับ")}
                    >
                      รับ
                    </Button>
                    <Button
                      variant={selectedTypeProducts === "รายจ่าย" ? "danger" : "outline-danger"} 
                      onClick={() => handleTypeChangeProducts("รายจ่าย")}
                    >
                      จ่าย
                    </Button>
                    <Button
                      variant={selectedTypeProducts === "เงินเก็บ" ? "warning" : "outline-warning"} 
                      onClick={() => handleTypeChangeProducts("เงินเก็บ")}
                    >
                      เก็บ
                    </Button>
                    <Button
                      variant={selectedTypeProducts === "รวม" ? "primary" : "outline-primary"} 
                      onClick={() => handleTypeChangeProducts("รวม")}
                    >
                      รวม
                    </Button>
                  </ButtonGroup>
                  <DateFilter setFilter={handleDateChangeProducts} size="sm" />
                </div>
              </div>
              <hr style={{ borderTop: '1px solid #ddd', backgroundColor: '#ffffff' }} />
              <LatestProducts 
                selectedDate={selectedDateProducts} 
                selectedType={selectedTypeProducts} 
                onProductsUpdate={setProductData}
              />
            </Col>

            <Col md={5} style={{  
              padding: '20px', 
              backgroundColor: '#f4f6f8', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              border: '1px solid #ddd',
              flexBasis: '44%'
            }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>สรุปยอดเงิน</h4>
                <div className="d-flex align-items-center">
                  <ButtonGroup size="sm" className="me-2">
                    <Button
                      variant={selectedTypeOrders === "รายรับ" ? "success" : "outline-success"} 
                      onClick={() => handleTypeChangeOrders("รายรับ")}
                    >
                      รับ
                    </Button>
                    <Button
                      variant={selectedTypeOrders === "รายจ่าย" ? "danger" : "outline-danger"} 
                      onClick={() => handleTypeChangeOrders("รายจ่าย")}
                    >
                      จ่าย
                    </Button>
                    <Button
                      variant={selectedTypeOrders === "เงินเก็บ" ? "warning" : "outline-warning"} 
                      onClick={() => handleTypeChangeOrders("เงินเก็บ")}
                    >
                      เก็บ
                    </Button>
                    <Button
                      variant={selectedTypeOrders === "รวม" ? "primary" : "outline-primary"} 
                      onClick={() => handleTypeChangeOrders("รวม")}
                    >
                      รวม
                    </Button>
                  </ButtonGroup>
                  <DateFilter setFilter={handleDateChangeOrders} size="sm" />
                </div>
              </div>
              <hr style={{ borderTop: '1px solid #ddd', backgroundColor: '#ffffff' }} />
              <LatestOrders 
                selectedDate={selectedDateOrders} 
                selectedType={selectedTypeOrders} 
                onOrdersUpdate={setOrderData}
              />
            </Col>
          </Row>

          <Row className="mt-4">
          <Row className="mt-4" style={{ gap: '20px' }}>
  {/* แผนภาพรายวัน */}
  <Col md={5} style={{
    padding: '20px', 
    backgroundColor: '#f4f6f8', 
    borderRadius: '10px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
    flexBasis: '48%',
   
  }}>
    <h4>แผนภาพรายวัน</h4>
    <SalesBarChart />
  </Col>

  {/* สรุปรายรับ-รายจ่าย */}
  <Col md={5} style={{
    padding: '20px', 
    backgroundColor: '#f4f6f8', 
    borderRadius: '10px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
    flexBasis: '45%'  
  }}>
    <h4>สรุปรายรับ-รายจ่าย</h4>
    <TrafficSourceChart data={productData} />
  </Col>
</Row>

          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Overview;
 