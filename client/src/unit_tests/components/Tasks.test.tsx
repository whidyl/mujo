import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Tasks from "../../components/Tasks";
import axios from "axios";
import { act } from "react-dom/test-utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("renders with no data", async () => {
  mockedAxios.get.mockResolvedValue({
    data: {},
  });

  render(<Tasks />);

  await waitFor(() => {
    expect(screen.queryAllByTestId("task").length).toBe(0);
  })  
});

it.each([
  { id: 1, label: "dishes", done: false },
  { id: 1, label: "paint", done: false },
])("shows label of single task given single task response", async (taskObj) => {
  mockedAxios.get.mockResolvedValue({
    data: { tasks: [taskObj] },
  });

  render(<Tasks />);

  
  expect((await screen.findAllByText(taskObj.label)).length).toBe(1);
  expect((await screen.findAllByTestId("task")).length).toBe(1);
});

it.each([
  [
    [
      { id: 1, label: "dishes", done: false },
      { id: 2, label: "paint", done: false },
    ],
    [
      { id: 1, label: "dishes", done: false },
      { id: 2, label: "paint", done: false },
      { id: 3, label: "pet dog", done: true },
    ],
  ],
])(
  "shows label of single task given single task response",
  async (taskList) => {
    mockedAxios.get.mockResolvedValue({
      data: { tasks: taskList },
    });

    const tasksCUT = render(<Tasks />);

    expect((await tasksCUT.findAllByTestId("task")).length).toBe(taskList.length);
  }
);

// it.each([
//   [{id: 1, label: "dishes", done: false }, {id: 1, label: "paint", done: false }]
// ])("shows label of every task in multiple task response")
