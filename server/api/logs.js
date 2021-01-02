const { Router } = require('express');
const LogEntry = require('../models/LogEntry');

const router = Router();


router.get('/', async (req,res) => {
     try {
        const logs = await LogEntry.find();
        res.json(logs);
     } catch (error) {
         next(error)
     }
});

router.post('/', async (req,res,next) => {
    try {
        const log = new LogEntry(req.body);
        const result = await log.save();
        res.send(result);
    } catch (error) {
        if(error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
});


module.exports = router;