import { useState, useEffect } from 'react';
import moment from 'moment';
import {View, Image,Text } from "react-native";
import {styles} from './styles'
 
export type Task = {
  key: number,
  title?: string,
  description?: string,
  startDate?: string,
  endDate?: string,
};

//Task card
export default function TaskCard (task: any) { 
  //const [tasks, setTasks] = useState(TasksData);
  const [editingTask, setEditingTask] = useState(undefined);
  
  const sDate = moment(task.startDate as string, "YYYY-MM-DD") ;
  const eDate = moment(task.endDate as string,"YYYY-MM-DD") ;
    
  const delImg = '/src/delbtn.jpg'
  const editImg = '/src/editbtn.jpg'
  
  return <View style={styles.tastCard}>
      <View style={{width: '100%'}}>
        <Text style={styles.taskTitle}>{task.title}</Text>
      </View>  
      <View style={{width: '100%'}}>
        <Text style={styles.taskDesc}>{task.description}</Text>
      </View>
      <View style={styles.lineStyle}>
        <View style={styles.taskStartDate}>
            <Text style={styles.startText}>Start:&nbsp;</Text>
            <Text style={styles.startText}>{sDate.format("DD.MM.yyyy")}</Text>
        </View>
        <View style={styles.taskEndDate}>
          <Text style={styles.endText}>End:&nbsp;</Text>
          <Text style={styles.endText}>{eDate.format("DD.MM.yyyy")}</Text>
        </View>
        <View style={styles.buttonsView}>
            <button style={styles.iconBtn} onClick={task.editFun} title='edit'>
              <Image source={{uri:editImg}} style={styles.imgStyle}/>
            </button>
            <button style={styles.iconBtn} onClick={task.delFun}  title='delete'>
              <Image source={{uri:delImg}} style={styles.imgStyle}/>
            </button>
        </View>
      </View>
    </View>
};
