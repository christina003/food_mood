import React, { useState } from "react";
import { View, Text } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import RestaurantSwiper from "./RestaurantSwiper";

function Swiping({
  restaurants,
  currentIndex,
  handleLike,
  handleDislike,
  swipingRef,
}) {
  const [willLike, setWillLike] = useState(false);
  const [willDislike, setWillDislike] = useState(false);

  const renderLeftSwipe = () => {
    return (
      <RectButton>
        <RestaurantSwiper
          restaurant={restaurants[currentIndex + 1]}
        ></RestaurantSwiper>
      </RectButton>
    );
  };

  const renderRightSwipe = () => {
    return (
      <RectButton>
        <RestaurantSwiper
          restaurant={restaurants[currentIndex + 1]}
        ></RestaurantSwiper>
      </RectButton>
    );
  };

  return (
    <Swipeable
      friction={3}
      ref={swipingRef}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftSwipe}
      renderRightActions={renderRightSwipe}
      onSwipeableLeftOpen={() => {
        setWillLike(false);
        handleLike(restaurants[currentIndex]);
      }}
      onSwipeableRightOpen={() => {
        setWillDislike(false);
        handleDislike();
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillDislike(true)}
    >
      <RestaurantSwiper
        restaurant={restaurants[currentIndex]}
        willLike={willLike}
        willDislike={willDislike}
      ></RestaurantSwiper>
    </Swipeable>
  );
}

export default React.forwardRef((props, ref) => (
  <Swiping swipingRef={ref} {...props}></Swiping>
));
