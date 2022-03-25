import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-3">
      <div className="container mx-auto px-4 flex items-center">
        <div className="text-white text-3xl font-bold">
          Belajar NextJS
        </div>
        {/* <div className="text-white ml-auto">
          <ul className="hidden lg:flex xl:flex 2xl:flex justify-items-end">
            <li className="ml-3 bg-gray-900 py-2 px-3 rounded hover:bg-gray-700">
              <Link href="/" >
                <a >HOME</a>
              </Link>
            </li>
            <li className="ml-3 bg-gray-900 py-2 px-3 rounded hover:bg-gray-700">
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li className="ml-3 bg-gray-900 py-2 px-3 rounded hover:bg-gray-700">
              <Link href="/gallery">
                <a>GALLERY</a>
              </Link>
            </li>
            <li className="ml-3 bg-gray-900 py-2 px-3 rounded hover:bg-gray-700">
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}