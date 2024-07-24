import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dataStorage from "../main/constants/data.js";

let app = express();
let port = 3000;

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

let rootFilePath = "../main";

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, rootFilePath)));

app.get("/view/*", (req, res) => {
  let filePath = path.join(__dirname, `${rootFilePath}/view`, req.path);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.log("view js 파일을 제공하는 도중 에러가 발생했습니다:", err);
      res.status(404).send("파일을 찾을 수 없습니다.");
    }
  });
});

// 모든 요청을 받아들이고 해당 파일 제공
app.get("/", (req, res) => {
  let filePath = path.join(__dirname, rootFilePath, req.path);

  // 기본 파일로 index.html 설정
  if (req.path === "/") {
    filePath = path.join(__dirname, `${rootFilePath}/index.html`);
  }

  res.sendFile(filePath, (err) => {
    if (err) {
      console.log("파일을 제공하는 도중 에러가 발생했습니다:", err);
      res.status(404).send("파일을 찾을 수 없습니다.");
    }
  });
});

app.get("/article/:key", (req, res) => {
  let filePath = path.join(rootFilePath);
  if (req.params.key) {
    filePath = path.join(__dirname, `${rootFilePath}/index.html`);
  }

  res.sendFile(filePath, (err) => {
    if (err) {
      console.log("아티클 파일을 제공하는 도중 에러가 발생했습니다:", err);
      res.status(404).send("파일을 찾을 수 없습니다.");
    }
  });
});

app.get("/article/assets/icon.svg", (req, res) => {
  let filePath = path.join(__dirname, "../main/assets/icon.svg");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.log("아티클 이미지을 제공하는 도중 에러가 발생했습니다:", err);
      res.status(404).send("파일을 찾을 수 없습니다.");
    }
  });
});

app.get("/article/css/main.css", (req, res) => {
  let filePath = path.join(__dirname, "../main/css/main.css");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.log("아티클 이미지을 제공하는 도중 에러가 발생했습니다:", err);
      res.status(404).send("파일을 찾을 수 없습니다.");
    }
  });
});

app.get("/article/css/header.css", (req, res) => {
  let filePath = path.join(__dirname, "../main/css/header.css");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.log("아티클 이미지을 제공하는 도중 에러가 발생했습니다:", err);
      res.status(404).send("파일을 찾을 수 없습니다.");
    }
  });
});

// app.get("*", (req, res) => {
//   let filePath = path.join(__dirname, "../main/index.js");
//   res.sendFile(filePath, (err) => {
//     if (err) {
//       console.log("js 를 제공하지 못 했습니다");
//       res.status(404).send("파일을 찾을 수 없습니다");
//     }
//   });
// });

app.listen(port, () => {
  console.log(`${port}번 서버에서 대기중입니다!`);
});
