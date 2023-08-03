function returnMessage () {
   const messages = [
    "bonjour",
    "hello",
    "tres gentille",
    "justice",
    "buzz",
    "elon musk",
    "sorry",
    "lajoie"
   ];

   return messages[Math.floor(Math.random() * messages.length)];
};

console.log("hello man")

// console
const message = returnMessage();
console.log(message)