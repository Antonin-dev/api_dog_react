import React from "react";
import "./Aside.scss";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const Aside = () => {
  const history = useHistory();
  const [state, setstate] = useState(null);
  let tableauChien = "chargement";

  useEffect(() => {
    const getApi = async() => {
      const resultJson = await fetch("https://dog.ceo/api/breeds/list/all");
      const result = await resultJson.json();

      setstate(result.message);
    };

    getApi();
  }, []);


  if (state === null) {
    tableauChien = "chargement";
  } else {
    const tableau = () => {
      const tableauTemp = [];
      for (const key in state) {
        tableauTemp.push(<button
          onClick={() => history.push(`/dog/${key}`)}
          type="button"
        >
          {key}
                         </button>);
      }
      return tableauTemp;
    };
    tableauChien = tableau();
  }

  return (
    <div className="aside">
      {tableauChien}
    </div>
  );
};

export default Aside;
