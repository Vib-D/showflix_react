import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Summary = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [isFormVisible, setFormVisibility] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Add other form fields as needed
    });

    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const data = await response.json();
                setShow(data);
            } catch (error) {
                console.error('Error fetching show details:', error);
            }
        };

        fetchShowDetails();
    }, [id]);

    const handleBookNowClick = () => {
        // Show the form when "Book Now" is clicked
        setFormVisibility(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form data from the 'formData' state
        console.log('Form submitted:', formData);
        // Optionally, you can reset the form data and hide the form after submission
        setFormData({
            name: '',
            email: '',
        });
        setFormVisibility(false);
    };

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container-sum'>
            <div className="show-summary">
                <img src={show.image && show.image.medium} alt={show.name} />
                <div className="summary-text">
                    <h2>{show.name}</h2>
                    <div className='show-info'>
                        <h6>{show.language}</h6>
                        <h6> Premiered: {show.premiered}</h6>
                        <h6> Rating: {show.rating.average}/10</h6>
                        <h6> Runtime: {show.runtime} min</h6>
                    </div>
                </div>
            </div>
            <div className='book-now'>
                <button className='book-btn' onClick={handleBookNowClick}>
                    Book Now
                </button>
            </div>
            {isFormVisible && (
                <div className='modal-overlay'>
                    <div className='form-card'>
                        <h3>Proceed for booking</h3>
                        <div className='show-card'>
                            <img src={show.image && show.image.medium} alt={show.name} />
                            <div className='incard-info'>
                                <h2>{show.name}</h2>
                                <h6> {show.language}</h6>
                                <h6> Runtime: {show.runtime} min</h6>
                                <h6> Rating: {show.rating.average}/10</h6>
                            </div>
                        </div>

                        <span className='close-btn' onClick={() => setFormVisibility(false)}>
                            &times;
                        </span>
                        <form onSubmit={handleFormSubmit}>
                            <label>Name:</label>
                            <input
                                type='text'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <label>Email:</label>
                            <input
                                type='email'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            
                            <button type='submit'>Book</button>
                        </form>
                    </div>
                </div>
            )}
            <div className='desc'>
                <h5>Summary</h5>
                <p>{show.summary && show.summary.replace(/<[^>]*>/g, '')}</p>
            </div>
        </div>
    );
};

export default Summary;
