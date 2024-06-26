import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import { restaurants } from '../../../../Config/Data'
import { shuffle } from '../../../../Config/Modules'
import DealCard from '../../../Components/DealCard'
import uuid from 'react-native-uuid';
import COLORS from '../../../../Config/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const AddItems = ({navigation}) => {
  const foods = restaurants.flatMap(restaurant =>{
    return restaurant.food
  })
  const shuffeledFoods = shuffle(foods)
  return (
    <View style={styles.container} >
        <CustomHeader heading={'Add Items'} iconSize={30} left={'chevron-left'} leftOnpress={()=> navigation.goBack()} />
        <FlatList style={styles.flatList} keyExtractor={()=> uuid.v4()} data={shuffeledFoods} renderItem={({item}) =>{
          return <DealCard item={item} icon={'plus-circle-outline'}  />
        }} />
    </View>
  )
}

export default AddItems

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.white
  },
  flatList : {
    marginVertical: hp('2%'),
    marginHorizontal: wp('3%')
  }
})