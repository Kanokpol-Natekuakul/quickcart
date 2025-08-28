import AddAddress from "@/models/Address";
import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const {userId}=getAuth(req)
    const {address}=await req.json()

    await connectDB()
    const newAddress=await AddAddress.create({...address,userId})

    return NextResponse.json({success:true,message:"Address add success",newAddress})
  } catch (error) {
    return NextResponse.json({success:false,message:error.message})
  }
}