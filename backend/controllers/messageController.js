import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";


export const sendMessage = async (req, res) => {
try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const {message} = req.body;
    
//who are the particpation in chat sender and reciever using conversation model .findone method
    let gotConversation = await Conversation.findOne({
        participants:{$all : [senderId, receiverId]},
    });

    //create conversation store sender and reciever id ye sara model me jake dekne hai kya kya dalna hai

    if(!gotConversation){
        gotConversation = await Conversation.create({
            participants:[senderId, receiverId]
        })
    };


    //yaha bhi model me jake dekahna hai kya dalna hai
    const newMessage = await Message.create({
        senderId,
        receiverId,
        message
    });
    if(newMessage){
        gotConversation.messages.push(newMessage._id);
    };

    await gotConversation.save();

    return res.status(201).json({
        message: "message send successfully"
    })
    

} catch (error) {
    console.log(error);
}
}
export const getMessage = async (req,res) => {
try {
    const receiverId = req.params.id;
    const senderId = req.id;
    const conversation = await Conversation.findOne({
        participants:{$all : [senderId, receiverId]}
    }).populate("messages"); 
    return res.status(200).json(conversation?.messages);
} catch (error) {
    console.log(error);
}
}