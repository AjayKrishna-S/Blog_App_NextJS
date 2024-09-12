import connectMongo from "@/utils/connectMongo"
import EnquiryModel from "@/models/enquiryModel"
 
 export async function POST(req){
    try{
      const {name, email, message} = await req.json()
      const enquiry = {name, email, message}
      console.log(enquiry);
      
      await connectMongo()
      await EnquiryModel.create(enquiry)
       return Response.json({message : "Enquirey has been sent successfully"})
      
    }catch(error){
      return Response.json({ message : error._message})
    }
 } 