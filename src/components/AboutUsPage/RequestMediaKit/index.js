import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
const RequestMediaKit = () => {
  return (
    <div className="request-media-kit">
      <div className="request-media-kit-details">
        <h4>CONTACT US</h4>
        <h2>Need our media kit, more information or a customized campaign?</h2>
        <p className="align-items-center justify-content-center">
          <span>
            <a className="btn link is-primary" target="_blank" rel="noopener">
              <span>
                <h4 className="request-media-kit-h4">BOOK A DEMO</h4>
              </span>
            </a>
          </span>{" "}
          with our team, or fill out the form and we will get back to you as
          soon as possible
        </p>
      </div>
      <div className="request-medit-kit-form">
        <Form>
          <Form.Group className="mb-3 ml-2">
            <Form.Control type="text" placeholder="Enter Full Name" className="request-media-kit-form-element" />
          </Form.Group>

          <Form.Group className="mb-3 ml-2">
            <Form.Control type="text" placeholder="Company/Studio Name" className="request-media-kit-form-element" />
          </Form.Group>

          <Form.Group className="mb-3 ml-2" controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter email" className="request-media-kit-form-element" />
          </Form.Group>

          <Form.Group className="mb-3 ml-2">
            <Form.Control type="text" placeholder="Phone" className="request-media-kit-form-element" />
          </Form.Group>

          <Form.Group className="mb-3 ml-2">
            <Form.Control type="text" placeholder="Website"  className="request-media-kit-form-element" />
          </Form.Group>

          <Form.Group className="mb-3 ml-2">
            <Form.Control type="text" placeholder="Country"  className="request-media-kit-form-element" />
          </Form.Group>

          <Form.Group className="mb-3 ml-2 form-question">
            <Form.Control type="text" placeholder="How did you hear about us?"  className="request-media-kit-form-element" />
          </Form.Group>

          <Form.Group className="mb-3 ml-2 form-question" controlId="exampleForm.ControlTextarea1" >
            <Form.Control as="textarea" rows="8" type="text" placeholder="Reason for request"  className="request-media-kit-form-request-element" />
          </Form.Group>

          <p className="form-question ml-2">* These fields are mandatory.</p>

          <Form.Group className="mb-3 ml-2 form-question" id="formGridCheckbox">
            <Form.Check type="checkbox" label="I declare that I have read and accept the privacy policy" className="request-media-kit-form-checkbox" />
          </Form.Group>

          <Button className="mb-3 request-media-kit-form-button" variant="primary" type="submit">
            Send Request
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RequestMediaKit;
