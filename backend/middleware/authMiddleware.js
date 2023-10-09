import JWT from 'jsonwebtoken';

//protecting route using token
export const requireSignIn = async (req,res,next) =>{
    try {
        //token = req.headers.authorization
        const decode = await JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"Need to login first",
            error
        });
    }
};