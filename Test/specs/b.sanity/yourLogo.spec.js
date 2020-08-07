const yourLogo = require('../../pages/yourLogo')

describe('As a user test the your Logo page', () => {
    
    it('Given I am on the your Logo page', () => {
        yourLogo.goToyourLogo()

    });

    it('As a user hoover over women', () => {
        yourLogo.women().waitForDisplayed()
        yourLogo.women().moveTo()
    });

    it('When I click on blouses', () => {
        yourLogo.blouses().waitForDisplayed()
        yourLogo.blouses().click()
        
    });

    it('When I hoover over img', () => {
        yourLogo.img().waitForDisplayed()
        yourLogo.img().moveTo()
        
    });


    it('When I click on add to cart', () => {
        yourLogo.cart().waitForDisplayed()
        yourLogo.cart().click()

        
    });

    it('When I click on main header', () => {
        yourLogo.mainheader().waitForDisplayed()
        yourLogo.mainheader().click()
        
    });

    it('When I hoover over dresses', () => {
        yourLogo.dresses().waitForDisplayed()
        yourLogo.dresses().moveTo()
        
    });

    it('When I click on summer dresses', () => {
        yourLogo.summer().waitForDisplayed()
        yourLogo.summer().click()
        
    });

    it('Then I hoover over summer printed dresses', () => {
        yourLogo.printed().waitForDisplayed()
        yourLogo.printed().moveTo()
        
    });

    it('When I click on add to cart', () => {
        yourLogo.addToCart().waitForDisplayed()
        yourLogo.addToCart().click()
        
    });

    it('When I click on proceed to cart', () => {
        yourLogo.proceedToCart().waitForDisplayed()
        yourLogo.proceedToCart().click()
        
    });

    it('When I click on checkout', () => {
        yourLogo.checkout1().waitForDisplayed()
        yourLogo.checkout1().click()
        
    });

    
    it('When I enter my email address', () => {
        yourLogo.un().waitForDisplayed()
        yourLogo.un().setValue('jerridbain@gmail.com')
        
    });

    it('When I enter my password', () => {
        yourLogo.pw().waitForDisplayed()
        yourLogo.pw().setValue('emcor139')
        
    });

    it('Then click the sign in button', () => {
        yourLogo.button().click()
        
    });

    it('When I click on proceed to checkout', () => {
        yourLogo.checkout2().waitForDisplayed()
        yourLogo.checkout2().click()
    });

    it('When I agree to terms of service', () => {
        yourLogo.checkbox().click()
        yourLogo.checkout3().click()
        
    });

    it('When I click on pay by check', () => {
        yourLogo.check().waitForDisplayed()
        yourLogo.check().click()
        
    });

    it('When I confirm my order', () => {
        yourLogo.order().waitForDisplayed()
        yourLogo.order().click()
    });

    it('Then check for My Store is complete', () => {
        yourLogo.confirm().waitForDisplayed()
        yourLogo.confirm().getText().includes("Your order on My Store is complete.")
          
    });

    
    it('When I sign out of my account', () => {
        yourLogo.signout().click()
        
    });




    
});
