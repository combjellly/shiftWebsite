// app/page.js
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Image
        src="/img/logo.png" // Path relative to public folder
        alt="Logo"
        width={200} // You can set a fixed width
        height={200} // You can set a fixed height
        className="rotating-image"

      />
      <button>
        <Link href="/blockly">Go to shift blox</Link>
      </button>
      <button>
        <Link href="/standalone">Go to standalone</Link>
      </button>
    </div>
  );
};

export default Home;
