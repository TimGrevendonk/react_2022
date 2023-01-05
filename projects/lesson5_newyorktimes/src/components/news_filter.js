import { useEffect, useState } from "react";
import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";
import { recoilNewsItems, recoilNewsItemType } from "../store";

export default function NewsFilter() {
  // uncomment sections below and use the array to fill you select list
  const sections = [
    "home",
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "insider",
    "magazine",
    "movies",
    "national",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "tmagazine",
    "travel",
    "upshot",
    "world",
  ];

  const [selection, setSelection] = useRecoilState(recoilNewsItemType);
  const [currentSelection, setCurrentSelection] = useState(selection);
  // Clear the cache of the recoilItemList
  const clearCache = useRecoilRefresher_UNSTABLE(recoilNewsItems);

  useEffect(() => {
    clearCache();
  });

  function updateSection(event) {
    setCurrentSelection(event.target.value);
  }

  function submitSection(event) {
    // prevent default behavior, otherwise the form is submitted and the application is restarted
    event.preventDefault();
    // add your code below
    setSelection(currentSelection);
  }

  return (
    <section className="callout secondary">
      <h5 className="text-center">Filter by Category</h5>
      <form>
        <div className="row">
          <div className="large-6 columns">
            <select onChange={updateSection} defaultValue={selection}>
              {/* show all sections */}
              {sections.map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="medium-6 columns">
            <button onClick={submitSection} className="button expanded">
              Retrieve
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
