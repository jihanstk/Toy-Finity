const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <div>
        <h3 className="text-2xl font-bold">TOYFINITY</h3>
        <p>
          TOY Marketplace
          <br />
          Providing reliable & Heigh Quality Toys.
        </p>
      </div>
      <div className=" mx-auto text-center">
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className=" mx-auto text-center">
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className=" mx-auto text-center">
        <span className="footer-title">Contact</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
