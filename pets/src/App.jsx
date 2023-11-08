import { PetCard } from "./components/PetCard/PetCard"
import classes from './index.module.css'

const pets = [
  {id: 1, name:'Martin', age:'5', kind:'Cat', breed:'Persa'},
  {id: 2,name:'Lucas', age:'5', kind:'Dog', breed:'Bulldog'},
  {id: 3,name:'Maya', age:'5', kind:'Cat', breed:'Criollo'},
  {id: 4,name:'Roky', age:'5', kind:'Wolf', breed:'ibérico'},
  {id: 5,name:'Peluche', age:'5', kind:'Dog', breed:'Salchicha'},
  {id: 6,name:'Mono', age:'5', kind:'Wolf', breed:'árabe'},
]
function App() {
 
  return (
    <div className={classes.app}>
      <h1>My pets App</h1>
      <div className={classes.container}>
        {pets.map(pet => <PetCard key={pet.id} {...pet}/>)}
      </div>
    </div>
  )
}

export default App