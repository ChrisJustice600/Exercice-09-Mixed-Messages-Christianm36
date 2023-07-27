// fugd

function returnMessage () {
   const messages = [
    "bonjour",
    "hello",
    "tres gentille",
    "justice",
    "buzz"
   ];

   return messages[Math.floor(Math.random() * messages.length)];
};

const message = returnMessage();
console.log(message)