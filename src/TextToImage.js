import React, { useState } from 'react';
import Happy from './Happy.png';
import Like from './Like.png';
import Sad from './Sad.png';

function TextToImage() {
    const [input, setInput] = useState('');
    const [image, setImage] = useState('');

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setInput(value);

        if (value === 'happy') setImage(Happy);
        else if (value === 'like') setImage(Like);
        else if (value === 'sad') setImage(Sad);
        else setImage('');
    };

    return (
        <div className="App">
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Type emotion (e.g., Happy, Like, Sad)"
            />
            <div>
                {image && <img src={image} alt={input} />}
            </div>
        </div>
    );
}

export default TextToImage;
