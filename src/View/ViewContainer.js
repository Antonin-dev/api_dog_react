import React from "react";
import "./ViewContainer.scss";
import Image from "./Image";
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
import {useEffect, useState} from "react";

const ViewContainer = () => {
  const {id} = useParams();
  const [state, setstate] = useState(null);
  const url = `https://dog.ceo/api/breed/${id}/images`;
  let generateurImage;
  // console.log(state);



  useEffect(() => {
    const asyncFunction = async() => {
      const resultApi = await fetch(url);
      const result = await resultApi.json();
      setstate(result.message);
    };
    asyncFunction();
  }, [id]);

  if (state === null) {
    generateurImage = "Chargement";
  } else {
    generateurImage = state.map((element) => {
      return <Image
        imageUrl={element}
      />;
    });
  }



  return (
    <div className="imageDetail">
      {generateurImage}
    </div>
  );
};

export default ViewContainer;
