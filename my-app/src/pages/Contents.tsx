import Mybtn from "../components/Mybtn"
import Pagecontent from "../components/Pagecontent"


const Contents = () => {
  return (
    <>
    <Mybtn title="Go Back" to={"/"}/>
   
    <Pagecontent idnum={1} heading="Functional Components" explan= "this is functional component"/>
    </>
  )
}

export default Contents