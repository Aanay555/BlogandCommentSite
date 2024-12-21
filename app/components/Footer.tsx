const Footer = () => {
  return (
    <footer className="bg-blue-600 w-full text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </div>
        <div>
          <p className="text-sm">
            Developed by <span className="text-blue-400">Uzma Riaz</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;