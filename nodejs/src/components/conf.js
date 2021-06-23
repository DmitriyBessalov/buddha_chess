export let backend = "buddhachess.org"
export let frontend = "buddhachess.org"
export let web_protocol = "https://"
export let ws_protocol = "wss://"

if (window.location.host !== "buddhachess.org") {
  backend = "localhost:8000"
  frontend = "localhost:3000"
  web_protocol = "http://"
  ws_protocol = "ws://"
}