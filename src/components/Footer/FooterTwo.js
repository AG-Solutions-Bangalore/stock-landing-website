import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = (props) => {
  const {  copyrightTextClass } = props;

  return (
    <footer>
      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className={
                  copyrightTextClass
                    ? copyrightTextClass
                    : "it-copyright-text style-2 text-center"
                }
              >
                <p>
                  Copyright &copy; 2025{" "}
                  <a
                    href="https://ag-solutions.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AG Solution{" "}
                  </a>{" "}
                  || All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterTwo;
