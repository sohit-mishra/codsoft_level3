import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main Street',
    city: 'YourCity',
    state: 'Harayana',
    pincode: '123456',
    townVillage: 'YourTownVillage',
  };

  return (
    <div className="profile-container">
    <h2>Profile Information</h2>
    <div className="profile-details">
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Address:</strong>
        <div className="address-details">
          <div>{user.address.city}</div>
          <div>{user.address.state}</div>
          <div>{user.address.pincode}</div>
          <div>{user.address.townVillage}</div>
        </div>
      </div>
      <div>
        <strong>Phone Number:</strong> {user.phoneNumber}
      </div>
    </div>
  </div>
  );
};

export default UserProfile;
