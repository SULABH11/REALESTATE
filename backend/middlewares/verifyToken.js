const jwt=require("jsonwebtoken");
const verifyToken=(req,res,next)=>{
    if(!req.headers.authorization)
    return res.status(403).json({msg: "not authorized no token"});
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer "))
    {
        const token=req.headers.authprization.split(" ")[1];
        json.verify(token,process.env.JWT_SECRET,(err,data)=>{
            if(err)
            return res.status(403).json({msg: "Wrong or Expired token"});
            else
            {
                req.user=data;
                next();
            }
        })
    }
}
module.exports=verifyToken;