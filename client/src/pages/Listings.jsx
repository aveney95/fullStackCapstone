import { useListings } from "../components/context/Context";
import "../styles/Listings.css";
const Listings = () => {
    const { listings } = useListings();

    return (
        <div className="listings-container">
            <h2>All Listings</h2>
            {listings.length === 0 ? <p>No listings available.</p> : null}
            <ul>
                {listings.map((listing) => (
                    <li key={listing.id}>
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

export default Listings;



// function ListingsPage() {
//     return <h1>All Listings</h1>;
// }
// export default ListingsPage;