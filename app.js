const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('And now I stare at the abyss, but not even the abyss would stare back at me.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
