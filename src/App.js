import Routss from "./routes";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux'
import global_store from './global_store/store'

function App() {
  return (
    <Provider store={global_store}>
      <ProSidebarProvider>
        <Routss />
      </ProSidebarProvider>
    </Provider>)
}

export default App;
