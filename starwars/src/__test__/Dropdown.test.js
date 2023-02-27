import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "../components/Dropdown";

describe("Dropdown component", () => {
  test("renders dropdown options", () => {
    const toggleDropdown = jest.fn();
    const sortData = jest.fn();
    render(<Dropdown toggleDropdown={toggleDropdown} sortData={sortData} />);
    const episodesOption = screen.getByText(/episodes/i);
    const nameOption = screen.getByText(/name/i);
    const yearOption = screen.getByText(/year/i);
    expect(episodesOption).toBeInTheDocument();
    expect(nameOption).toBeInTheDocument();
    expect(yearOption).toBeInTheDocument();
  });

  test("calls sortData when an option is clicked", () => {
    const toggleDropdown = jest.fn();
    const sortData = jest.fn();
    render(<Dropdown toggleDropdown={toggleDropdown} sortData={sortData} />);
    const episodesOption = screen.getByText(/episodes/i);
    fireEvent.click(episodesOption);
    expect(sortData).toHaveBeenCalledWith("Episodes");
    const yearsOption = screen.getByText(/year/i);
    fireEvent.click(yearsOption);
    expect(sortData).toHaveBeenCalledWith("Year");
    const nameOption = screen.getByText(/name/i);
    fireEvent.click(nameOption);
    expect(sortData).toHaveBeenCalledWith("Name");
  });

  test("calls toggleDropdown when close button is clicked", () => {
    const toggleDropdown = jest.fn();
    const sortData = jest.fn();
    render(<Dropdown toggleDropdown={toggleDropdown} sortData={sortData} />);
    const closeButton = screen.getByAltText(/close button/i);
    fireEvent.click(closeButton);
    expect(toggleDropdown).toHaveBeenCalled();
  });
});
