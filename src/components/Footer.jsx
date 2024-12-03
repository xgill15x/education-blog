const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 text-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Jason and Hoang. All rights reserved.
        </p>
        <p className="text-sm">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
