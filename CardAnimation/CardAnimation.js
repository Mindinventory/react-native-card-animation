import React from 'react';
import {View, Animated, Platform} from 'react-native';
import {Extrapolate} from 'react-native-reanimated';
import Card from './Card';
import styles from './styles';

const CardAnimation = props => {
  const {
    list,
    startValue,
    startDegree,
    endDegree,
    perspectiveValue,
    duration,
    opacityToVal,
    opacityEndVal,
    bounceToVal,
    bounceEndVal,
    backgroundColor,
    spaceBetween,
    borderRadius,
    shadowRadius,
    shadowOpacity,
    onCardPress,
  } = props;
  const xy = new Animated.Value(0);
  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: xy, y: xy}}}],
    {
      useNativeDriver: true,
    },
  );

  const renderItem = ({item}) => {
    const startDeg = startDegree ? startDegree : '0deg';
    const endDeg = endDegree ? endDegree : '5deg';

    const inputRange = [-1, startValue ? startValue : 100];

    const scalex = xy.interpolate({
      inputRange,
      outputRange: [startDeg, Platform.OS === 'ios' ? endDeg : `-${endDeg}`],
      extrapolate: Extrapolate.CLAMP,
    });

    return (
      <Card
        item={item}
        scalex={scalex}
        perspectiveValue={perspectiveValue ? perspectiveValue : 100}
        duration={duration ? duration : 500}
        opacityToVal={opacityToVal ? opacityToVal : 0.5}
        opacityEndVal={opacityEndVal ? opacityEndVal : 1}
        bounceToVal={bounceToVal ? bounceToVal : 1.1}
        bounceEndVal={bounceEndVal ? bounceEndVal : 1}
        spaceBetween={spaceBetween ? spaceBetween : -25}
        borderRadius={borderRadius ? borderRadius : 30}
        shadowRadius={shadowRadius ? shadowRadius : 10}
        shadowOpacity={shadowOpacity ? shadowOpacity : 0.8}
        onCardPress={onCardPress}>
        {props.renderCard === undefined ? (
          <View style={{height: 150}} />
        ) : (
          props.renderCard(item)
        )}
      </Card>
    );
  };

  return (
    <View style={[styles.listView, {backgroundColor: backgroundColor}]}>
      <Animated.FlatList
        data={list}
        extraData={list}
        renderItem={renderItem}
        keyExtractor={() => Math.random()}
        contentContainerStyle={styles.listViewContainer}
        style={Platform.OS === 'ios' ? styles.marginTop100 : styles.marginTop60}
        scrollEventThrottle={16}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CardAnimation;
