//k3n5c0d3

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(begin = "go to the office") {
    return `This Monday, I will ${begin}.`
};

function wrapAdjective(adjective = "*") {
    return function(message) {
        return`You are ${adjective}${message}${adjective}!`
    };
}





// Class Work

// function razzle() {
//   console.log("You've been razzled!");
// }
// razzle();

// function razzle(lawyer = "Billy", target = "'em") {
//     console.log(`${lawyer} razzle-dazzles ${target}!`);
//   }
// //  razzle()
// razzle("Methuselah", "T'challah");

// function saturdayFun(){
//     console.log("This Saturday, I want to ....!")
// }

// function() {
//     console.log("Yet more razzling");
//   }

//   const button = document.getElementById("button");
//   button.addEventListener("click", function () {
//     console.log("Yet more razzling");
//   });

// const fn = function () {
//     console.log("Yet more razzling");
//   };
// fn;

// (function (baseNumber) {
//     return baseNumber + 3;
//   })(2);


// function outer(greeting, msg = "It's a fine day to learn") {
//     // 2
//     const innerFunction = function (name, lang = "Python") {
//       // 3
//       return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     };
//     return innerFunction("student", "JavaScript"); // 5
    
//   }
  
//   outer("Hello");

// function outer(greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
//   }