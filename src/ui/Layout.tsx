import { Box, Text } from "ink";
import MainView from "./MainView";
import Sidebar from "./SideBar";

type Props = {
    jobs: any[];
    selectedIndex: number;
    focusedPane: 'sidebar' | 'main';
};

export default function Layout({ jobs, selectedIndex, focusedPane }: Props) {
  return (
    <Box flexDirection="column" height="100%">
      <Box flexDirection="row" flexGrow={1}>
        <Box
          width="30%"
          borderStyle="round"
          borderColor={focusedPane === 'sidebar' ? 'cyan' : 'gray'}
          flexDirection="column"
        >
          <Sidebar jobs={jobs} selectedIndex={selectedIndex} />
        </Box>

        <Box
          width="70%"
          borderStyle="round"
          borderColor={focusedPane === 'main' ? 'green' : 'gray'}
          flexDirection="column"
        >
          <MainView job={jobs[selectedIndex]} />
        </Box>
      </Box>

      <Box marginTop={2} padding={1}>
        <Text dimColor>Use arrow keys to navigate, tab to switch panes, 'q' to quit</Text>
      </Box>
    </Box>
  );
}