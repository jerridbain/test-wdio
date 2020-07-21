const base = require('../../pages/basePage')

describe('As a user test the base page', () => {
    
    it('Given I am on the base page', () => {
        base.goToBasePage()

    });

    it('As a user hoover over women', () => {
        base.women().waitForDisplayed()
        base.women().moveTo()
    });

    it('And I click on blouses', () => {
        base.blouses().waitForDisplayed()
        base.blouses().click()
        
    });

    it('Then hoover over img', () => {
        base.img().waitForDisplayed()
        base.img().moveTo()
        
    });


    it('And I click on add to cart', () => {
        base.cart().waitForDisplayed()
        base.cart().click()

        
    });

    it('When I click on proceed to cart', () => {
        base.proceed().waitForDisplayed()
        base.proceed().click()
        
    });

    it('When I click on checkout', () => {
        base.checkout().waitForDisplayed()
        base.checkout().click()
        
    });

    it('When I enter my email address', () => {
        base.un().waitForDisplayed()
        base.un().setValue('jerridbain@gmail.com')
        
    });

    it('When I enter my password', () => {
        base.pw().waitForDisplayed()
        base.pw().setValue('emcor139')
        
    });

    it('Then click the sign in button', () => {
        base.button().click()
        
    });

    it('When I click on proceed to checkout', () => {
        base.checkout1().waitForDisplayed()
        base.checkout1().click()
    });

    it('When I agree to terms of service', () => {
        base.checkbox().click()
        base.checkout2().click()
        
    });

    it('When I click on pay by check', () => {
        base.check().waitForDisplayed()
        base.check().click()
        
    });

    it('When I confirm my order', () => {
        base.order().waitForDisplayed()
        base.order().click()
    });

    it('Then check for My Store is complete', () => {
        base.confirm().waitForDisplayed()
        base.confirm().getText().includes("Your order on My Store is complete.")
          
    });

    it('When I sign out of my account', () => {
        base.signout().click()
        
    });




    
});