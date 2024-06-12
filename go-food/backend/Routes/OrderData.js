const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        res.send([global.food_items, global.food_categories]); // Corrected from global.foodCategory to global.food_categories
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
