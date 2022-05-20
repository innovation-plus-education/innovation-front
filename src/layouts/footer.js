import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function footer(props) {
  console.log(props);
  return (
    <section
      style={{
        "background-color": "#07a8a0",
        color: "white !important",
        marginTop: "2em",
        fontWeight: "600",
      }}
    >
      <footer className="text-center text-white">
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <button
                type="button"
                className="btn btn-outline-innovation-light btn-rounded"
              >
                Contact Us
              </button>
            </p>
          </section>
        </div>

        <div className="text-center p-3">
          © 2020 Copyright:
          <a
            className="text-white"
            href="https://mdbootstrap.com/"
            style={{ textDecoration: "none", marginLeft: "1em" }}
          >
            Willy NOUBISSIE
          </a>
        </div>
      </footer>
    </section>
  );
}

export default footer;
