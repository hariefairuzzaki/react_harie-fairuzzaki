import React from "react";
import "../assets/css/main.css";
import LogoAtas from "../assets/img/logo-ALTA@2x.png";
import FotoProfile from "../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

export default function Home() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="alterra">
                <a href="/home">
                  <img className="logo-atas" src={LogoAtas} alt="Logo Atas" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row align-items-center navig">
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-end">
                  <a href="/home" className="aktif">
                    HOME
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                  <a href="#foo">ABOUT</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-start">
                  <a href="#foo">EXPERIENCE</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-end">
                  <a href="#foo">CONTACT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container h-100">
        <div className="row align-items-center isi-home">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <img id="foto-profil" src={FotoProfile} alt="Foto Profile" />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="main-p">
              <p className="sapaan">Hi, my name is</p>
              <p className="nama">Anne Sullivan</p>
              <p className="hobi">I build things for the web</p>
              <p className="tombol">
                <a href="#foo">Get In Touch</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
