import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tasks from '../../components/Tasks';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('renders', () => {
  render(<Tasks />);
});


it.each([
  {id: 1, label: "dishes", done: false },
  {id: 1, label: "paint", done: false }
  
])("shows label of single task given single task response", async (taskObj) => {
  mockedAxios.get.mockResolvedValue({ 
    data: { tasks: [taskObj] } 
  });

  render(<Tasks />);
  
  expect((await screen.findAllByText(taskObj.label)).length).toBe(1);
});
