import React, { useEffect, useState } from 'react';
import './Home.css';  // Import the CSS file for styling

function Home() {
  const [text, setText] = useState('');
  const fullText = 'H i, I am Vivek Narayanan';  // The typewriter text
  const rotatingTexts = ['Software Developer', 'Travel Enthusiast', 'Gamer']; // Rotating texts
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Index to track the rotating text
  const [isTypewriterDone, setIsTypewriterDone] = useState(false); // Flag to check if typewriter effect is done

  // Function to generate stars dynamically
  const createStars = () => {
    const numStars = 750; // Adjust the number of stars
    let stars = [];
    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 3 + 'px'; // Random size
      const top = Math.random() * 100 + 'vh'; // Random vertical position
      const left = Math.random() * 100 + 'vw'; // Random horizontal position
      const delay = Math.random() * 2 + 's'; // Random animation delay
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            width: size,
            height: size,
            top: top,
            left: left,
            animationDelay: delay,
          }}
        ></div>
      );
    }
    return stars;
  };

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
  }, [isTypewriterDone]);

  return (
    <div className="home-page">
      <div className="stars">
        {createStars()} {/* Generate stars dynamically */}
      </div>
      <h1>
        <span className="typewriter-box">
          <span className="typewriter-effect" style={{ animationDuration: `${fullText.length * 0.2}s` }}>
            {text}
          </span>
          {isTypewriterDone && (
            <span className="rotating-text">{rotatingTexts[currentTextIndex]}</span>
          )}
        </span>
      </h1>
    </div>
  );
}

export default Home;
