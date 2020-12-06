import * as React from "react";
import "./index.css";
export const LiveShow: React.FC = () => {
  return (
    <>
      <div className="content-width">
        <div className="slideshow">
          {/* <!-- Slideshow Items --> */}
          <div className="slideshow-items">
            <div className="item">
              <div className="item-image-container">
                <img
                  className="item-image"
                  src="https://i.pinimg.com/564x/23/a4/86/23a4860b8b70b1eb27f2791b97aaee8e.jpg"
                />
              </div>
              {/* <!-- Staggered Header Elements --> */}
              <div className="item-header">
                <span className="vertical-part">
                  <b>H</b>
                </span>
                <span className="vertical-part">
                  <b>e</b>
                </span>
                <span className="vertical-part">
                  <b>l</b>
                </span>
                <span className="vertical-part">
                  <b>l</b>
                </span>
                <span className="vertical-part">
                  <b>o</b>
                </span>
              </div>
              {/* <!-- Staggered Description Elements --> */}
              <div className="item-description">
                <span className="vertical-part">
                  <b>My name is Tran Nhu.</b>
                </span>
                {/* <span className="vertical-part">
                  <b>ipsum</b>
  </span>*/}
              </div>
            </div>
            <div className="item">
              <div className="item-image-container">
                <img
                  className="item-image"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a1232e48702241.589f548dc6bee.jpg"
                />
              </div>
              {/* <!-- Staggered Header Elements --> */}
              <div className="item-header">
                <span className="vertical-part">
                  <b>D</b>
                </span>
                <span className="vertical-part">
                  <b>e</b>
                </span>
                <span className="vertical-part">
                  <b>v</b>
                </span>
                <span className="vertical-part">
                  <b>e</b>
                </span>
                <span className="vertical-part">
                  <b>l</b>
                </span>
                <span className="vertical-part">
                  <b>o</b>
                </span>
                <span className="vertical-part">
                  <b>p</b>
                </span>
                <span className="vertical-part">
                  <b>e</b>
                </span>
                <span className="vertical-part">
                  <b>r</b>
                </span>
              </div>
              {/* <!-- Staggered Description Elements --> */}
              <div className="item-description">
                <span className="vertical-part">
                  <b>I'm a React Developer.</b>
                </span>
                {/* <span className="vertical-part">
                  <b>ipsum</b>
                </span> */}
              </div>
            </div>
            <div className="item">
              <div className="item-image-container">
                <img
                  className="item-image"
                  src="https://i2.wp.com/www.futuristarchitecture.com/wp-content/uploads/2016/11/fantastic-small-living-room-interior-idea-7.jpg?w=700&ssl=1"
                />
              </div>
              {/* <!-- Staggered Header Elements --> */}
              <div className="item-header">
                <span className="vertical-part">
                  <b>E</b>
                </span>
                <span className="vertical-part">
                  <b>x</b>
                </span>
                <span className="vertical-part">
                  <b>p</b>
                </span>
                <span className="vertical-part">
                  <b>e</b>
                </span>
                <span className="vertical-part">
                  <b>r</b>
                </span>
                <span className="vertical-part">
                  <b>i</b>
                </span>
                <span className="vertical-part">
                  <b>e</b>
                </span>
                <span className="vertical-part">
                  <b>n</b>
                </span>
                <span className="vertical-part">
                  <b>c</b>
                </span>
                <span className="vertical-part">
                  <b>e</b>
                </span>
              </div>
              {/* <!-- Staggered Description Elements --> */}
              <div className="item-description">
                <span className="vertical-part">
                  <b>6 months of frontend programming with reactjs.</b>
                </span>
              </div>
            </div>
          </div>
          <div className="controls">
            <ul>
              <li className="control" data-index="0"></li>
              <li className="control" data-index="1"></li>
              <li className="control" data-index="2"></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
