'use client';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto px-4 py-8 flex-grow bg-white shadow-md rounded-lg">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">About Us</h1>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <Image 
                        src="/aboutpage.png" 
                        alt="About Us" 
                        width={500}
                        height={400}
                        className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-md" 
                    />
                    <div className="text-lg leading-7 text-gray-700">
                        <p className="mb-4">
                            Welcome to our blog platform! Here you can explore a variety of interesting posts and share your own stories. Our mission is to connect people through shared experiences and insights.
                        </p>
                        <p>
                            Our team is dedicated to providing a space where creativity meets community. Dive into our posts, leave your comments, and be part of a growing network of like-minded individuals.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
