"use strict";

const fullName = "Lamees";
const age = 22;
const birthday = "September 7";
let detroitGC = true;

let lifeEvents = [
  "I was born in Cairo,Egypt",
  "I went to Wayne State",
  "I am going to front-end bootcamp",
  "I lived through a war",
];

if (detroitGC) {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i, lifeEvents.length; i++) {
  console.log(lifeEvents);
  break;
}

let counter = 0;

// let randomNumber = Math.floor(Math.random()) * 10 + 1;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5 It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
