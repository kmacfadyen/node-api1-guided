// import the server and start it!
const server = require('./api/server.js')

// Launch server
server.listen(9000, () => {
    console.log(`server started on http://localhost:9000`)
})
// Can be manually started by node index.js
// But we can make it update automatically

// Installing nodemon will do just that!
// Installed as a dev dependency (npm i -D nodemon)