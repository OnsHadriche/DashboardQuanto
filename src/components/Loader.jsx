import { useEffect, useState } from 'react';
import '../assets/css/Loader.css';

function Loader() {
    const [text, setText] = useState('');

    useEffect(() => {
        const textToShow = 'QuantoTrade.';
        let index = 0;
        const interval = setInterval(() => {
            setText(textToShow.slice(0, index + 1)); // Update text with characters up to current index
            index++;

            if (index >= textToShow.length) {
                clearInterval(interval); // Stop the interval when all characters are displayed
            }
        }, 50); // Adjust the speed of the animation here

        // Cleanup function to clear interval on component unmount or when fully displayed
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    useEffect(() => {
        console.log('Text state:', text); // Log the current state of text
    }, [text]); // Log text whenever it changes

    return <div className="loader">{text}</div>;
}

export default Loader;
