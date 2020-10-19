import React from "react";
import PropTypes from "prop-types";

const SlideIndicators = (props) => {
  const {
    activeSlide,
    isCaption,
    slidesToShow,
    indicators,
    onIndicatorDotClick,
  } = props;

  let indicatorsItem = [];
  for (let i = 0; i < indicators.length; i++) {
    indicatorsItem.push(
        <div
          key={i}
          className={
            `indicators__item
            ${i + slidesToShow === activeSlide ? `indicators__item--active` : ``}`
          }
          id={i}
          onClick={(evt) => onIndicatorDotClick(evt)}
        >
          <div
            className={
              `indicators__item-inner
              ${i + slidesToShow === activeSlide ? `indicators__item-inner--active` : ``}`
            }
            onClick={(evt) => onIndicatorDotClick(evt)}
          >
          </div>
        </div>);
  }
  return (
    <div className={
      `slider__indicators  indicators
      ${isCaption ? `` : `indicators--without-caption`}`
    }
    >
      {indicatorsItem}
    </div>
  );
};

SlideIndicators.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  isCaption: PropTypes.bool.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  indicators: PropTypes.arrayOf(PropTypes.number).isRequired,
  onIndicatorDotClick: PropTypes.func.isRequired,
};

export default SlideIndicators;
