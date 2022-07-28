//@ts-ignore
import {StyleSheet,ImageBackground} from "react-native-web";

export const styles = StyleSheet.create({
    root: {
        fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "normal",
        width: "100%",
        display: "block",

      },

    tastCard: {
        width: "400px",
        
        height: "200px",
        margin: "3px",
        float: "left",
        borderRadius: "5px",
        border: "1px solid silver",
        display: "block",
        boxShadow: "0 10px 6px -6px #777",
      },
      
      taskTitle: {
        fontWeight: "bold",
        
        fontSize: "16px",
        marginBottom: "3px",
      },

      taskDesc: {
        fontStyle: "italic",
        height: "150px",
        overflow: "auto",
        textAlign: "justify",
        paddingLeft: "10px",
        paddingRight: "10px",
        fontSize: "12px",
      },
      taskStartDate: {
        float: "left",
        paddingLeft: "10px",
        textAlign: "left",
        fontSize: "14px",
        
        marginTop: "1%",
        height: "30px",
        display: "block",
        width: "130px"
      },
      endText: {
        float: "left", 
        display: "flex",
        color: "green",
      },
      startText: {
        float: "left", 
        display: "flex",
        color: "red",
      },



      taskEndDate: {
        float: "left",
        textAlign: "right",
        color: "red",
        fontSize: "14px",
        marginTop: "1%",
        paddingRight: "5px",
        paddingLeft: "10px",
        marginLeft: "0px",
        height: "30px",
        display: "block",
        width: "140px"
      },
      
      buttonsView: {
        float: "right",
        height: "30px",
        width: "120px",
        display: "block",
        paddingRight: "0px",
        
      },
      
      delbtn: {
        margin: "0px",
        width: "30px",
        height: "30px"
        
      },

      editorcontainer: {
        width: "100%",
        height: "auto",
        position: "absolute",
        top: "0",
        left: "0",
        
      },
      

      calendar: {
        width: "500px",
        height: "550",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        zIndex: "25",
        position: "absolute",
        boxShadow: "0 10px 6px -6px #777",
        backgroundColor: "green",
        margin: "auto",
        left: "calc(50% - 250px)",
        marginTop: "100px",
      },


      tastEditor: {
        width: "500px",
        height: "310px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        zIndex: "25",
        position: "absolute",
        boxShadow: "0 10px 6px -6px #777",
        backgroundColor: "silver",
        margin: "auto",
        left: "calc(50% - 250px)",
        marginTop: "100px",
      },
      tastEditorHidden: {
        visibility: "hidden",
      },      

      FieldName: {
        paddingRight: "3px",
        textAlign: "left",
        
      },
      
      textFieldStyle: {
        width: "475px",
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        borderRadius: "3px",
      },
      datePicker: {
        border: "1px solid black",
        borderRadius: "3px",
        marginRight: "5px"

      },
      editDesc: {
        fontStyle: "italic",
        /*height: "150px",*/
        overflow: "auto",
        width: "475px",
        textAlign: "justify",
        paddingLeft: "10px",
        paddingRight: "10px",
        fontSize: "12px",
                backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        borderRadius: "3px",
        
      },      
      dateStyle: {
        width: "100px",
        float: "left",
        
      },

      dateFieldLeft: {
        float: "left",
        display: "block",
        marginTop: "10px",
      },
      
     
      btnPlace: {
        paddingTop: "10px",
        width: "500px",
        height: "100px",
      },
      
      saveBtn: {
        textAlign: "center",
        float: "left",
        display: "block",
        width: "100px",
        height: "30px",
        marginLeft: "10px",
        fontSize: "12px",
        border: "1px solid silver",
        color: "black"
      },


      
      iconBtn: {
        textAlign: "center",
        width: "30px",
        height: "30px",
        marginLeft: "10px",
        backgroundColor: "transparent",
        
      },     
      imgStyle: {
        height: 20,
        width: 20
      },

      lineStyle: {
        width: "100%",
        display: "block",
        height: "30px",
        marginTop: "-5px"
      }
       
      
  })