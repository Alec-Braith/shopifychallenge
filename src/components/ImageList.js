import React from "react";
import Post from "./Post";
import { Container } from "react-bootstrap";
import "../styles/main.css";

const ImageList = (props) => {
  const images = props.images.map(
    ({ explanation, url, hdurl, date, title }) => {
      return (
        <Post key={hdurl}>
          <img
            src={url}
            description={explanation}
            title={title}
            date={date}
            alt={""}
          />
        </Post>
      );
    }
  );
  return (
    <Container className="postList">
      <div className="postList--title">Spacestagram</div>
      <div className="postList--subtitle">
        Brought to you by NASA's Astronomy Photo of the Day API{" "}
      </div>
      <div>{images}</div>
    </Container>
  );
};

export default ImageList;
