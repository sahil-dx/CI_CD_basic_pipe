const express = require('express');

const app = expresss();

app.get('', (req, res) => {
    res.send('Bawa Good Morning From Express JS')
})

app.listen(5000, () => {
    console.log("Server is running on port no 5000");
});
