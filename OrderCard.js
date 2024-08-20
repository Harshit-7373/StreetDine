import React from 'react';
import './OrderCard.css'; // Import the CSS file for OrderCard

const OrderCard = () => {
  const orders = [
    { id: 1, customer: 'John Doe', status: 'Shipped', total: '$50.00' },
    { id: 2, customer: 'Jane Smith', status: 'Processing', total: '$75.00' },
    { id: 3, customer: 'Emily Johnson', status: 'Delivered', total: '$100.00' },
    { id: 4, customer: 'Michael Brown', status: 'Pending', total: '$60.00' },
  ];

  return (
    <div className="order-card">
      <h1>Orders</h1>
      <div className="order-cards">
        {orders.map((order) => (
          <div className="card" key={order.id}>
            <h2>Order #{order.id}</h2>
            <p><strong>Customer:</strong> {order.customer}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Total:</strong> {order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
