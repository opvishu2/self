import Routss from "./routes";
import { ProSidebarProvider } from 'react-pro-sidebar';


function App() {
  return (
    <ProSidebarProvider>
      <Routss />
    </ProSidebarProvider>);
}

export default App;
