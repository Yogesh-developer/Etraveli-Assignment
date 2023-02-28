import Body from "../components/Body";
import { render, screen, waitFor } from "@testing-library/react";
import { MOVIE_LIST_DATA } from "../mock/data";

describe("Header component unit case", () => {
  it("should fetch and display movie data", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOVIE_LIST_DATA),
    });
    render(<Body />);

    await waitFor(() => {
      expect(screen.getByText("Revenge of the Sith")).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://swapi.dev/api/films/?format=json"
    );
  });
});
