const ws = new WebSocket("ws://localhost:8001");
ws.onopen = () => {
  console.log("Connected to server");
  const sendButton = document.querySelector(".send__button");
  sendButton.addEventListener("click", (event) => sendMessage());
};
ws.onmessage = (event) => {
  console.log("message from server");
  const chat = document.querySelector(".chat");
  chat.innerHTML =
    chat.innerHTML + `<li class="server__message">Server:${event.data}</li>`;
  console.log(event.data);
};

const sendMessage = () => {
  const input = document.querySelector(".message");
  const chat = document.querySelector(".chat");
  chat.innerHTML =
    chat.innerHTML + `<li class="client__message">Me: ${input.value}</li>`;
  ws.send(input.value);
};
