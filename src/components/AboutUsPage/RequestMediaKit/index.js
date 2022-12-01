import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
const RequestMediaKit = () => {
  return (
    <div className="request-media-kit">
      <div className="request-media-kit-details">
        <h4>CONTACT US</h4>
        <span className="border-black"></span>
        <h2>Need our media kit, more information or a customized campaign?</h2>
        <p className="align-items-center justify-content-center">
          <span>
            <a className="btn link is-primary" target="_blank" rel="noopener">
              <span>
                <h4>BOOK A DEMO</h4>
              </span>
            </a>
          </span>{" "}
          with our team, or fill out the form and we will get back to you as
          soon as possible
        </p>
      </div>
      <div className="request-medit-kit-form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="input" placeholder="Enter Full Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="input" placeholder="Company/Studio Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="tel" placeholder="Phone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Control type="input" placeholder="Website" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="" placeholder="Country" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Control type="input" placeholder="How did you hear about us?" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Control type="" placeholder="Reason for request" />
          </Form.Group>

          * These fields are mandatory.

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="I declare that I have read and accept the privacy policy" />
          </Form.Group>

          <Button className="mb-3" variant="primary" type="submit">
            Send Request
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RequestMediaKit;
