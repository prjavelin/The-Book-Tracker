const router = require('express').Router();
const axios = require('axios');

//brought this from the git of the book app and am now working on how to connect it to the actual app Im working on now


router.get('/searchAll/:keyword/:startindex', (req, res)=> {
    axios.get("https://www.googleapis.com/books/v1/volumes", { params: {  q: req.params.keyword, maxResults: 10, startIndex: parseInt(req.params.startindex)}}).then(({ data }) => {
        res.status(200).send({data: data.items, total:data.totalItems});
    }).catch(err => res.status(err.response.status).send('Error'));
});
 
