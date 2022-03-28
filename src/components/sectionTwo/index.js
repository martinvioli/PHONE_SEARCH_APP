import React, { useState, createRef, useEffect } from "react";
import styles from "./styles.modules.css";
import { connect } from "react-redux";
import { addPhoneCompASYNC } from "../../redux/actions";

export function SectionTwo(props) {
  const [phones, setPhones] = useState([]);
  const [refer, setRefer] = useState(createRef());

  async function phoneFetcher(query) {
    if (query === "empty" || query.includes("wa")) {
      setPhones((phones) => (phones = null));
    }
    var response = await fetch(
      `https://api-mobilespecs.azharimm.site/v2/search?query=${query}`
    );
    var responseOBJ = await response.json();
    await setPhones((phones) => (phones = responseOBJ.data.phones));
  }

  return (
    <div id="sectionTwo">
      <div id="center">
        <input
          type="text"
          placeholder="Search for a phone... 📱"
          ref={refer}
          onChange={() =>
            refer.current.value.trim().length > 0
              ? phoneFetcher(refer.current.value)
              : phoneFetcher("empty")
          }
        ></input>
        <div id="searchResults">
          {phones
            ? phones.map((e) => (
                <div className="phoneCard">
                  <img src={e.image} alt="phoneThumbnail" />
                  <div className="brandAndPhone">
                    <span className="brandName">{e.brand}</span>
                    <span className="phoneName"> {e.phone_name}</span>
                  </div>
                  <span
                    id="adder"
                    onClick={() => props.addPhoneCompASYNC(e.detail)}
                  >
                    🔎
                  </span>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addPhoneCompASYNC: (phone) => dispatch(addPhoneCompASYNC(phone)),
  };
}

export default connect(null, mapDispatchToProps)(SectionTwo);
