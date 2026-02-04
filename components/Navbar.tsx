import Link from "next/link"
import Navitems from "./Navitems"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className='navbar'>Navbar
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <img src="./favicon.ico"
                        alt="Logo"
                        width={46}
                        height={46} />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <Navitems />
                <SignedOut>

                    <SignInButton>
                        <button className="btn-primary">Sign In</button>
                    </SignInButton>

                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar
