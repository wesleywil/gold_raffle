import { StyleSheet } from "react-native";

const componentStyles = StyleSheet.create({
    // Raffle Item
    container: {
        marginVertical: 2,
        minWidth: "85%",
        backgroundColor: "#c69957",
        padding: 5,
        flexDirection: "row",
        borderRadius: 5,
        justifyContent: "space-between",
      },
      info: {
        paddingVertical: 2,
        paddingHorizontal: 4,
        flexDirection: "row",
        flexGrow: 1,
        gap: 4,
      },
      buttons: {
        width: 150,
        height: 40,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 2,
      },
      text: {
        color: "#000001",
        fontWeight:"bold",
        fontSize: 20,
      },
      // Panel Delete
      panelDeleteContainer:{
        width:"80%",
        flexDirection:"column",
        padding:5,
        borderWidth:1,
        borderColor:"white",
        borderRadius:5,
      },
      panelDeleteTitle:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        color:"white",
      },
      panelDeleteButtonContainer:{
        flexDirection:"row",
        justifyContent:"center",
        gap:20,
      },
      panelDeleteButton:{

      },
      panelDeleteButtonText:{
        fontSize:25,
        fontWeight:"bold",
      },
    //   Raffle Item Buttons
    button: {
        gap: 4,
        padding: 2,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
      },
    //   Raffle Cell
    cell: {
        margin: 1,
        borderWidth: 1,
        borderColor: "#e1b058",
        width: 110,
        height: 110,
        alignItems: "center",
        justifyContent: "space-between",
      },
      raffleCellText:{
        color:"#e1b058",
      },
      raffleCellButton: {
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 5,
      },
      raffleCellButtonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
      },
    // Select Cell
    selectContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -150 }, { translateY: -50 }],
        zIndex: 2,
        width: 300,
        backgroundColor: "#000001",
        borderWidth: 1,
        borderColor: "#e1b058",
        borderRadius: 10,
        overflow: "hidden",
      },
      choosenText: {
        fontSize: 25,
        fontWeight: "bold",
        color:"#c69957",
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor:"#c69957",
        width: "90%",
        alignSelf: "center",
        marginBottom: 10,
      },
      textInput: {
        fontSize: 20,
        fontWeight:"bold",
        borderWidth: 1,
        borderColor: "#c69957",
        borderRadius: 5,
        backgroundColor:"#6E5530",
        color: "white",
        paddingVertical: 5,
        marginBottom: 5,
        marginHorizontal: 5,
      },
      selectCellButton:{
        gap: 4,
        padding: 2,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        backgroundColor: "#e1b058"
      },
      // Update Raffle
        updateRaffleContainer:{
          position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -150 }, { translateY: -100 }],
        zIndex: 2,
        width: 300,
        backgroundColor: "#000001",
        borderWidth: 1,
        borderColor: "#e1b058",
        borderRadius: 10,
        overflow: "hidden",
        },
        updateRaffleTitle:{
          textAlign:"center",
          fontSize:20,
          fontWeight:"bold",
          color:"#e1b058",
        },
        updateRaffleSubContainer:{
          marginTop:10,
          padding:3,
        },
        updateRaffleText:{
          color:"white",
          fontSize:16,
        },
        updateRaffleInput:{
          fontSize: 30,
          padding: 2,
          backgroundColor: "#594625",
          color: "white",
          borderRadius: 5,
        },
        updateRaffleButtonsContainer:{
          flexDirection:"row",
          justifyContent:"center",
          gap:5,
          
        },
      // Raffle Details Menu
      raffleDetailsMenuContainer:{
        flexDirection:"row",
        gap:10,
      },
      raffleDetailsMenuButton:{
        marginVertical:10,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"#c69957",
        minWidth:"40%"
      },
      raffleDetailsMenuButtonText:{
        fontSize:25,
        fontWeight:"bold",
        color:"white",
        textAlign:"center"
      },
    //   Panel Config
    config: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#c69957",
        paddingVertical: 5,
      },
      configText: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight:"bold",
        color: "#000001",
      },
      PanelConfigButton: {
        marginRight: 10,
        backgroundColor: "#000001",
        paddingHorizontal: 5,
        borderRadius: 100,
      },
      PanelConfigButtonText: {
        color: "red",
        fontWeight: "bold",
        fontSize: 15,
      },
});

export default componentStyles;