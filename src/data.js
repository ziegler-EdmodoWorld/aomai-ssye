import { v4 as uuidv4 } from "uuid";
import pic from'./assets/covers/pic.jpeg';
import m1 from './assets/songs/m1.m4a'
import m2 from './assets/songs/m2.mp3'
function chillHop() {
  return [
    {
      name: "萱草花 - 演唱",
      cover: pic,
      artist: "声声乐耳",
      audio: m1,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
      tip: "演唱"
    },
    {
      name: "萱草花 - 伴奏",
      cover: pic,
      artist: "声声乐耳",
      audio: m2,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
      tip: "伴奏"
    },
  ];
}

export default chillHop;
