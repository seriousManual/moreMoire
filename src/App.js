import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
          <g fillRule="evenodd" fill="red">
            <path d={
              `
              M10 10h800v800h-800z
              ${getCircleDefinition(20, 20, 10)}
              ${getCircleDefinition(120, 120, 100)}
              ${getCircleDefinition(400, 400, 200)}
              `
            }/>
          </g>
        </svg>

      </div>
    );
  }
}

export default App;

function getCircleDefinition(x, y, r) {
  return `
    M ${x} ${y}
    m -${r}, 0
    a ${r}, ${r} 0 1, 1 ${r * 2}, 0
    a ${r}, ${r} 0 1, 1 ${r * -2}, 0
  `
}