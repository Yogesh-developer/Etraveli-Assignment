import React from "react";
import { render } from "@testing-library/react";
import Characters from "../components/Characters";

describe("Charcter Component Test", () => {
  it("should fetch data from the API", async () => {
    const mockData = { name: "Luke Skywalker", gender: "male" };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
    render(<Characters characterApi={"https://swapi.dev/api/people/1/"} />);

    expect(fetch).toHaveBeenCalledWith("https://swapi.dev/api/people/1/");
  });
});
