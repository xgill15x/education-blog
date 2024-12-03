const Footer = () => {
  return (
    <footer className="bg-blue-600 text-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Educator's Blog. All rights reserved.
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
