import items from "./items.json";

export default function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
}