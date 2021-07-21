import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div id="copy-right">
        <h5>
          Copyright © <span>The-Coolest-Devs.</span> All Rights Reserved
        </h5>
      </div>
      <div className="github-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          to="https://github.com/robisonJohn/Community-Table/tree/main"
          target="_blank"
          width="40"
        />
      </div>
    </div>
  );
}

export default Footer;
