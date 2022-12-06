import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import Cell from './Cell'


export default function Body() {
    const {cells } = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()

    return (
    <SafeAreaView style={styles.body}>

       {
           cells.map((row, indexRow) => {
            const myRow = row.split('')     
            return myRow.map((element,index) => 
                     <Cell element = { element }  index = {index} key ={Number(indexRow+index)} />)
             
            })

        
        }
        
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
body :{
    height : '80%',
    backgroundColor : 'red',
  },
})
