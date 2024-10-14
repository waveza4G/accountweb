import React from 'react';
import { Card, Button } from 'react-bootstrap';

function LatestEntries({ entries, title, onEditEntry }) {
  const latestEntries = entries.slice(-5).reverse();

  return (
    <Card 
      style={{ 
        marginBottom: '1rem', 
        border: '2px solid #ADD8E6', 
        borderRadius: '10px',
      }}
    >
      <Card.Header style={{ backgroundColor: '#E0F7FA', fontWeight: 'bold' }}>{title}</Card.Header>
      <Card.Body>
        {latestEntries.length > 0 ? (
          latestEntries.map((entry, index) => (
            <div 
              key={index} 
              style={{ 
                marginBottom: '0.5rem', 
                paddingBottom: '0.5rem', 
                borderBottom: index !== latestEntries.length - 1 ? '1px solid #ADD8E6' : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{entry.source || "ไม่ระบุ"}</span>
                <span 
                  style={{ 
                    color: entry.type === "รายจ่าย" ? 'red' : entry.type === "รายรับ" ? 'green' : 'orange'
                  }}
                >
                  ฿{Math.abs(entry.amount).toLocaleString()} {/* ใช้ Math.abs() เพื่อลบเครื่องหมายลบออก */}
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'gray', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <span>{entry.date ? entry.date.replace(/-/g, "/") : "ไม่ระบุ"}</span>
                  <span> - {entry.time || "ไม่ระบุ"}</span>
                </div>
                <Button 
                  variant="link" 
                  size="sm" 
                  onClick={() => onEditEntry(entry)} 
                  style={{ fontSize: '0.8rem', color: '#007bff', textDecoration: 'underline' }}
                >
                  แก้ไข
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>ไม่มีข้อมูล</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default LatestEntries;
