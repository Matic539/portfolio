import React, { useState } from 'react';
import './styles/Main/Home.css';
import './styles/Main/About.css';
import './styles/Main/Projects.css';
import './styles/Main/Contact.css';
// Import the images that we will be using in
import imagenH from './img/tec/html-img.png';
import imagenC from './img/tec/css-img.png';
import imagenJS from './img/tec/JS-img.png';
import imagenR from './img/tec/react-img.png';
import yo from './img/yo-img.jpg';
import insta from './img/social/instagram.svg';
import github from './img/social/github-icon.png';
import linkedin from './img/social/linkedin.svg';
import incognito from './img/incognito-img.png';



export default function Contenido() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías añadir lógica para enviar los datos a un servidor
        console.log(formData);
        alert('Mensaje enviado!');
    };

    return (
        <main>
            <section className='home' id='inicio'>
                <div className='home-container'>
                    <h1>Matias López</h1>
                    <h1 className='home-job'>Front-End Developer</h1>
                    <ul>
                        <li><img src={imagenH} alt="html-img" /></li>
                        <li><img src={imagenC} alt="css-img" /></li>
                        <li><img src={imagenJS} alt="js-img" /></li>
                        <li><img src={imagenR} alt="react-img" /></li>
                    </ul>
                    <button className='btn'>Descargar CV</button>
                </div>
            </section>

            <section className='about' id='sobreMi'>
                <div className='about-container'>
                    <div className="social">
                        <img src={yo} alt="Matias-img" className='me-img' />
                        <div className="links">
                            <ul>
                                <li><a href="https://www.instagram.com/dinamic_official/"><img src={insta} alt="Instagram" /></a></li>
                                <li><a href="https://github.com/Matic539"><img src={github} alt="GitHub" /></a></li>
                                <li><a href="https://www.linkedin.com/in/matias-l%C3%B3pez-6978b5268/"><img src={linkedin} alt="Linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='aboutme'>
                        <h2>Hola!</h2>
                        <h1>Soy Matias López, un apasionado por el desarrollo web y la programación.</h1>
                        <p>
                            Tengo 20 años y actualmente estoy estudiando Ingenieria Informatica donde he adquirido habilidades sólidas en
                            programación, estructuras de datos, algoritmos y desarrollo de sistemas. Me gusta el font end
                            y tambien estoy aprendidendo back end. Mi objetivo es convertirme en un desarrollador full stack experto,
                            especializándome en soluciones escalables y eficientes.
                            Estoy constantemente aprendiendo y buscando oportunidades que me desafíen y me permitan crecer profesionalmente.
                        </p>
                        <p>
                            Actualmente vivo en Iquique, Chile.
                        </p>
                    </div>
                </div>
            </section>

            <section className='projects' id='proyectos'>
                <h2 className='title'><span>Proyectos</span></h2>
                <div className='projects-container'>
                    <div className="card">
                        <a href="#">
                            <div className="card-project">
                                <div>
                                    <img src={incognito} alt="¿?" />
                                </div>
                                <div className='desc'>
                                    <h3>¡PROXIMAMENTE!</h3>
                                    <p>
                                        Proyecto en construcción.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#">
                            <div className="card-project">
                                <div>
                                    <img src={incognito} alt="¿?" />
                                </div>
                                <div className='desc'>
                                    <h3>¡PROXIMAMENTE!</h3>
                                    <p>
                                        Proyecto en construcción.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#">
                            <div className="card-project">
                                <div>
                                    <img src={incognito} alt="¿?" />
                                </div>
                                <div className='desc'>
                                    <h3>¡PROXIMAMENTE!</h3>
                                    <p>
                                        Proyecto en construcción.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#">
                            <div className="card-project">
                                <div>
                                    <img src={incognito} alt="¿?" />
                                </div>
                                <div className='desc'>
                                    <h3>¡PROXIMAMENTE!</h3>
                                    <p>
                                        Proyecto en construcción.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#">
                            <div className="card-project">
                                <div>
                                    <img src={incognito} alt="¿?" />
                                </div>
                                <div className='desc'>
                                    <h3>¡PROXIMAMENTE!</h3>
                                    <p>
                                        Proyecto en construcción.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#">
                            <div className="card-project">
                                <div>
                                    <img src={incognito} alt="¿?" />
                                </div>
                                <div className='desc'>
                                    <h3>¡PROXIMAMENTE!</h3>
                                    <p>
                                        Proyecto en construcción.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className='contact' id='contacto'>
                <div className="contact-container">
                    <h2>Contacta conmigo!</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Tu correo electrónico"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tu mensaje"
                            required
                        />
                        <div className='btn-send'>
                            <address>
                                Envíame un email:
                                <a href="mailto:matias.lopez.renato@gmail.com">matias.lopez.renato@gmail.com</a>
                            </address>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/matias-l%C3%B3pez-6978b5268/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/Matic539" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.instagram.com/dinamic_official/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </section>
        </main>
    )
}
