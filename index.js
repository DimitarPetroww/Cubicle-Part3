const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];

async function init() {
    const app = require('express')();
    require('./config/express')(app);
    await require("./config/db")(app)
    
    require('./config/routes')(app);

    app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
}
init()

