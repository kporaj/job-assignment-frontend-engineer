import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./screens/ArticleScreen";
import ArticleListScreen from "./screens/ArticleListScreen";
import EditorScreen from "./screens/EditorScreen";
import LoginRegisterScreen from "./screens/LoginRegisterScreen";
import LogoutScreen from "./screens/LogoutScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/editor" exact component={EditorScreen} />
        <Route path="/editor/:slug" exact component={EditorScreen} />
        <Route path="/login" exact component={LoginRegisterScreen} />
        <Route path="/logout" exact component={LogoutScreen} />
        <Route path="/profile/:username" exact component={ProfileScreen} />
        <Route path="/profile/:username/favorites" exact component={ProfileScreen} />
        <Route path="/register" exact component={LoginRegisterScreen} />
        <Route path="/settings" exact component={SettingsScreen} />
        <Route path="/:slug" exact component={Article} />
        <Route path="/" component={ArticleListScreen} />
      </Switch>
    </Router>
  );
};

export default App;
