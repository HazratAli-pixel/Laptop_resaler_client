import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    let qsn1 = "From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies. Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases. To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing."
    let qsn2 = " is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information."
    let qsn3 = " JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language."
    return (
        <div className='container mx-auto'>
            <div className=' rounded-3 m-0 p-2'>
                <h1 className='text-2xl text-center font-bold p-3 bg-gradient-to-r from-violet-50 via-violet-600 to-violet-50 rounded-lg text-white'>Questions And Answer</h1>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                    <p className="bg-gradient-to-r text-2xl from-violet-200  to-purple-600 p-4 rounded-lg font-extrabold text-slate-800 text-start" >Difference between SQL and NoSQL</p>
                    </div>
                    <div className='rounded-lg  m-2 p-2'>
                        <p className='text-start py-2'><strong>Answer: </strong></p>
                        <div className='flex justify-center'>
                            <img src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg" alt="" />
                        </div>
                        <div className='flex justify-center flex-col pt-8'>
                            <p className='text-start py-2'><strong className='italic'>Difference between SQL and NoSQL </strong>{qsn1} </p>
                            <img src="https://miro.medium.com/max/700/1*CeQrHqjVIesDYAH99fFvOg.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                        <p className="bg-gradient-to-r text-2xl from-violet-200  to-purple-600 p-4 rounded-lg font-extrabold text-slate-800 text-start" >What is JWT, and how does it work??</p>
                    </div>
                    <div className='rounded-lg m-2 px-2'>
                        <p className='text-start py-2'><strong>Answer: </strong></p>
                        <div className='flex justify-center'>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--9Eyi8mVf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h70g99gmnoy0boni6j9q.png" alt="" />
                        </div>
                        <div className='flex justify-center flex-col pt-5'>
                            <p className='text-start py-2'><strong>JSON WEB TOKEN (JWT) </strong> {qsn2}</p>
                            <img src="https://miro.medium.com/max/1400/1*tW-8Y2edq04b4__zF0Jm9Q.png" alt="" />
                        </div>
                                
                    </div>
                </div>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                        <p className="bg-gradient-to-r text-2xl from-violet-200  to-purple-600 p-4 rounded-lg font-extrabold text-slate-800 text-start" >What is the difference between javascript and NodeJS?</p>
                    </div>
                    <div className='rounded-lg m-2 px-2'>
                        <p className='text-start py-2'><strong>Answer: </strong></p>
                        <div className='flex justify-center'>
                            <img src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png" alt="" />
                        </div>
                        <div className='flex justify-center flex-col pt-5'>
                            <p className='text-start py-2'><strong>Java Script and Node.js: </strong> {qsn3}</p>
                            <img src="https://www.javaassignmenthelp.com/blog/wp-content/uploads/2022/01/difference-Javascript-and-nodejs-576x1024.webp" alt="" />
                        </div>
                                
                    </div>
                </div>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                        <p className="bg-gradient-to-r text-2xl from-violet-200  to-purple-600 p-4 rounded-lg font-extrabold text-slate-800 text-start" >How does NodeJS handle multiple requests at the same time?</p>
                    </div>
                    <div className='rounded-lg m-2 p-2'>
                        <p className='text-start py-2'><strong>Answer (Node): </strong>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.</p>
                        <p className='text-start py-2'> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                        <p className='text-start py-2'> If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;