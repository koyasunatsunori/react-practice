import React, { useState, useEffect } from "react";
import "./style.css";

const INITIAL_COUNT = 0;

const SampleComponetnt = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const callbackFunction = () => {
    document.title = "${count}回クリックされました";
  };
};
