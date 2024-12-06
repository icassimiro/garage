
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import g from "./Images/g.png";
export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 65);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [currentPage, setCurrentPage] = useState(0);

  useMemo(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);
  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
            <div className="divtop">
                <img className="g" src={g}></img>
                <div className="select"><Link to="/"><h3 className="click">CARROS</h3></Link><Link to="/onibus"><h3 className="click">ÔNIBUS</h3></Link></div>
            </div>
        </nav>
  );
}