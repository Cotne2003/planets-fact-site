import "./MobileMenu.css";
import mercury from "/planet-mercury.svg";
import venus from "/planet-venus.svg";
import earth from "/planet-earth.svg";
import mars from "/planet-mars.svg";
import jupiter from "/planet-jupiter.svg";
import saturn from "/planet-saturn.svg";
import uranus from "/planet-uranus.svg";
import neptune from "/planet-neptune.svg";
import vector from "/icon-chevron.svg";

interface props {
  setChoosePlanet: (value: number) => void;
  setMobileMenu: (value: boolean) => void;
}

export default function MobileMenu(props: props) {
  return (
    <div className="mobile-menu">
      <ul>
        <li
          onClick={() => {
            props.setChoosePlanet(1);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={mercury} alt="" />
            <span>mercury</span>
          </div>
          <img src={vector} alt="" />
        </li>
        <li
          onClick={() => {
            props.setChoosePlanet(2);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={venus} alt="" />
            <span>venus</span>
          </div>
          <img src={vector} alt="" />
        </li>
        <li
          onClick={() => {
            props.setChoosePlanet(3);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={earth} alt="" />
            <span>earth</span>
          </div>
          <img src={vector} alt="" />
        </li>
        <li
          onClick={() => {
            props.setChoosePlanet(4);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={mars} alt="" />
            <span>mars</span>
          </div>
          <img src={vector} alt="" />
        </li>
        <li
          onClick={() => {
            props.setChoosePlanet(5);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={jupiter} alt="" />
            <span>jupiter</span>
          </div>
          <img src={vector} alt="" />
        </li>
        <li
          onClick={() => {
            props.setChoosePlanet(6);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={saturn} alt="" />
            <span>saturn</span>
          </div>
          <img src={vector} alt="" />
        </li>
        <li
          onClick={() => {
            props.setChoosePlanet(7);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={uranus} alt="" />
            <span>uranus</span>
          </div>
          <img src={vector} alt="" />
        </li>
        <li
          onClick={() => {
            props.setChoosePlanet(8);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={neptune} alt="" />
            <span>neptune</span>
          </div>
          <img src={vector} alt="" />
        </li>
      </ul>
    </div>
  );
}