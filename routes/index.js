const express = require('express');
// import  express  from 'express';
const router = express.Router();

router.get('/', (req, res) => {
 //res.send('index');
 res.render('index');
})

// export default router;
module.exports = router;