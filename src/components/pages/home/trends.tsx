"use client"

import { useEffect, useState } from "react";
import mockData from "@/data/mockData.json"
import { Post } from "@/types/post";
import CustomButton from "../../ui/CustomButton";

export function Trends() {
    // Defining variables
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // Function for fetch data
    const fetchPosts = async () => {
        try {
            setLoading(true)

            const data = () => {
                const postsData = mockData.filter(item => item.type == "posts");
                return postsData;
            }
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetches data when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) {  // Visible while loading
        return (
            <section id="trends" className="p-4 lg:p-20">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8">TRENDLER</h2>
                <div className="animate-pulse">
                    <div className="h-32 bg-gray-300 rounded mb-4"></div>
                    <div className="h-32 bg-gray-300 rounded mb-4"></div>
                    <div className="h-32 bg-gray-300 rounded"></div>
                </div>
            </section>
        );
    }

    return (
        <section id="trends" className="p-2 md:p-22">

            {/* Title Section */}
            <div className="ml-28 md:ml-0 mb-12 flex items-center">
                <h2 className="text-4xl lg:text-6xl font-black mr-4">TRENDLER</h2>
                <img src="/images/home/trends/stonks.svg" alt="stonks" className="w-10 h-auto" />
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {posts.slice(0, 6).map((post, index) => (
                    <div key={post._id} className="relative">
                        <div className="flex flex-row gap-12 p-6 rounded-2xl">

                            {/* Ranking Number */}
                            <div className="text-6xl font-black text-[#2A2A2A]">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            {/* Content */}
                            <div className="flex-1">

                                {/* Author Avatar & Name */}
                                <div className="flex items-center mb-3">
                                    <div className="w-9 h-9 rounded-xl bg-gray-500 flex items-center justify-center mr-4">
                                        <span className="text-lg font-semibold">
                                            {post.attributes.authors[0]?.charAt(0) || 'R'}
                                        </span>
                                    </div>
                                    <span className="text-lg tracking-wider">
                                        {post.attributes.authors[0] || 'Rapkology'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 lg:min-h-24 font-bold text-2xl line-clamp-3 transition-colors">
                                    {post.attributes.title.toUpperCase()}
                                </h3>

                                <hr className="opacity-10" />

                                {/* Read More */}
                                <button className="mt-4 tracking-wider hover:underline cursor-pointer">
                                    Daha Fazla Oku
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-20">
                <CustomButton
                    backgroundColor="#FFFFFF"
                    textColor="#000000"
                    className="mx-auto px-6 py-3 text-lg tracking-wider px-12"
                >
                    Tümünü Gör
                </CustomButton>
            </div>
        </section>
    );
}
