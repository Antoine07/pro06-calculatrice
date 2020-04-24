import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      backgroundColor: '#222',
      borderRadius: 5,
      padding: 10,
      margin: 20
    },
    containerStudent: {
      padding: 5,
      margin: 10
    },
    buttonText: {
      fontSize: 20,
      color: '#fff'
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    containerCalculate: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: 5,
      backgroundColor: "#202020"
    },
    btnRow: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    header: {
      height: 120,
      marginTop: 50
    },
    result: {
      color: "#fff",
      fontSize: 40,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
    }
  
  });

  export default styles;