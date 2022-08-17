import {addDoc, collection, getFirestore} from "firebase/firestore";
import {useState} from "react"

const ContactForm  = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        adress: ""
    });

    const [id, setId] = useState();

    const changeHandler = (ev) => {
        const {value, name} = ev.target;
        setForm({...form, [name]: value});
    }

    const submitHandler = (ev) => {
        ev.preventDefault();
        console.log(form);

        const db = getFirestore();

        const contactFormCollection = collection(db, "contactform");
   
        addDoc(contactFormCollection, form).then(snapshot => setId(snapshot.id));
    }

    return(
        <div>
            {(typeof id !== "undefined") ?
            <div>Mensaje enviado con id: {id}</div> :
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input name="name" id="name" value={form.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={form.email} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" value={form.message} onChange={changeHandler}></textarea>
                </div>
                <div>
                    <label htmlFor="adress">Dirección</label>
                    <textarea name="adress" id="adress" value={form.adress} onChange={changeHandler}></textarea>
                </div>
                <button>Enviar</button>
            </form>
            }
        </div>
    );
}


export default ContactForm