
import connect from "@/dbcon/connection";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

connect();

export async function POST(request: NextRequest) {

    try {
        const bodyData = await request.json();
        const { username, email, password } = bodyData;
        // return NextResponse.json({
        //     "message": bodyData,
        //     "status": 200,
        //     "url": process.env.MONGO_URL
        // })

        // let user = await User.findOne({ email });
        // if (user) {
        //     return NextResponse.json({ "message": "user is already exist", "status": 400 })
        // }

        // //hash password
        // const salt = await bcrypt.genSalt(10);
        // const genPassword = await bcrypt.hash(password, salt);

        // const addData = new User({
        //     name: username,
        //     email: email,
        //     passsword: genPassword
        // })

        // const savedUser = await addData.save();
        // console.log(savedUser);
        // return NextResponse.json({
        //     "message": "user is saved successfully!",
        //     "status": 201
        // })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}