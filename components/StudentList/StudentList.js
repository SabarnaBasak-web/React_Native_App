/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, ScrollView, Text } from 'react-native';


function StudentList({ studentList }) {
  return <FlatList data={studentList} renderItem={({item})=><Text>{item}</Text>}>
  </FlatList>;
}

// ({item}) => <Text style={styles.item}>{item.key}</Text>

export default StudentList;
