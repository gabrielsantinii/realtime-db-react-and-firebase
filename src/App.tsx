import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import GlobalStyles from "./styles/GlobalStyles";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:roomId" component={Room} />
        </Switch>
      </AuthContextProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
