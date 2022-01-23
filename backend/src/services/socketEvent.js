

let users = [];
exports.users

const addUser = (userId, chatId, isGroup, socketId) => {
  if(users.some(user => user.userId === userId)) {
   users= users.filter(u=>u.userId!=userId);
   console.log(users,userId)
   users.push({ userId, chatId, isGroup, socketId });

  }else{
    users.push({ userId, chatId, isGroup, socketId });

  }
};

const removeUser = socketId => {
  users = users.filter(user => user.socketId !== socketId);
};

const getUser = (sender, reciver) => {

  let list = users.filter(u=>u.userId!=sender).filter(e=>e.chatId==reciver)
 return list
};


  



exports.load_chat = function(socket,io){
//when ceonnect
  console.log("a user connected.");

  // //take userId and socketId from user
  // socket.on("addUser", data => {
  //   addUser(data.userId, data.chatId, data.isGroup, socket.id);
  //   io.emit("getUsers", users);
  // });

  // //send and get message
  // socket.on(
  //   "sendMessage",
  //   ({ senderId, receiverId, isGroup, text, name, picture }) => {
  //     const user = getUser(senderId,receiverId);

  //     if (user && user.length>0) {
  //       for (let i = 0; i < user.length; i++) {
  //         const u = user[i];
  //         io.to(u.socketId).emit("getMessage", {
  //           senderId,
  //           text,
  //           name,
  //           picture
  //         });
  //       }
       
  //     } else {
  //     }
  //   }
  // );

  // //when disconnect
  // socket.on("disconnect", () => {
  //   console.log("a user disconnected!");
  //   removeUser(socket.id);
  //   io.emit("getUsers", users);
  // });
 
};



exports.load_common_event = function(socket,io){

    socket.on("join_room", function(room){
        console.log("joining socket to ",room)
        socket.join(room);
    })
  socket.on("PostEmoticon", function(res){
  socket.to(res.aulaId).emit('GetEmoticon',res.emoji);

    }) 
};
exports.load_common_event_vivo = function(socket){

    socket.on("GetQuestion",async function(room){
       
    })
  socket.on("PostEmoticon", function(res){
  socket.broadcast.emit('GetEmoticon',res.emoji);

    }) 
};

