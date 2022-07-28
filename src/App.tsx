import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import {View, Text } from "react-native";
import TaskCard, {Task}  from './TaskCard';
import {TaskEditor} from './editor';
import {styles} from './styles'
//import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';
import './App.css';
//const Calendar = () => null;

// LocaleConfig.locales['fr'] = {
//   monthNames: [
//     'Janvier',
//     'Février',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juillet',
//     'Août',
//     'Septembre',
//     'Octobre',
//     'Novembre',
//     'Décembre'
//   ],
//   monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
//   dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
//   dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
//   today: "Aujourd'hui"
// };
// LocaleConfig.defaultLocale = 'fr';

// console.log(LocaleConfig.locales);

export default function TasksBoard() {
  
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);

  const savedData = localStorage.getItem('taskBoardData');
  const [tasks, setTasks] = useState<Task[]>(savedData ? JSON.parse(savedData) : []);
  const [isNew, setisNew] = useState(false);
  
  const [showCalendar, setShowCalendar] = useState(false);

  const checkData = (task:any) => { 
    //Fields verification
    if (task.title.trim() == '') {
      alert('Please fill the Title');
      return false;
    }
    
    if (task.description == '') {
      alert('Please fill the Description');
      return false;
    }
    
    if (task.endDate.trim() == '') {
      alert('Please fill End Date');
      return false;
    }

    return true;
  }
  
  useEffect(() => {
    if (tasks.length > 0)
      localStorage.setItem('taskBoardData', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <View style={styles.root}>
      <button onClick={() => { setisNew(true); setEditingTask({} as Task)}}>Add a new task</button>

      {/*<button onClick={() =>setShowCalendar(true) }>Calendar</button>*/}

      <br/><br/>
      
      {tasks.map((task, key) =>
        <TaskCard title={task.title} 
                  description={task.description} 
                  startDate={task.startDate} 
                  endDate={task.endDate} 
                  key={key}
                  editFun={()=>{ 
                    setisNew(false);
                    setEditingTask(...tasks as [], task);
                    
                    
                   }}
                  delFun={()=>{
                    if (confirm('Are you with to delete a task?')) {
                      tasks.splice(key,1);
                      setTasks([...tasks]);
                    }
                  }
                  } />
                  
        ) 
      }
      
      {
        editingTask &&
        <TaskEditor 
          task={editingTask} 
          save={() =>{if(checkData(editingTask)) {
                         editingTask.startDate = editingTask.startDate ? editingTask.startDate : new Date().toString();
                         setEditingTask(undefined);
                         if (isNew)
                           setTasks([...tasks, editingTask]);
                      }
                     }
               } 
          cancel={()=>{
                  setEditingTask(undefined);}
                 }/>
      }
      {/* { showCalendar &&
        <div style={styles.calendar}><Calendar renderArrow={(direction) => {
          if (direction == "left")
            return (
                <View style={{width: 30, height: 30, display: 'block', padding: 0}}>
                  <Text style={{fontSize: "18px", textAlign: 'center', fontWeight:"bold", color: 'red', lineHeight: 25}}>&lt;</Text>
                </View>
            );
          if (direction == "right")
            return (
              <View style={{width: 30, height: 30, display: 'block', padding: 0, backgroundColor: "silver", border: '1px solid silver', borderRadius: '30px'}}>
                  <Text style={{fontSize: "18px", textAlign: 'center', fontWeight:"bold", color: 'red', lineHeight: 25}}>&gt;</Text>
                </View>
            );
        }} hideArrows={false} enableSwipeMonths={true} onDayPress={day => {alert('selected day: '+ day.dateString);
        }} />
  
        </div>
      } */}
      
      </View>
  )
}

ReactDOM.render(
    <TasksBoard />,
  document.getElementById('root')
);