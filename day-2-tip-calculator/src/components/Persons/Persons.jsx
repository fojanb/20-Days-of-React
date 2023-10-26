const Persons = ({changeHandler}) => {
    return(<input type="number" name="persons" min={0} onChange={changeHandler} placeholder="How many people?"/>)
}
export default Persons;