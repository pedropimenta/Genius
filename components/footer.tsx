import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white p-6 mx-auto max-w-screen-xl w-full flex justify-center items-center">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold mb-2">About Us</h3>
          <ul>
            <li><Link href="/about" passHref><span className="hover:text-gray-300 cursor-pointer">About</span></Link></li>
            <li><Link href="/contact" passHref><span className="hover:text-gray-300 cursor-pointer">Contact</span></Link></li>
            {/* More links here */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Services</h3>
          {/* Services links here */}
        </div>
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          {/* Quick links here */}
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          {/* Social media links here */}
        </div>
      </div>
    </footer>
  );
};
