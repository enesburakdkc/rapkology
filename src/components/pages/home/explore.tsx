"use client"

import { useEffect, useState } from "react";
import mockData from "@/data/mockData.json";
import { Post } from "@/types/post";
import { Search, Menu, ArrowRight } from "lucide-react";

export function Explore() {
    // Defining variables
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const menuItems = [
        { text: 'Türk Rap', highlighted: false },
        { text: 'Yabancı Rap', highlighted: true },
        { text: 'Rap Haberleri', highlighted: false },
        { text: 'Haftanın Klipleri', highlighted: false },
        { text: 'Ayın Klipleri', highlighted: false },
        { text: 'Rap Sohbetleri', highlighted: false },
        { text: 'Rap Müsabakaları', highlighted: false }
    ];

    // Function for fetch data
    const fetchPosts = async () => {
        try {
            setLoading(true)

            const data = () => {  // mockData'dan gönderileri getir.
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

    return (
        <section id="explore" className="p-2 md:p-22 mt-30 md:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-20">

            <div className="col-span-1 lg:col-span-3 mb-12">

                {/* Title & Icons Section */}
                <div className="flex flex-row justify-between items-start">

                    {/* Title Section */}
                    <div className="flex items-center">
                        <h2 className="text-4xl lg:text-6xl font-black mr-6">KEŞFET</h2>
                        <img src="/images/home/explore/explore.svg" alt="explore" className="w-10 lg:w-15 h-auto" />
                    </div>

                    {/* Icons Section */}
                    <div className="flex flex-row gap-6 mt-4">
                        <Search strokeWidth={3.5} size={25} className="cursor-pointer" />
                        <Menu strokeWidth={3.5} size={25} className="cursor-pointer" />
                        <img src="/images/home/explore/menu-seperated.svg" alt="Seperated Menu" className="w-6 h-auto cursor-pointer" />
                    </div>
                </div>

                {/* "Ne Görmek İstersin?" Section. Visible to mobile. */}
                <div className="block lg:hidden mt-10">
                    <div className="mb-4 flex items-center">
                        <h2 className="text-3xl lg:text-4xl font-black mr-6">NE GÖRMEK İSTERSİN?</h2>
                    </div>

                    <div className="tracking-wider font-semibold text-lg flex flex-row gap-4 overflow-auto">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className={`px-4 py-1 border m-1 border-white text-white whitespace-nowrap transition-colors ${item.highlighted
                                    ? 'bg-[#f0e84d] text-black!'
                                    : 'bg-transparent hover:bg-white hover:text-black'
                                    }`}
                            >
                                {item.text}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-20 lg:gap-8 mt-12 lg:mt-20">
                    {posts.map((item) => (
                        <div key={item._id} className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            <div className="lg:col-span-2">
                                <img src={item.attributes.img} alt={item.attributes.title} className="w-full mb-4 h-50 object-cover cursor-pointer" />
                                <span className="opacity-30 text-lg tracking-wider">
                                    {new Date(item.createdAt).toLocaleDateString("tr-TR", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>

                            <div className="lg:col-span-3">
                                <div className="flex items-center mb-3">
                                    <div className="w-9 h-9 rounded-xl bg-gray-500 flex items-center justify-center mr-4">
                                        <span className="text-lg font-semibold">
                                            {item.attributes.authors[0]?.charAt(0) || 'R'}
                                        </span>
                                    </div>
                                    <span className="text-lg tracking-wider">
                                        {item.attributes.authors[0] || 'Rapkology'}
                                    </span>
                                </div>

                                <h3 className="mt-5 lg:min-h-24 font-bold text-2xl line-clamp-4 transition-colors">
                                    {item.attributes.content.toUpperCase()}
                                </h3>
                                <hr className="opacity-30 mt-4" />

                                {/* Read More */}
                                <button className="mt-4 tracking-wider hover:underline cursor-pointer">
                                    Daha Fazla Oku
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <div className="col-span-1 lg:col-span-2 p-2 lg:pl-14">

                {/* "Ne Görmek İstersin?" Section. Visible to desktop. */}
                <div className="hidden lg:block">
                    <div className="mb-4 flex items-center">
                        <h2 className="text-3xl lg:text-4xl font-black mr-6">NE GÖRMEK İSTERSİN?</h2>
                    </div>

                    <div className="tracking-wider font-medium text-lg">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className={`px-4 py-1 border m-1 border-white text-white whitespace-nowrap transition-colors ${item.highlighted
                                    ? 'bg-[#f0e84d] text-black!'
                                    : 'bg-transparent hover:bg-white hover:text-black'
                                    }`}
                            >
                                {item.text}
                            </button>
                        ))}
                    </div>
                </div>

                {/* "Gelişmelerden İlk Sen Haberdar Ol!" Section */}
                <div>
                    {/* Title */}
                    <div className="mb-4 flex items-center mt-40">
                        <h2 className="text-3xl lg:text-4xl font-black mr-6">GELİŞMELERDEN İLK SEN HABERDAR OL!</h2>
                    </div>

                    {/* E-Mail */}
                    <div className="w-full mt-10 flex flex-row justify-between font-semibold tracking-wider mt-4">
                        <span className="ml-3">EMAIL</span>
                        <span className="flex flex-row items-center gap-2 text-[#f0e84d] hover:underline cursor-pointer">GÖNDER <ArrowRight size={20} /></span>
                    </div>

                    <hr className="mt-4 opacity-20" />

                    {/* Social Icons */}
                    <img src="/images/home/explore/social.svg" alt="Socials" className="mt-12" />

                    {/* Pages */}
                    <div className="mt-18 mb-7 max-w-80">
                        <div className="grid grid-cols-3 gap-16 tracking-wider">
                            <span className="hover:underline cursor-pointer">HABERLER</span>
                            <span className="col-span-2 hover:underline cursor-pointer">ETKİNLİKLER</span>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-16">
                            <span className="hover:underline cursor-pointer">MÜZİKLER</span>
                            <span className="hover:underline cursor-pointer">VİDEOLAR</span>
                            <span className="hover:underline cursor-pointer">İLETİŞİM</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <span className="opacity-40 tracking-wider">© RAPKOLOGY All Rights Are Reserved 2022.</span>
                </div>
            </div>
        </section>
    )
}