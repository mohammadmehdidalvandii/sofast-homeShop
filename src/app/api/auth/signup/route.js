import connectToDB from "@/config/db";
import UserModel from '@/models/User';
import { generateAccessToken , hashPassword } from "@/utils/auth";
import {roles} from '@/utils/contants'

export async function POST (req){
    connectToDB();
    const body = await req.json();
    const {name , email , password} =body;

    // validations 

    const  isUserExist = await UserModel.findOne({
        $or : [{name} , {email}  ]
    });

    if(isUserExist){
        return Response.json({message: "The username or email exist already !"}, {status: 422,});
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({name});

    const users = await UserModel.find({});

    await UserModel.create({
        name,
        email,
        password: hashedPassword,
        role : users.length > 0 ? roles.USER : roles.ADMIN
    });

    return Response.json({message:"User signed up Successfully "}, {status: 201, headers:{"Set-cookie":`toke=${accessToken};path=/;httpOnly=true`}})
}