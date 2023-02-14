const { Router } = require('express');

const router = Router();

router.get('/', (req, res)=>{
    const data = {
        "name": "Orlando",
        "Es?": "Puto"

    };
    res.json({data});

});




module.exports = router;