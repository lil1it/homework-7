import React, { useState } from "react";
import Modal from "../modal/Modal";
import MovieForm from "../MovieForm/MovieForm";
import Button from "../UI/buttons/Button";

import "./Header.css";

const Header = ({NewMovieHandler}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };

  return (
    <>
     {modalVisible ? (
        <Modal onClose={modalHandler}>
          <MovieForm
            onClose={modalHandler}
            NewMovieHandler={NewMovieHandler}
          />
        </Modal>
      ) : null}
      <nav className="header-nav">
        <h1 className="header-title"> Favorite movies </h1>
        <Button color="orange" onClick={modalHandler}> ADD MOVIES </Button>
      </nav>
    </>
  );
};

export default Header;
