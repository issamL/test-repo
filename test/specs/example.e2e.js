const LoginPage = require('../pageobjects/login.page');
new LoginPage();
describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await browser.url('http://localhost/repo/app/login.html');
        await browser.pause( 5000 );
        await browser.element("#username").setValue('myuser');
        await $('#pwd').setValue('az12');
        await $('#signInSubmit').click();
        //await LoginPage.login('myuser', 'az12');
        await browser.pause( 5000 );
        const elem = $('#fh5co-logo');
        await browser.pause( 2000 );
        await expect(elem).toHaveTextContaining('SH4RE');
    });
});


