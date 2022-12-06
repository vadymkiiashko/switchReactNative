import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


const  Cell = (element : string , index :number ) => {
  return(
    <View style={styles.cell}>
        <Text> {element} {index}</Text>
    </View>
  )
}

export default Cell

const styles = StyleSheet.create({
    cell :{
        height : '10',
        width : "10",
        backgroundColor : 'black',


      },
    
    })
    