import {z} from "zod"

function validate(schema){
return function(req,res,next){
    try {
       const validated=schema.parse(req.body);
        req.body=validated;
        next();
    } catch (error) {
        if(error instanceof z.ZodError){
            const parsedErrorMessage= JSON.parse(error.message);
            const errors=parsedErrorMessage.map((err)=>({
                filed:err.path.join("-"),
                message:err.message
            }))

            res.status(400).json({
                error:true,
                message:"Zod validation failed",
                errors:errors
            }) 
        }

        res.status(500).json({
            error:true,
            message:"Internal server error"
        })
    }
}
}

export {validate};