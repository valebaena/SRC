const {Router} = require('express');
const router = Router();

const {
    index,
} = require('../controllers/indexController');

router.get('/', index);


module.exports = router;