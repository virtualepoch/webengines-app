import "../../components/pyramid-scene/pyramid-scene.css";
import "../../components/pyramid-scene/pyramid-birds.css";
import LoadingOverlay from "../LoadingOverlay";

export default function PyramidScene() {
  return (
    <div className="pyramid-container">
      <LoadingOverlay />
      <div className="pyramid">
        <div className="front">
          <div className="logo"></div>
        </div>
        <div className="front small"></div>
        <div className="right"></div>
        <div className="right small"></div>
        <div className="back">
          <div className="logo"></div>
        </div>
        <div className="back small"></div>
        <div className="left"></div>
        <div className="left small"></div>
        <div className="bottom"></div>
        <div className="bottom shadow"></div>
      </div>
      <div className="floor"></div>

      <div class="bird-container one">
        <div class="bird one"></div>
      </div>

      <div class="bird-container two">
        <div class="bird two"></div>
      </div>

      <div class="bird-container three">
        <div class="bird three"></div>
      </div>

      <div class="bird-container four">
        <div class="bird four"></div>
      </div>

      {/* <div class="bird-container comic">
        <div class="bird comic"></div>
      </div> */}
    </div>
  );
}