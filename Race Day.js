let raceNumber = Math.floor(Math.random() * 1000);

let isRegister = true;

let runnerAge = 32;

if (runnerAge > 18 && isRegister === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && isRegister === true) {
  console.log(`You will be racing at 9:30 am and this is your race number ${raceNumber}`);
} else if (runnerAge > 18 && isRegister === false) {
  console.log(`You will be racing at 11:00 am and this is your race number ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will be racing at 12:30 pm and this is your race number ${raceNumber}`)
}