import React from 'react';
import './scss/Footer.css';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <div className="contacto">
                        <h1>Contactenos!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure totam, nam amet animi expedita assumenda
                quas hic neque dolor deserunt delectus ex? Commodi eum veniam ex eos voluptate dolorum? Pariatur.</p>
                        <div className="info">
                            <button> <b> Mas información</b>
                                <p class="boton"></p>
                            </button>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="footer">
                        <div class="suscribete">
                            <h2> Suscribete!</h2>
                            <input type="email" placeholder="Escribe tu correo" required id="suscribete" />
                            <button> <b> Suscribete!</b>
                                <p class="boton"></p>
                            </button>
                        </div>
                        <div class="direccion">
                            <h2> Dirección</h2>
                            <p>
                                <RoomRoundedIcon />(+57) 3205472340
                            </p>
                            <p>
                                <EmailIcon />correo@informacion.com
                            </p>
                        </div>
                        <div class="nosotros">
                            <h2>Acerca de nosotros</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id architecto exercitationem hic sunt
                            soluta.
                            Quidem dolores numquam suscipit facilis reiciendis libero cumque fuga, dolorem officia in
                            consectetur.
                    Numquam, asperiores obcaecati.</p>
                        </div>
                    </div>
                    <div class="derechos">
                        <p>©  2020. Todos los derechos reservados</p>
                        <div class="redes">
                            <a href="/">
                            <InstagramIcon />
                            </a>
                            <a href="/">
                            <FacebookIcon />
                            </a>
                            <a href="/">
                            <LinkedInIcon />
                            </a>
                            <a href="/">
                            <YouTubeIcon />
                            </a>
                            <a href="/">
                            <TelegramIcon />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        );

    };
};

export default Footer;