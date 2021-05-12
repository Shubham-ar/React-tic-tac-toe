import React,{useState} from 'react'
import Icon from './components/Icon'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const itemArray = new Array(9).fill("empty")


const App = () => {
  const [isCross,setIsCross]= useState(false);
  const [winMessage,setWinMessage]= useState("");

  const reloadGame =()=>{
    //
  }
  const checkIsWinner=()=>{
    //
  }
  const changeItem=itemNumber=>{
    //
  }

  return (
    <Icon />
  );
}

export default App