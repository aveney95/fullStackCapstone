import { useEffect, useState } from 'react';
// import { fetchListings } from '../services/api';

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getListings = async () => {
            try {
                const { data } = await fetchListings();
                setListings(data);
            } catch (err) {
                setError(err.response?.data?.message || "Error fetching listings");
            }
        };

        getListings();
    }, []);

    return (
        <div>
            <h2>Listings</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {listings.map(listing => (
                    <li key={listing._id}>{listing.title} - ${listing.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Listings;
