import { Server } from "socket.io";
try {
const io = new Server(3006, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
      }
});

io.on("connect", (socket) => {
   
    setInterval(() =>{
        socket.emit("hi", new Date());
    }, 1000);
 
            
   
    
});

// httpServer.listen(3006);

}catch (error) {
    console.log(error)
}