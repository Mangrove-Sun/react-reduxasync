import store from "./modules";
import { Provider } from "react-redux/es/exports";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from './pages/posts';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Link to="/">Posts</Link> |
      <Link to="/*">Temp</Link>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
