import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx';
import './Home.css';
import './Contact.css';
import './Creative.css';
import Logo from '../assets/Images/Logo.png';
import arrow from '../assets/Images/arrowback.png';
import bground from '../assets/Images/white.png';
import create from '../assets/Images/Dragon 6.png';

import homeIcon from '../assets/Images/Home.png';
import aboutIcon from '../assets/Images/aboutus.png';
import articlesIcon from '../assets/Images/articles.png';
import creativeIcon from '../assets/Images/creativespace.png';
import joinIcon from '../assets/Images/joinus.png';
import contactIcon from '../assets/Images/contactus.png';

export default function Creative() {
    // Form & gallery states
    const [idea, setIdea] = useState(''); //stores the text of a new idea
    const [image, setImage] = useState(null); //stores an uploaded image file
    const [gallery, setGallery] = useState([]); //stores all gallery items. starts empty
    const [editingId, setEditingId] = useState(null); //track which idea is being edited
    const [editText, setEditText] = useState(''); //stores text for editing an idea

    // Get logged-in username from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const username = storedUser?.username || "Anonymous";

    const navigate = useNavigate();

    // Fetch gallery items from backend on component mount
    useEffect(() => {
        fetch("http://localhost:5000/api/creative")
            .then(res => res.json())
            .then((data) => setGallery(data))
            .catch((error) => console.error(error));
    }, []);

    // Handle idea submission
    const handleSubmit = async () => {
        try {
            if (!idea.trim()) return alert("Please write something");

            const res = await fetch("http://localhost:5000/api/creative/idea", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idea, username })
            });

            if (!res.ok) throw new Error('Failed to submit idea');

            const newIdea = await res.json();
            setGallery([newIdea, ...gallery]);
            setIdea('');
        } catch (error) {
            console.error("Error submitting idea", error);
            alert("Failed to submit idea");
        }
    };

    // Handle image upload
    const handleImageSubmit = async () => {
        try {
            if (!image) return alert("Please select an image");

            const formData = new FormData();
            formData.append("image", image);
            formData.append("username", username);

            const res = await fetch("http://localhost:5000/api/creative/image", {
                method: "POST",
                body: formData
            });

            if (!res.ok) throw new Error('Failed to upload image');

            const newImage = await res.json();
            setGallery([newImage, ...gallery]);
            setImage(null);
        } catch (error) {
            console.error("Error uploading image", error);
            alert("Failed to upload image");
        }
    };

    // Handle edit
    const handleEdit = async (id, newText) => {
        try {
            if (!newText.trim()) return alert("Idea cannot be empty");

            const res = await fetch(`http://localhost:5000/api/creative/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idea: newText, username })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to update idea');
            }

            const updatedItem = await res.json();
            setGallery(prev => prev.map(item => item._id === id ? updatedItem : item));//replaces the updated item in gallery
            setEditingId(null);
            setEditText("");
        } catch (error) {
            console.error("Error updating idea:", error);
            alert(error.message);
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/creative/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username })
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(errorData?.message || 'Failed to delete item');
            }

            await res.json();
            setGallery(prev => prev.filter(item => item._id !== id));//removes the deleted item from gallery
            alert('Item deleted successfully');
        } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete item");
        }
    };

    // Menu Item component
    const MenuItem = ({ icon, text, path }) => {
        const currentPath = window.location.pathname;
        const isHome = path === '/';
        const isActive = currentPath === path;

        return (
            <li style={{ marginBottom: '15px' }}>
                <Link
                    to={path}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '16px',
                        padding: '10px',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                        opacity: isActive || isHome ? 1 : 0.6,
                        fontWeight: isActive || isHome ? 'bold' : 'normal'
                    }}>
                    <img
                        src={icon}
                        alt={text}
                        style={{
                            width: '24px',
                            height: '24px',
                            opacity: isActive || isHome ? 1 : 0.6
                        }} />
                    {text}
                </Link>
            </li>
        );
    };

    return (
        <div className="home-container" style={{
            minHeight: '100vh',
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden',
            fontFamily: 'josefin sans, sans-serif'
        }}>
            {/* Header */}
            <header className="header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: '#fff',
                position: 'relative'
            }}>
                <img src={Logo} alt="Qaleesi Logo" className="logo" />
                <img
                    src={arrow}
                    alt="arrow back"
                    className='profile-image'
                    style={{
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        zIndex: 1000
                    }}
                    onClick={() => navigate('/home')}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
            </header>

            <main style={{ padding: '20px' }}>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
                    {/* Left Menu */}
                    <nav style={{
                        width: '250px',
                        backgroundColor: '#36074A',
                        padding: '20px',
                        borderRadius: '10px',
                        height: '400px',
                    }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <MenuItem icon={homeIcon} text="Home" path="/home" />
                            <MenuItem icon={aboutIcon} text="About us" path="/about" />
                            <MenuItem icon={articlesIcon} text="Articles" path="/articles" />
                            <MenuItem icon={creativeIcon} text="Creative space" path="/creative" />
                            <MenuItem icon={joinIcon} text="Join us" path="/join" />
                            <MenuItem icon={contactIcon} text="Contact us" path="/contact" />
                        </ul>
                    </nav>

                    {/* Hero Section */}
                    <div style={{ flex: 1 }}>
                        <section className="hero-section" style={{
                            display: 'flex',
                            backgroundImage: `url(${bground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '20px',
                            padding: '40px',
                            color: 'white',
                            height: '400px',
                            alignItems: 'center',
                            flexDirection: 'row-reverse'
                        }}>
                            <div className="hero-text">
                                <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>
                                    Welcome to your<br />Creative playground
                                </h1>
                            </div>
                            <img
                                src={create}
                                alt="Dragon Mascot"
                                style={{ width: '450px', height: 'auto', marginRight: '40px' }}
                            />
                        </section>
                    </div>
                </div>

                {/* Input Section */}
                <section className='idea-form-container' style={{
                    backgroundColor: '#f5f0f8',
                    padding: '30px',
                    borderRadius: '20px',
                    marginBottom: '40px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h1 className="form-title" style={{
                        marginBottom: '25px',
                        color: '#36074A',
                        textAlign: 'center',
                        fontSize: '2.5rem'
                    }}>SHARE YOUR IDEA OR IMAGE</h1>

                    <div className="input-container" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        width: '100%'
                    }}>
                        <textarea
                            className="idea-textarea"
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}//stores the text of a new idea
                            placeholder="Write your brilliant idea here..."
                            style={{
                                width: '100%',
                                minHeight: '200px',
                                padding: '20px',
                                borderRadius: '10px',
                                border: '2px solid #ceb7db',
                                fontSize: '16px',
                                fontFamily: 'inherit',
                                resize: 'vertical',
                                backgroundColor: '#36074A',
                                color: 'white'
                            }}
                        />

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            alignItems: 'center'
                        }}>
                            <button
                                className="submit-button"
                                onClick={handleSubmit} //submits the new idea
                                style={{
                                    padding: '12px 30px',
                                    backgroundColor: '#36074A',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    transition: 'all 0.3s ease',
                                    minWidth: '150px'
                                }}
                            >
                                Submit Idea
                            </button>

                            {!image ? (
                                <label className="file-input-label" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '12px 30px',
                                    backgroundColor: '#36074A',
                                    borderRadius: '8px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    minWidth: '150px'
                                }}>
                                    Choose Image
                                    <input
                                        type="file"
                                        onChange={(e) => setImage(e.target.files[0])} //stores an uploaded image file
                                        style={{ display: 'none' }}
                                        accept="image/*"
                                    />
                                </label>
                            ) : (
                                <button
                                    className="submit-button"
                                    onClick={handleImageSubmit} //submits the uploaded image
                                    style={{
                                        padding: '12px 30px',
                                        backgroundColor: '#36074A',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        minWidth: '150px'
                                    }}
                                >
                                    Submit Image
                                </button>
                            )}
                        </div>
                        {image && (
                            <p style={{
                                textAlign: 'center',
                                color: '#36074A',
                                marginTop: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                Selected: {image.name}
                                <button
                                    onClick={() => setImage(null)} //clear selected image
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#36074A',
                                        cursor: 'pointer',
                                        fontSize: '20px'
                                    }}
                                >
                                    ×
                                </button>
                            </p>
                        )}
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="gallery-section" style={{
                    backgroundColor: '#ceb7db',
                    padding: '40px',
                    borderRadius: '20px',
                    marginBottom: '40px'
                }}>
                    <h1 className="form-title" style={{
                        marginBottom: '30px',
                        color: '#36074A',
                        textAlign: 'center'
                    }}>GALLERY</h1>

                    <div className="gallery-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '25px',
                        padding: '20px'
                    }}>
                        {gallery.map((item, index) => (
                            <div key={item._id || index} className="gallery-item" style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                padding: '20px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                position: 'relative'
                            }}>
                                {/* Edit Mode */}
                                {item.idea && editingId === item._id ? (
                                    <div style={{ marginBottom: '15px' }}>
                                        <textarea
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)} //stores text for editing an idea
                                            style={{
                                                width: '100%',
                                                minHeight: '100px',
                                                padding: '10px',
                                                borderRadius: '8px',
                                                border: '2px solid #ceb7db',
                                                marginBottom: '10px',
                                                fontSize: '16px'
                                            }}
                                        />
                                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                            <button
                                                onClick={() => handleEdit(item._id, editText)} //saves the edited idea
                                                style={{
                                                    padding: '8px 16px',
                                                    backgroundColor: '#36074A',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingId(null)} //cancels editing
                                                style={{
                                                    padding: '8px 16px',
                                                    backgroundColor: '#666',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {item.idea && (
                                            <p style={{
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                color: '#36074A',
                                                marginBottom: '15px'
                                            }}>
                                                {item.idea}
                                            </p>
                                        )}
                                        {item.image && (
                                            <img
                                                src={`data:image/png;base64,${item.image}`}
                                                alt="Creative"
                                                style={{
                                                    width: '100%',
                                                    height: '200px',
                                                    objectFit: 'cover',
                                                    borderRadius: '8px',
                                                    marginTop: item.idea ? '15px' : '0'
                                                }}
                                            />
                                        )}

                                        {item.username && (
                                            <p style={{
                                                fontSize: '14px',
                                                color: '#666',
                                                marginTop: '8px',
                                                textAlign: 'left'
                                            }}>
                                                Submitted by: <b>{item.username}</b>
                                            </p>
                                        )}

                                        {/* Show Edit/Delete only if logged-in user is owner */}
                                        {item.username === username && (
                                            <div style={{
                                                display: 'flex',
                                                gap: '10px',
                                                justifyContent: 'flex-end',
                                                marginTop: '15px'
                                            }}>
                                                {item.idea && (
                                                    <button
                                                        onClick={() => {
                                                            setEditingId(item._id);
                                                            setEditText(item.idea);
                                                        }}
                                                        style={{
                                                            padding: '8px 16px',
                                                            backgroundColor: '#36074A',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    style={{
                                                        padding: '8px 16px',
                                                        backgroundColor: '#36074A',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
