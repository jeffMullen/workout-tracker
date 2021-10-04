const router = require('express').Router();

// Homepage
router.get('/'), (req, res) => res.sendFile(path.join(__dirname, '/public'));

module.exports = router;