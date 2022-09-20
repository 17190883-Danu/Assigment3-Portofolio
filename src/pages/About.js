import React from "react";
import { Component } from "react";

class About extends Component {
    render() {
        return (
        <div className="About">
       <h1>About</h1>
          <p>Saya Danu Tri Prasetyo mahasiswa Teknologi Informasi dari Universitas Bina Sarana Informatika. Sebagai 
            mahasiswa Teknologi Informasi, saya sangat termotivasi untuk mengembangkan kemampuan secara profesional.
            Saya akan berusaha untuk dapat menghasilkan ide menarik khususnya bahasa pemograman.
          </p>
          <p className="fst-italic">
              Biodata singkat mengenai saya
            </p>
          <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><strong>TTL:</strong> <span>Bekasi, 28 Oktober 2001</span></li>
                  <li><strong>Email:</strong> <span>danutriprasetyo138@gmail.com</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><strong>Phone:</strong> <span>+62 838 1590 4335</span></li>
                  <li><strong>City:</strong> <span>Bekasi</span></li>
                </ul>
              </div>
        </div>
        </div>
        )
    }
}

export default About;