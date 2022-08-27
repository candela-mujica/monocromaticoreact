import {useState} from "react"
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {useCartContext} from '../../context/CartContext';
import './contactForm.css';

const ContactForm  = () => {
    const {cart, totalPrice} = useCartContext();
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
        const data = {
            ...form,
            products: cart
        }

        const db = getFirestore();
        const contactFormCollection = collection(db, "contactform");
        addDoc(contactFormCollection, data).then(snapshot => setId(snapshot.id));
    }

    return(
        <div>
            {(typeof id !== "undefined") ?
            <div>Mensaje enviado con id: {id}</div> :
            <form onSubmit={submitHandler}>
                <div className="form">
                    <div className="div">
                        <label htmlFor="name" className="categoria">Nombre</label>
                        <input name="name" id="name" value={form.name} onChange={changeHandler} className="input"/>
                    </div>
                    <div className="div">
                        <label htmlFor="email" className="categoria">Email</label>
                        <input type="email" name="email" id="email" value={form.email} onChange={changeHandler} className="input" required/>
                    </div>
                    <div className="div">
                        <label htmlFor="message" className="categoria">Mensaje</label>
                        <textarea name="message" id="message" value={form.message} onChange={changeHandler} className="input"></textarea>
                    </div>
                    <div className="div">
                        <label htmlFor="adress" className="categoria">Dirección</label>
                        <textarea name="adress" id="adress" value={form.adress} onChange={changeHandler} className="input" required></textarea>
                    </div>
                </div>
                <div className="botonTerminar">
                    <button className="terminar">Terminar compra</button>
                </div>
            </form>
            }
        </div>
    );
}


export default ContactForm