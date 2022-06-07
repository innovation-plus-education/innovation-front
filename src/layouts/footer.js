import React from "react";

function footer() {
  return (
    <section className="innovation-footer">
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
