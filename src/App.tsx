import React from "react";
import { Text } from "ink";
import Layout from "./ui/Layout";
import { useEffect, useState } from "react";
import { fetchJobs } from './fetch';
import { useInput, useApp } from "ink";

const App = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const { exit } = useApp();


  useEffect(() => {
    fetchJobs().then(setJobs)
    .catch(err => {
      console.log(err);
    })
  }, []);

  useInput((input, key) => {
    if (input === "q" || (key.ctrl && input === "c")) {
      exit();
    }
  });
    return <>
        <Layout jobs={jobs} selectedIndex={0} />
    </>
};

export default App;
