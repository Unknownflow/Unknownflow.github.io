const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #7091e6;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #333;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><a href="index.html">About</a><li>
        <li><a href="experience.html">Experiences</a></li>
        <li><a href="education.html">Education</a></li>
        <li><a href="skills.html">Skills</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: "closed" });
		shadowRoot.appendChild(headerTemplate.content);
	}
}

customElements.define("header-component", Header);
