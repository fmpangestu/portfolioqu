export default function Contacts() {
    return (
        <section className={'pt-36 pb-32'} id={'contact'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16">
                        <h4 className={'text-lg text-primary font-semibold mb-2 uppercase'}>Contacts</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
                        <p className="text-md font-medium text-secondary md:text-lg">Hubungi saya apabila ada yang ingin di sampaikan 😊</p>
                    </div>
                    <form action="">
                        <div className="w-full lg:w-2/3 mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name"  className={'text-base text-primary font-semibold'}>Name</label>
                            <input type="text" id={'name'} className={'w-full p-3 border rounded-md bg-slate-200 focus:outline-none focus:ring-primary focus:border-1 focus:border-primary placeholder:italic'} placeholder={'Your Name'}/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="email"  className={'text-base text-primary font-semibold'}>Email</label>
                            <input type="text" id={'email'} className={'w-full p-3 border rounded-md bg-slate-200 focus:outline-none focus:ring-primary focus:border-1 focus:border-primary placeholder:italic'} placeholder={'Your Email'}/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="message"  className={'text-base text-primary font-semibold'}>Message</label>
                            <textarea  id={'message'} className={'w-full h-40 p-3 border rounded-md bg-slate-200 focus:outline-none focus:ring-primary focus:border-1 focus:border-primary placeholder:italic resize-none'} placeholder={'Your Message'}/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <button className={'w-full text-base font-semibold px-8 py-2 text-slate-100  bg-primary rounded-full hover:opacity-85 hover:shadow-lg transition duration-500'}>Kirim</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}