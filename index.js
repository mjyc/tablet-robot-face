const logger = console;

class EyesController {
  constructor({
    leftEye,
    rightEye,
    upperLeftEyelid,
    upperRightEyelid,
    lowerLeftEyelid,
    lowerRightEyelid,
  } = {}) {
    this._leftEye = leftEye;
    this._rightEye = rightEye;
    this._upperLeftEyelid = upperLeftEyelid;
    this._upperRightEyelid = upperRightEyelid;
    this._lowerLeftEyelid = lowerLeftEyelid;
    this._lowerRightEyelid = lowerRightEyelid;

    this._blinkTimeoutID = null;
  }

  // TODO: create setElements

  _createKeyframes ({
    tgtTranYVal = 0,
    tgtRotVal = 0,
    enteredOffset = 1/3,
    exitingOffset = 2/3,
  } = {}) {
    return [
      {transform: `translateY(0px) rotate(0deg)`, offset: 0.0},
      {transform: `translateY(${tgtTranYVal}vh) rotate(${tgtRotVal}deg)`, offset: enteredOffset},
      {transform: `translateY(${tgtTranYVal}vh) rotate(${tgtRotVal}deg)`, offset: exitingOffset},
      {transform: `translateY(0px) rotate(0deg)`, offset: 1.0},
    ];
  }

  express({
    type = '',
    // level = 3,  // 1: min, 5: max
    duration = 1000,
    enterDuration = 75,
    exitDuration = 75,
  }) {
    const options = {
      duration: duration,
    }

    switch(type) {
      // TODO: store outputs of "animate"
      case 'happy':
        this._lowerLeftEyelid.animate(this._createKeyframes({
          tgtTranYVal: -20,
          tgtRotVal: 30,
          enteredOffset: enterDuration / duration,
          exitingOffset: 1 - (exitDuration / duration),
        }), options);
        this._lowerRightEyelid.animate(this._createKeyframes({
          tgtTranYVal: -20,
          tgtRotVal: -30,
          enteredOffset: enterDuration / duration,
          exitingOffset: 1 - (exitDuration / duration),
        }), options);
        break;

      case 'sad':
        this._upperLeftEyelid.animate(this._createKeyframes({
          tgtTranYVal: 13.33,
          tgtRotVal: -20,
          enteredOffset: enterDuration / duration,
          exitingOffset: 1 - (exitDuration / duration),
        }), options);
        this._upperRightEyelid.animate(this._createKeyframes({
          tgtTranYVal: 13.33,
          tgtRotVal: 20,
          enteredOffset: enterDuration / duration,
          exitingOffset: 1 - (exitDuration / duration),
        }), options);
        break;

      case 'angry':
        this._upperLeftEyelid.animate(this._createKeyframes({
          tgtTranYVal: 8.33,
          tgtRotVal: 30,
          enteredOffset: enterDuration / duration,
          exitingOffset: 1 - (exitDuration / duration),
        }), options);
        this._upperRightEyelid.animate(this._createKeyframes({
          tgtTranYVal: 8.33,
          tgtRotVal: -30,
          enteredOffset: enterDuration / duration,
          exitingOffset: 1 - (exitDuration / duration),
        }), options);
        break;

      case 'focused':
        [this._upperLeftEyelid, this._upperRightEyelid].map(eyelid => {
          eyelid.animate(this._createKeyframes({
            tgtTranYVal: 10,
            enteredOffset: enterDuration / duration,
            exitingOffset: 1 - (exitDuration / duration),
          }), options);
        });
        [this._lowerLeftEyelid, this._lowerRightEyelid].map(eyelid => {
          eyelid.animate(this._createKeyframes({
            tgtTranYVal: -10,
            enteredOffset: enterDuration / duration,
            exitingOffset: 1 - (exitDuration / duration),
          }), options);
        });
        break;

      case 'confused':
        [this._upperRightEyelid].map(eyelid => {
          eyelid.animate(this._createKeyframes({
            tgtTranYVal: 10,
            tgtRotVal: -10,
            enteredOffset: enterDuration / duration,
            exitingOffset: 1 - (exitDuration / duration),
          }), options);
        });
        break;

      default:
        logger.warn(`Invalid input type: ${type}`);
    }
  }

  blink({
    duration = 150,  // in ms
  } = {}) {
    // TODO: skip if _leftEye or _rightEye is not defined; or use same strategy above
    [this._leftEye, this._rightEye].map((eye) => {
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

  startBlinking({
    maxInterval = 5000
  } = {}) {
    if (this._blinkTimeoutID) {
      logger.warn(`Skipping; already blinking with timeoutID: ${this._blinkTimeoutID}`);
      return;
    }
    const blinkRandomly = (timeout) => {
      this._blinkTimeoutID = setTimeout(() => {
        this.blink();
        blinkRandomly(Math.random() * maxInterval);
      }, timeout);
    }
    blinkRandomly(Math.random() * maxInterval);
  }

  stopBlinking() {
    clearTimeout(this._blinkTimeoutID);
    this._blinkTimeoutID = null;
  }
}

const eyes = new EyesController({
  leftEye: document.querySelector('.left.eye'),
  rightEye: document.querySelector('.right.eye'),
  upperLeftEyelid: document.querySelector('.left .eyelid.upper'),
  upperRightEyelid: document.querySelector('.right .eyelid.upper'),
  lowerLeftEyelid: document.querySelector('.left .eyelid.lower'),
  lowerRightEyelid: document.querySelector('.right .eyelid.lower'),
});
