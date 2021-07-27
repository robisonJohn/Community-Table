import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div id="copy-right">
        Copyright © <span>The-Coolest-Devs.</span> All Rights Reserved |{" "}
        <a
          href="https://github.com/ashleymhuynh"
          target="_blank"
          rel="noreferrer"
        >
          🦁 Ashley Huynh,
        </a>{" "}
        <a href="https://github.com/andreallt" target="_blank" rel="noreferrer">
          🦏 Andrea Llano
        </a>{" "}
        &{" "}
        <a
          href="https://github.com/robisonJohn"
          target="_blank"
          rel="noreferrer"
        >
          🐛 John Robison
        </a>
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
