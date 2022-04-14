import {Dimensions, StyleSheet} from 'react-native';

const style1 = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },


  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },



  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },


  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },


  searchButton: {
    backgroundColor: '#fff',
    elevation:99,
    height: 60,
    borderRadius: 30,
    width:Dimensions.get('screen').width-20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top:30,
    position:'absolute',
    zIndex:99,
    marginHorizontal:10
  },

  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default style1;
