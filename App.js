/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, ScrollView, Image, TextInput, Button } from 'react-native';
import Input from './components/Input/Input';
import StudentList from './components/StudentList/StudentList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Views/Home';
import Profile from './components/Views/Profile';


const App = () => {
  const studList = [
    'stud1',
    'stud2',
    'stud3',
    'stud4',
    'stud5',
    'stud6',
    'stud7',
  ];

  const Stack = createNativeStackNavigator();
  return (
    // <View>
    //   <ScrollView>
    //     <Text>Some text</Text>
    //     <View>
    //       <Text>Some more text</Text>
    //       <Image
    //         source={{
    //           uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    //         }}
    //         // eslint-disable-next-line react-native/no-inline-styles
    //         style={{ width: 200, height: 200 }}
    //         />
    //       <Text>Input text below </Text>
    //       <Input />
    //     </View>
    //   </ScrollView>
    //   <StudentList studentList={studList} />
    //   <Button onPress={() => alert('You pressed the button')} title="Click" />
    //   </View>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: 'Welcome' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
