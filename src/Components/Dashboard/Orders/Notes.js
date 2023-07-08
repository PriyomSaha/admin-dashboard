import { React, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsFillClipboard2MinusFill } from "react-icons/bs";

function Notes(props) {
  const [show, setShow] = useState(false);
  const [hasNotes, setHasNotes] = useState();

  const [notes, setNotes] = useState(props.notes);
  const [updatedNotes, setUpdatedNotes] = useState(props.notes);

  useEffect(() => {
    if (notes.length !== 0) setHasNotes(true);
    else setHasNotes(false);
  }, [notes]);

  return (
    <>
      <div
        role="button"
        className="btn bg-transparent position-relative w-auto pt-0 pe-0"
        onClick={() => setShow(!show)}
      >
        <BsFillClipboard2MinusFill size={"1.3rem"} />
        {hasNotes ? (
          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">Notes Available</span>
          </span>
        ) : null}
      </div>
      <Modal
        show={show}
        onHide={() => setShow(!show)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Order Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">Order id : {props.id}</div>
          <Form.Control
            as="textarea"
            placeholder="Write anything related to this order... "
            value={updatedNotes}
            onChange={(e) => {
              setUpdatedNotes(e.target.value);
            }}
            rows={5}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(!show);
              setNotes(updatedNotes);
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Notes;
