const express = require('express');
const router = express.Router();
const { Firestore } = require('@google-cloud/firestore');

const firestore = new Firestore({
    projectId: process.env.FIREBASE_PROJECT_ID,
    keyFilename: './firebase-key.json'
});

router.post('/', async (req, res) => {
    const { username, result } = req.body;

    try {
        const docRef = await firestore.collection('game_results').add({
            username,
            result,
            timestamp: new Date()
        });
        res.status(200).json({ message: 'تم حفظ النتيجة بنجاح', id: docRef.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
