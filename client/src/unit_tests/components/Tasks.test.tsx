import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Tasks, { GetTasksResponse } from "../../components/Tasks";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const setMockResponse = (responseData: GetTasksResponse) => {
  mockedAxios.get.mockResolvedValue({
    data: responseData,
  });
};

it("renders with no tasks from response", async () => {
  setMockResponse({ tasks: [] });

  await act(async () => {
    render(<Tasks />);
  });

  await wait(100);
  expect(screen.queryAllByTestId("task").length).toBe(0);
});

it.each([
  { id: 1, label: "dishes", done: false },
  { id: 1, label: "paint", done: false },
])("shows label of single task given single task response", async (taskObj) => {
  setMockResponse({ tasks: [taskObj] });

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
  ],
  [
    [
      { id: 1, label: "dishes", done: false },
      { id: 2, label: "paint", done: false },
      { id: 3, label: "pet dog", done: true },
    ],
  ],
])("shows label of every task in multiple task response", async (taskList) => {
  setMockResponse({ tasks: taskList });

  render(<Tasks />);

  expect((await screen.findAllByTestId("task")).length).toBe(taskList.length);
});
