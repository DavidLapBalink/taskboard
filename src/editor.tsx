import {View ,TextInput, Text} from "react-native";
import {styles} from './styles'


export const TaskEditor = ({task, save,cancel}: any) => {

  return <View style={styles.tastEditor} nativeID="editpanel" >
      <View style={{width: '100%'}}>
          <View>
            <Text style={styles.FieldName}>Title:</Text>
            <TextInput style={styles.textFieldStyle} onChangeText={title => task.title = title} defaultValue={task.title != '' ? task.title : ''} />
          </View>
          <View>
            <Text style={styles.FieldName}>Description:</Text>
            <View><TextInput multiline numberOfLines={9} style={styles.editDesc} onChangeText={description => task.description = description} nativeID="descriptionField" defaultValue={task.description}/></View>
          </View>
          <View style={{width: '100%'}}>
            <View style={styles.dateFieldLeft}>
              <Text style={styles.FieldName}>Start Date:</Text><input type="date" style={styles.datePicker} onChange={startDate => task.startDate = startDate.currentTarget.value} defaultValue={task.startDate != '' ? task.startDate : null}/>
              <Text style={styles.FieldName}>End Date:</Text><input type="date" style={styles.datePicker} onChange={endDate => task.endDate = endDate.currentTarget.value} defaultValue={task.endDate != '' ? task.endDate : null}/>
            </View>
          </View>
          <View style={styles.btnPlace}>
            <View style={styles.dateFieldLeft}>
              <button style={styles.saveBtn} onClick={save} id="saveBtn">Save</button>
              <button style={styles.saveBtn} onClick={cancel} id="cancelBtn">Cancel</button>
            </View>
          </View>
      </View>  
      </View> 
};