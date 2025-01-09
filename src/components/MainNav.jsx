import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Beranda", href: "/" },
    { title: "Metodologi", href: "/#methodology" },
    { title: "Hasil", href: "/#results" },
    { title: "Kontak", href: "/#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex items-center justify-between gap-6 md:gap-10 px-6 py-5 lg:px-8">
      {/* Logo or Home Link */}
      <Link to="/" className="flex items-center space-x-2">
        <span className="hidden text-2xl font-bold sm:inline-block">
          YOLOv8 Research
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="text-base font-medium text-gray-300 hover:text-white">
            {item.title}
          </Link>
        ))}
        <div className="flex-1 flex items-center justify-end space-x-4">
          <Button variant="outline">Download Paper</Button>
        </div>
      </nav>

      {/* Mobile Navigation Toggle Button */}
      <button
        className="md:hidden p-2 text-gray-300 hover:text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 z-50 w-3/4 h-screen bg-black/95 p-6 md:hidden">
          <button
            className="mb-4 text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-base font-medium text-gray-300 hover:text-white"
                onClick={toggleMenu}>
                {item.title}
              </Link>
            ))}
            <div className="mt-6 flex items-center space-x-2">
              <Button variant="outline" className="w-full">
                Download Paper
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
