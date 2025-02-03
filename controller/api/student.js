const { getAll, createStu, editStu, deleteStu } = require("../../resource/student");

exports.getAll = async (req, res) => {
    try {
        await getAll(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.createAll = async (req, res) => {
    try {
        await createStu(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.editStu = async (req, res) => {
    try {
        await editStu(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.deleteStu = async (req, res) => {
    try {
        await deleteStu(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}