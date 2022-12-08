import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Cell from './Cell'

type Props = {myRow: Array<string>, indexRow: number}

const  Row: React.FC<Props> = ({myRow, indexRow  }) => {  

  return(
    <View style={styles.row}>
      {
        myRow.map((element, index) => 
          <Cell key = {Number(''+indexRow+index)} index={ index} indexRow = {indexRow} element = {element} />
      )
      }
    </View>
      
  )
}
export default Row

const styles = StyleSheet.create({
    row :{
        flexDirection: 'row',
        height :'20%',
        width : '100%',
    },    
    })
    