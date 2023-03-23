import React from 'react';


const Slider = () => {
  return (
    <div>
      
    </div>
  );
};

export default Slider;

return React.createElement(Slider, {
  className: "slider",
  min: 0,
  max: 100,
  stepSize: 5,
  labelStepSize: 50,
  value: sliderValue,
  onChange: (value) => setSliderValue(value),
});