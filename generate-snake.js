const fs = require('fs');
const fetch = require('node-fetch');

async function generateSnake(username) {
    const response = await fetch(`https://github.com/users/${username}/contributions`);
    const html = await response.text();
    const pattern = /data-date="(\d{4}-\d{2}-\d{2})"/g;
    const dates = [];
    let match;

    while ((match = pattern.exec(html)) !== null) {
        dates.push(match[1]);
    }

    const snake = dates.map(date => {
        const [year, month, day] = date.split('-');
        return `${day}${month}${year.slice(2)}`;
    }).join(',');

    fs.writeFileSync('github-contribution-grid-snake.svg', `<svg>${snake}</svg>`);
}

generateSnake('LEILAFARIAS-DVL');
