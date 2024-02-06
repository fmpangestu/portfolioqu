export default function Experience() {
    return (
        <section id={'experience'} className={'pt-36 pb-32 bg-slate-800 w-full dark:bg-slate-300'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="=mx-auto text-center mb-16">
                        <h4 className={'text-lg text-primary font-semibold mb-2 uppercase'}>Experience</h4>
                        <h2 className="font-bold text-slate-50 text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark">Pengalaman
                            saya </h2>
                        <p className="text-md font-medium text-secondary md:text-lg">Sebuah pengalaman, pelatihan yang
                            pernah saya ikuti sampai saat ini menjadi <span className={'text-slate-50 dark:text-dark dark:font-bold'}>Junior Web Developer</span>
                        </p>
                    </div>
                    <div className="w-full px-4">
                        <div className="flex flex-wrap justify-center items-center">
                            <a href="https://www.dicoding.com/" target={'_blank'}
                               className={'max-w-[120px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/dicoding1.jpeg" alt="dicoding"/>
                            </a>
                            <a href="https://idcamp.ioh.co.id/" target={'_blank'}
                               className={'max-w-[120px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/idcamp.png" alt="dicoding"/>
                            </a>
                            <a href="https://kampusmerdeka.kemdikbud.go.id/" target={'_blank'}
                               className={'max-w-[120px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/kampusmerdeka.png" alt="dicoding"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}