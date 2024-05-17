import './App.css';
import { CreateTask } from '../Create';
import { SearchTodo } from '../Search';
import { CounterTasks } from '../Counter';
import {TasksList} from '../TasksList'
import { TaskItem } from '../TaskItem';

function App() {
	return (
		<>
			<div className='App'>

        <div className="Tasks">
          <h1>LISTA DE TAREAS</h1>
          
          <SearchTodo />
          <TasksList>
            <TaskItem />
          </TasksList>

          <CreateTask />
        </div>

        <div className='Analytics'>
          <h1>PROGRESO</h1>
          <CounterTasks />
          <div className='App-icon'>
            <img src="./logo512.png" alt="icon-react" className='App-logo'></img>
          </div>
        </div>

			</div>

		</>
	);
}

export default App;
