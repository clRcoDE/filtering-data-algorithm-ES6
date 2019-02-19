import React, { Component } from "react";
import {  Image, StyleSheet, Text, View ,Dimensions, TouchableHighlight} from "react-native";


class App extends Component {

constructor(props){
  super(props);
  this.state={

  }
  let buttons = [
    {
        id: 'hotels',
        
    },
    {
        id: 'flights',
    },
    {
        id: 'rails',
    }
]
}



  render() {
    return (
      <View  style={styles.conrainer}>

<View>
  this.buttons.map(()=>)
  <TouchableHighlight><View></View></TouchableHighlight>
</View>

      </View>
    );
  }
}


const styles=StyleSheet.create({
  conrainer:{
    flex:1,
    backgroundColor:'royalblue',
    justifyContent: 'center',
    alignItems: 'center',
  }
})


const Data = [
  {

      startTime: '02 Jul 2019',
      fromCity: 'London',
      toCity: 'San Francisco',
      fromCountry: 'UK',
      toCountry: 'USA',
      TakeOff: '10:30',
      Landing: '22:10',
      StartCityAbbreviation: 'LDN',
      DestinationCityAbbreviation: 'SFR',
      class: 'Business',
      MealPlan: 'Standard',
      Seat: 'Window',
      // Airline: { name: 'Emirates', icon: require('../Assets/Images/emirates.png') },
      tag:'flights'


  },
  {

      startTime: '18 Jun 2019',
      endTime:'11 Sep 2019',
      fromCity: 'Delhi',
      toCity: 'Moscow',
      fromCountry: 'India',
      toCountry: 'Russia',
      TakeOff: '18:30',
      Landing: '23:30',
      StartCityAbbreviation: 'DEL',
      DestinationCityAbbreviation: 'MCW',
      class: 'First Class',
      MealPlan: 'Vegetables',
      Seat: 'beside',
      // Airline: { name: 'Qatar Airways', icon: require('../Assets/Images/qatarAirways.png') },
      tag:'rails'


  },


  {

      startTime: '22 Apr 2019',
      endTime:'11 Sep 2019',

      fromCity: 'London',
      toCity: 'San Francisco',
      fromCountry: 'UK',
      toCountry: 'USA',
      TakeOff: '10:30',
      Landing: '22:10',
      StartCityAbbreviation: 'LDN',
      DestinationCityAbbreviation: 'SFR',
      class: 'Business',
      MealPlan: 'diet',
      Seat: 'Window',
      // Airline: { name: 'virgin atlantic', icon: require('../Assets/Images/virgin.jpg') },
      tag:'hotels'


  },

  {

      startTime: '14 Feb 2019',
      fromCity: 'London',
      toCity: 'San Francisco',
      fromCountry: 'UK',
      toCountry: 'USA',
      TakeOff: '10:30',
      Landing: '22:10',
      StartCityAbbreviation: 'LDN',
      DestinationCityAbbreviation: 'SFR',
      class: 'Business',
      MealPlan: 'Standard',
      Seat: 'Window',
      // Airline: { name: 'Emirates', icon: require('../Assets/Images/emirates.png') },
      tag:'rails'


  },

  {

      startTime: '02 Jul 2019',
      endTime:'11 Sep 2019',

      fromCity: 'London',
      toCity: 'San Francisco',
      fromCountry: 'United Kingdom',
      toCountry: 'USA',
      TakeOff: '10:30',
      Landing: '22:10',
      StartCityAbbreviation: 'LDN',
      DestinationCityAbbreviation: 'SFR',
      class: 'Business',
      MealPlan: 'Standard',
      Seat: 'Window',
      // Airline: { name: 'Qatar Airways', icon: require('../Assets/Images/qatarAirways.png') },
      tag:'flights'


  },




]

export default App;
