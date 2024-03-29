const fs = require('fs');

function generateSnake() {
    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
        <circle id="head" cx="200" cy="200" r="10" fill="red">
            <animate attributeName="cx" from="200" to="250" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle id="segment1" cx="190" cy="200" r="10" fill="green">
            <animate attributeName="cx" from="190" to="200" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle id="segment2" cx="180" cy="200" r="10" fill="green">
            <animate attributeName="cx" from="180" to="190" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle id="segment3" cx="170" cy="200" r="10" fill="green">
            <animate attributeName="cx" from="170" to="180" dur="2s" repeatCount="indefinite" />
        </circle>
    </svg>
    `;
    
    fs.writeFileSync('snake.svg', svgContent);
}

generateSnake();
