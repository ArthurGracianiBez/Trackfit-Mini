import { ExerciseList } from "./components/ExerciseList"
import { Welcome } from "./components/Welcome"
import {MotivationalMessage} from "./components/motivationalMessage"

function App() {

  return (
    <>
     <Welcome/>
     <ExerciseList />
     <MotivationalMessage
      message= "A cada repetição, você se aproxima da sua melhor versão. O corpo conquista o que a mente acredita."
      author= "Renato Cariani"
      />
    </>
  )
}

export default App
