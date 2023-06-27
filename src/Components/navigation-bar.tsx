import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex flex-row justify-between items-end">
            <div className="flex">
                <Link to='/'>
                    <img src="/TB_logo.png" alt="logo" className="flex max-h-12"/>
                </Link>
            </div>
            <div className="flex flex-row gap-2.5">
                <Link to='/' className="flex py-3">
                    <p>
                        Home  
                    </p>
                </Link>
                <Link to='/Placeholder' className="flex py-3">
                    <p>
                        PlaceHolder
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;