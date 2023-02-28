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

    const peopleClick = screen.getByText("People");
    fireEvent.click(peopleClick);

    const people = screen.getAllByTestId("character");
    expect(people.length).toBe(MOVIE_LIST_DATA.results[1].characters.length);

    const speciesClick = screen.getByText("Species");
    fireEvent.click(speciesClick);

    const species = screen.getAllByTestId("character");
    expect(species.length).toBe(MOVIE_LIST_DATA.results[1].species.length);

    const vehiclesClick = screen.getByText("Vehicles");
    fireEvent.click(vehiclesClick);

    const vehicles = screen.getAllByTestId("character");
    expect(vehicles.length).toBe(MOVIE_LIST_DATA.results[1].vehicles.length);

    const starshipsClick = screen.getByText("Starships");
    fireEvent.click(starshipsClick);

    const starships = screen.getAllByTestId("character");
    expect(starships.length).toBe(MOVIE_LIST_DATA.results[1].starships.length);

    const planetsClick = screen.getByText("Planets");
    fireEvent.click(planetsClick);

    const planets = screen.getAllByTestId("character");
    expect(planets.length).toBe(MOVIE_LIST_DATA.results[1].planets.length);
  });
});
