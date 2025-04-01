import '../styles/UserListings.css';
import { useState } from "react";
import { useListings } from '../components/context/Context'

const UserListings = () => {
    const { listings, addListing } = useListings();
    const [newListing, setNewListing] = useState({
        title: "",
        description: "",
        price: "",
        image: ""
    });

    const handleChange = (e) => {
        setNewListing({ ...newListing, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addListing(newListing);
        setNewListing({ title: "", description: "", price: "", image: "" });
    };

    return (
        <div>
            <h2>User Listings</h2>
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

            <ul>
                {listings.map((listing, index) => (
                    <li key={index}>
                        <h3>{listing.title}</h3>
                        <p>{listing.description}</p>
                        <p>Price: ${listing.price}</p>
                        {listing.image && <img src={listing.image} alt={listing.title} width="100" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserListings;



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
