

type contenttypes = {
    idnum:number,
    heading:string,
    explan:string
}

const Pagecontent = ({idnum,heading,explan}: contenttypes) => {
  return (
    <>
    <p>Sno: {idnum}</p>
    <h3>{heading}</h3>
    <p>{explan}</p>
    </>
  )
}

export default Pagecontent