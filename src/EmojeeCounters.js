import React, { useState, useEffect } from 'react';
import Love from './Love.png';
import Sad from './Sad.png';
import Like from './Like.png';
import PropTypes from 'prop-types';

function EmojeeCounter(props) {
    const [pic, setPic] = useState(Love);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (props.pic === 'Love') setPic(Love);
        else if (props.pic === 'Like') setPic(Like);
        else if (props.pic === 'Sad') setPic(Sad);
    }, [props.pic]);

    const ClickHandle = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <p>
                {props.pic} <span></span>
                <button onClick={ClickHandle}>
                    {count}
                    <img src={pic} alt={props.pic} />
                </button>
            </p>
        </div>
    );
}

EmojeeCounter.defaultProps = {
    pic: 'Love',
};

EmojeeCounter.propTypes = {
    pic: PropTypes.oneOf(['Love', 'Sad', 'Like']).isRequired,
};

export default EmojeeCounter;
