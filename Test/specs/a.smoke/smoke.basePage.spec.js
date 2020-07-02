const base = require('../../pages/basePage')

describe('Smoke test Base page', () => {
    
    it('Given I go to the Base page', () => {
        base.goToBasePage();

    });

    it('Then validate the Base header exist', () => {
        base.mainheader().isExisting() 
    
    });

    it('Then validate the sub headaer exist', () => {
        base.women().getText().includes("WOMEN")
        base.dresses().getText().includes("DRESSES")
        base.tshirts().getText().includes("T-SHIRTS")

    });

    

});
