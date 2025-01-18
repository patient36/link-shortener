import Link from "next/link";

const Home = () => {
  return (
    <div className="p-6 h-full bg-gradient-to-b from-blue-100 via-purple-100 to-gray-100 text-black overflow-auto scrollbar-none">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome to Tiny Trailz 🌟
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Shorten your long, messy links in seconds and share them with ease!
          <br /> Enjoy a sleek, customizable link-sharing experience.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href={'/services'}
            className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-600 transition-all">
            Get Started
          </Link>
          <Link
            href={'/user-guide'}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-bold hover:bg-gray-500 hover:text-white transition-all">
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-12">
        {/* Feature 1 */}
        <div className="p-6 bg-white shadow-md rounded-md text-center hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-blue-600 mb-3">Fast & Reliable</h2>
          <p className="text-gray-700">
            Shorten your links instantly with our lightning-fast service.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white shadow-md rounded-md text-center hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-green-600 mb-3">Custom Domains</h2>
          <p className="text-gray-700">
            Use your own custom domain to personalize your links.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white shadow-md rounded-md text-center hover:shadow-lg transition-all">
          <h2 className="text-xl font-bold text-purple-600 mb-3">QR Codes</h2>
          <p className="text-gray-700">
            Get a QR code that is linked with your link for even easier sharing.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 border-t mt-12">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Tiny Trailz. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
