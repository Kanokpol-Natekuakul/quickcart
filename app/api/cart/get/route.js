import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(req) {
  try{
    const {userId}=getAuth(req)

    await connectDB()
    const user=await user.findbyId(userId)

    const {cartitems}=user

    return NextResponse.json({success:true,cartitems})
  }catch(error){
    return NextResponse.json({success:false,message:error.message})
  }
}