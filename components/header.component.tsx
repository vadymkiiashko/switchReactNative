import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { abortGame, reloadGame } from "../features/game/gameSlice"
import { RootState } from "../store"



const Header = (): JSX.Element => {
    
    const {isActive ,  isWon } = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()
    let text = ''   
    let action =''
    let handler = abortGame
    if(!isActive) {
        text = 'Switches'
    } else {
        if (isWon) {
            text = 'victory'
            action = 'reload'
            handler = reloadGame

        } else {
            text = 'tap a switch'
            action = 'abort'
        }
    }

    return (
        <View style={styles.header}>
            <Text style={{textTransform : 'uppercase', fontSize: 20,}}>{text}</Text>
            <TouchableOpacity style={{position:'absolute' , right:10 ,}} onPress={()=>dispatch(handler())}>
                <Text > {action} </Text>
            </TouchableOpacity>
      </View>
    )
}


export default Header


const styles = StyleSheet.create({
    header:{
        width: '100%',
        height : '10%',
        color: '#F8F8F8',
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor : '#F8F8F8'
      },
})