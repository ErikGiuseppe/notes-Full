import { useParams } from "react-router-dom";

const ContactDetails = ()=>{
    const {id} = useParams()
    return <div>
        <h1>Exibindo mais informações de contato? {id}</h1>
    </div>
}
export default ContactDetails