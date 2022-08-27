import './home.css';
import video from '../../multimedia/videoinicio.mp4'
import harry from '../../multimedia/harry.webp'
import iconoInstagram from '../../multimedia/iconoInstagram.webp'
import iconoPinterest from '../../multimedia/iconoPinterest.webp'
import iconoTiktok from '../../multimedia/iconoTiktok.webp'


function Home (){
    return(
        <div>
            <video src={video} muted loop width="100%" className="video"></video>
            <section className="homeContainer">
                <div className="columna1">
                    <h1 className="h1">Quién soy...</h1>
                    <p className="p">Hace un tiempo, en pleno aburrimiento de cuarentena, decidí aprender a bordar con el objetivo de hacer almohadones para mi cuarto. Me pareció tan entretenido que bordé y bordé, hasta que ya no tenía más lugares donde ponerlos. Así fue como empecé a averiguar y compré remeras lisas que bordé para mí misma. Pero eso no era suficiente, yo quería seguir, así que mis amigas me convencieron de comenzar a venderlas. De esa forma, yo pude continuar haciendo esto que tanto me gusta y, al mismo tiempo, ver como personas se visten con las remeras que yo con tanto cariño hice. Después, gracias a los pedidos que fui recibiendo, incorporé a mis productos mi locura por algunos de mis ídolos y mi emprendimiento se transformó en una combinación de las cosas que más amo y disfruto.</p>
                </div>
                <div className="columna2">
                    <img src={harry} className="imagen" alt="" />
                </div>
            </section>
            <footer class="footer">
                <a href="https://www.instagram.com/monocromatico.handmade/?hl=es-la" target="_blank">
                    <img src={iconoInstagram} alt="seguime en instagram" className="icono"/>
                </a>
                <a href="https://ar.pinterest.com/laurarube2001/_created/" target="_blank">
                    <img src={iconoPinterest} alt="seguime en pinterest" className="icono"/>
                </a>
                <a href="https://www.tiktok.com/@monocromatico.handmade?" target="_blank">
                    <img src={iconoTiktok} alt="seguime en tiktok" className="icono"/>
                </a>
            </footer>
        </div>
    )
}

export default Home