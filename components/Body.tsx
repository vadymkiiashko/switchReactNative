import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import Row from './Row'


export default function Body() {
    const {cells } = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()

    return (
    <SafeAreaView style={styles.body}>
       {
           cells.map((row, indexRow) => {
            const myRow : Array<string> = row.split('')  
             return <Row {...{myRow , indexRow, }} key = {indexRow}/>
          })

        
        }    
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
body :{
    height : '80%',
    backgroundColor : '#ECECEE',
    alignItems : 'center',
    
  },
})
