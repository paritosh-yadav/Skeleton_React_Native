/**
 * @flow
 */
import { device, element, by } from 'detox';
import { beforeEach, it, expect, describe } from '@jest/globals';
describe('Example', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have welcome screen', async () => {
        await expect(element(by.id('welcome'))).toBeVisible();
    });

    it('should populate username and password fields and login into app after tap', async () => {
        await element(by.id('username_textinput')).replaceText('testusername');
        await element(by.id('password_textinput')).replaceText('mypassword');
        await element(by.id('signin_button')).tap();
    });

    it('should have screen name', async () => {
        await expect(element(by.id('screen_text'))).toBeVisible();
    });
});
