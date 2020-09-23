import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export const Counter = () => {
  const [count, setCount] = useState(50);
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);
  return <View>
    <Text style={ {textAlign: 'center', fontSize: 28} }>
     is your number bigger than {count}
    </Text>
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Button title='yes' onPress={ ()=>{
          setMin(count)
          setCount(Math.floor((max + min)/2))
        } } />
      </View>
      <View style={{flex: 1}}>
        <Button title='no' onPress={ ()=>{
          setMax(count)
          setCount(Math.floor((max + min)/2))
        } }/>
      </View>
    </View>
  </View>
}
