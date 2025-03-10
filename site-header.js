class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <header>
            <div class="header-signature">
                <a href="index.html">
                    <img src="artur-home-signature-crop.png">
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="about.html">about</a></li>
                    <li><a href="contact.html">contact</a></li>
                    <li><a href="shop.html">shop</a></li>
                </ul>
            </nav>
            <img class="header-image" src="./artur-home-header-2.png" alt="">
        </header>
            
        `
    }
}

customElements.define('website-header', WebsiteHeader)