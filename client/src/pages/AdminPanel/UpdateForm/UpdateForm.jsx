import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CreateForm/Form.css';
import { Link } from 'react-router-dom'

export default function GameUpdateForm() {
    const [games, setGames] = useState([]);
    const [selectedGameId, setSelectedGameId] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        releaseDate: "",
        ytbTrailerLink: "",
        desc: "",
        engineIds: [],
        developers: [{ name: '' }],
        genreIds: [],
        platformIds: [],
        perspectiveIds: [],
        gameModesIds: [],
        publishers: [{ name: '' }],
    });
    const [image, setImage] = useState(null);
    const [engines, setEngines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listLoading, setListLoading] = useState(false);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [currentImageUrl, setCurrentImageUrl] = useState('');

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

    // Fetch the list of games
    useEffect(() => {
        const fetchGames = async () => {
            setListLoading(true);
            setMessage('');
            try {
                const { data } = await axios.get('http://localhost:3000/api/games');
                setGames(data || []);
            } catch (error) {
                console.error('Error fetching games list:', error);
                setMessage('Failed to load games list.');
            } finally {
                setListLoading(false);
            }
        };
        fetchGames();
    }, []);

    useEffect(() => {
        if (!selectedGameId) {
            setFormData({
                name: "", price: "", releaseDate: "", ytbTrailerLink: "", desc: "",
                engineIds: [], developers: [{ name: '' }], genreIds: [], platformIds: [],
                perspectiveIds: [], gameModesIds: [], publishers: [{ name: '' }],
            });
            setImage(null);
            setCurrentImageUrl('');
            setMessage('');
            if (document.getElementById('imageUpdate')) {
                document.getElementById('imageUpdate').value = '';
            }
            return;
        }

        const fetchGameDetails = async () => {
            setDetailsLoading(true);
            setMessage('');
            try {
                const { data } = await axios.get(`http://localhost:3000/api/games/${selectedGameId}`);
                const formattedDate = data.releaseDate ? new Date(data.releaseDate).toISOString().split('T')[0] : "";
                setFormData({
                    name: data.name || "",
                    price: data.price ?? "",
                    releaseDate: formattedDate,
                    ytbTrailerLink: data.ytbTrailerLink || "",
                    desc: data.desc || "",
                    engineIds: data.engineIds || [],
                    genreIds: data.genreIds || [],
                    platformIds: data.platformIds || [],
                    perspectiveIds: data.perspectiveIds || [],
                    gameModesIds: data.gameModesIds || [],
                    developers: (data.developers && data.developers.length > 0) ? data.developers : [{ name: '' }],
                    publishers: (data.publishers && data.publishers.length > 0) ? data.publishers : [{ name: '' }],
                });
                setCurrentImageUrl(data.imageUrl || '');
                setImage(null);
                if (document.getElementById('imageUpdate')) {
                    document.getElementById('imageUpdate').value = '';
                }

            } catch (error) {
                console.error('Error fetching game details:', error);
                setMessage(`Failed to load details for game ID ${selectedGameId}.`);
                setFormData({
                    name: "", price: "", releaseDate: "", ytbTrailerLink: "", desc: "",
                    engineIds: [], developers: [{ name: '' }], genreIds: [], platformIds: [],
                    perspectiveIds: [], gameModesIds: [], publishers: [{ name: '' }],
                });
                setCurrentImageUrl('');
            } finally {
                setDetailsLoading(false);
            }
        };

        fetchGameDetails();
    }, [selectedGameId]);


    const handleGameSelectChange = (e) => {
        setSelectedGameId(e.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEngineChange = (e) => {
        const engineId = e.target.value ? parseInt(e.target.value, 10) : null;
        setFormData({ ...formData, engineIds: engineId ? [engineId] : [] });
    };


    const handleMultiSelectChange = (e) => {
        const { name, options } = e.target;
        const selectedValues = Array.from(options)
            .filter(option => option.selected)
            .map(option => parseInt(option.value, 10));

        setFormData({ ...formData, [name]: selectedValues });
    };

    const handleDeveloperChange = (index, value) => {
        const updatedDevelopers = [...formData.developers];
        updatedDevelopers[index] = { name: value };
        setFormData({ ...formData, developers: updatedDevelopers });
    };

    const addDeveloperField = () => {
        setFormData({
            ...formData,
            developers: [...formData.developers, { name: '' }]
        });
    };

    const removeDeveloperField = (index) => {
        if (formData.developers.length <= 1) return;
        const updatedDevelopers = [...formData.developers];
        updatedDevelopers.splice(index, 1);
        setFormData({ ...formData, developers: updatedDevelopers });
    };

    const handlePublisherChange = (index, value) => {
        const updatedPublishers = [...formData.publishers];
        updatedPublishers[index] = { name: value };
        setFormData({ ...formData, publishers: updatedPublishers });
    };

    const addPublisherField = () => {
        setFormData({
            ...formData,
            publishers: [...formData.publishers, { name: '' }]
        });
    };

    const removePublisherField = (index) => {
        if (formData.publishers.length <= 1) return;
        const updatedPublishers = [...formData.publishers];
        updatedPublishers.splice(index, 1);
        setFormData({ ...formData, publishers: updatedPublishers });
    };


    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        } else {
            setImage(null);
        }
    };


    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!selectedGameId) {
            setMessage('Please select a game to update.');
            return;
        }
        setLoading(true);
        setMessage('');

        try {

            const gameDataToUpdate = {
                name: formData.name,
                price: formData.price === '' ? null : parseFloat(formData.price),
                releaseDate: formData.releaseDate || null,
                ytbTrailerLink: formData.ytbTrailerLink,
                desc: formData.desc,
                engineIds: formData.engineIds,
                developers: formData.developers.filter(dev => dev.name.trim() !== ''),
                genreIds: formData.genreIds,
                platformIds: formData.platformIds,
                perspectiveIds: formData.perspectiveIds,
                gameModesIds: formData.gameModesIds,
                publishers: formData.publishers.filter(pub => pub.name.trim() !== ''),
            };

            await axios.put(`http://localhost:3000/api/games/${selectedGameId}`, gameDataToUpdate, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (image) {
                const imageFormData = new FormData();
                imageFormData.append('image', image);


                await axios.put(
                    `http://localhost:3000/api/games/${selectedGameId}/uploadImage`,
                    imageFormData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );
            }

            setMessage(`Game '${formData.name}' updated successfully!`);
        } catch (error) {
            console.error('Error updating game:', error);
            setMessage(`Error: ${error.response?.data?.message || 'Failed to update game'}`);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!selectedGameId) {
            setMessage('Please select a game to delete.');
            return;
        }


        const gameIdInt = parseInt(selectedGameId, 10);
        const gameToDelete = games.find(g => g.id === gameIdInt);
        const gameNameToDelete = gameToDelete?.name || `ID ${selectedGameId}`;

        if (!window.confirm(`Are you sure you want to delete the game "${gameNameToDelete}"? This action cannot be undone.`)) {
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            await axios.delete(`http://localhost:3000/api/games/${selectedGameId}`);

            setMessage(`Game "${gameNameToDelete}" deleted successfully!`);
            setGames(prevGames => prevGames.filter(game => game.id !== gameIdInt));

            setSelectedGameId('');

        } catch (error) {
            console.error('Error deleting game:', error);
            setMessage(`Error: ${error.response?.data?.message || 'Failed to delete game'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Form-Body">
            <div className="Form-MainContainer">
            <Link to={"/admin"}><button className='Form-GoBack'> Go back </button></Link>
                <h2>Update Game Form</h2>

                <div className="FormGroup" style={{ marginBottom: '20px', paddingBottom: '20px' }}>
                    <label htmlFor="gameSelect">Select Game to Update</label>
                    <select
                        id="gameSelect"
                        value={selectedGameId}
                        onChange={handleGameSelectChange}
                        disabled={listLoading || detailsLoading}
                    >
                        <option value="">Select a Game</option>
                        {games.map(game => (
                            <option key={game.id} value={game.id}>
                                {game.name} (ID: {game.id})
                            </option>
                        ))}
                    </select>
                    {listLoading && <span style={{ marginLeft: '10px' }}>Loading games...</span>}
                </div>
                {message && <div className={`message ${message.startsWith('Error') ? 'error' : 'success'}`}>{message} <Link to={`/game/${selectedGameId}`}>Show</Link> </div>}


                {selectedGameId && detailsLoading ? (
                    <div style={{ textAlign: 'center', padding: '20px' }}>Loading game details...</div>
                ) : selectedGameId ? (
                    <form onSubmit={handleUpdate} className="Form-Form">
                        <div className="Form-Container">
                            <div className="FormGroup">
                                <label htmlFor="name">Game Title</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="FormGroup">
                                <label htmlFor="price">Price</label>
                                <input type="number" id="price" name="price" step="0.01" value={formData.price} onChange={handleChange} />
                            </div>
                            <div className="FormGroup">
                                <label htmlFor="releaseDate">Release Date</label>
                                <input type="date" id="releaseDate" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
                            </div>
                            <div className="FormGroup">
                                <label htmlFor="ytbTrailerLink">Youtube Trailer Link</label>
                                <input type="url" id="ytbTrailerLink" name="ytbTrailerLink" value={formData.ytbTrailerLink} onChange={handleChange} />
                            </div>

                            <div className="FormGroup">
                                <label htmlFor="imageUpdate">Game Cover Image (Upload new to replace)</label>
                                {currentImageUrl && !image && (
                                    <img src={currentImageUrl} alt="Current cover" style={{ maxWidth: '100px', display: 'block', marginBottom: '10px' }} />
                                )}
                                <input type="file" id="imageUpdate" name="image" onChange={handleImageChange} />
                                {image && <span>New image selected: {image.name}</span>}
                            </div>

                            <div className="FormGroup">
                                <label htmlFor="engineIds">Game Engine</label>
                                <select id="engineIds" name="engineIds" value={formData.engineIds[0] || ""} onChange={handleEngineChange}>
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
                                            <button type="button" className="remove-btn" onClick={() => removePublisherField(index)}>Remove</button>
                                        )}
                                    </div>
                                ))}
                                <button type="button" className="add-btn" onClick={addPublisherField}>Add Publisher</button>
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
                                            <button type="button" className="remove-btn" onClick={() => removeDeveloperField(index)}>Remove</button>
                                        )}
                                    </div>
                                ))}
                                <button type="button" className="add-btn" onClick={addDeveloperField}>Add Developer</button>
                            </div>
                            <br />

                            <div className="FormGroup">
                                <label htmlFor="desc">Game Description</label>
                                <textarea id="desc" name="desc" value={formData.desc} onChange={handleChange} rows="6" />
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="submit-btn" disabled={loading || detailsLoading}>
                                    {loading ? 'Updating...' : 'Update Game'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    disabled={loading || detailsLoading}
                                    style={{ marginLeft: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer', borderRadius: '4px' }}
                                >
                                    {loading ? 'Processing...' : 'Delete Game'}
                                </button>
                            </div>
                        </div>


                        <div className="Form-Container">
                            <div className="FormGroup">
                                <label htmlFor="genreIds">Select Genres</label>
                                <select id="genreIds" name="genreIds" multiple value={formData.genreIds} onChange={handleMultiSelectChange}>
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
                                <small>Hold Ctrl/Cmd to select multiple</small>
                            </div>
                            <div className="FormGroup">
                                <label htmlFor="platformIds">Select Platforms</label>
                                <select id="platformIds" name="platformIds" multiple value={formData.platformIds} onChange={handleMultiSelectChange}>
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
                                <small>Hold Ctrl/Cmd to select multiple</small>
                            </div>
                            <div className="FormGroup">
                                <label htmlFor="perspectiveIds">Select Perspectives</label>
                                <select id="perspectiveIds" name="perspectiveIds" multiple value={formData.perspectiveIds} onChange={handleMultiSelectChange}>
                                    <option value="1">First-Person</option>
                                    <option value="2">Third-Person</option>
                                    <option value="3">Isometric</option>
                                    <option value="4">Top-down</option>
                                    <option value="5">Side-scrolling</option>
                                    <option value="6">Fixed Camera</option>
                                </select>
                                <small>Hold Ctrl/Cmd to select multiple</small>
                            </div>
                            <div className="FormGroup">
                                <label htmlFor="gameModesIds">Select Game Modes</label>
                                <select id="gameModesIds" name="gameModesIds" multiple value={formData.gameModesIds} onChange={handleMultiSelectChange}>
                                    <option value="1">Singleplayer</option>
                                    <option value="2">Multiplayer</option>
                                    <option value="3">Online Co-Op</option>
                                    <option value="4">Co-Op</option>
                                    <option value="5">Sandbox</option>
                                    <option value="6">Split-Screen</option>
                                    <option value="7">LAN Multiplayer</option>
                                </select>
                                <small>Hold Ctrl/Cmd to select multiple</small>
                            </div>
                        </div>
                    </form>
                ) : (
                    !listLoading && <p style={{ textAlign: 'center', padding: '20px' }}>Please select a game from the dropdown above to update its details.</p>
                )}
            </div>
        </div>
    );
}