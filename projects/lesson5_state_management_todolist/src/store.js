import { atom, selector } from "recoil";
import WeatherApi from "./apis/weather_api";

// * add "recoil" in front of the names and key names
export const cityState = atom({
  key: "cityState",
  default: "Antwerp",
});
export const weatherForecastQuery = selector({
  key: "weatherForecastQuery",
  get: async ({ get }) => {
    const result = await WeatherApi.getWeatherSlow(get(cityState));
    return result.data.list;
  },
});

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "This is a Text", // default value (aka initial value)
});

export const textSizeState = selector({
  key: "testSizeState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export const todoListState = atom({
  key: "todoListState",
  default: [
    { id: 1, text: "Study React JS", isCompleted: true },
    { id: 2, text: "Practice Recoil State Management", isCompleted: false },
  ],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const todoListFilteredState = selector({
  key: "todoListFilteredState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isCompleted);
      case "Show Uncompleted":
        return list.filter((item) => !item.isCompleted);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(
      (item) => item.isCompleted
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = Math.round(
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100
    );
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
