import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
container:{
  paddingTop: 70,
  flex: 1,
  alignItems: 'center',
},
from:{
  marginTop: 40,
  marginRight: 24,
  marginBottom: 32,
  marginLeft: 24,
  flexDirection: 'row',
  gap: 4
},
input:{
  flex: 1, 
  backgroundColor: '#0D0D0D',
  height: 54,
  color: '#FFF',
  fontSize: 16,
  padding: 16
},
button:{
  width: 52,
  height: 52,
  backgroundColor: '#1E6F9F',
  borderRadius: 6,
  alignItems: 'center',
  justifyContent: 'center'
},
infosBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24, 
},
info:{
  flexDirection: 'row',
  alignItems:'center',
  gap: 8
},
infosTextNew:{
  color:'#4EA8DE',
  fontWeight: 'bold'
},
infosTextDone:{
  color: '#8284FA',
  fontWeight: 'bold'
},
infosNumber:{
  alignItems:'center',
  backgroundColor: '#333333',
  width: 25,
  height: 19,
  borderRadius: 22 
},
infosNumberText:{
  color: '#FFF',
  textAlign: 'center'
},
flatList:{
  maxHeight: '65%',
  width: '100%',
  marginLeft: '13%',
  marginVertical: 20
},
listEmpty:{
  alignItems:'center',
  marginTop: 100,
  marginRight: 50,
},
listEmptyText1:{
  fontWeight: 'bold',
  color:'#808080',
},
listEmptyText2:{
color:'#808080',
}
})