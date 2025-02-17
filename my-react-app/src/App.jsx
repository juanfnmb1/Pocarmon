/*import html2canvas from 'html2canvas'; */
import './App.css'
import Card from './components/card'



function App() {
  /*const [isFormVisible, setIsFormVisible] = useState(false); // Initialize the form visibility state */

 /* const toggleFormVisibility = () => {
    setIsFormVisible(prevState => !prevState); // Toggle the form visibility state
  }; */
  return (
     /* remember to run npm run dev to start site, since its run with vite
    */

    <div>
  <Card/>
    {/*<button onClick={toggleFormVisibility}>
        {isFormVisible ? 'Hide Card' : 'Show Card'}
  </button>*/}
      {/*{isFormVisible && <Card />}  */}
     {/*!isFormVisible && <CardResult/>*/}
    </div>
  )
}

export default App
