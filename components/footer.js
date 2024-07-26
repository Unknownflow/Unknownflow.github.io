const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 50px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      background-color: #8697c4;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }

    .connect-msg {
      font-size: 16px;
    }
  </style>
  <footer>
    <ul class="social-row">
      <li class="connect-msg">Connect with me!</li>
      <li><a href="https://github.com/Unknownflow" target="_blank"><i class="fab fa-github"></i></a><li>
      <li><a href="https://www.linkedin.com/in/clarence88" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></a>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// Query main DOM for FontAwesome
		const fontAwesome = document.querySelector(
			'link[href*="font-awesome"]'
		);
		const shadowRoot = this.attachShadow({ mode: "closed" });

		if (fontAwesome) {
			shadowRoot.appendChild(fontAwesome.cloneNode());
		}

		shadowRoot.appendChild(footerTemplate.content);
	}
}

customElements.define("footer-component", Footer);
