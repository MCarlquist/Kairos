import { Box, Text } from "ink";

export default function MainView({ job }: { job?: any }) {
  if (!job) {
    return <Text>No job selected</Text>;
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Text bold>{job.title}</Text>
      <Text color="gray">{job.company} — {job.location}</Text>

      <Box marginTop={1}>
        <Text>Score: {job.score}</Text>
      </Box>

      <Box marginTop={1} flexDirection="column">
        <Text bold>Skills:</Text>
        
      </Box>

      <Box marginTop={1} flexDirection="column">
        <Text bold>Description:</Text>
        <Text wrap="truncate-end">
          {job.description.slice(0, 300)}...
        </Text>
      </Box>
    </Box>
  );
}