import { useState } from "react";
import { IconBrandGithub, IconTrendingUp3 } from "@tabler/icons-react";
import { IoMdCloseCircle } from "react-icons/io";

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const projects = [
        {
            imgSrc: "/img/portfolio/1.png",
            imgAlt: "jokes-random",
            title: "JoRan (jokes random)",
            description: "Sebuah project menggunakan tools logika react js",
            link: "https://jokes-random-v1.netlify.app/",
            github: 'https://github.com/farhnDev/Jokes-random.git',
            aos: 'zoom-out-right'
        },
        {
            imgSrc: "/img/portfolio/2.png",
            imgAlt: "todo apps",
            title: "Todo Apps",
            description: "Sebuah project react, dengan logika todo",
            link: "https://todo-apps-v1.netlify.app/",
            github: 'https://github.com/farhnDev/Todo-app.git',
            aos: 'zoom-in'
        },
        {
            imgSrc: "/img/portfolio/3.png",
            imgAlt: "notes app",
            title: "Notes Apps",
            description: "Sebuah project dengan logika react",
            link: "https://shooping-notesqu.netlify.app/",
            github: 'https://github.com/farhnDev/shopping-note.git',
            aos: 'zoom-out-left'
        },
        {
            imgSrc: "/img/portfolio/4.png",
            imgAlt: "wisata id",
            title: "WisataID",
            description: "Sebuah project team dengan react,express.js, yang sangat kompleks",
            link: "https://wisataid.vercel.app/",
            github: 'https://github.com/farhnDev/wisataid.git',
            aos: 'zoom-out-right'
        },
        {
            imgSrc: "/img/portfolio/5.png",
            imgAlt: "Yok ngopi",
            title: "Yok Ngopi",
            description: "Sebuah project yang menggunakan vanila language,html css javascript",
            link: "https://yokngopicuy.netlify.app/#/list-restaurant",
            github: 'https://github.com/farhnDev/restaurant_web.git',
            aos: 'zoom-in'
        },
        {
            imgSrc: "/img/portfolio/6.png",
            imgAlt: "Dekstop Chat Api",
            title: "Web Chat Clone",
            link: '',
            github: "https://github.com/farhnDev/chat-api-MERN.git",
            description: "Sebuah project yang di kembangkan dengan MERN Stack, yang bisa digunakan secara online",
            aos: 'zoom-out-left'
        },
        {
            imgSrc: "/img/portfolio/7.png",
            imgAlt: "Beasiswa Finder",
            title: "Beasiswa Finder",
            link: '',
            github: "https://github.com/farhnDev/beasiswa-finder.git",
            description: "Sebuah project yang di kembangkan dengan laravel dan juga dengan MySQL. sebagai project team",
            aos: 'zoom-out-right'
        },
        {
            imgSrc: "/img/portfolio/8.png",
            imgAlt: "Sistem Informasi Desa Sitemu",
            title: "Sistem Informasi Desa Sitemu",
            link: 'https://sitemubersatu.com',
            github: "https://github.com/farhnDev/desa-sitemu.git",
            description: "Sebuah project yang di kembangkan dengan UI/UX yang menarik, dan juga pengembangan react js, dan beberapa fitur yang di utamakan",
            aos: 'zoom-out-right'
        },
    ];
    return (
        <section id="portfolio" className={'pt-36 pb-32 bg-slate-100 dark:bg-[#CCCCCC]'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16" data-aos="zoom-in">
                        <h4 className={'text-lg text-primary font-semibold mb-2 dark:text-[#1A1A1A] uppercase'}>Portfolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-[#1A1A1A]">Project Saya</h2>
                        <p className="text-md font-medium text-secondary md:text-lg dark:text-[#1A1A1A]">Sebuah project saya, yang selalu saya kembangkan</p>
                    </div>
                    <div className="w-full p-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                        {projects.map((project, index) => (
                            <div key={index} className="mb-12 p-4 md:w-1/3" data-aos={project.aos}>
                                <div className="card bg-white dark:bg-white shadow-xl rounded-lg overflow-hidden ">
                                    <figure>
                                        <img src={project.imgSrc} alt={project.imgAlt} className="w-full transform transition-transform duration-300 hover:scale-110" />
                                    </figure>
                                    <div className="card-body p-3">
                                        <h2 className="card-title font-bold">{project.title}</h2>
                                        <p className="font-base border-b-2 italic text-sm pb-1">{project.description}</p>
                                        <div className="card-actions flex justify-between items-center pt-2 gap-2">
                                            <a href={project.github} target="_blank" rel="noreferrer">
                                                <button className="flex gap-2 btn px-1 py-1 lg:px-3 lg:py-1 rounded-lg text-primary bg-white shadow hover:bg-primary hover:text-white transition duration-300">
                                                    Github <IconBrandGithub stroke={2} />
                                                </button>
                                            </a>
                                            {project.link ? (
                                                <a href={project.link} target="_blank" rel="noreferrer">
                                                    <button className="flex gap-2 btn px-1 py-1 lg:px-3 lg:py-1 rounded-lg text-white bg-primary shadow hover:bg-white hover:text-primary transition duration-300">
                                                        Demo <IconTrendingUp3 stroke={2} />
                                                    </button>
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={openModal}
                                                    className="flex gap-2 btn px-1 py-1 lg:px-3 lg:py-1 rounded-lg text-white bg-primary shadow hover:bg-white hover:text-primary transition duration-300"
                                                >
                                                    Demo <IconTrendingUp3 stroke={2} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20" >
                    <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg" data-aos="zoom-in">
                        <div className="flex justify-center items-center gap-3 relative">
                            <h2 className="text-lg font-bold mb-4 dark:text-white">Segera Hadir</h2>
                            <button onClick={closeModal} className="mb-14 right-[-20px] absolute text-red-500">
                                <IoMdCloseCircle size={29} />
                            </button>
                        </div>
                        <p className="text-md font-medium dark:text-white">Project sedang tahap deployment, ditunggu ya😊</p>
                    </div>
                </div>
            )}
        </section>
    );
}    