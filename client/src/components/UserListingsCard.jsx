import "../styles/UserListings.css";
import { useState } from "react";
import { useListings } from "../components/context/Context";

const UserListings = () => {
  const { listings, addListing, updateListing, deleteListing } = useListings();
  const [newListing, setNewListing] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  };

  // Handle edit input changes
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Handle new listing submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addListing(newListing);
    setNewListing({ title: "", description: "", price: "", image: "" });
  };

  // Handle update submission
  const handleUpdate = (e) => {
    e.preventDefault();
    updateListing(editingId, editData);
    setEditingId(null);
    setEditData({ title: "", description: "", price: "", image: "" });
  };

  return (
    <div>
      <h2>User Listings</h2>

      {/* Form to add a new listing */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newListing.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newListing.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newListing.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newListing.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Listing</button>
      </form>

      {/* List of user listings */}
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            {editingId === listing.id ? (
              // Edit Form
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleEditChange}
                  required
                />
                <input
                  type="text"
                  name="description"
                  value={editData.description}
                  onChange={handleEditChange}
                  required
                />
                <input
                  type="number"
                  name="price"
                  value={editData.price}
                  onChange={handleEditChange}
                  required
                />
                <input
                  type="text"
                  name="image"
                  value={editData.image}
                  onChange={handleEditChange}
                  required
                />
                <button type="submit">Update</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </form>
            ) : (
              // Display Listing
              <div>
                <h3>{listing.title}</h3>
                <p>{listing.description}</p>
                <p>Price: ${listing.price}</p>
                {listing.image && (
                  <img src={listing.image} alt={listing.title} width="100" />
                )}
                <button
                  onClick={() => {
                    setEditingId(listing.id);
                    setEditData(listing);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteListing(listing.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListings;

// import { useState } from "react";
// import { useListings } from '../components/context/Context'

// const UserListings = () => {
//     const { listings, addListing } = useListings();
//     const [newListing, setNewListing] = useState({
//         title: "",
//         description: "",
//         price: "",
//         image: ""
//     });

//     const handleChange = (e) => {
//         setNewListing({ ...newListing, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addListing(newListing);
//         setNewListing({ title: "", description: "", price: "", image: "" });
//     };

//     return (
//         <div>
//             <h2>User Listings</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     value={newListing.title}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Description"
//                     value={newListing.description}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="price"
//                     placeholder="Price"
//                     value={newListing.price}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="image"
//                     placeholder="Image URL"
//                     value={newListing.image}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit">Add Listing</button>
//             </form>

//             <ul>
//                 {listings.map((listing, index) => (
//                     <li key={index}>
//                         <h3>{listing.title}</h3>
//                         <p>{listing.description}</p>
//                         <p>Price: ${listing.price}</p>
//                         {listing.image && <img src={listing.image} alt={listing.title} width="100" />}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserListings;

// const UserListings = ({ items }) => {
//   return (
//     <div className="listings-section">
//       <h3>User Listings</h3>
//       <div className="listings">
//         {items.map((item, index) => (
//           <div className="listing" key={index}>
//             <h4>{item.title}</h4>
//             <p>{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserListings;
