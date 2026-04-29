import { Box, Text } from "ink";
import { Job } from "../types/Job";
import { useState } from "react";
import Spinner from "./components/Spinner";

type Props = {
  jobs: Job[];
  selectedIndex: number;
};

export default function Sidebar({ jobs, selectedIndex }: Props) {
  const [loading, setLoading] = useState(false);
  return (
    <Box flexDirection="column" padding={1} justifyContent="center" alignItems="center">
      <Text bold color="cyan">Kairos</Text>
      <Text dimColor>Job Intelligence</Text>
      <Box marginTop={1} flexDirection="column">
        {loading ? <Text><Spinner text="Loading jobs..." /></Text> : jobs.map((job, i) => (
          <Text key={job.id} inverse={i === selectedIndex}>
            {job.title}
          </Text>
        ))}
      </Box>
    </Box>
  );
}