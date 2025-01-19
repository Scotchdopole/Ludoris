import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createGame } from "../../model/games";

type FormDataType = {
    name?: string;
    desc?: string;
    platforms?: string[];
    developer?: string;
    publisher?: string;
    genres?: string[];
    gameModes?: string[];
    engine?: string;
    coverImgPath?: string;
    ytbTrailerLink?: string;
};

export default function CreateGameForm() {
    const [formData, setFormData] = useState<FormDataType>({});
    const [info, setInfo] = useState<string | undefined>();
    const navigate = useNavigate();

    const postForm = async () => {
        console.log("Form Data:", formData);
        const data = await createGame(formData);
        if (data.status === 201) {
            navigate(`/created-game/${data.payload._id}`);
        } else {
            setInfo(data.message);
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => {
            if (type === "checkbox") {
                if (name === "platforms") {
                    const platforms = prev.platforms || [];
                    return {
                        ...prev,
                        platforms: checked
                            ? [...platforms, value]
                            : platforms.filter((platform) => platform !== value),
                    };
                } else if (name === "genres") {
                    const genres = prev.genres || [];
                    return {
                        ...prev,
                        genres: checked
                            ? [...genres, value]
                            : genres.filter((genre) => genre !== value),
                    };
                }
            }

            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleButton = (e: React.FormEvent) => {
        e.preventDefault();
        postForm();
    };

    return (
        <>
            <div className="main">
                <h1>Create new game</h1>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        required
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        name="desc"
                        placeholder="Enter description"
                        required
                        onChange={handleInput}
                    />
                            <input
                                type="checkbox"
                                id="Playstation"
                                name="platforms"
                                value="Playstation"
                                onChange={handleInput}
                            />
                            <label htmlFor="Playstation">Playstation</label>

                            <input
                                type="checkbox"
                                id="Xbox"
                                name="platforms"
                                value="Xbox"
                                onChange={handleInput}
                            />
                            <label htmlFor="Xbox">Xbox</label>

                            <input
                                type="checkbox"
                                id="Windows"
                                name="platforms"
                                value="Windows"
                                onChange={handleInput}
                            />
                            <label htmlFor="Windows">Windows</label>

                            <input
                                type="checkbox"
                                id="Windows"
                                name="platforms"
                                value="Windows"
                                onChange={handleInput}
                            />
                            <label htmlFor="Windows">Windows</label>

                            <input
                                type="checkbox"
                                id="Linux"
                                name="platforms"
                                value="Linux"
                                onChange={handleInput}
                            />
                            <label htmlFor="Linux">Linux</label>

                            <input
                                type="checkbox"
                                id="MacOS"
                                name="platforms"
                                value="MacOS"
                                onChange={handleInput}
                            />
                            <label htmlFor="MacOS">MacOS</label>
                            
                            <input
                                type="checkbox"
                                id="Nintendo_Switch"
                                name="platforms"
                                value="Nintendo Switch"
                                onChange={handleInput}
                            />
                            <label htmlFor="Nintendo_Switch">Nintendo Switch</label>

                            <input
                                type="checkbox"
                                id="Nintendo_DS"
                                name="platforms"
                                value="Nintendo DS"
                                onChange={handleInput}
                            />
                            <label htmlFor="Nintendo_DS">Nintendo DS</label>

                    <input
                        type="text"
                        name="developer"
                        placeholder="Enter developer"
                        required
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        name="publisher"
                        placeholder="Enter publisher"
                        required
                        onChange={handleInput}
                    />
                    <input
                        type="checkbox"
                        id="racing"
                        name="genres"
                        value="racing"
                        onChange={handleInput}
                    />
                    <label htmlFor="racing">Racing</label>
                    <input
                        type="checkbox"
                        id="singleplayer"
                        name="gameModes"
                        value="singleplayer"
                        onChange={handleInput}
                    />
                    <label htmlFor="singleplayer">Singleplayer</label>
                    <input
                        type="text"
                        name="engine"
                        placeholder="Enter engine"
                        required
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        name="coverImgPath"
                        placeholder="Enter path for cover image"
                        required
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        name="ytbTrailerLink"
                        placeholder="Enter YouTube trailer link"
                        required
                        onChange={handleInput}
                    />
                    <button onClick={handleButton}>Submit</button>
                </form>
                {info && <p>{info}</p>}
                <Link to={"/"}>
                    <p>Go back</p>
                </Link>
            </div>
        </>
    );
}

