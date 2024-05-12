"use server"
import { hash , compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import UserModel from '@/models/User';
import connectToDB from "@/config/db";
import { cookies } from "next/headers";




// create hash-password

const hashPassword = async (password)=>{
    const hashedPassword = await hash(password ,12);
    return hashedPassword;
}

// create verify password 

const verifyPassword = async(password , hashedPassword)=>{
    const isValid = await compare(password , hashedPassword)
    return isValid;
};


// create AccessToken 

const generateAccessToken = (data) =>{
    const token = sign({...data}, process.env.ACCESS_TOKEN_SCT,{
        expiresIn : "60d",
    });
    return token
}

// create Verify AccessToken 

const verifyAccessToken = (token) =>{
    try{
        const tokenPayload = verify(token , process.env.ACCESS_TOKEN_SCT);
        return tokenPayload;

    } catch(err){
        console.log("Verify Access Token Error -->" , err);
        return false
    }
}

// create RefreshToken

const generateRefreshToken = (data) =>{
    const token = sign({...data} , process.env.REFRESH_TOKEN_SCT, {
        expiresIn: "15d"
    });
    return token
}

// validation Email 
const validationEmail = (email)=>{
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return pattern.test(email)
}

// validation password

const validationPassword = (password)=>{
    const pattern =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    return pattern.test(password)
}


// auth user


const authUser = async ()=>{
    connectToDB();
    const token = cookies().get("token");
    let user = null;
    if(token){
        const tokenPayload = verifyAccessToken(token.value);
        if(tokenPayload){
            user = await UserModel.findOne({email: tokenPayload.email});
        }
    }
    return user;
}

export {
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    validationEmail,
    validationPassword,
    authUser,
}