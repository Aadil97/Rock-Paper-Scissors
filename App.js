import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Button, Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
const rock = require('./assets/rock.png');
const scissors = require('./assets/scissors.png');
const paper = require('./assets/paper.png');

//Player card class
const PlayerCard = ({color, symbol}) =>{
  const style = {
    backgroundColor: color,
    padding: 50,
    color: '#fff',
  }
  return(
    <View className="player-card" style={style}>
      <Image source={require('./assets/rock.png')} style={{width: '50%', height: '10%'}} />
      <Text style={styles.text}>{symbol}</Text>
    </View>
  )
}

//Main Screen App class
export default class App extends Component {
  constructor(props){
    super(props)
    this.symbols = ["rock", "paper", "scissors"]
    this.state = {}
  }

  runGame = () => {
    this.setState({
        playerRed: this.symbols[Math.floor(Math.random()*3)],
        playerBlue: this.symbols[Math.floor(Math.random()*3)]
    })
  }
  render(){
    return (
    <View style={styles.container}>
      <PlayerCard
        color='red'
        symbol={this.state.playerRed}  />
      <PlayerCard 
        color='blue'
        symbol={this.state.playerBlue}  />
        <Button onPress={this.runGame} title="Run game" />
        <Image source={require('./assets/rock.png')} style={{width: '50%', height: '10%'}} />
    </View>
  );
  }
}


//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
  },
});
