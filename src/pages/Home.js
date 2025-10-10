import React from "react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

function Home() {
  const categories = [
    {
      title: "CCTV Systems",
      items: [
        { name: "Dahua Catalogue", link: "/catalogues/dahua.pdf" },
        { name: "Hikvision Catalogue", link: "/catalogues/hikvision.pdf" },
        { name: "CP Plus Catalogue", link: "/catalogues/cpplus.pdf" },
      ],
    },
    {
      title: "Telephone Systems",
      items: [
        { name: "Syntel Catalogue", link: "/catalogues/syntel.pdf" },
        { name: "NEC Catalogue", link: "/catalogues/nec.pdf" },
      ],
    },
    {
      title: "Biometric Systems",
      items: [{ name: "eSSL Catalogue", link: "/catalogues/essl.pdf" }],
    },
  ];

  return (
    <>
      <Hero />
      <section className="categories">
  <div className="container">
    <div className="row">
      {categories.map((cat, i) => (
        <CategoryCard key={i} title={cat.title} items={cat.items} />
      ))}
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
