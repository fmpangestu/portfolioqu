export default function Portfolio() {
    return (
        <section id="portfolio" className={'pt-36 pb-32 bg-slate-100 dark:bg-slate-800'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16" 
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-duration="500">
                        <h4 className={'text-lg text-primary font-semibold mb-2 uppercase'}>Portfolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Project Saya</h2>
                        <p className="text-md font-medium text-secondary md:text-lg dark:text-slate-400">Sebuah project saya, yang selalu
                            saya
                            kembangkan</p>
                    </div>
                    <div className="w-full p-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto ">
                        <div className="mb-12 p-4 md:w-1/3" 
                        data-aos="zoom-out-right"
                        data-aos-offset="200"
                        data-aos-duration="500">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/img/portfolio/1.png" alt="jokes-random" width={'w-full'}
                                    title={'jokes-random'} />
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary  '}>
                                <a href="https://jokes-random-v1.netlify.app/" target={"_blank"} title={'visit project'}
                                    rel="noreferrer" className={'dark:text-white dark:hover:text-dark transition duration-300'}>JoRan (jokes random)</a></h3>
                            <p className={'font-medium text-base text-secondary dark:text-slate-400'}>Sebuah project menggunakan tools logika react js</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/3" 
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-duration="500">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/img/portfolio/2.png" alt="todo apps" width={'w-full'}
                                    title={'todo apps'} />
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary'}>
                                <a href="https://todo-apps-v1.netlify.app/" target={"_blank"} title={'visit project'}
                                    rel="noreferrer" className={'dark:text-white dark:hover:text-dark transition duration-300'}>Todo Apps</a></h3>
                            <p className={'font-medium text-base text-secondary dark:text-slate-400'}>Sebuah project react, dengan
                                logika todo</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/3"  
                        data-aos="zoom-out-left"
                        data-aos-offset="200"
                        data-aos-duration="500">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/img/portfolio/3.png" alt="notes app" width={'w-full'}
                                    title={'notes app'} />
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary'}>
                                <a
                                    href="https://shooping-notesqu.netlify.app/" target={"_blank"}
                                    title={'visit project'}
                                    rel="noreferrer" className={'dark:text-white dark:hover:text-dark transition duration-300'}>Notes Apps</a></h3>
                            <p className={'font-medium text-base text-secondary dark:text-slate-400'}>Sebuah project dengan logika
                                react</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/3" 
                        data-aos="zoom-out-right"
                        data-aos-offset="200"
                        data-aos-duration="500">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/img/portfolio/4.png" alt="wisata id" width={'w-full'}
                                    title={'Wisata ID'} />
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary'}>
                                <a href="https://wisataid.vercel.app/" target={"_blank"} title={'visit project'}
                                    rel="noreferrer" className={'dark:text-white dark:hover:text-dark transition duration-300'}>WisataID</a></h3>
                            <p className={'font-medium text-base text-secondary dark:text-slate-400'}>Sebuah project team dengan
                                react,express.js, yang sangat kompleks</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/3" 
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-duration="500">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/img/portfolio/5.png" alt="Yok ngopi" width={'w-full'}
                                    title={'Yok ngopi'} />
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary'}>
                                <a href="https://yokngopicuy.netlify.app/#/list-restaurant" target={"_blank"} title={'visit project'}
                                    rel="noreferrer" className={'dark:text-white dark:hover:text-dark transition duration-300'}>Yok Ngopi</a></h3>
                            <p className={'font-medium text-base text-secondary dark:text-slate-400'}>Sebuah project yang menggunakan vanila language,html css javascript</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/3" 
                        data-aos="zoom-out-left"
                        data-aos-offset="200"
                        data-aos-duration="500">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/img/portfolio/6.png" alt="Yok ngopi" width={'w-full'}
                                    title={'Yok ngopi'} />
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary'}>
                                <a href="https://github.com/farhnDev/chat-api-MERN.git" target={"_blank"} title={'visit github project'}
                                    rel="noreferrer" className={'dark:text-white dark:hover:text-dark transition duration-300'}>Web Chat Clone</a></h3>
                            <p className={'font-medium text-base text-secondary dark:text-slate-400'}>Sebuah project yang di kembangkan dengan MERN Stack, yang bisa digunakan secara online</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}