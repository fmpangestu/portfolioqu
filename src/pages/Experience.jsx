export default function Experience() {
    return (
        <section id={'experience'} className={'pt-36 pb-32 bg-slate-800 w-full dark:bg-slate-300'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="=mx-auto text-center mb-20">
                        <h4 className={'text-lg text-primary font-semibold mb-2 uppercase'}>Experience</h4>
                        <h2 className="font-bold text-slate-50 text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark">Pengalaman
                            dan Skills </h2>
                        <p className="text-md font-medium text-secondary md:text-lg">Sebuah pengalaman pelatihan yang
                            pernah saya ikuti, dan Skill yang saya kuasai sampai saat ini menjadi <span
                                className={'text-slate-50 dark:text-dark dark:font-bold'}>Junior Web Developer</span>
                        </p>
                    </div>
                    <div className="w-full px-4 mb-16">
                            <h3 className={'font-semibold text-xl text-center mb-10 text-white uppercase'}>Mitra</h3>
                        <div className="flex flex-wrap justify-center items-center mb-16">
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
                            <h3 className={'font-semibold text-xl text-center mb-10 text-white uppercase'}>Skill</h3>
                        <div className="flex flex-wrap justify-center items-center">
                            <a href="https://www.w3schools.com/html/default.asp" target={'_blank'}
                               className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/html.png" alt="html skill"/>
                            </a>
                            <a href="https://www.w3schools.com/Css/" target={'_blank'}
                               className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/css-3.png" alt="css skill"/>
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target={'_blank'}
                               className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/js.png" alt="javascript skill"/>
                            </a>
                            <a href="https://nodejs.org/en" target={'_blank'}
                               className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/nodejs.png" alt="dicoding"/>
                            </a>
                            <a href="https://react.dev/" target={'_blank'}
                               className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/science.png" alt="reactjs skill"/>
                            </a>
                            <a href="https://tailwindcss.com/" target={'_blank'}
                               className={'max-w-[60px] mx-4 py-4 lg:grayscale lg:opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'}
                               rel="noreferrer">
                                <img src="/img/experience/tailwind.png" alt="tailwind skill"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}