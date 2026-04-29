import React from "react";
import Layout from "./ui/Layout";
import { useEffect, useState } from "react";
import { fetchJobs } from './fetch';
import { useInput, useApp } from "ink";

const App = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [focusedPane, setFocusedPane] = useState<'sidebar' | 'main'>('sidebar');
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
      return;
    }

    if (key.tab) {
      setFocusedPane((current) => current === 'sidebar' ? 'main' : 'sidebar');
      return;
    }

    if (focusedPane === 'sidebar') {
      if (key.upArrow) {
        setSelectedIndex((current) => Math.max(0, current - 1));
      }

      if (key.downArrow) {
        setSelectedIndex((current) => Math.min(jobs.length - 1, current + 1));
      }
    }
  });
    return <>
        <Layout jobs={jobs} selectedIndex={selectedIndex} focusedPane={focusedPane} />
    </>
};

export default App;
