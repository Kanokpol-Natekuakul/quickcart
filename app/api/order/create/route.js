import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { err } from "inngest/types";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const {userId}=getAuth(req)

    const{address,items}=await req.json()

    if(!address||items.length===0){
      return NextResponse.json({success:false,message:'Invaild data'})
    }

    const amount=await items.reduce(async(acc,item)=>{
      const product=await Product.findById(item.product)
      return await acc+product.offerPrice * item.quantity
    },0)

    await inngest.send({
      name:'order/created',
      data:{
        userId,
        address,
        items,
        amount:amount+Math.floor(amount*0.02),
        date:Date.now()
      }
    })

    const user=await user.findById(userId)
    user.cartItems={}
    await user.save()

    return NextResponse.json({success:true,message:'Order Placed'})
  } catch (error) {
    console.log(error)
    return NextResponse.json({success:false,message:err.message})
  }
}