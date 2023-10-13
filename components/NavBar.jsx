/** @format */

import Link from "next/link";

/** @format */

export default function NavBar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link
            href='/'
            className='font-bold text-orange-800 hover:underline font-orbitron'>
            Indie Gamer
          </Link>
        </li>
        <li className='ml-auto'>
          <Link href='/reviews' className='text-orange-800 hover:underline'>
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            prefetch={false}
            className='text-orange-800 hover:underline'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
