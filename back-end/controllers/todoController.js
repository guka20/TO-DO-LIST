const connect = require('../config/db')
const Controllers = {
  getAllTodo:(req, res) => {
    connect.query('SELECT * FROM todo',(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
  },
  addNewTodo: (req, res) => {
    const query = "INSERT INTO todo (Name) VALUES (?)"
    connect.query(query,[req.body.name],(err,result)=>{
        if(err)throw err
        res.json({message:"Added Successfully"});
    })
  },
  updateTodo: (req, res) => {
    const query = "UPDATE todo SET Name = (?) WHERE id = (?)"
    const { name } = req.body;
    const { id } = req.params;
    connect.query(query,[name,id],(err,result)=>{ 
        if(err) throw err
        if(result.affectedRows===0){
            return res.status(400).json({message:"There is no data on this id"})
        }
        res.json({message:"Updated Successfully"})
    })
  },
  deleteTodo: (req, res) => {
    const query = "DELETE FROM todo WHERE id = (?)";
    const {id} = req.params;
    connect.query(query,[id],(err,result)=>{
        if(err)throw err
        if(result.affectedRows===0){
            return res.status(400).json({message:"There is no data on this id"})
        }
        res.json({message:"Deleted successfully"})
    })
  },
};

module.exports = Controllers