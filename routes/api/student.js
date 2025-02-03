const express = require('express');
const { getAll, createAll, editStu, deleteStu } = require('../../controller/api/student');

const router = express.Router();

router.get('/api/get',getAll);
router.post('/api/create',createAll);
router.put('/api/edit/:id',editStu);
router.delete('/api/delete/:id',deleteStu);



module.exports = router ;