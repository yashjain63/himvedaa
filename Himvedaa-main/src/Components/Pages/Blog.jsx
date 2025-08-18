import React from 'react';
import blogBanner from "/imags/blogBanner.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Struggling With Weight? Discover the Ayurvedic Way to True Balance",
    summary:
      "Obesity isn’t the enemy—imbalance is. Ayurveda invites us to look deeper into harmony with body and mind.",
    image: "/imags/blog-weight.jpg",
    link: "/blogs/weight-balance",
  },
  {
    id: 2,
    title: "How Ayurvedic Wisdom Makes You Exercise Better",
    summary:
      "Delve into how Ayurveda redefines physical activity by prioritizing relaxation, breath, and body alignment.",
    image: "/imags/blog-exercise.jpg",
    link: "/blogs/ayurvedic-exercise",
  },
  {
    id: 3,
    title: "Constipation in Ayurveda",
    summary:
      "How to achieve natural bowel regularity using Ayurvedic principles—no laxatives, just balance.",
    image: "/imags/blog-constipation.jpg",
    link: "/blogs/constipation-ayurveda",
  }
  // Add more posts as needed
];

const BlogPage = () => (
  <div className=" pb-10 bg-gray-50 px-4">
    {/* <header className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
         Blog & Articles
      </h1>
      <p className="text-lg text-gray-600">
        Insights into Ayurvedic medicine, holistic well‑being, and a balanced lifestyle.
      </p>
    </header> */}

    <div
      className="p-14 flex flex-col justify-center items-center font-bold text-black my-10"
      style={{
        backgroundImage: `url(${blogBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
         Blog
      </h1>
      <p className="text-lg text-gray-600">
        Insights into Ayurvedic medicine, holistic well‑being, and a balanced lifestyle.
      </p>
    </div>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <a
              href={post.link}
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </section>
  </div>
);

export default BlogPage;