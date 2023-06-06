import "./styles.css";

import Phoenix from "../../assets/img/phoenix.jpg";
import Sylphine from "../../assets/img/sylphine.jpg";
import ShoenixBird from "../../assets/img/phoenix-bird.jpg";

import HomemDeFerroBlack from "../../assets/img/homem-de-ferro-black.jpg";
import HomemAranha from "../../assets/img/homem-aranha.jpg";

import Charmander1 from "../../assets/img/charmander1.jpg";
import Pikachu from "../../assets/img/pikachu.jpg";
import Charmander2 from "../../assets/img/charmander2.jpg";

import Falcao from "../../assets/img/falcao.jpg";
import Fenix from "../../assets/img/fenix.jpg";

import SamoyedDog from "../../assets/img/beautiful-white-samoyed-dog.jpg";
import Ultraleon from "../../assets/img/ultra-leon-highly.jpg";
import SylphineDuo from "../../assets/img/sylphine-duo.jpg";

export default function Gaalerry() {
  return (
    <section className="container gallery-container">

      <div className="tz-gallery">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href={Phoenix}>
              <img src={Phoenix} alt="..............." />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href={Sylphine}>
              <img src={Sylphine} alt="............................" />
            </a>
          </div>
          <div className="col-sm-12 col-md-4">
            <a className="lightbox" href={ShoenixBird}>
              <img src={ShoenixBird} alt="..........................." />
            </a>
          </div>

          <div className="col-sm-6 col-md-6">
            <a className="lightbox" href={HomemDeFerroBlack}>
              <img src={HomemDeFerroBlack} alt="............................" />
            </a>
          </div>
          <div className="col-sm-6 col-md-6">
            <a className="lightbox" href={HomemAranha}>
              <img src={HomemAranha} alt="............................" />
            </a>
          </div>

          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href={Charmander1}>
              <img src={Charmander1} alt="........................." />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href={Pikachu}>
              <img src={Pikachu} alt=".............................." />
            </a>
          </div>
          <div className="col-sm-12 col-md-4">
            <a className="lightbox" href={Charmander2}>
              <img src={Charmander2} alt="..............................." />
            </a>
          </div>

          <div className="col-sm-12 col-md-6">
            <a className="lightbox" href={Falcao}>
              <img src={Falcao} alt="............................" />
            </a>
          </div>
          <div className="col-sm-6 col-md-6">
            <a className="lightbox" href={Fenix}>
              <img src={Fenix} alt="............................" />
            </a>
          </div>

          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href={SamoyedDog}>
              <img src={SamoyedDog} alt="................." />
            </a>
          </div>

          <div className="col-sm-12 col-md-4">
            <a className="lightbox" href={Ultraleon}>
              <img src={Ultraleon} alt=".................." />
            </a>
          </div>
          <div className="col-sm-6 col-md-4">
            <a className="lightbox" href={SylphineDuo}>
              <img src={SylphineDuo} alt="................." />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
