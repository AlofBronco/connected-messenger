const room = "ROOM";

export default defineWebSocketHandler({
  open(peer) {
    console.log("Opened WS", peer);
    peer.subscribe(room);
    peer.publish(room, "Another user joined the chat");
  },
  close(peer) {
    console.log("Closed WS", peer);
  },
  error(peer, error) {
    console.log("Error on WS", peer, error);
  },
  message(peer, message) {
    console.log("Message on WS", peer, message);
    peer.publish(room, message.text());
  },
});
