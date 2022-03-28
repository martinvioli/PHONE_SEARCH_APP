import React, { useEffect, useState } from "react";
import styles from "./styles.modules.css";

export default function TopComp(props) {
  var [data, setData] = useState([]);

  async function fetcher() {
    var response = await fetch(props.list);
    var responseOBJ = await response.json();
    await setData((data) => (data = responseOBJ.data.phones.splice(0, 10)));
  }

  useEffect(() => {
    fetcher();
  }, []);

  console.log(data);

  return (
    <>
      <div id="list">
        {data.length === 10 ? (
          <ol>
            <p id="icon">{props.icon}</p>
            <p>{props.text}</p>
            {data.map((e) => (
              <li key={e.phone_slug}>
                <span>{e.phone_name}</span>
              </li>
            ))}
          </ol>
        ) : (
          <div class="lds-dual-ring"></div>
        )}
      </div>
    </>
  );
}
