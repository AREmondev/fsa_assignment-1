const express = require('express');
const routers = require('./routes');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', routers);


app.listen(4000, () => {
        console.log('Server is running on port 4000');
    }
);