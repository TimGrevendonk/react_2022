import "./App.css";
import NytApi from "./apis/nyt_api";

import NewsReader from "./components/news_reader";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <NewsReader />;
    </RecoilRoot>
  );
}

export default App;
