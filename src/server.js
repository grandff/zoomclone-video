import express from "express";
import SocketIo from "socket.io";
import http from "http";

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req,res) => res.render("home"));	// home pug로 렌더 처리
app.get("/*", (req,res) => res.redirect("/"));	// 다른 url 안쓰고 홈만 쓰도록 처리

const handleListen = () => console.log(`Localhost on 3000`);
const httpServer = http.createServer(app);		// express application으로부터 서버 생성
const wsServer = SocketIo(httpServer);	// socket io server 생성

wsServer.on("connection", socket => {
    
})

app.listen(3000, handleListen);