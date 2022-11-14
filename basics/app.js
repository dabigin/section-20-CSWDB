// DEFINE FUNCTION
// DEFINE FUNCTIONS BEFORE CALLING THEM
// function singSong() {
//   console.log("DO");
//   console.log("RE");
//   console.log("MI");
// }
//  CALL FUNCTION
//
// singSong();

// Arguments Intro
// function greet(firstName) {
//   console.log(`Hey there, ${firstName}`);
// }

// Functions with multiple arguements
function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

greet("George", "Clooney");

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}
