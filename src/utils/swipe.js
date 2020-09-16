const sensitivity = 20;

let touchPositionStart = null;
let touchPositionCurrent = null;

const checkAction = (slide, next, prev) => {
  let positionDiff = {
    x: touchPositionStart.x - touchPositionCurrent.x,
    y: touchPositionStart.y - touchPositionCurrent.y
  };

  if (Math.abs(positionDiff.x) > Math.abs(positionDiff.y)) {
    if (Math.abs(positionDiff.x) > sensitivity) {
      if (positionDiff.x > 0) {
        next(slide);
      } else {
        prev(slide);
      }
    }
  }
};

export const touchStart = (evt) => {
  touchPositionStart = {
    x: evt.changedTouches[0].clientX,
    y: evt.changedTouches[0].clientY
  };
  touchPositionCurrent = {
    x: touchPositionStart.x,
    y: touchPositionStart.y
  };
};

export const touchMove = (evt) => {
  touchPositionCurrent = {
    x: evt.changedTouches[0].clientX,
    y: evt.changedTouches[0].clientY
  };
};

export const touchEnd = (slide, next, prev) => {
  checkAction(slide, next, prev);
  touchPositionStart = null;
  touchPositionCurrent = null;
};
