import { render, fireEvent, screen } from "@testing-library/react";
import MovieDetails from "../components/MovieDetails";
import { MOVIE_LIST_DATA } from "../mock/data";

describe("MovieDetails", () => {
  it("shimmer render correctly", () => {
    const updateState = jest.fn();
    render(
      <MovieDetails
        state={{
          data: [],
          filteredData: [],
        }}
        updateState={updateState}
      />
    );
    const element = screen.getAllByTestId("shimmer");
    expect(element.length).toBe(10);
  });

  it("data rendering correctly", () => {
    const updateState = jest.fn();
    render(
      <MovieDetails
        state={{
          data: MOVIE_LIST_DATA.results,
          filteredData: MOVIE_LIST_DATA.results,
        }}
        updateState={updateState}
      />
    );
    const element = screen.getAllByTestId("list-item");
    expect(element.length).toBe(5);
  });

  it("after click on movie list detais should display", () => {
    const updateState = jest.fn();
    render(
      <MovieDetails
        state={{
          data: MOVIE_LIST_DATA.results,
          filteredData: MOVIE_LIST_DATA.results,
        }}
        updateState={updateState}
      />
    );
    const element = screen.getAllByTestId("list-item");
    fireEvent.click(element[1]);
    const getDirector = screen.getByTestId("director");
    expect(getDirector.innerHTML).toBe("Director: Richard Marquand");
  });
});
