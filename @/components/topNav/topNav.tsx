import React from "react";

const topNav = () => {
return (
    <nav>
        <h1>Logo</h1>

        {/* Make the link stretch to the far right */}
        <ul className="stretch-right">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);
};

export default topNav;
