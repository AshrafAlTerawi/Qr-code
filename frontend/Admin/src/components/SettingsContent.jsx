import React from 'react';

const SettingsContent = () => {
  return (
    <div className="settings-content">
      <h2>System Settings</h2>
      
      <div className="settings-section">
        <h3>Working Hours</h3>
        <div className="time-settings">
          <div className="time-input">
            <label>Start Time</label>
            <input type="time" defaultValue="08:00" />
          </div>
          <div className="time-input">
            <label>End Time</label>
            <input type="time" defaultValue="17:00" />
          </div>
        </div>
      </div>
      
      <div className="settings-section">
        <h3>Change Password</h3>
        <div className="password-form">
          <div className="form-group">
            <label>Current Password</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>Confirm New Password</label>
            <input type="password" />
          </div>
          <button className="save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;