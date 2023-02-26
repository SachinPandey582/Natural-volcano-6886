import React, { useState } from 'react';

const NumberGraph = (payload) => {
    const {num1,num2,num3}=payload
  const [numbers, setNumbers] = useState([num1,num2,num3,20,39,45,67,87,90,34]);
  const maxNumber = Math.max(...numbers); // Get the maximum number to use as the scale
  const barHeight = 400; // Set the height of each bar
  const barWidth = 80; // Set the width of each bar
  const barMargin = 10; // Set the margin between each bar
  const graphWidth = (barWidth + barMargin) * numbers.length; // Calculate the total width of the graph

  return (
    <div className="number-graph">
      <svg width={graphWidth} height={barHeight + 20}> {/* Add 20px to the height to accommodate the labels */}
        {numbers.map((number, index) => {
          const barX = index * (barWidth + barMargin); // Calculate the x-position of the bar
          const barHeightScaled = (number / maxNumber) * barHeight; // Scale the bar height to fit within the graph
          return (
            <g key={index}>
              <rect x={barX} y={barHeight - barHeightScaled} width={barWidth} height={barHeightScaled} fill="#FCA5A5" /> {/* Use a red color for the bar */}
              <text x={barX + barWidth / 2} y={barHeight + 15} textAnchor="middle">{`Product ${index + 1}`}</text> {/* Add labels below each bar */}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default NumberGraph;
