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
    // level = 3,  // 1: min, 5: max  // TODO: implement this feature
    durationMs = 1000,
    enterDurationMs = 75,
    exitDurationMs = 75,
  }) {
    const options = {
      duration: durationMs,
    }
    const upperLeftEyelid = document.querySelector('.left .eyelid.upper');
    const upperRightEyelid = document.querySelector('.right .eyelid.upper');
    const lowerLeftEyelid = document.querySelector('.left .eyelid.lower');
    const lowerRightEyelid = document.querySelector('.right .eyelid.lower');
    switch(type) {
      case 'happy':
        lowerLeftEyelid.animate(this._createKeyframes({
          tgtTranYVal: -120,
          tgtRotVal: 30,
          enteredOffset: enterDurationMs / durationMs,
          exitingOffset: 1 - (exitDurationMs / durationMs),
        }), options);
        lowerRightEyelid.animate(this._createKeyframes({
          tgtTranYVal: -120,
          tgtRotVal: -30,
          enteredOffset: enterDurationMs / durationMs,
          exitingOffset: 1 - (exitDurationMs / durationMs),
        }), options);
        break;

      case 'sad':
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

      case 'mad':
        upperLeftEyelid.animate(this._createKeyframes({
          tgtTranYVal: 50,
          tgtRotVal: 30,
          enteredOffset: enterDurationMs / durationMs,
          exitingOffset: 1 - (exitDurationMs / durationMs),
        }), options);
        upperRightEyelid.animate(this._createKeyframes({
          tgtTranYVal: 50,
          tgtRotVal: -30,
          enteredOffset: enterDurationMs / durationMs,
          exitingOffset: 1 - (exitDurationMs / durationMs),
        }), options);
        break;

      case 'focused':
        [upperLeftEyelid, upperRightEyelid].map(eyelid => {
          eyelid.animate(this._createKeyframes({
            tgtTranYVal: 60,
            enteredOffset: enterDurationMs / durationMs,
            exitingOffset: 1 - (exitDurationMs / durationMs),
          }), options);
        });
        [lowerLeftEyelid, lowerRightEyelid].map(eyelid => {
          eyelid.animate(this._createKeyframes({
            tgtTranYVal: -60,
            enteredOffset: enterDurationMs / durationMs,
            exitingOffset: 1 - (exitDurationMs / durationMs),
          }), options);
        });
        break;

      case 'confused':
        [upperRightEyelid].map(eyelid => {
          eyelid.animate(this._createKeyframes({
            tgtTranYVal: 60,
            tgtRotVal: -10,
            enteredOffset: enterDurationMs / durationMs,
            exitingOffset: 1 - (exitDurationMs / durationMs),
          }), options);
        });
        break;

      default:
        console.warn(`Invalid input type: ${type}`);
    }
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
