import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { startGame } from '../features/game/gameSlice'
import { RootState } from "../store"


const Footer =()=> {
    const {isActive , clicks } = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()

    let style = [styles.footer, styles.foooterStart]
    const text  = isActive ? `${clicks} buttons pressed` : 'start game'
    if(isActive){
        style = [styles.footer]
    }
    return (
      <TouchableOpacity 
        style ={style} 
        disabled={isActive ? true : false}
        onPress ={()=>dispatch(startGame())}
      
      >
        <Text style={{textTransform :'uppercase'  , fontWeight : '600' , color : isActive ? '#CBCBD3' : '#C4EBE3'}}>
            {text}
        </Text>
      </TouchableOpacity >
    )
  }

  export default Footer

  const styles = StyleSheet.create({
    footer :{
        width: '100%',
        height : '10%',
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#F8F8F8'
      },
    foooterStart :{
        backgroundColor : '#2EC0A6'

        }
    })

  