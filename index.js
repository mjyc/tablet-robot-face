class RobotEyes {
  // constructor() {

  // }

  _createKeyframes ({
    tgtTranYVal = 0,
    tgtRotVal = 0,
    enteredOffset = 1/3,
    exitingOffset = 2/3,
  } = {}) {
    return [
      {transform: `translateY(0px) rotate(0deg)`, offset: 0.0},
      {transform: `translateY(${tgtTranYVal}px) rotate(${tgtRotVal}deg)`, offset: enteredOffset},
      {transform: `translateY(${tgtTranYVal}px) rotate(${tgtRotVal}deg)`, offset: exitingOffset},
      {transform: `translateY(0px) rotate(0deg)`, offset: 1.0},
    ];
  }

  makeFacialExpression({
    type = '',
    durationMs = 2000,
    enterDurationMs = 500,
    exitDurationMs = 500,
  }) {
    switch(type) {
      case 'sad':
        const upperLeftEyelid = document.querySelector('.left .eyelid.upper');
        const upperRightEyelid = document.querySelector('.right .eyelid.upper');

        const options = {
          duration: durationMs,
        }
        upperLeftEyelid.animate(this._createKeyframes({
          tgtTranYVal: 80,
          tgtRotVal: -20,
          enteredOffset: enterDurationMs / durationMs,
          exitingOffset: 1 - (exitDurationMs / durationMs),
        }), options);
        upperRightEyelid.animate(this._createKeyframes({
          tgtTranYVal: 80,
          tgtRotVal: 20,
          enteredOffset: enterDurationMs / durationMs,
          exitingOffset: 1 - (exitDurationMs / durationMs),
        }), options);
        break;
      default:
        console.warn(`Invalid input type: ${type}`);
    }
  }

  happy() {
    console.log('implement happy');
  }

  // sad({
  //   durationMs = 2000,
  //   enterDurationMs = 500,
  //   exitDurationMs = 500,
  // } = {}) {

  // }

  focus() {
    const upperEyelids = [...document.querySelectorAll('.eyelid.upper')];
    const lowerEyelids = [...document.querySelectorAll('.eyelid.lower')];
    const options = {
      duration: 2000,
      iterations: 1,
    }
    upperEyelids.map(eyelid => {
      eyelid.animate(this._createKeyframes({tgtTranYVal: 50}), options);
    });
    lowerEyelids.map(eyelid => {
      eyelid.animate(this._createKeyframes({tgtTranYVal: -50}), options);
    });
  }

  angry() {
    console.log('implement happy');
      // if ([...eyelid.classList].indexOf("lower") >= 0) {
      //   return;
      // }

      // const transYDir = '-';
      // const rotDir = ([...eyelid.parentElement.classList].indexOf("left") >= 0) ? '' : '-';

      // eyelid.animate([
      //   // keyframes
      //   {transform: `translateY(0) rotate(0)`, offset: 0.0},
      //   {transform: `translateY(50px) rotate(${rotDir}30deg)`, offset: 0.2},
      //   {transform: `translateY(50px) rotate(${rotDir}30deg)`, offset: 1.0},
      // ], {
      //   // timing options
      //   duration: 5000,
      //   iterations: Infinity
      // });
  }

  confuse() {
    console.log('confuse');
  }

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
