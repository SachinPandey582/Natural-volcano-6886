const adminAuthenticate=(req,res,next)=>{
    const {role}=req.query
    if(role=="admin"){
        console.log(role)
    next()
    }else{
        res.send("role Not found")
    }
}

module.exports={adminAuthenticate}