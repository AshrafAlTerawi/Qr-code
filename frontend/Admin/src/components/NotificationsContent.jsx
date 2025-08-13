import React, { useState } from 'react';

const NotificationsContent = () => {
  const [newNotification, setNewNotification] = useState('');

  return (
    <div className="notifications-content">
      <h2>Send Notification</h2>
      <div className="notification-form">
        <textarea 
          placeholder="Type your notification message here..."
          value={newNotification}
          onChange={(e) => setNewNotification(e.target.value)}
        ></textarea>
        <div className="notification-actions">
          <button className="send-btn">Send to All Employees</button>
          <button className="schedule-btn">Schedule Notification</button>
        </div>
      </div>
      
      <div className="notification-history">
        <h3>Recent Notifications</h3>
        <div className="history-list">
          <div className="history-item">
            <div className="notification-message">
              <strong>Meeting Tomorrow</strong>
              <p>Team meeting at 10:00 AM in conference room</p>
            </div>
            <div className="notification-meta">
              <span>Sent: Today 14:30</span>
              <span>Recipients: 24 employees</span>
            </div>
          </div>
          <div className="history-item">
            <div className="notification-message">
              <strong>System Maintenance</strong>
              <p>System will be down for maintenance from 12AM to 2AM tonight</p>
            </div>
            <div className="notification-meta">
              <span>Sent: Yesterday 16:45</span>
              <span>Recipients: 24 employees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsContent;