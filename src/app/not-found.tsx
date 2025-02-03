import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <section className="h-96 flex justify-center items-center">
      <div>
        <h2>Not Found</h2>
        <p className="mb-3">Could not find requested resource</p>
        <Link className="bg-gray-300 rounded-lg hover:bg-gray-100 transition text-gray-950 p-2" href="/">
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default Notfound;
