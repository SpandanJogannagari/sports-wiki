import { useState } from "react";



const Yearfilter = (props) => {

  return (
    <div>
    <select onChange={(ev) => {
        // console.log(ev);
        props.getYearValue(ev.target.value)
    }} name="year" id="year-value">
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
    </select>
</div>
  );
};

export default Yearfilter;