import React from "react";
import { useState } from "react";
import Modal from "../modal/Modal";
import Button from "../UI/buttons/Button";
import "./MovieItem.css";
import styled from 'styled-components'


const MovieItem = (props) => {
  const [modals, setModals] = useState(false);
  const openModal = () => {
    setModals((prevState) => !prevState);
  };
  const Delete = (event) => {
    event.preventDefault();
    openModal();
    props.DeleteHandler(props.id);
  };
  return (
    <>
      {modals ? (
        <Modal>
          <Text >Are you sure you wanna delete?</Text>
          <ButtonCancel onClick={openModal}>NO</ButtonCancel>
          <ButtonYes onClick={Delete}>YES</ButtonYes>
        </Modal>
      ) : null}
      <li className="movie-element">
        <div className="movie-element__image">
          <img src={props.img} alt={props.alt} />

        </div>
        <div className="movie-element__info">
          <h2>{props.title}</h2>
          <p>{props.rating}/5 stars</p>
          <Button onClick={openModal}>DELETE</Button>
          <Button color="rgb(2, 2, 141)">EDIT</Button>
        </div>
      </li>
    </>
  );
};

export default MovieItem;

const Text = styled.p`
    font-size: large;
  font-weight: bold;
`
const ButtonCancel = styled.button`
  background-color: blue;
  padding: 0.4rem 0.7rem ;
  color: white;
  border :0;
  border-radius: 15px;
  font-size: large;
  font-weight: bold;
  margin-left: 18rem;
  margin-right: 2rem;
`
const ButtonYes = styled.button`
    background-color: red;
  padding: 0.4rem 0.7rem ;
  color: white;
  border :0;
  border-radius: 15px;
  font-size: large;
  font-weight: bold;
`