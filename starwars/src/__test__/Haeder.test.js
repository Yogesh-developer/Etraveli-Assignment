import { render, screen, fireEvent } from "@testing-library/react";
import { FILTER_DATA, MOVIE_LIST_DATA } from "../mock/data";
import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import Dropwdown from "../components/Dropdown";

describe("Header component unit case", () => {
  const state = {
    data: [
      { id: 1, title: "Star Wars", episode_id: 4, release_date: "1977-05-25" },
      {
        id: 2,
        title: "The Empire Strikes Back",
        episode_id: 5,
        release_date: "1980-05-21",
      },
      {
        id: 3,
        title: "Return of the Jedi",
        episode_id: 6,
        release_date: "1983-05-25",
      },
    ],
    filteredData: [
      { id: 1, title: "Star Wars", episode_id: 4, release_date: "1977-05-25" },
      {
        id: 2,
        title: "The Empire Strikes Back",
        episode_id: 5,
        release_date: "1980-05-21",
      },
      {
        id: 3,
        title: "Return of the Jedi",
        episode_id: 6,
        release_date: "1983-05-25",
      },
    ],
  };
  const updateState = jest.fn();

  it("should filter data when user types in the search input", () => {
    render(
      <>
        <Header state={state} updateState={updateState} />
      </>
    );
    const searchInput = screen.queryByPlaceholderText("Type to search...");
    fireEvent.change(searchInput, { target: { value: "Strikes" } });
    expect(updateState).toHaveBeenCalledWith({
      data: state.data,
      filteredData: [
        {
          id: 2,
          title: "The Empire Strikes Back",
          episode_id: 5,
          release_date: "1980-05-21",
        },
      ],
    });
    fireEvent.change(searchInput, { target: { value: "" } });

    expect(updateState).toHaveBeenCalledWith({
      data: state.data,
      filteredData: state.data,
    });
  });

  it("clicking 'Sort By' button toggles the dropdown menu", () => {
    render(
      <>
        <Header state={state} updateState={updateState} />
      </>
    );

    const button = screen.getByText("Sort By");
    fireEvent.click(button);
    expect(screen.getByText("Episodes")).toBeVisible();
    expect(screen.getByText("Name")).toBeVisible();
    expect(screen.getByText("Year")).toBeVisible();

    fireEvent.click(button);
    expect(screen.queryByText("Episodes")).toBeNull();
    expect(screen.queryByText("Name")).toBeNull();
    expect(screen.queryByText("Year")).toBeNull();
  });

  it("should sort data by name when 'Name' is clicked", () => {
    const updateState = jest.fn();
    render(<Header state={state} updateState={updateState} />);
    const sortDataName = state.filteredData.sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    fireEvent.click(screen.getByText("Sort By"));
    fireEvent.click(screen.getByText("Name"));
    expect(updateState).toHaveBeenCalledWith({
      data: state.data,
      filteredData: sortDataName,
    });
  });
  it("should sort data by name when 'Episodes' is clicked", () => {
    const updateState = jest.fn();
    render(<Header state={state} updateState={updateState} />);
    const sortDataEpisode = state.filteredData.sort(
      (a, b) => a.episode_id - b.episode_id
    );
    fireEvent.click(screen.getByText("Sort By"));
    fireEvent.click(screen.getByText("Episodes"));
    expect(updateState).toHaveBeenCalledWith({
      data: state.data,
      filteredData: sortDataEpisode,
    });
  });
  it("should sort data by name when 'Year' is clicked", () => {
    const updateState = jest.fn();
    render(<Header state={state} updateState={updateState} />);
    const sortdataYear = state.filteredData.sort((a, b) => {
      const year1 = new Date(a.release_date).getFullYear();
      const year2 = new Date(b.release_date).getFullYear();
      return year1 - year2;
    });
    fireEvent.click(screen.getByText("Sort By"));
    fireEvent.click(screen.getByText("Year"));
    expect(updateState).toHaveBeenCalledWith({
      data: state.data,
      filteredData: sortdataYear,
    });
  });
});
