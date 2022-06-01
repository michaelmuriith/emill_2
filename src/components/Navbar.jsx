import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed-top border" style={{ backgroundColor: "whitesmoke" }}>
      <nav className="navbar">
        <div>
          <img
            src="/assets/images/static/e-news.png"
            width={100}
            height={50}
            alt="logo"
            className="ms-5"
          />
        </div>
        <Link className="nav-link" to="/">
          Home{" "}
        </Link>
        <div>
          {user && (
            <>
              <span className="pe-4">
                Signed is as {user.displayName || user.email}
              </span>
              <button className="btn btn-primary btn-sm me-3"
              onClick={()=>{signOut(auth)}}
              >Logout</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
