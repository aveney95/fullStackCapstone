import '../styles/UserListings.css';

const UserListings = ({ items }) => {
  return (
    <div className="listings-section">
      <h3>User Listings</h3>
      <div className="listings">
        {items.map((item, index) => (
          <div className="listing" key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListings;
