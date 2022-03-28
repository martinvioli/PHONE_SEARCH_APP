import React, { useEffect, useState } from "react";
import styles from "./styles.modules.css";
import { connect } from "react-redux";
import TableCreator from "./columnMaker";
import { delPhoneComp } from "../../redux/actions";

export function SectionThree(props) {
  return (
    <div id="sectionThree">
      {props.phoneCompOne
        ? TableCreator(props.phoneCompOne, 1, props.delPhoneComp)
        : null}
      {props.phoneCompTwo
        ? TableCreator(props.phoneCompTwo, 2, props.delPhoneComp)
        : null}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    delPhoneComp: (id) => dispatch(delPhoneComp(id)),
  };
}

function mapStateToProps(state) {
  return {
    phoneCompOne: state.phoneCompOne,
    phoneCompTwo: state.phoneCompTwo,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionThree);
