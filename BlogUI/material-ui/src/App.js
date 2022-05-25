import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import Feed from './Component/Feed';
import NavBar from './Component/NavBar';
import RightBar from './Component/RightBar';
import SideBar from './Component/SideBar';

function App() {
  return (
    <Box>
      <NavBar />

      <Stack direction="row" spacing={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
