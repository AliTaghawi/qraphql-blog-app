import { Navigate, Route, Routes } from "react-router-dom";

//components
import HomePage from "./components/Home/";
import Layout from "./components/layout";
import AuthorPage from './components/AuthorPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/*" element={<Navigate to='/' />} />
      </Routes>
    </Layout>
  );
}

export default App;
