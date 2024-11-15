import React from "react";

import "./App.css";
import List from "./List";
import { faker } from "@faker-js/faker";

const colors = [
  "#f4b8e4",
  "#ca9ee6",
  "#ea999c",
  "#e78284",
  "#99d1db",
  "#a6d189",
  "#e5c890",
  "#85c1dc",
  "#b7bdf8",
  "#94e2d5",
] as const;

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: faker.lorem.words(),
  description: faker.lorem.paragraph(),
  color: colors[i % colors.length],
}));

function App() {
  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

export default App;
