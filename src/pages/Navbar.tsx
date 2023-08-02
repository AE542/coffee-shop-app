// Navbar

import { h } from 'preact';
import { Link } from 'preact-router'
// needed to install preact-router here

const Navbar = () => {
    return (
        <nav>
              <ul>

                <div class="link justify-content: space-between">
                <Link href="/">Home</Link>

                <Link href="/about">About</Link>
                </div>
              </ul>  

        </nav>
    );

    };

    export default Navbar;