/**
 * @flow
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { beforeEach, it, expect, test } from '@jest/globals';
import { HomeComponent } from '../src/screens/Home/home.component';
import api from 'api';

jest.mock('api');

describe('Home Container', () => {
    let breweriesMockList;
    let mockCounter;
    let clickHandler;
    let renderer;

    beforeEach(() => {
        breweriesMockList = [
            { id: 1, name: 'Avondale Brewing Co' },
            { id: 2, name: 'Trim Tab Brewing' },
        ];
        mockCounter = 0;
        clickHandler = jest.fn(() => {
            mockCounter++;
        });
        api.initiateAPICall.mockResolvedValue(breweriesMockList);
        renderer = render(
            <HomeComponent
                navigation={null}
                fetchingBreweriesList={false}
                breweriesListError={null}
                changeCounter={clickHandler}
                counter={mockCounter}
                breweriesList={breweriesMockList}
            />,
        );
    });

    test('should mock breweries Api', async () => {
        await renderer.findByText('Avondale Brewing Co');
    });

    it('should invoke change counter function', async () => {
        fireEvent.press(renderer.getByTestId('change_counter'));
        expect(clickHandler).toHaveBeenCalled();
    });
    it('should incease counter by 1', async () => {
        fireEvent.press(renderer.getByTestId('change_counter'));
        expect(mockCounter).toBe(1);
    });
});
