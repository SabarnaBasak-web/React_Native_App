/* eslint-disable prettier/prettier */
import React,{ useRef, useEffect } from 'react';
import { View, Button, Text, ScrollView, Animated } from 'react-native';
import FadeInView from './FadeInView';
import {useDispatch, useSelector} from 'react-redux';

import {increment, decrement, incrementByVal} from '../redux/action';

function Home({ navigation }) {
  
  const counter = useSelector(state=> console.log(state));
  console.log("Counter value is ",counter);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="Go to profile page"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
      <Text style={{fontSize: 14,color:'red'}}>Animation</Text>
      <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }} >
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
      </FadeInView>
      {/* <Text style={{fontSize: 18,color:'red'}}>Value is : {counter}</Text> */}
      <Button title="Increment" onPress={()=>dispatch(increment())} />
      <Button title="Decrement" onPress={()=>dispatch(decrement())} />
      <Button title="Increase by 5" onPress={()=>dispatch(incrementByVal(5))} />
    </View>
  );
}

export default Home;
