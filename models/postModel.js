import { model, Schema, models } from "mongoose";

const postSchema = new Schema({
    title : String,
    description : String,
    image : String,
    created_at : String
},{ toJSON : { virtuals : true}});

postSchema.virtual("short_desc").get(function() {
    return this.description.substr(0,50) + "..."
})

postSchema.virtual("date").get(function(){
    return dateFormat(this.created_at)
})

function dateFormat(dataString){
    const date = new Date(dataString)
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return monthArray[date.getMonth()]+" "+ date.getDate()+" ,"+ date.getFullYear()
}

const PostModel = models.post || model("post",postSchema);

export default PostModel