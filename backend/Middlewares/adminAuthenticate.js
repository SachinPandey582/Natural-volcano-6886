const adminAuthenticate=(req,res,next)=>{
    const {role,pass}=req.query
    if(role=="admin"&&pass==8765){
    next()
    }else{
        res.send({msg:"You are Not Admin"})
    }
}

module.exports={adminAuthenticate}