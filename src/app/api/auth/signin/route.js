import connectToDB from "@/config/db";
import UserModel from '@/models/User';
import { generateAccessToken , generateRefreshToken , verifyPassword } from "@/utils/auth";

export async function POST (req){
    try{
        connectToDB();
        const body = await req.json();
        const {email , password} = body;

        // validations

        const user = await UserModel.find({email});
        if(!user){
            return Response.json({message:"User Not Found"}, {status:422});
        };

        const isCorrectPassword = verifyPassword(password , user.password);
        if(!isCorrectPassword){
            return Response.json(
                {message: "Email or Password is IS NOT CORRECT"},
                {status: 401},
            );
        }

        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});

        await UserModel.findOneAndUpdate(
            {email},
            {$set:{refreshToken}}
        );

        return Response.json(
            {message: "User Logged in Successfully"},
            {
                status: 201,
                headers:{
                    "Set-cookie": `token${accessToken};path=/,httpOnly=true`
                }
            }
        )

    } catch (err){
        console.log("Error ==> ==> ", err);
        return Response.json({message:"Error =>=>" ,err}, {status:500})
    }
}