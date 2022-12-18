function sayHello() {
  console.log("hello world");
  console.log("hallo wereld");
  console.log("hola mundo");
  console.log("안녕 세상");
}

function getGreeting() {
  ["helloworld", "안녕세상", "hallo wereld", "hola mundo"];
}

const o = {};
o.f = getGreeting;
o.f();
