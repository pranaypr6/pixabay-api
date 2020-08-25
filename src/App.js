import React, { useState, useEffect } from "react";
import "./App.css";
import Image from "./components/Image";
import Axios from "axios";
import Appbar from "./components/Appbar";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(API_KEY);
  const [query, setQuery] = useState("code");
  const [imagesPerPage, setImagesPerPage] = useState(10);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    Axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=${imagesPerPage}`
    ).then((resp) => {
      setData(resp.data.hits);
    });
  }, [query, imagesPerPage]);

  return (
    <div>
      <Appbar
        query={query}
        setQuery={setQuery}
        imagesPerPage={imagesPerPage}
        setImagesPerPage={setImagesPerPage}
      />
      <div className="pics">
        {data &&
          data.map((img) => (
            <Image
              key={img.id}
              img={img}
              setModalImg={setModalImg}
              handleOpen={handleOpen}
            />
          ))}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          height: "90vh",
          width: "80vw",
          margin: "auto",
        }}
      >
        <Fade in={open}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {modalImg && (
              <img
                src={modalImg}
                alt=""
                height="100%"
                width="100%"
                style={{ maxHeight: "90vh" }}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default App;
