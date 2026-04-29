import { Box } from "ink";
import MainView from "./MainView";
import Sidebar from "./SideBar";

type Props = {
    jobs: any[];
    selectedIndex: number;
};

export default function Layout({ jobs, selectedIndex }: Props) {
    return (
        <Box flexDirection='row' height='100%'>
            {/* Sidebar */}
            <Box width="30%" borderStyle="round" borderColor="cyan" flexDirection="column">
                <Sidebar jobs={jobs} selectedIndex={selectedIndex} />
            </Box>

            {/* Main panel */}
            <Box width="70%" borderStyle="round" borderColor="green" flexDirection="column">
                <MainView job={jobs[selectedIndex]} />
            </Box>
        </Box>
    );
}