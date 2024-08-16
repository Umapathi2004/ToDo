const {Router} = require("express");
const router = Router();

router.get("/",(req,res)=>{
   res.json({Message:"Hi I am Umapathi...."});
})

module.exports=router;