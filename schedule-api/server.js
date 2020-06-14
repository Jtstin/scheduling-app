const fs = require("fs");
const net = require("net");
const port = 3000;

// GET /api/cars => stored in file
// - 404 Not Found when file does not exist
// - 200 OK when file exist,
// GET /api/cars?registration=YWD560&year=2012 = filter
function getParams(queryString) {
  const paramTexts = queryString.split("&");
  let params = {};
  for (let index = 0; index < paramTexts.length; index++) {
    const paramParts = paramTexts[index].split("=");
    const name = paramParts[0];
    const value = paramParts[1];
    params[name] = value;
  }
  return params;
}

function parseHttpText(requestText) {
  const lines = requestText.split("\n");
  const firstLine = lines[0];
  const firstLineParts = firstLine.split(" ");
  const pathParts = firstLineParts[1].split("?");
  let queryString = "";
  let params = {};
  if (pathParts.length > 1) {
    queryString = pathParts[1];
    params = getParams(queryString);
  }
  const request = {
    method: firstLineParts[0],
    path: pathParts[0],
    queryString,
    params,
  };
  return request;
}

function getResponse(requestText) {
  const request = parseHttpText(requestText);
  console.log(request);
  if (request.method === "PUT" && request.path === "/api/tasks") {
    const tasksDataPath = "data/tasks.json";
    if (!fs.existsSync(tasksDataPath)) {
      return "HTTP/1.1 404 Not Found\r\nServer: Juzdin\r\nContent-Length: 0\r\n\r\n";
    }
    const dataString = fileContent.toString("utf-8");
    const json = JSON.parse(dataString);
    const jsonText = JSON.stringify(json);
    return `HTTP/1.1 200 OK\r\nServer:Juzdin\r\nAccess-Control-Allow-Method: *\r\nAccess-Control-Allow-Origin: *\r\nContent-Length:${jsonText.length}\r\nContent-Type: application/json\r\n\r\n${jsonText}`;
  } else if (request.method === "GET" && request.path === "/api/tasks") {
    const tasksDataPath = "data/tasks.json";
    if (!fs.existsSync(tasksDataPath)) {
      return "HTTP/1.1 404 Not Found\r\nServer: Juzdin\r\nContent-Length: 0\r\n\r\n";
    }
    const fileContent = fs.readFileSync(tasksDataPath);
    const dataString = fileContent.toString("utf-8");
    const json = JSON.parse(dataString);
    const jsonText = JSON.stringify(json);
    return `HTTP/1.1 200 OK\r\nServer:Juzdin\r\nAccess-Control-Allow-Origin: *\r\nContent-Length:${jsonText.length}\r\nContent-Type: application/json\r\n\r\n${jsonText}`;
  }
  return `HTTP/1.1 404 Not Found\r\nServer: Juzdin\r\nContent-Length: 0\r\n\r\n`;
}

const api = (socket) => {
  console.log("Connection Open");
  socket.on("data", (data) => {
    const requestText = data.toString("utf-8");
    console.log(`received ${requestText}`);
    const responseText = getResponse(requestText);
    socket.write(responseText);
  });
};
const server = net.createServer(api);
server.listen(port);
console.log(`listening to ${port}`);
