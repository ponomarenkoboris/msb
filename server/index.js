const app = require('express')();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server start work on port: ${PORT}`);
});