import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "React or Vue?",
    answer1: "React",
    answer2: "Vue",
    votes1: 9,
    votes2: 15,
  },
  {
    id: 2,
    question: "Svelte or Vue?",
    answer1: "Svelte",
    answer2: "Vue",
    votes1: 23,
    votes2: 11,
  },
]);

export default PollStore;
