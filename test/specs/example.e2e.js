const LoginPage = require('../pageobjects/LoginPage');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await browser.url('http://localhost:8080/home/circleci/repo/app/login.html');
        await browser.pause( 2000 );
        await LoginPage.login('myuser', 'az12');
        await browser.pause( 2000 );
        const elem = $('#fh5co-logo');
        await browser.pause( 2000 );
        await expect(elem).toHaveTextContaining(
            'SH4RE');
    });
});


