import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateForm.css';

export default function GameForm() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        releaseDate: "",
        ytbTrailerLink: "",
        desc: "",
        engineIds: [],
        developers: [{ name: '' }],
        genreIds: [],
        platformsIds: [],
        perspectiveIds: [],
        gameModesIds: [],
        publishers: [{ name: '' }],
    });
    const [image, setImage] = useState(null);
    const [engines, setEngines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch all engines from engines endpoint
    useEffect(() => {
        const fetchEngines = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/api/games/engines');
                setEngines(data);
            } catch (error) {
                console.error('Error fetching engines:', error);
                setMessage('Failed to load engine options');
            }
        };

        fetchEngines();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEngineChange = (e) => {
        const engineId = parseInt(e.target.value, 10);
        setFormData({ ...formData, engineIds: engineId ? [engineId] : [] });
    };

    // Handle multi-select changes
    const handleMultiSelectChange = (e) => {
        const { name, options } = e.target;
        const selectedValues = Array.from(options)
            .filter(option => option.selected)
            .map(option => parseInt(option.value));
    
        setFormData({ ...formData, [name]: selectedValues });
    };

    // Handle developer input changes
    const handleDeveloperChange = (index, value) => {
        const updatedDevelopers = [...formData.developers];
        updatedDevelopers[index] = { name: value };
        setFormData({ ...formData, developers: updatedDevelopers });
    };

    // Add new developer field
    const addDeveloperField = () => {
        setFormData({
            ...formData,
            developers: [...formData.developers, { name: '' }]
        });
    };

    // Remove developer field
    const removeDeveloperField = (index) => {
        const updatedDevelopers = [...formData.developers];
        updatedDevelopers.splice(index, 1);
        setFormData({ ...formData, developers: updatedDevelopers });
    };


     // Handle publihser input changes
     const handlePublisherChange = (index, value) => {
        const updatedPublishers = [...formData.publishers];
        updatedPublishers[index] = { name: value };
        setFormData({ ...formData, publishers: updatedPublishers });
    };

    // Add new developer field
    const addPublisherField = () => {
        setFormData({
            ...formData,
            publishers: [...formData.publishers, { name: '' }]
        });
    };

    // Remove developer field
    const removePublisherField = (index) => {
        const updatedPublishers = [...formData.publishers];
        updatedPublishers.splice(index, 1);
        setFormData({ ...formData, publishers: updatedPublishers });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // Step 1: Create the game with JSON data (without image)
            const gameData = {
                name: formData.name,
                price: formData.price,
                releaseDate: formData.releaseDate,
                ytbTrailerLink: formData.ytbTrailerLink,
                desc: formData.desc,
                engineIds: formData.engineIds,
                developers: formData.developers,
                genreIds: formData.genreIds,
                platformsIds: formData.platformsIds,
                perspectiveIds: formData.perspectiveIds,
                gameModesIds: formData.gameModesIds,
                publishers: formData.publishers,
            };

            const response = await axios.post('http://localhost:3000/api/games/createGame', gameData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const createdGameId = response.data.id;

            // Step 2: If there's an image, upload it with a PUT request
            if (image) {
                const imageFormData = new FormData();
                imageFormData.append('image', image);

                await axios.put(
                    `http://localhost:3000/api/games/${createdGameId}/uploadImage`,
                    imageFormData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );
            }

            setMessage('Game created successfully!');
            setFormData({
                name: "",
                price: "",
                releaseDate: "",
                ytbTrailerLink: "",
                desc: "",
                engineIds: [],
                developers: [{ name: '' }],
                genreIds: [],
                platformsIds: [],
                perspectiveIds: [],
                gameModesIds: [],
                publishers: [{ name: '' }],
            });
            setImage(null);

            // Reset file input
            document.getElementById('image').value = '';

        } catch (error) {
            console.error('Error creating game:', error);
            setMessage(`Error: ${error.response?.data?.message || 'Failed to create game'}`);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="CreateForm-Body">
            <div className="CreateForm-MainContainer">
                <h2>Create Form</h2>
            <form onSubmit={handleSubmit} className='CreateForm-Form'>
            <div className="CreateForm-Container">
                {message && <div className="message">{message}</div>}

                <div className="CreateForm-FormGroup">
                    <label htmlFor="name">Game Title</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        step="0.01"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="releaseDate">Release date</label>
                    <input
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        value={formData.releaseDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="ytbTrailerLink">Youtube trailer link</label>
                    <input
                        type="url"
                        id="ytbTrailerLink"
                        name="ytbTrailerLink"
                        value={formData.ytbTrailerLink}
                        onChange={handleChange}
                    />
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="image">Game Cover Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                    />
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="engineIds">Game Engine</label>
                    <select
                        id="engineIds"
                        name="engineIds"
                        value={formData.engineIds[0] || ""}
                        onChange={handleEngineChange}
                    >
                        <option value="">Select an engine</option>
                        {engines.map(engine => (
                            <option key={engine.id} value={engine.id}>
                                {engine.name}
                            </option>
                        ))}
                    </select>
                </div>
                <br />

                <div className="form-group">
                    <label>Publishers</label>
                    
                    {formData.publishers.map((pub, index) => (
                        <div key={index} className="dynamic-input-group">
                            <input
                                type="text"
                                value={pub.name}
                                onChange={(e) => handlePublisherChange(index, e.target.value)}
                                placeholder="Publisher name"
                                required
                            />
                            {formData.publishers.length > 1 && (
                                <button
                                    type="button"
                                    className="remove-btn"
                                    onClick={() => removePublisherField(index)}
                                >
                                    Remove
                                </button>
                                
                            )}
                        </div>
                    ))}
                   
                    <button
                        type="button"
                        className="add-btn"
                        onClick={addPublisherField}
                    >
                        Add Publisher
                    </button>
                </div>
                <br />
                <div className="form-group">
                    <label>Developers</label>
                    {formData.developers.map((dev, index) => (
                        <div key={index} className="dynamic-input-group">
                            <input
                                type="text"
                                value={dev.name}
                                onChange={(e) => handleDeveloperChange(index, e.target.value)}
                                placeholder="Developer name"
                                required
                            />
                            {formData.developers.length > 1 && (
                                <button
                                    type="button"
                                    className="remove-btn"
                                    onClick={() => removeDeveloperField(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className="add-btn"
                        onClick={addDeveloperField}
                    >
                        Add Developer
                    </button>
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="desc">Game description</label>
                    <textarea
                        id="desc"
                        name="desc"
                        value={formData.desc}
                        onChange={handleChange}
                        rows="6"
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Creating...' : 'Create Game'}
                    </button>
                </div>
                </div>
                <div className="CreateForm-Container">
                <div className="CreateForm-FormGroup">
                    <label htmlFor="genreIds">Select Genres</label>
                    <select
                        id="genreIds"
                        name="genreIds"
                        multiple
                        value={formData.genreIds}
                        onChange={handleMultiSelectChange}
                    >
                        <option value="1">Shooter</option>
                        <option value="2">Platformer</option>
                        <option value="3">Hack and Slash</option>
                        <option value="4">Battle Royale</option>
                        <option value="5">RPG</option>
                        <option value="6">Strategy</option>
                        <option value="7">Simulator</option>
                        <option value="8">Racing</option>
                        <option value="9">Survival</option>
                        <option value="10">Adventure</option>
                        <option value="11">Sport</option>
                        <option value="12">Party</option>
                        <option value="13">Fighting</option>
                    </select>
                    <small>Hold Ctrl to select multiple</small>
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="platformsIds">Select Platforms</label>
                    <select
                        id="platformsIds"
                        name="platformsIds"
                        multiple
                        value={formData.platformsIds}
                        onChange={handleMultiSelectChange}
                    >
                        <option value="1">Windows</option>
                        <option value="2">Linux</option>
                        <option value="3">macOS</option>
                        <option value="4">Playstation</option>
                        <option value="5">Xbox</option>
                        <option value="6">Nintendo</option>
                        <option value="7">Android</option>
                        <option value="8">iOS</option>
                        <option value="9">Oculus</option>
                    </select>
                    <small>Hold Ctrl to select multiple</small>
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="perspectiveIds">Select Perspectives</label>
                    <select
                        id="perspectiveIds"
                        name="perspectiveIds"
                        multiple
                        value={formData.perspectiveIds}
                        onChange={handleMultiSelectChange}
                    >
                        <option value="1">First-Person</option>
                        <option value="2">Third-Person</option>
                        <option value="3">Isometric</option>
                        <option value="4">Top-down</option>
                        <option value="5">Side-scrolling</option>
                        <option value="6">Fixed Camera</option>
                    </select>
                    <small>Hold Ctrl to select multiple</small>
                </div>

                <div className="CreateForm-FormGroup">
                    <label htmlFor="gameModesIds">Select game modes</label>
                    <select
                        id="gameModesIds"
                        name="gameModesIds"
                        multiple
                        value={formData.gameModesIds}
                        onChange={handleMultiSelectChange}
                    >
                        <option value="1">Singleplayer</option>
                        <option value="2">Multiplayer</option>
                        <option value="3">Online Co-Op</option>
                        <option value="4">Co-Op</option>
                        <option value="5">Sandbox</option>
                        <option value="6">Split-Screen</option>
                        <option value="6">LAN Multiplayer</option>
                    </select>
                    <small>Hold Ctrl to select multiple</small>
                </div>
                </div>
            </form>
            </div>
        </div>
    );
}
