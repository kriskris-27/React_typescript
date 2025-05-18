import Mybtn from "../components/Mybtn"

const Home = () => {
    
  return (
    <>
    <h3 className="font-mono pb-3 ">Hello devs,we are in React+Typescript </h3>
            <p className="pb-2">Click here to start</p>
            <Mybtn title="Get Started" to="/contents"/>
    </>
     
  )
}

export default Home