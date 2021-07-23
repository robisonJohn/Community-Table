import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div id="copy-right">
        Copyright © <span>The-Coolest-Devs.</span> All Rights Reserved
      </div>
      <div id="github-logo">
        <a
          href="https://github.com/robisonJohn/Community-Table/tree/main"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            width="30"
            alt="github-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
