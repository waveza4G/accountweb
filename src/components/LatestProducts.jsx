import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function LatestProducts({ selectedDate, selectedType, onProductsUpdate }) {
    const products = [
        { date: "2024-10-15", time: "6:00", status: "แม่ให้", type: "รายรับ", amount: 50 },
        { date: "2024-10-15", time: "6:30", status: "พ่อให้", type: "รายรับ", amount: 50 },
        { date: "2024-10-15", time: "8:00", status: "ซื้อข้าวเช้า", type: "รายจ่าย", amount: -30 },
        { date: "2024-10-15", time: "9:00", status: "ซื้อขนม", type: "รายจ่าย", amount: -20 },
        { date: "2024-10-15", time: "10:00", status: "ออมเงินซื้อของเล่น", type: "เงินเก็บ", amount: 20 },

        { date: "2024-10-17", time: "6:00", status: "แม่ให้", type: "รายรับ", amount: 50 },
        { date: "2024-10-17", time: "6:30", status: "พ่อให้", type: "รายรับ", amount: 50 },
        { date: "2024-10-17", time: "8:00", status: "ซื้อข้าวเช้า", type: "รายจ่าย", amount: -1000 },
        { date: "2024-10-17", time: "9:00", status: "ซื้อขนม", type: "รายจ่าย", amount: -1000 },
        { date: "2024-10-17", time: "10:00", status: "ออมเงินซื้อของเล่น", type: "เงินเก็บ", amount: 500 },

        { date: "2024-10-18", time: "6:00", status: "แม่ให้", type: "รายรับ", amount: 50 },
        { date: "2024-10-18", time: "6:30", status: "พ่อให้", type: "รายรับ", amount: 50 },
        { date: "2024-10-18", time: "8:00", status: "ซื้อข้าวเช้า", type: "รายจ่าย", amount: -1000 },
        { date: "2024-10-18", time: "9:00", status: "ซื้อขนม", type: "รายจ่าย", amount: -1000 },
        { date: "2024-10-18", time: "10:00", status: "ออมเงินซื้อของเล่น", type: "เงินเก็บ", amount: 500 },
    ];

    const filteredProducts = products.filter(
        (product) => 
            product.date === selectedDate && 
            (selectedType === "รวม" || product.type === selectedType)
    );

    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        onProductsUpdate(filteredProducts);
    }, [filteredProducts, onProductsUpdate]);

    const toggleShowAll = () => setShowAll(!showAll);

    return (
        <div style={{ background: '#f4f6f8', borderRadius: '10px', padding: '20px' }}>
            <h4 style={{ marginBottom: '20px', textAlign: 'center' }}>รายการทั้งหมดสำหรับวันที่ {selectedDate || "..."}</h4>
            {filteredProducts.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {filteredProducts.slice(0, 3).map((product, index) => (
                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                            <span style={{ flex: 1, textAlign: 'left' }}>{product.status}</span>
                            <span style={{ flex: 1, textAlign: 'center' }}>{product.date} – {product.time}</span>
                            <span 
                                style={{ 
                                    flex: 1, 
                                    textAlign: 'right', 
                                    color: product.type === "รายรับ" ? 'green' : product.type === "รายจ่าย" ? 'red' : 'orange' 
                                }}
                            >
                                ฿{Math.abs(product.amount).toLocaleString()}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>ไม่มีรายการสำหรับวันที่เลือก</p>
            )}
            {filteredProducts.length > 3 && (
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); toggleShowAll(); }} 
                    style={{ color: '#646cff', textAlign: 'center', display: 'block', marginTop: '10px' }}
                >
                    View all
                </a>
            )}

            <Modal show={showAll} onHide={toggleShowAll} centered>
                <Modal.Header closeButton>
                    <Modal.Title>รายการทั้งหมดสำหรับวันที่ {selectedDate}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {filteredProducts.map((product, index) => (
                            <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                                <span style={{ flex: 1, textAlign: 'left' }}>{product.status}</span>
                                <span style={{ flex: 1, textAlign: 'center' }}>{product.date} – {product.time}</span>
                                <span 
                                    style={{ 
                                        flex: 1, 
                                        textAlign: 'right', 
                                        color: product.type === "รายรับ" ? 'green' : product.type === "รายจ่าย" ? 'red' : 'orange' 
                                    }}
                                >
                                    ฿{Math.abs(product.amount).toLocaleString()}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleShowAll}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LatestProducts;
