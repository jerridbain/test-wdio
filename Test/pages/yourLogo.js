const base = {}

// Locator

base.mainheader = () => { return $('//*[@id="header_logo"]/a/img') }

base.women = () => { return $('//*[@id="block_top_menu"]/ul/li[1]/a') }

base.dresses = () => { return $('//*[@id="block_top_menu"]/ul/li[2]/a') }

base.tshirts = () => { return $('//*[@id="block_top_menu"]/ul/li[3]/a') }

base.blouses = () => { return $('//*[@id="block_top_menu"]/ul/li[1]/ul/li[1]/ul/li[2]/a')}

base.img= () => { return $('//*[@id="center_column"]/ul/li/div/div[1]/div/a[1]/img')}

base.cart = () => { return $('//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]/span')}

base.proceed = () => { return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')}

base.checkout = () => { return $('//*[@id="center_column"]/p[2]/a[1]')}

base.un = () => { return $('//*[@id="email"]') }

base.pw = () => { return $('//*[@id="passwd"]') }

base.button = () => { return $('//*[@id="SubmitLogin"]')}

base.checkout1 = () => { return $('//*[@id="center_column"]/form/p/button')}

base.shipping = () => { return $('//*[@id="form"]/p/button')}

base.checkbox = () => { return $('//*[@id="cgv"]')}

base.checkout2 = ()=> { return $('//*[@id="form"]/p/button')}

base.check = () => { return $('//*[@id="HOOK_PAYMENT"]/div[2]/div/p/a')}

base.order = () => { return $('//*[@id="cart_navigation"]/button')}

base.confirm = () => { return $('//*[@id="center_column"]/p[1]')}

base.summer = () => { return $('//*[@id="block_top_menu"]/ul/li[2]/ul/li[3]/a')}

base.printed = () => { return $('//*[@id="center_column"]/ul/li[2]/div/div[1]/div/a[1]/img')}

base.addToCart = () => { return $('//*[@id="center_column"]/ul/li[2]/div/div[2]/div[2]/a[1]')}

base.signout = () => { return $('//*[@id="header"]/div[2]/div/div/nav/div[2]/a')}





//functions

base.goToBasePage = () => {
    console.log('step: looking for base page')

    browser.url('/')

    base.mainheader().waitForDisplayed()

    console.log('step: found for base page')
   
}

module.exports = base
