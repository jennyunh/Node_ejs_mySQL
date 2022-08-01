const db = require('../data/database')

const express = require('express');

const router = express.Router();


//root route
router.get('/', function (req, res) {
res.redirect('/posts')
});


//posts route
router.get('/posts', function (req, res) {
    //don't need the .ejs part. Express knows to look for ejs file already.
    res.render('posts-list');
});

router.get('/new-post', async function (req, res){
    //this is an async operation: cuz it takes a bit of time to 
    //fetch the data from remote server with the database 
    //(this case tho everything is in local machine)
   //await says wait for the response of the query
    //response to query format looks like:
    // [[the fetched data], [meta data]   ]
    // destructuring by pulling out first item of array (the fetched data)
    // then storing it in an 'authors' const.
   const [authors] = await db.query('SELECT * from authors');


    //mysql2 automatically listens for promise to resolve and continues after it does.
    res.render('create-post', {  authors: authors });
})

module.exports = router