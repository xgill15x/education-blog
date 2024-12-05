const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 text-gray-200 py-4"
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Jason and Hoang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
