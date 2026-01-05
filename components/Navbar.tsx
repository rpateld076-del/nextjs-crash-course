import Link from "next/link";
import Image from "next/image";


const Navbar=()=>{
    return(
        <header>
            <nav>
                <Link href='/' className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24}/>

                    <p>DevEvent</p>
                </Link>
                <ul>
                    <link href="/"/>Home</link>
                    <link href="/"/>Events</link>
                    <link href="/"/>Create Event</link>

                </ul>
         </nav>
</header>
    )
}

export default Navbar