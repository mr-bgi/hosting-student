const { query } = require("../config/db.sql")

exports.getAll = async (req, res) => {
    try {
        const sql = "select * from student";
        const result = await query(sql);
        res.status(201).json({
            result: true,
            message: 'Get student successfully',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}
exports.createStu =  (req, res) => {
    try {
        const sql = "INSERT INTO `student`( `name`, `email`, `address`, `phone`) VALUES (?,?,?,?);";
        const {name,email,address,phone} = req.body;
        if(!name || !email || !address || !phone){
            return res.status(400).json({
                result:false,
                msg :'Require all value'
            })
        }
        const myArr = [name,email,address,phone];
        query(sql,myArr);

        res.status(201).json({
            result: true,
            message: 'Create student successfully',
            data: []
        });

    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}
exports.editStu =  (req, res) => {
    try {
        const id = req.params.id;
        const sql = "UPDATE `student` SET `name`=? ,`email`=?,`address`=?,`phone`=? WHERE `id`=?";
        const {name,email,address,phone} = req.body;

        if(!name || !email || !address || !phone){
            return res.status(400).json({
                result:false,
                msg :'Require all value'
            })
        }
        const myArr = [name,email,address,phone,id];
        query(sql,myArr);

        res.status(201).json({
            result: true,
            message: 'Update student successfully',
            data: []
        });

    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}
exports.deleteStu =  (req, res) => {
    try {
        const id = req.params.id;
        const sql = "delete from student where id = ?";
        query(sql,[id]);

        res.status(201).json({
            result: true,
            message: 'Delete  student successfully',
            data: []
        });

    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}