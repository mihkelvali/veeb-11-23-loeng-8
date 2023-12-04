import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';

const contentful = require("contentful");

export const client = contentful.createClient({
  space: 'qx2ar9bjezxj',
  environment: 'master',
  accessToken: 'ylm8BbUM7Np3QwF5Cd3BBOgEKkDKBNKNQSKNtRDGj8c'
})

function App() {

  // client.getAsset('3bWBolEsSobJZ7rdgMkrc8')
  // .then((asset) => console.log(asset.fields.file.url))

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news/:newsId" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
