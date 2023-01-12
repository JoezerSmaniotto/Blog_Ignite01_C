
import { Header } from './components/Header';
import {Post} from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {
 

  return (
    <>
      <Header/>


      <div className={styles.wrapper}>
          <Sidebar/>
          <main>

         	  <Post 
              autor="Joezer"
              content="Lorem upsum sit ament Lorem upsum sit ament"
            />
            <Post 
              autor="Natalia"
              content="Esta de aniversário dia 17"
            /> 
          </main>
      </div>
   </>
  )
}

export default App