import React, { useState } from "react";
import "./Mines.css";

export default function Mines() {
  const [grid, setGrid] = useState(Array(25).fill(false)); // false means square visible, true means star visible
  const [signalCount, setSignalCount] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const getStarCount = (signalCount) => {
    switch (signalCount) {
      case 1:
        return 10;
      case 3:
        return 5;
      case 5:
        return 4;
      case 7:
        return 3;
      default:
        return 0;
    }
  };

  const handleGetSignal = () => {
    if (isAnimating) return; // Prevent triggering while animation is ongoing

    // Reset the grid to default state
    setGrid(Array(25).fill(false));

    // Generate random indices for stars
    const randomIndices = [];
    const starCount = getStarCount(signalCount);

    while (randomIndices.length < starCount) {
      const randomIndex = Math.floor(Math.random() * 25);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    setIsAnimating(true);

    // Show stars sequentially with a delay
    randomIndices.forEach((index, i) => {
      setTimeout(() => {
        setGrid((prevGrid) => {
          const updatedGrid = [...prevGrid];
          updatedGrid[index] = true; // true means a star is shown
          return updatedGrid;
        });

        if (i === randomIndices.length - 1) {
          setIsAnimating(false); // End animation after the last star appears
        }
      }, i * 500); // 0.3 seconds interval
    });
  };

  const handleSignalChange = (change) => {
    const allowedValues = [1, 3, 5, 7];
    setSignalCount((prevCount) => {
      const newCount = prevCount + change;
      return allowedValues.includes(newCount) ? newCount : prevCount;
    });
  };

  return (
    <div className="app">
      <div className="grid-wrapper">
        <div className="grid">
          {grid.map((isStar, index) => (
            <div
              key={index}
              className="grid-item"
              style={{
                backgroundColor: isStar ? "transparent" : "teal",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                transform: isStar ? "scale(1.2)" : "scale(1)",
                fontSize: isStar ? "2rem" : "1rem", // Increase star size
              }}
            >
              {isStar ? "⭐" : ""}
            </div>
          ))}
        </div>
      </div>
      <div
        className="controls"
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button
          onClick={() => handleSignalChange(-2)}
          disabled={signalCount === 1 || isAnimating}
          style={{
            padding: "10px 20px",
            fontSize: "1.5rem",
            borderRadius: "10px",
            backgroundColor: "#186060",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          {signalCount}
        </span>
        <button
          onClick={() => handleSignalChange(2)}
          disabled={signalCount === 7 || isAnimating}
          style={{
            padding: "10px 20px",
            fontSize: "1.5rem",
            borderRadius: "10px",
            backgroundColor: "#186060",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
      <button
        className="get-signal"
        onClick={handleGetSignal}
        disabled={isAnimating}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          fontSize: "1.5rem",
          borderRadius: "10px",
          backgroundColor: "teal",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        GET SIGNAL
      </button>
    </div>
  );
}
