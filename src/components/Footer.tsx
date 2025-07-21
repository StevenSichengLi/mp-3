import { Link, useLocation } from "react-router-dom";

export default function Footer() {

    //used the same trick here as the nav, since the link is "dynamic"
    const location = useLocation();

    //credits changes so i used let instead of const
    let credits = "/credits.html";
        if (location.pathname === "/credits.html") {
            credits = "/another-one.html";
        } else if (location.pathname === "/another-one.html") {
            credits = "/oops.html";
        }
    return (
        <footer>
            <p>
                © All rights reserved by <strong> Steven Li </strong>
                <Link to={credits}>Credits</Link>
            </p>
        </footer>
    );
}