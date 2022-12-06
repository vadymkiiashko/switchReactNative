import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import Cell from './Cell'


export default function Body() {
    const {cells } = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()

    return (
    <View style={styles.body}>

       {
           cells.map(row => {
            const myRow = row.split('')     
            return myRow.map((element,index) => 
                     <Cell element = { element }  index = {index} />)
             
            })

        
        }
        
    </View>
  )
}



const styles = StyleSheet.create({
body :{
    height : '80%',
    backgroundColor : 'red',
  },
})
