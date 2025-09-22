import { Heart, Star, ChevronDown } from "lucide-react";

export function Twitch() {
    return (
        <section id="twitch" className="z-40 relative m-auto w-full h-150 md:h-165 flex flex-col items-center mt-0 md:mt-14 select-none">

            {/* Twitch Image and Buttons Section */}
            <div className="z-50 w-full h-full absolute top-0 xl:top-30 scale-80 md:scale-100 flex flex-col items-center">

                {/* Twitch Image Section */}
                <img
                    src="/images/home/twitch/twitch.svg"
                    alt="Her hafta canlı yayın"
                    className="-ml-3 sm:-ml-13 w-104 sm:w-140 h-auto pointer-events-none"
                />

                {/* Buttons Section */}
                <div className="m-auto -mt-3 w-fit p-3 rounded-2xl flex flex-row justify-center gap-3 border border-gray-100/10 shadow -rotate-4 bg-[#151515]">
                    <button className="py-2 px-3 rounded-lg text-sm font-mono font-semibold flex flex-row gap-2 items-center whitespace-nowrap bg-[#864CF6] cursor-pointer"><Heart size={18} strokeWidth={3} /> Takip Et</button>
                    <button className="py-2 px-3 rounded-lg text-sm font-mono font-semibold flex flex-row gap-2 items-center whitespace-nowrap bg-[#222123] cursor-pointer"><Star size={18} strokeWidth={3} /> Abone Ol<ChevronDown size={18} strokeWidth={3} className="-ml-1" /></button>
                </div>
            </div>

            {/* Banner Section */}
            <div className="z-40 absolute bottom-0 h-full w-full overflow-hidden">
                {/* Background Image */}
                <img
                    src="/images/home/twitch/twitch-bg.png"
                    alt="Twitch Bg"
                    className="absolute w-320 h-80 object-cover bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                />

                {/* Gradient Overlay */}
                <div className="absolute w-full h-80 bottom-0 bg-gradient-to-b from-[#121212] via-[#121212]/30 to-transparent z-15"></div>

                {/* Foreground images */}
                <img
                    src="/images/home/twitch/man-picture.png"
                    alt="Man Picture"
                    className="w-auto h-70 md:h-110 absolute bottom-7 -left-10 sm:left-0 sm:translate-x-[8vw] z-20 mt-8"
                />
                <img
                    src="/images/home/twitch/women-picture.png"
                    alt="Women Picture"
                    className="w-auto h-90 md:h-132 absolute -bottom-6 -right-10 sm:right-0 sm:-translate-x-[12vw] z-20 "
                />
            </div>

            {/* Separator Vector */}
            <img
                src="/images/home/twitch/twitch-vector.svg"
                alt="Twitch vector"
                className="absolute w-full h-40 object-cover bottom-0 z-60 pointer-events-none"
            />
        </section>
    )
}