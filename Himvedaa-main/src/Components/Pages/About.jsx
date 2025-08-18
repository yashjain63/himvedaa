import React from "react";
import AboutUs from "/imags/aboutUs.jpg";
import OurTeam from "/imags/ourTeam.jpg";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/imags/member.jpg",
  },
  {
    name: "Jane Smith",
    role: "Head of Marketing",
    image: "/imags/member2.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image: "/imags/member3.jpg",
  },
];

const About= () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
            className="p-20 flex flex-col justify-center items-center font-bold text-black my-10"
            style={{
              backgroundImage: `url(${AboutUs})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
               About Us
            </h1>
            {/* <p className="text-lg text-gray-600">
              Insights into Ayurvedic medicine, holistic well‑being, and a balanced lifestyle.
            </p> */}
          </div>
      {/* <div className="relative bg-indigo-600 h-64 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white z-10">
          About Us
        </h1>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div> */}

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              We started our journey with a passion for bringing positive change.
              Our mission is to deliver exceptional services and products that
              empower our clients. With years of expertise and dedication, we
              have grown into a trusted name in the industry.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To provide innovative solutions that meet our customers' needs,
              while maintaining sustainability and excellence in every project.
            </p>
          </div>
          <div>
            <img
              src={OurTeam}
              alt="Our Team"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;