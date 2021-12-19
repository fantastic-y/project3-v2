import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./css/styles.css";

const FooterPage = () => {
  return (
    <MDBFooter className="footer font-small pt-4 mt-4">
        <div className="footer-space"></div>
      <MDBContainer fluid >
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">About MangaFan</h5>
            <p>
              We aim to make the best and the most professional manga website in Southern California. We are here to gather all the manga fans together and provide a platform for you to communicate and make friends.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">About Manga</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/billboard">Billboard</a>
              </li>
              <li className="list-unstyled">
                <a href="/news">News</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">About Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/about">About</a>
              </li>
              <li className="list-unstyled">
                <a href="/request">Request</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <span> mangafan.com </span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;