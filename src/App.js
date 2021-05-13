import React, { useState } from "react";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const itemArray = new Array(9).fill("empty")

function App() {
  const [isCross, setIsCross] = useState(true)
  const [winMessage, setWinMessage] = useState("")
  var [count, setCount] = useState(0)



  const reset = () => {
    setWinMessage("");
    setIsCross(true);
    itemArray.fill("empty", 0, 9);
    setCount(0);
    
  }

  const checkIsWinner = () => {
    if (itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`);
      toast(`${itemArray[0]} wins, Resetting Automatically`, { type: "success" });
      reset();
    }
    else if (itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty") {
      setWinMessage(`${itemArray[3]} wins`);
      toast(`${itemArray[3]} wins, Resetting Automatically`, { type: "success" })
      reset();


    }
    else if (itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty") {
      setWinMessage(`${itemArray[6]} wins`);
      toast(`${itemArray[6]} wins, Resetting Automatically`, { type: "success" })
      reset();


    }
    else if (itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`);
      toast(`${itemArray[0]} wins, Resetting Automatically`, { type: "success" })
      reset();


    }
    else if (itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty") {
      setWinMessage(`${itemArray[1]} wins`);
      toast(`${itemArray[1]} wins, Resetting Automatically`, { type: "success" })
      reset();


    }
    else if (itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} wins`);
      toast(`${itemArray[2]} wins, Resetting Automatically`, { type: "success" })
      reset();


    }
    else if (itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`);
      toast(`${itemArray[0]} wins, Resetting Automatically`, { type: "success" })
      reset();


    }
    else if (itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} wins`);
      toast(`${itemArray[2]} wins, Resetting Automatically`, { type: "success" })
      reset();

    }
  }

  const changeItem = index => {

    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }
    else {
      if (itemArray[index] === "empty") {
        itemArray[index] = isCross ? "cross" : "circle";
        setCount(count += 1)
        setIsCross(!isCross)
      } else {
        return toast("The place is already filled", { type: "error" })
      }
    }
    if (count === 9) {
      reset();
      toast("No One Won, Resetting Automatically", { type: "info" })
    }
    checkIsWinner();

  }


  return (
    <Container className="p-5">
      <ToastContainer position='bottom-right' />
      <Row>
        <div className="mb-2">
          <h1 className="display-1 text-center text-warning">TIC-TAC-TOE</h1>
        </div>
      </Row>
      <Row>
        <Col md={6} className='offset-md-3' >
          {
            winMessage ? (<div className="mb-2 mt-2 text-success" style={{ textAlign: "center" }}>
              <h1>{winMessage}</h1>
            </div>
            ) : (
              <div className="" style={{ color: "white", textAlign: "center" }}>
                <h2 className="mb-3 mt-1 ">{isCross ? "Cross's" : "Circle's"} Turn</h2>
              </div>
            )
          }
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card className="card" color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>

          <button className='btn btn-outline-danger mt-4' onClick={reset}>
             Reset Now
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
