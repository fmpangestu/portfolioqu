
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contacts() {
    const [formData, setFormData] = useState({
        from_name: '',
        // reply_to: '',  // Add this field for user's email
        subject: '',
        message: '',
        to_name: 'Farhan',
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_38jv3rk', 
            'template_mtfcgq9',
            formData,
            'DI3gr7cRmIEFX3YLD'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatusMessage('Pesan berhasil dikirim!');
            setShowModal(true); // Tampilkan modal setelah berhasil dikirim
            setFormData({
                from_name: '',
                // reply_to: '',  // Reset this field
                subject: '',
                message: '',
                to_name: 'Farhan', 
            });
        }, (error) => {
            console.log('FAILED...', error);
            setStatusMessage('Pesan gagal dikirim. Silakan coba lagi.');
        });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className={'pt-36 pb-32 dark:bg-[#1A1A1A]'} id={'contact'}>
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-16" data-aos="zoom-in-down">
                        <h4 className={'text-lg text-primary dark:text-[#CCCCCC] font-semibold mb-2 uppercase'}>Kontak</h4>
                        <p className="text-md font-medium text-secondary md:text-lg dark:text-[#333333]">Hubungi saya, apabila ada yang ingin disampaikan 😊</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full lg:w-2/3 mx-auto">
                            <div className="w-full px-4 mb-8" data-aos="fade-right">
                                <label htmlFor="from_name" className={'text-base text-primary font-semibold dark:text-[#CCCCCC]'}>Nama</label>
                                <input
                                    type="text"
                                    id={'from_name'}
                                    name="from_name"
                                    className={'w-full p-3 border rounded-md bg-slate-200 focus:outline-none focus:ring-primary focus:border-1 focus:border-primary placeholder-italic dark:bg-[#CCCCCC] dark:text-dark dark:border-none'}
                                    placeholder={'Masukkan Nama Anda...'}
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* <div className="w-full px-4 mb-8" data-aos="fade-right">
                                <label htmlFor="reply_to" className={'text-base text-primary font-semibold dark:text-[#CCCCCC]'}>Email</label>
                                <input
                                    type="email"  // Use email type
                                    id={'reply_to'}
                                    name="reply_to"
                                    className={'w-full p-3 border rounded-md bg-slate-200 focus:outline-none focus:ring-primary focus:border-1 focus:border-primary placeholder-italic dark:bg-[#CCCCCC] dark:text-dark dark:border-none'}
                                    placeholder={'Masukkan Email Anda...'}
                                    value={formData.reply_to}
                                    onChange={handleChange}
                                    required
                                />
                            </div> */}
                            <div className="w-full px-4 mb-8" data-aos="fade-right">
                                <label htmlFor="subject" className={'text-base text-primary font-semibold dark:text-[#CCCCCC]'}>Subjek</label>
                                <input
                                    type="text"
                                    id={'subject'}
                                    name="subject"
                                    className={'w-full p-3 border rounded-md bg-slate-200 focus:outline-none focus:ring-primary focus:border-1 focus:border-primary placeholder-italic dark:bg-[#CCCCCC] dark:text-dark dark:border-none'}
                                    placeholder={'Masukkan Subjek...'}
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>                            
                            <div className="w-full px-4 mb-8" data-aos="fade-right">
                                <label htmlFor="message" className={'text-base text-primary font-semibold dark:text-[#CCCCCC]'}>Pesan</label>
                                <textarea
                                    id={'message'}
                                    name="message"
                                    className={'w-full h-40 p-3 border rounded-md bg-slate-200 focus:outline-none focus:ring-primary focus:border-1 focus:border-primary placeholder-italic dark:bg-[#CCCCCC] dark:text-dark dark:border-none resize-none'}
                                    placeholder={'Tulis Pesan Anda...'}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="w-full px-4 mb-8" data-aos="fade-left">
                                <button type="submit" className={'w-full text-base font-semibold px-8 py-2 text-slate-100 dark:text-dark bg-primary dark:bg-[#CCCCCC] rounded-full hover:opacity-85 hover:shadow-lg transition duration-500'}>Kirim</button>
                            </div>
                        </div>
                    </form>
                    {/* {statusMessage && <p className="text-center mt-4">{statusMessage}</p>} */}
                </div>
            </div>
            {/* Modal untuk alert */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-md mx-auto my-6">
                        {/* Content modal */}
                        <div className="relative bg-white border-2 border-primary rounded-lg shadow-lg">
                            <div className="p-6">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-primary">Pesan Terkirim</h3>
                                    <p className="text-gray-600 mt-2">{statusMessage}</p>
                                </div>
                                <div className="text-center mt-4">
                                    <button
                                        onClick={closeModal}
                                        className="text-sm px-4 py-2 bg-primary text-white rounded-full hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* End modal */}
        </section>
    );
}
