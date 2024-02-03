export default function Portfolio() {
    return (
        <section id="portfolio" className={'pt-36 pb-32 bg-slate-100'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16">
                        <h4 className={'text-lg text-primary font-semibold mb-2 uppercase'}>Portfolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Saya</h2>
                        <p className="text-md font-medium text-secondary md:text-lg">Sebuah project saya, yang selalu saya
                            kembangkan</p>
                    </div>
                    <div className="w-full p-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/dist/img/portfolio/1.png" alt="jokes-random" width={'w-full'}
                                     title={'jokes-random'}/>
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary transition duration-500 hover:text-primary'}><a href="https://jokes-random-v1.netlify.app/" target={"_blank"} title={'visit project'} rel="noreferrer" >JoRan (jokes random)</a></h3>
                            <p className={'font-medium text-base text-secondary'}>Sebuah project latihan untuk mengasah
                                logika react js</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/dist/img/portfolio/2.png" alt="jokes-random" width={'w-full'}
                                     title={'jokes-random'}/>
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary'}><a href="https://todo-apps-v1.netlify.app/" target={"_blank"} title={'visit project'} rel="noreferrer">Todo Apps</a></h3>
                            <p className={'font-medium text-base text-secondary'}>Sebuah project latihan react, dengan logic todo</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/dist/img/portfolio/3.png" alt="jokes-random" width={'w-full'}
                                     title={'jokes-random'}/>
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary'}><a
                                href="https://shooping-notesqu.netlify.app/" target={"_blank"} title={'visit project'}
                                rel="noreferrer">Notes Apps</a></h3>
                            <p className={'font-medium text-base text-secondary'}>Sebuah project latihan dengan logic
                                react</p>
                        </div>
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src="/dist/img/portfolio/4.png" alt="jokes-random" width={'w-full'}
                                     title={'jokes-random'}/>
                            </div>
                            <h3 className={'font-semibold text-xl text-dark mb-3 mt-5 transition duration-500 hover:text-primary'}><a href="https://wisataid.vercel.app/" target={"_blank"} title={'visit project'} rel="noreferrer">WisataID</a></h3>
                            <p className={'font-medium text-base text-secondary'}>Sebuah project team dengan react,express.js, yang sangat kompleks</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}