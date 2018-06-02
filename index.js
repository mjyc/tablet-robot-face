/** Blinking **/
[...document.getElementsByClassName('eye')].map((eye) => {
  eye.animate([
    // keyframes
    {transform: 'rotateX(0deg)', offset: 0.0},
    {transform: 'rotateX(90deg)', offset: 0.05},
    {transform: 'rotateX(0deg)', offset: 0.1},
    {transform: 'rotateX(0deg)', offset: 1.0},
  ], {
    // timing options
    duration: 3000,
    iterations: Infinity,
  });
});

/** Sad **/
// [...document.getElementsByClassName('eyelid')].map((eyelid) => {
//   if ([...eyelid.classList].indexOf("lower") >= 0) {
//     return;
//   }

//   const transYDir = '-';
//   const rotDir = ([...eyelid.parentElement.classList].indexOf("left") >= 0) ? '-' : '';

//   eyelid.animate([
//     // keyframes
//     {transform: `translateY(0) rotate(0)`, offset: 0.0},
//     {transform: `translateY(50px) rotate(${rotDir}20deg)`, offset: 0.2},
//     {transform: `translateY(50px) rotate(${rotDir}20deg)`, offset: 1.0},
//   ], {
//     // timing options
//     duration: 5000,
//     iterations: Infinity
//   });
// });

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
