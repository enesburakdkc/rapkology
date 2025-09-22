"use client"

import { useEffect, useState } from "react";
import mockData from "@/data/mockData.json"
import { Post } from "@/types/post";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

export function Favorites() {
    // Defining variables
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // Function for update dynamic data
    function useIsMobile() {
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            // First value
            const checkWidth = () => setIsMobile(window.innerWidth <= 1023);

            checkWidth();  // Check when page loaded
            window.addEventListener("resize", checkWidth);

            return () => window.removeEventListener("resize", checkWidth);
        }, []);

        return isMobile;
    }
    const isMobile = useIsMobile();

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
        <section id="favorites" className="mt-16 md:mt-0 w-full z-60 overflow-hidden">

            {/* YouTube & Spotify Section */}
            <div className="relative w-84 lg:w-150">

                {/* Background Image */}
                <img
                    src="images/home/favorites/white-vector.svg"
                    alt="White Vector"
                    className="w-full h-auto absolute z-60"
                />

                {/* YouTube Logo */}
                <img
                    src="images/home/favorites/youtube-logo.svg"
                    alt="White Vector"
                    className="w-20 lg:w-auto h-auto absolute z-70 top-6 md:top-8 left-1/5 transform -translate-x-1/5"
                />

                {/* Spotify Logo */}
                <img
                    src="images/home/favorites/spotify-logo.svg"
                    alt="White Vector"
                    className="w-20 lg:w-auto h-auto absolute z-70 top-5 md:top-7 right-1/3 transform translate-x-1/3"
                />
            </div>

            <div className="mt-28 z-80 w-full flex flex-col lg:flex-row justify-between items-center">

                {/* Title Section */}
                <h2 className="px-0 lg:px-22 m-auto lg:m-0 lg:mr-20 text-4xl lg:text-6xl text-center md:text-start font-bold mb-20 font-black">AYIN <br />FAVORİLERİ</h2>

                {/* Slide Section */}
                <Swiper
                    slidesPerView={isMobile ? 1 : 3}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: isMobile ? 1 : 3,
                            slidesPerGroup: 1,
                        },
                    }}
                    scrollbar={true}
                    navigation={false}
                    modules={[Keyboard, Scrollbar, Navigation]}
                    className="-mt-6 z-80"
                >
                    {posts.map((item, index) => (
                        <SwiperSlide>
                            <div className="relative">

                                {/* Background Image */}
                                <img
                                    src="/images/home/favorites/post-bg.svg"
                                    alt="favorites"
                                    className="w-70 h-auto absolute left-1/2 transform -translate-x-1/2 z-80"
                                />

                                {/* Top 10 Infos */}
                                <span className="text-lg tracking-wider absolute top-18 left-1/2 transform -translate-x-1/2 bg-[#323232] py-0 px-3 rounded-full z-90 whitespace-nowrap">
                                    Top 10 <b>({index + 1}. Sıra)</b>
                                </span>

                                {/* Author Infos */}
                                <div className="text-xl font-semibol tracking-wider absolute text-center top-30 left-1/2 transform -translate-x-1/2 z-90 whitespace-nowrap">
                                    <p>{item.attributes.authors[0].toUpperCase()}</p>
                                    <p className="font-bold">{item.attributes.category[0].toUpperCase()}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}