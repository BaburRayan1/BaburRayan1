"use server"
import PostModel from "@/models/postmodel"
import connectDB from "@/config/database"

export async function getPosts(){
    try{
        await connectDB();
        return {msg: "GET"}
    }catch (error){
      return {errMsg: error.message}
    }
}