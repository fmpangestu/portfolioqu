import React from 'react';
import GitHubCalendar from 'react-github-calendar';
export default function Experience() {

    return (
        <section id={'experience'} className={'pt-36 pb-32 bg-slate-800 w-full dark:bg-slate-300'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="=mx-auto text-center mb-20">
                        <h4 className={'text-lg dark:text-black text-white text-primary font-semibold mb-2 uppercase'}>Experience</h4>
                        <h2 className="font-bold text-slate-50 text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark">Pengalaman
                            dan Skills </h2>
                        <p className="text-md font-medium text-secondary md:text-lg dark:text-black text-white">Sebuah pengalaman pelatihan yang
                            pernah saya ikuti, dan Skill yang saya kuasai sampai saat ini menjadi <span
                                className={'text-slate-50 dark:text-dark dark:font-bold'}>Junior Web Developer</span>
                        </p>
                    </div>

                    <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                        <div className="pl-24 relative before:w-4 before:h-4 before:dark:bg-slate-800 before:bg-primary before:absolute before:rounded-full before:left-[58px]">
                            <h3 className="absolute left-0 text-lg dark:text-black text-white font-semibold">2023</h3>
                            <div className="container mx-auto p-4">
                                <div className="clearfix">
                                    <a href="https://www.dicoding.com/" target="_blank" rel="noreferrer"
                                        className="float-left max-w-[250px] mx-2.5 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ">
                                        <img src="/img/experience/dicoding1.jpeg" alt="dicoding" className="w-full" />
                                    </a>
                                    <p className="text-lg dark:text-black text-white">
                                        <span className='font-bold'>Dicoding Indonesia</span> adalah salah satu platform MSIB KAMPUS MERDEKA BATCH 5, pada saat itu yang saya daftar.
                                        saya mengikuti program (MBKM) pada waktu itu, selama 6 bulan(1 semester), banyak sekali pengalaman yang saya dapatkan
                                        dan juga pembelajarannya, dimulai dari cara membuat website dengan semantic, dan juga membuat website yang mengutamakan fitur aksesibilitas, serta responsive yang baik.
                                    </p>
                                    <p className="text-lg dark:text-black text-white">
                                        Saya sangat bangga sekali menjadi lulusan <span className='font-bold'>Dicoding Indonesia</span> karena banyak sekali yang saya terima.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:dark:bg-slate-800 before:bg-primary before:absolute before:rounded-full before:left-[58px]">
                            <h3 className="absolute left-0 text-lg dark:text-black text-white font-semibold">2023</h3>
                            <div className="container mx-auto p-4">
                                <div className="clearfix">
                                    <a href="https://www.dicoding.com/" target="_blank" rel="noreferrer"
                                        className="float-left max-w-[250px] mx-2.5 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ">
                                        <img src="/img/experience/idcamp.png" alt="dicoding" />
                                    </a>
                                    <p className="text-lg dark:text-black text-white">
                                        <span className='font-bold'>ID Camp</span> adalah salah satu platform yang saya ikut daftar ketika saya mengikuti MBKM Dicoding Indonesia, karena dari beberapa mentor di Dicoding itu, saya Di <span className='font-bold'>ID Camp</span> mengambil roles Front End dan React untuk pembelejaran yang saya tekuni, dari <span className='font-bold'>ID Camp</span> juga memberikan banyak sekali pengalaman yang tidak bisa saya dapatkan dari Kampus.
                                    </p>
                                    <p className="text-lg dark:text-black text-white">
                                        saya sangat bangga sekali menjadi lulusan <span className='font-bold'>ID Camp</span> karena banyak sekali yang saya terima.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:dark:bg-slate-800 before:bg-primary before:absolute before:rounded-full before:left-[58px]">
                            <h3 className="absolute left-0 text-lg dark:text-black text-white font-semibold">2023</h3>
                            <div className="container mx-auto p-4">
                                <div className="clearfix">
                                    <a href="https://www.dicoding.com/" target="_blank" rel="noreferrer"
                                        className="float-left w-[150px] lg:w-[200px] lg:relative lg:bottom-7 mx-2.5 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ">
                                        <img src="/img/experience/kampusmerdeka.png" alt="dicoding" />
                                    </a>
                                    <p className="text-lg dark:text-black text-white">
                                    <span className='font-bold'>Kampus Merdeka</span> adalah platform yang memberikan inovasi yang dibuat oleh Kemendikbudristek agar dapat menghasilkan lulusan yang siap menghadapi perubahan sosial, budaya, dunia kerja, dan kemajuan teknologi yang pesat. Program ini sudah diluncurkan oleh Kemendikbudristek sejak akhir Januari 2020.
                                    </p>
                                    <p className="text-lg dark:text-black text-white ">
                                        saya sangat berterima kasih sekali dengan adanya program ini, karena memberikan pengalaman yang sangat luar biasa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:dark:bg-slate-800 before:bg-primary before:absolute before:rounded-full before:left-[58px]">
                        <h3 className="absolute left-0 text-lg dark:text-black text-white font-semibold">Skill</h3>
                        <div className="grid grid-cols-3 lg:flex lg:flex-wrap justify-center items-center">
                            <a href="https://www.w3schools.com/html/default.asp" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/html.png" alt="html skill" />
                            </a>
                            <a href="https://www.w3schools.com/Css/" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/css-3.png" alt="css skill" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/js.png" alt="javascript skill" />
                            </a>
                            <a href="https://nodejs.org/en" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/nodejs.png" alt="dicoding" />
                            </a>
                            <a href="https://react.dev/" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/science.png" alt="reactjs skill" />
                            </a>
                            <a href="https://tailwindcss.com/" target={'_blank'}
                                className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                                rel="noreferrer">
                                <img src="/img/experience/tailwind.png" alt="tailwind skill" />
                            </a>
                        </div>
                    </div>
                    <div className='hidden lg:block  mt-10 py-5 px-48'>
                        <GitHubCalendar username="farhnDev" />
                    </div>
                    <div className="lg:hidden mt-10">
                        <GitHubCalendar username="farhnDev" />
                    </div>
                </div>
            </div>
        </section>
    )
}