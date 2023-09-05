import Link from 'next/link';

const LeftNavigation = () => {
  return (
    <div className="bg-gray-200">
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavigation;
