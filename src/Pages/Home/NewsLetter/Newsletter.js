import React from 'react';


const Newsletter = () => {


    return (
        <section className='my-16 bg-red-200 py-16'>
            <div className='flex flex-col justify-center'>
                <div className='text-center'>
                    <h3 className='text-4xl font-bold text-primary uppercase'>Subscribe</h3>
                    <h2 className='p-2 text-xl'>Subscribe our Newsletter to stay updated in every moment</h2>
                </div>
                <div className='pt-7 px-3'>
                    <form action="" method='post'>
                        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3 justify-center items-center'>
                            <input type="email" placeholder="Enter a valid email address" className="input input-bordered input-accent w-full max-w-xs" />
                            <button className="btn btn-primary m-0">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               
            </div>
        </section>
    );
};

export default Newsletter;