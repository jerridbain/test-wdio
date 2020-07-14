const yourLogo = require('../../pages/yourLogo')

describe('Smoke test your Logo page', () => {
    
    it('Given I go to the your Logo page', () => {
        yourLogo.goToyourLogo();

    });

    it('Then validate the Base header exist', () => {
        yourLogo.mainheader().isExisting() 
    
    });

    it('Then validate the sub headaer exist', () => {
        yourLogo.women().getText().includes("WOMEN")
        yourLogo.dresses().getText().includes("DRESSES")
        yourLogo.tshirts().getText().includes("T-SHIRTS")

    });

    

});
