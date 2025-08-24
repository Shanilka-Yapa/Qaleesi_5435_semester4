import { useState } from 'react';
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
import { useEffect } from 'react';

export default function Creative() {
    const [idea, setIdea] = useState('');
    const [image, setImage] = useState(null);
    const [gallery, setGallery] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = async (id, newText) => {
        try {
            if (!newText.trim()) return alert("Idea cannot be empty");
            const res = await fetch(`http://localhost:5000/api/creative/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idea: newText })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to update idea');
            }

            const updatedItem = await res.json();
            setGallery(prevGallery => prevGallery.map(item =>
                item._id === id ? updatedItem : item
            ));
            setEditingId(null);
            setEditText("");

        } catch (error) {
            console.error("Error updating idea:", error);
            alert(error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            console.log("Deleting item with id:", id);
            const res = await fetch(`http://localhost:5000/api/creative/${id}`, {
                method: "DELETE",
                headers: {
                    contentType: "application/json"
                }
            });

            console.log("Delete response:", res.status);
            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                console.error("Error details:", errorData);
                throw new Error(errorData?.message || 'Failed to delete item');
            }

            await res.json();

            setGallery(prevGallery => prevGallery.filter(item => item._id !== id));
            alert('Item deleted successfully');
        } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete item");
        }
    };

    const navigate = useNavigate();

    //fetch existing gallery items
    useEffect(() => {
        fetch("http://localhost:5000/api/creative")
            .then(res => res.json())
            .then((data) => setGallery(data))
            .catch((error) => console.error(error));
    }, []);

    //handle text idea submission
    const handleSubmit = async () => {
        try {
            if (!idea.trim()) return alert("Please write something");
            const res = await fetch("http://localhost:5000/api/creative/idea", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idea })
            });

            if (!res.ok) {
                throw new Error('Failed to submit idea');
            }
            const newIdea = await res.json();
            setGallery([newIdea, ...gallery]);
            setIdea('');
        } catch (error) {
            console.error("Error submitting idea", error);
            alert("Failed to submit idea");
        }
    };

    //handle image upload
    const handleImageSubmit = async () => {
        try {
            if (!image) return alert("Please select an image");
            const formData = new FormData();
            formData.append("image", image);

            const res = await fetch("http://localhost:5000/api/creative/image", {
                method: "POST",
                body: formData
            });

            if (!res.ok) {
                throw new Error('Failed to upload image');
            }

            const newImage = await res.json();
            setGallery([newImage, ...gallery]);
            setImage(null);
        } catch (error) {
            console.error("Error uploading image", error);
            alert("Failed to upload image");
        }
    };
    const [currentSlide, setCurrentSlide] = useState(0);

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

                    {/* Right Content */}
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
                                <h1 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Welcome to your<br />Creative playground</h1>
                            </div>

                            <img
                                src={create}
                                alt="Dragon Mascot"
                                style={{
                                    width: '450px',
                                    height: 'auto',
                                    marginRight: '40px'
                                }} />
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
                            onChange={(e) => setIdea(e.target.value)}
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
                                alignSelf: 'center'
                            }} />

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            alignItems: 'center'
                        }}>
                            <button
                                className="submit-button"
                                onClick={handleSubmit}
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
                                    transition: 'all 0.3s ease',
                                    minWidth: '150px'
                                }}>
                                    Choose Image
                                    <input
                                        type="file"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        style={{ display: 'none' }}
                                        accept="image/*"
                                    />
                                </label>
                            ) : (
                                <button
                                    className="submit-button"
                                    onClick={handleImageSubmit}
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
                                    onClick={() => setImage(null)}
                                    style={{
                                        backgroundColor: '#36074A',
                                        marginLeft: '10px',
                                        background: 'none',
                                        border: 'none',
                                        color: '#36074A',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        textDecoration: 'none',
                                        borderRadius: '50%',
                                        width: '35px',
                                        height: '35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        padding: '0',
                                        lineHeight: '1'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
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
                    }}>YOUR GALLERY</h1>

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
                                {item.idea && editingId === item._id ? (
                                    <div style={{ marginBottom: '15px' }}>
                                        <textarea
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
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
                                                onClick={() => handleEdit(item._id, editText)}
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
                                                onClick={() => setEditingId(null)}
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
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
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
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>Delete</button>
                                        </div>
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