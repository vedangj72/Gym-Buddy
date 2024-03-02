const express = require("express");
const mongooes = require("mongoose");
const router = express.Router();
const Workout = require("../Backend/schema/ourschema");
// const MyModel = require("../backend/config/db"); // Import the Mongoose model

router.get("/", async (req, res) => {
    try {
        const data = await Workout.find({}); // Fetch all documents from the "table1" collection
        res.json(data); // Send the data as a JSON response
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "An error occurred" });
    }
});
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: "An error occurred" });
    }

});
router.get('/:id', (req, res) => {
    const { id } = req.params;
});
router.delete('/:id', (req, res) => {
    res.json({ mssg: "the block is deleted" });

});
router.patch('/:id', (req, res) => {
    res.json({ mssg: "id updated" });

});
module.exports = router;