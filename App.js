import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image} from "react-native"
import {Icon} from "react-native-elements"

var itemArray=new Array(9).fill('empty')

export default class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    isCross:false,
    winMessage:"",
    winTextColor:"black"
  }
}
drawItem=(itemNumber)=>{
      if(itemArray[itemNumber]=="empty"){
      itemArray[itemNumber]=this.state.isCross
      this.setState({isCross:!itemArray[itemNumber]})
      console.log(itemArray)
      }
      this.winGame();
}

iconNameSelector=(itemNumber)=>{
    if(itemArray[itemNumber]=='empty'){
      return 'pencil'
    }else{
      if(itemArray[itemNumber])
      return 'cross'
      else
      return 'circle'
    }
}
iconColorSelector=(itemNumber)=>{
    if(itemArray[itemNumber]=='empty')
    return '#000'
    if(itemArray[itemNumber])
    return 'red'
    else
    return 'blue'
}

winGame=()=>{
    if(itemArray[0]!='empty' && itemArray[0]==itemArray[1] && itemArray[1]==itemArray[2]){
      this.setState({winMessage:(itemArray[0]? 'cross':'circle').concat(' Wins')})
      if(itemArray[0])
      this.setState({winTextColor:"red"})
      else
      this.setState({winTextColor:"blue"})
    }else 
      if(itemArray[3]!='empty' && itemArray[3]==itemArray[4] && itemArray[4]==itemArray[5]){
      this.setState({winMessage:(itemArray[3]? 'cross':'circle').concat(' Wins')})
      if(itemArray[3])
      this.setState({winTextColor:"red"})
      else
      this.setState({winTextColor:"blue"})
    }else
    if(itemArray[6]!='empty' && itemArray[6]==itemArray[7] && itemArray[7]==itemArray[8]){
      this.setState({winMessage:(itemArray[6]? 'cross':'circle').concat(' Wins')})
      if(itemArray[6])
      this.setState({winTextColor:"red"})
      else
      this.setState({winTextColor:"blue"})
    }else
    if(itemArray[0]!='empty' && itemArray[0]==itemArray[3] && itemArray[3]==itemArray[6]){
      this.setState({winMessage:(itemArray[2]? 'cross':'circle').concat(' Wins')})
      if(itemArray[0])
      this.setState({winTextColor:"red"})
      else
      this.setState({winTextColor:"blue"})
    }else
    if(itemArray[1]!='empty' && itemArray[1]==itemArray[4] && itemArray[4]==itemArray[7]){
      this.setState({winMessage:(itemArray[1]? 'cross':'circle').concat(' Wins')})
      if(itemArray[1])
      this.setState({winTextColor:"red"})
      else
      this.setState({winTextColor:"blue"})
    }else
    if(itemArray[2]!='empty' && itemArray[2]==itemArray[5] && itemArray[5]==itemArray[8]){
      this.setState({winMessage:(itemArray[2]? 'cross':'circle').concat(' Wins')})
      if(itemArray[2])
      this.setState({winTextColor:"red"})
      else
      this.setState({winTextColor:"blue"})
    }else
    if(itemArray[0]!='empty' && itemArray[0]==itemArray[4] && itemArray[4]==itemArray[8]){
      this.setState({winMessage:(itemArray[2]? 'cross':'circle').concat(' Wins')})
      if(itemArray[0])
      this.setState({winTextColor:"red"})
      else
      this.setState({winTextColor:"blue"})
    }else
    if(itemArray[2]!='empty' && itemArray[2]==itemArray[4] && itemArray[4]==itemArray[6]){
      this.setState({winMessage:(itemArray[2]? 'cross':'circle').concat(' Wins')})
      if(itemArray[2])
      this.setState({winTextColor:"red"})
      else
      this.setState({winTextColor:"blue"})
    }
}

render(){
  return(
    <View style={{flex:1,alignItems:"center",backgroundColor:"#cdc3d4"}}>
    <Text style={{marginTop:70,fontSize:40,color:this.state.winTextColor,fontWeight:"bold",fontStyle:"italic"}}>
      TicTacToe
    </Text>
      <View style={styles.container} >
      <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(0)}}>
              <Icon
              name={this.iconNameSelector(0)}
              type="entypo"
              color={this.iconColorSelector(0)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(1)}}>
              <Icon
              name={this.iconNameSelector(1)}
              type="entypo"
              color={this.iconColorSelector(1)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(2)}}>
              <Icon
              name={this.iconNameSelector(2)}
              type="entypo"
              color={this.iconColorSelector(2)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        </View>
        <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(3)}}>
              <Icon
              name={this.iconNameSelector(3)}
              type="entypo"
              color={this.iconColorSelector(3)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(4)}}>
              <Icon
              name={this.iconNameSelector(4)}
              type="entypo"
              color={this.iconColorSelector(4)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(5)}}>
              <Icon
              name={this.iconNameSelector(5)}
              type="entypo"
              color={this.iconColorSelector(5)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        </View>
        <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(6)}}>
              <Icon
              name={this.iconNameSelector(6)}
              type="entypo"
              color={this.iconColorSelector(6)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(7)}}>
              <Icon
              name={this.iconNameSelector(7)}
              type="entypo"
              color={this.iconColorSelector(7)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
              <TouchableOpacity onPress={()=>{this.drawItem(8)}}>
              <Icon
              name={this.iconNameSelector(8)}
              type="entypo"
              color={this.iconColorSelector(8)}
              size={70}
              />
              </TouchableOpacity>
        </View>
        </View>
        <View style={{paddingTop:20}}>
          <Text style={{color:this.state.winTextColor, fontSize:35,fontStyle:"italic",fontWeight:"bold"}} >{this.state.winMessage}</Text>
        </View>
        <View>
              <TouchableOpacity style={{paddingTop:10}}
               onPress={()=>{itemArray.fill('empty')
               this.setState({winMessage:"",winTextColor:"black"})
               this.forceUpdate();
              }}>
                <Text style={styles.textButtonStyle}>
                  Reset
                </Text>
              </TouchableOpacity>
        </View>
        
    </View>
   <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,color:"#190ee6",fontWeight:"400",fontStyle:"italic"}}>
            Made With ReactNative
        </Text>
        <Icon
              name="react"
              type="material-community"
              color="blue"
              size={30}
              style={{}}
        />
       
   </View>
    </View>
  )}}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
  },
  iconContainer:{
    borderColor:"black",
    borderRadius:3,
    borderWidth:2,
    padding:20
  },
  rowContainer:{
    flexDirection:"row",
    
    
  },
  textButtonStyle:{
    backgroundColor:"#ae5df0",
    fontSize:25,
    color:"white",
    padding:10,
    borderRadius:10,
    fontWeight:"bold",
    paddingLeft:40,
    paddingRight:40,
  },
})