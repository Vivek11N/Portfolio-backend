import React, { useEffect, useState } from 'react';
import './Home.css';  // Import the CSS file for styling

function Home() {
  const [text, setText] = useState('');
  const fullText = 'H i, I am Vivek Narayanan';  // The typewriter text
  const rotatingTexts = ['Soft Developer', 'Travel Enthusiast', 'Gamer']; // Rotating texts
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Index to track the rotating text
  const [isTypewriterDone, setIsTypewriterDone] = useState(false); // Flag to check if typewriter effect is done

  useEffect(() => {
    // Typewriter effect for the main text
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTypewriterDone(true); // Mark typewriter effect as done
      }
    }, 200);

    return () => clearInterval(interval); // Clean up interval
  }, []);

  useEffect(() => {
    // Start rotating texts only after typewriter effect finishes
    if (isTypewriterDone) {
      const rotationInterval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length); // Cycle through the texts
      }, 3000); // Change text every 3 seconds

      return () => clearInterval(rotationInterval); // Clean up interval
    }
  }, [isTypewriterDone]); // Only start rotating text after typewriter effect is done

  return (
    <div className="home-page">
      <h1>
        <span className="typewriter-box">
          <span className="typewriter-effect" style={{animationDuration: `${fullText.length * 0.2}s`}}>{text}</span>
          {/* Display rotating text inside the same box after the typewriter effect is complete */}
          {isTypewriterDone && (
            <span className="rotating-text">{rotatingTexts[currentTextIndex]}</span>
          )}
        </span>
      </h1>
    </div>
  );
}

export default Home;
