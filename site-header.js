class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="about.html">about</a></li>
                    <li><a href="contact.html">contact</a></li>
                    <li><a href="shop.html">shop</a></li>
                </ul>
            </nav>
            
            <img class="header-image" src="./artur-home-header-3.png" alt="">
        </header>
            
        `
    }
}

customElements.define('website-header', WebsiteHeader)