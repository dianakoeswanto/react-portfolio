import React from 'react';
import '../styles/style.css'

const Footer = () => {
    return(
        <footer className="d-flex flex-row justify-content-between bg-light">
            <div className="copyright">Diana Koeswanto</div>
            <div className="contact-links">
                <a href="mailto:d.koeswanto@gmail.com" className="btn-round mailto"><i className="fa fa-envelope"></i></a>
                <a href="https://github.com/dianakoeswanto" className="btn-round github"><i className="fa fa-github-alt"></i></a>
                <a href="http://www.linkedin.com/in/diana-koeswanto" className="btn-round"><i className="fa fa-linkedin"></i></a>
            </div>
        </footer>
    );
}

export default Footer;