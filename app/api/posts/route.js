import { NextURL } from "next/dist/server/web/next-url"
import PostModel from "../../../models/postModel"
import connectMongo from "../../../utils/connectMongo"
import { title } from "process"

export async function GET(req){
    const query = req.nextUrl.searchParams.get("q")
    let postData;

    try{
        if(query){
            await connectMongo()
            postData = await PostModel.find({
                $or : [ 
                    {title : new RegExp(query, "i")},
                    {description : new RegExp(query, "i")}
                ]
            })
        }else{
            await connectMongo()
            postData = await PostModel.find({})
        }
            return Response.json(postData)
    }catch(error){
        return Response.json({message : error.message})
    }
}