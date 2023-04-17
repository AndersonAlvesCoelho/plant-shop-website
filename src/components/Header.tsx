import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Bars3BottomRightIcon from "@heroicons/react/24/outline/Bars3BottomRightIcon";

export default function Header() {
  return (
    <header className="flex gap-6 justify-between items-center text-center p-2 mt-12">
      <div className="flex gap-24">
        <a>GREENMIND</a>

        <nav className="flex gap-12">
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#history">History</a>
        </nav>
      </div>

      <div className="flex gap-16">
        <a>
          <ShoppingCartIcon className="h-6 w-6" />
        </a>
        <a>
          <UserIcon className="h-6 w-6" />
        </a>
        <span>|</span>
        <a>
          <Bars3BottomRightIcon className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
}
