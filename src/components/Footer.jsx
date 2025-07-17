const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-12 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} FoodDeliver. All rights reserved.
        </div>
        <div className="text-gray-600 text-sm mt-2 md:mt-0">
          Made with ❤️ for food lovers everywhere
        </div>
      </div>
    </footer>
  );
};

export default Footer;
