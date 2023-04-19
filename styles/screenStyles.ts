import { StyleSheet } from 'react-native';


const screenStyles = StyleSheet.create({
    // HomeScreen
    container: {
        flex: 1,
        backgroundColor: "#000001",
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#e1b058",
      },
      subText:{
        color:"#e1b058",
      },
      button: {
        backgroundColor: "#c69957",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
      },
      buttonText: {
        color: "#000001",
        textAlign: "center",
        fontWeight: "bold",
      },
    //   Create Raffles Screen
      contForm: {
        width: "90%",
        marginTop: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "#D6A758",
        borderRadius: 5,
      },
      formText: {
        fontSize: 20,
        fontWeight: "bold",
      },
      formInput: {
        fontSize: 30,
        padding: 2,
        backgroundColor: "#594625",
        color: "white",
        borderRadius: 5,
      },
      contButton: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
      },
      // Raffles Screen
      list: {
        marginTop: 4,
        gap: 4,
      },
      // Raffle Details Screen
      mapContainer: {
        marginBottom:2,
        borderWidth: 1,
        borderColor: "#c69957",
        borderRadius:5,
        padding: 5,
        flexWrap: "wrap",
        gap: 3,
      },
      raffleDetailsButton:{
        marginVertical:10,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"#c69957",
        minWidth:"65%"
      },
      raffleDetailsButtonText:{
        fontSize:25,
        fontWeight:"bold",
        color:"white",
        textAlign:"center"
      }
})

export default screenStyles;