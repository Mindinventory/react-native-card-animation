import React from 'react';
import {Animated, Pressable} from 'react-native';
import styles from './styles';

const Card = props => {
  const {
    item,
    scalex,
    perspectiveValue,
    duration,
    opacityToVal,
    opacityEndVal,
    bounceToVal,
    bounceEndVal,
    spaceBetween,
    borderRadius,
    shadowRadius,
    shadowOpacity,
    onCardPress,
  } = props;
  const animatedVal = new Animated.Value(1);
  const bounceAnimatedVal = new Animated.Value(1);

  const onPressAnimate = () => {
    Animated.timing(animatedVal, {
      toValue: opacityToVal,
      duration: duration,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animatedVal, {
        toValue: opacityEndVal,
        duration: duration,
        useNativeDriver: true,
      }).start();
    });

    Animated.timing(bounceAnimatedVal, {
      toValue: bounceToVal,
      duration: duration,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(bounceAnimatedVal, {
        toValue: bounceEndVal,
        duration: duration,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <Animated.View
      style={[
        styles.mainView,
        {opacity: animatedVal},
        {
          marginBottom: spaceBetween,
          borderRadius: borderRadius,
          shadowRadius: shadowRadius,
          shadowOpacity: shadowOpacity,
        },
        {
          backgroundColor: item.bgColor === undefined ? 'grey' : item.bgColor,
          shadowColor: item.bgColor === undefined ? 'white' : item.bgColor,
        },
        {
          transform: [
            {perspective: -perspectiveValue},
            {rotateX: scalex},
            {scaleX: bounceAnimatedVal},
            {scaleY: bounceAnimatedVal},
          ],
        },
      ]}>
      {onCardPress === undefined ? (
        <>
          {props.children}
        </>
      ) : (
      <Pressable
        onPress={() => {
          onPressAnimate();
          onCardPress(item)
        }}>
        {props.children}
      </Pressable>
      )}
    </Animated.View>
  );
};

export default Card;
