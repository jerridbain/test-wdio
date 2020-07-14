const yourLogo = {}

// Locator

yourLogo.mainheader = () => { return $('//*[@id="header_logo"]/a/img') }

yourLogo.women = () => { return $('//*[@id="block_top_menu"]/ul/li[1]/a') }

yourLogo.dresses = () => { return $('//*[@id="block_top_menu"]/ul/li[2]/a') }

yourLogo.tshirts = () => { return $('//*[@id="block_top_menu"]/ul/li[3]/a') }

yourLogo.blouses = () => { return $('//*[@id="block_top_menu"]/ul/li[1]/ul/li[1]/ul/li[2]/a')}

yourLogo.img= () => { return $('//*[@id="center_column"]/ul/li/div/div[1]/div/a[1]/img')}

yourLogo.cart = () => { return $('//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]/span')}

yourLogo.proceedToCart = () => { return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')}

yourLogo.checkout1 = () => { return $('//*[@id="center_column"]/p[2]/a[1]')}

yourLogo.un = () => { return $('//*[@id="email"]') }

yourLogo.pw = () => { return $('//*[@id="passwd"]') }

yourLogo.button = () => { return $('//*[@id="SubmitLogin"]')}

yourLogo.checkout2 = () => { return $('//*[@id="center_column"]/form/p/button')}

yourLogo.shipping = () => { return $('//*[@id="form"]/p/button')}

yourLogo.checkbox = () => { return $('//*[@id="cgv"]')}

yourLogo.checkout3 = ()=> { return $('//*[@id="form"]/p/button')}

yourLogo.check = () => { return $('//*[@id="HOOK_PAYMENT"]/div[2]/div/p/a')}

yourLogo.order = () => { return $('//*[@id="cart_navigation"]/button')}

yourLogo.confirm = () => { return $('//*[@id="center_column"]/p[1]')}

yourLogo.summer = () => { return $('//*[@id="block_top_menu"]/ul/li[2]/ul/li[3]/a')}

yourLogo.printed = () => { return $('//*[@id="center_column"]/ul/li[2]/div/div[1]/div/a[1]/img')}

yourLogo.addToCart = () => { return $('//*[@id="center_column"]/ul/li[2]/div/div[2]/div[2]/a[1]')}

yourLogo.signout = () => { return $('//*[@id="header"]/div[2]/div/div/nav/div[2]/a')}





//functions

yourLogo.goToyourLogo = () => {
    console.log('step: looking for your Logo page')

    browser.url('/')

    yourLogo.mainheader().waitForDisplayed()

    console.log('step: found for your Logo page')
   
}

module.exports = yourLogo
