class RobotEyes {
  // constructor() {

  // }

  // sad() {

  //   // const targetRotVal = 20;

  // const offset2 = 500 / durationMs ;
  // document.querySelector('.left .eyelid.upper').animate([
  //   {transform: `translateY(0px) rotate(0)`, offset: 0.0},
  //   {transform: `translateY(80px) rotate(-20deg)`, offset: 0.1},
  //   {transform: `translateY(80px) rotate(-20deg)`, offset: 0.9},
  //   {transform: `translateY(0px) rotate(0deg)`, offset: 1.0},
  // ], {
  //   duration: 2000,
  //   iterations: 1,
  // });
  // document.querySelector('.right .eyelid.upper').animate([
  //   {transform: `translateY(0) rotate(0)`, offset: 0.0},
  //   {transform: `translateY(80px) rotate(20deg)`, offset: 0.1},
  //   {transform: `translateY(80px) rotate(20deg)`, offset: 0.9},
  //   {transform: `translateY(0px) rotate(0deg)`, offset: 1.0},
  // ], {
  //   duration: 2000,
  //   iterations: 1,
  // });
  // [...document.querySelectorAll('.eye')].map(eye => eye.animate([
  //   {transform: `translateY(0px)`, offset: 0.0},
  //   {transform: `translateY(20px)`, offset: 0.1},
  //   {transform: `translateY(20px)`, offset: 0.9},
  //   {transform: `translateY(0px)`, offset: 1.0},
  // ], {
  //   duration: 2000,
  //   iterations: 1,
  // }));
  // }

  // makeFacialExpression() {

  // }

  blink({
    duration = 150,  // in ms
  } = {}) {
    return [...document.getElementsByClassName('eye')].map((eye) => {
      eye.animate([
        {transform: 'rotateX(0deg)'},
        {transform: 'rotateX(90deg)'},
        {transform: 'rotateX(0deg)'},
      ], {
        duration,
        iterations: 1,
      });
    });
  }
}

const robotEyes = new RobotEyes();

// Blink

let blinkHandle = null;

const startBlinking = (maxIntervalMs = 5000) => {
  const blinkRandomly = (timeoutMs) => {
    blinkHandle = setTimeout(() => {
      robotEyes.blink();
      blinkRandomly(Math.random() * maxIntervalMs);
    }, timeoutMs);
  }
  blinkRandomly(Math.random() * maxIntervalMs);
};

const stopBlinking = () => {
  clearTimeout(blinkHandle);
}

/** Sad **/

// const blinkRandomly = (level, durationMs) => {
//   // () => {

//   // }
//   const getKeyframes = (maxTransY, maxRot, offsetInPct, offsetOutPct) => {
//     // throw error if duration is too short
//   };

//   const offset2 = 500 / durationMs ;
//   document.querySelector('.left .eyelid.upper').animate([
//     {transform: `translateY(0px) rotate(0)`, offset: 0.0},
//     {transform: `translateY(80px) rotate(-20deg)`, offset: 0.1},
//     {transform: `translateY(80px) rotate(-20deg)`, offset: 0.9},
//     {transform: `translateY(0px) rotate(0deg)`, offset: 1.0},
//   ], {
//     duration: 2000,
//     iterations: 1,
//   });
//   document.querySelector('.right .eyelid.upper').animate([
//     {transform: `translateY(0) rotate(0)`, offset: 0.0},
//     {transform: `translateY(80px) rotate(20deg)`, offset: 0.1},
//     {transform: `translateY(80px) rotate(20deg)`, offset: 0.9},
//     {transform: `translateY(0px) rotate(0deg)`, offset: 1.0},
//   ], {
//     duration: 2000,
//     iterations: 1,
//   });
//   [...document.querySelectorAll('.eye')].map(eye => eye.animate([
//     {transform: `translateY(0px)`, offset: 0.0},
//     {transform: `translateY(20px)`, offset: 0.1},
//     {transform: `translateY(20px)`, offset: 0.9},
//     {transform: `translateY(0px)`, offset: 1.0},
//   ], {
//     duration: 2000,
//     iterations: 1,
//   }));
// }

/** Focus **/
// [...document.getElementsByClassName('eyelid')].map((eyelid) => {
//   console.log(eyelid);

//   const transYDir = ([...eyelid.classList].indexOf("lower") >= 0) ? '-' : '';
//   const rotDir = '';

//   eyelid.animate([
//     // keyframes
//     {transform: `translateY(0) rotate(0)`, offset: 0.0},
//     {transform: `translateY(${transYDir}50px) rotate(${rotDir}0deg)`, offset: 0.2},
//     {transform: `translateY(${transYDir}50px) rotate(${rotDir}0deg)`, offset: 1.0},
//   ], {
//     // timing options
//     duration: 5000,
//     iterations: Infinity
//   });
// });

/** Angry **/
// [...document.getElementsByClassName('eyelid')].map((eyelid) => {
//   if ([...eyelid.classList].indexOf("lower") >= 0) {
//     return;
//   }

//   const transYDir = '-';
//   const rotDir = ([...eyelid.parentElement.classList].indexOf("left") >= 0) ? '' : '-';

//   eyelid.animate([
//     // keyframes
//     {transform: `translateY(0) rotate(0)`, offset: 0.0},
//     {transform: `translateY(50px) rotate(${rotDir}30deg)`, offset: 0.2},
//     {transform: `translateY(50px) rotate(${rotDir}30deg)`, offset: 1.0},
//   ], {
//     // timing options
//     duration: 5000,
//     iterations: Infinity
//   });
// });


// /** Angry **/
// [...document.getElementsByClassName('eyelid')].map((eyelid) => {
//   if ([...eyelid.classList].indexOf("upper") >= 0) {
//     return;
//   }

//   const rotDir = ([...eyelid.parentElement.classList].indexOf("left") >= 0) ? '' : '-';

//   eyelid.animate([
//     // keyframes
//     {transform: `translateY(0) rotate(0)`, offset: 0.0},
//     {transform: `translateY(-50px) rotate(${rotDir}30deg)`, offset: 0.2},
//     {transform: `translateY(-50px) rotate(${rotDir}30deg)`, offset: 1.0},
//   ], {
//     // timing options
//     duration: 5000,
//     iterations: Infinity
//   });
// });
