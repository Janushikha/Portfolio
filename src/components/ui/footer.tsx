import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 container border-t mt-20">
      <p className="text-sm text-gray-400 text-center">
        All rights reserved by
        <Link href="https://github.com/Logging-Studio" target="_blank" className="ml-1 text-primary">
          Logging Studio
        </Link> • Distributed by
        <Link href="https://themewagon.com" target="_blank" className="ml-1 text-primary">
          ThemeWagon
        </Link>
      </p>
    </footer>
  );
}
