import React from "react";
import { render } from "@testing-library/react-native";
import { HomeComponent } from "../src/screens/Home/home.component";
import api from "api";

jest.mock("../api");

describe("Home Container", () => {
    const breweriesMockList = [
        { id: 1, name: "Avondale Brewing Co", },
        { id: 2, name: "Trim Tab Brewing", },
    ];
    const mockCounter = 0;

    it("Breweries Api mock test", async () => {
        api.initiateAPICall.mockResolvedValue(breweriesMockList);
        const { findByText } = render(<HomeComponent counter={mockCounter} breweriesList={breweriesMockList} />);
        await findByText("Avondale Brewing Co");
    });
});
