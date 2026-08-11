export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Me</h3>
          <p>I’m a full-stack developer passionate about UI, clean logic and modern product experiences.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Contact</h4>
            <a href="mailto:aswanijayesh500@gmail.com">Gmail</a>
            <a href="https://www.instagram.com/jayesh.aswani07/" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/in/jayesh-aswani-7760492a7/" target="_blank">LinkedIn</a>
          </div>

          <div>
            <h4>Projects</h4>
            <a href="#">Product Manager</a>
            <a href="#">Calculator</a>
            <a href="#">Weather API</a>
          </div>

          <div>
            <h4>Address</h4>
            <p>Ahmedabad,Gujarat,India</p>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        © 2025 Jayesh Aswani — Portfolio
      </div>
    </footer>
  );
}
