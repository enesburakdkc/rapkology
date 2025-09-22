"use client"

import { useEffect, useState } from "react";
import mockData from "@/data/mockData.json"
import { Post } from "@/types/post";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CustomButton from "../../ui/CustomButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function Hero() {
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

    // Function for trimming text
    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength).trim() + '...'
    }

    if (loading) {  // Visible while loading
        return (
            <div className="h-160 flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900">
                <div className="text-white text-xl">Yükleniyor...</div>
            </div>
        );
    }

    return (
        <section id="hero" className="h-200 md:h-180 w-full relative flex flex-col">

            {/* Slide Section */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                className="w-full h-full relative"
            >
                {posts.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div className="relative w-full h-full p-14">
                            <img src={item.attributes.img} alt={item.attributes.title} className="z-0 absolute -m-14 w-full h-full object-cover object-top" />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 -m-14 bg-gradient-to-b from-[#121212] via-[#121212]/30 to-transparent z-5"></div>
                            <div className="absolute inset-0 -m-14 bg-gradient-to-l from-[#121212] via-[#121212]/30 to-transparent z-5"></div>

                            {/* Content Overlay */}
                            <div className="relative flex flex-col z-10 mt-10 md:mt-0 md:ml-auto mr-18 h-full w-full md:w-[35%] items-center md:items-start justify-start md:justify-center text-center md:text-start text-white">
                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                                    {truncateText(item.attributes.title, 34).toUpperCase()}
                                </h2>

                                {/* Description */}
                                <p className="font-saira text-md font-medium mt-4 mb-6">
                                    {item.attributes.desc}
                                </p>

                                <CustomButton
                                    backgroundColor="#F0E84D"
                                    textColor="#000000"
                                    className="mx-auto md:m-0 px-6 py-3 max-sm:px-5 max-sm:py-2.5 max-sm:text-sm"
                                >
                                    Devamını Oku
                                </CustomButton>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Buttons (Custom) */}
                <div
                    className="custom-prev hidden md:flex cursor-pointer absolute top-1/2 left-16 z-10 text-white hover:text-yellow-400 transition-colors select-none"
                    style={{ transform: "translateY(-50%)" }}
                >
                    <ArrowLeft size={40} strokeWidth={0.5} />
                </div>
                <div
                    className="custom-next hidden md:flex cursor-pointer absolute top-1/2 right-16 z-10 text-white hover:text-yellow-400 transition-colors select-none"
                    style={{ transform: "translateY(-50%)" }}
                >
                    <ArrowRight size={40} strokeWidth={0.5} />
                </div>
            </Swiper>

            {/* Separator Vector */}
            <img
                src="/images/home/hero/hero-vector.svg"
                alt="Hero vector"
                className="absolute w-full h-40 object-cover bottom-0 z-10 pointer-events-none"
            />
        </section>
    )
}