import { model, Schema, models } from "mongoose";

const postSchema = new Schema({
    title : String,
    description : String,
    image : String
})

const PostModel = models.post || model("post",postSchema);

console.log("one" +postSchema);
export default PostModel