import express from "express"
let routes = express()

routes.use('/', (req, res) => {
    res.json({message: 'Welcome to the API'})
});

export default routes