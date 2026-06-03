import React from "react";
import { useState } from "react";
import "./Contact.css"

export function Contact (){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("m");
    const [resMsg, setResMsg] = useState('Send Message');
    // const static = 'Send Message'
    const wait = 'your message is being sent';
    const error = 'An error occured. please try again';
    const status = "Your mssage has been delivered";

    // class message {
    //     constructor(name, email, msg) {
    //         this.name = name;
    //         this.email = email;
    //         this.msg = msg;
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResMsg(wait);
        const msgObj = { "name":name, "email":email, "msg":msg };
        console.log(JSON.stringify(msgObj))
        console.log(msgObj)
        try{
            const res = await fetch ("/api/submit-form", {
                method: "POST",
                headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(msgObj)
            });
            if(!res.ok){
                setResMsg(error);
                return
            }
            setResMsg(status);
        } catch(err) {
            console.error(err);
            setResMsg(error);
            alert(err);
        }
    };


    return(
        <>
        <div id="contact" className="w-screen h-fit pt-5 sm:p-2 md:p-0 grid justify-center wrap-break-word mt-0 sm:mt-2 md:mt-0 mb-5">
            <div className=" grid md:grid-cols-2 sm:grid-cols-1 justify-self-center justify-center m-5 p-5 align-middle self-center h-auto">
                <div className="md:col-start-1 md:col-end-2 w-full wrap-break-word">
                    <b className="font-light text-gray-600 text-left">Contact</b>
                    <br /><br />
                    <h2 className="sm:text-2xl md:text-4xl w-[90%] font-semibold justify-self-center">Let's build something clear and functional</h2><br />
                    <p className="text-gray-600 sm:text-base md:text-xl w-[90%] wrap-break-word justify-self-center">
                        Whether it's a business website, landing page or a simple web solution, feel free to reach out
                    </p>
                    <br />
                    <div className="w-[90%]">
                        <div className="w-[90%] m-5 p-5 bg-gray-50 rounded-xl shadow-sm shadow-gray-600 flex gap-5">
                            <div>
                                <img src="/email.jpg" className="w-10" alt="" />
                            </div>
                            <div>
                                <b>Gmai:</b><br />
                                <i className="text-gray-800">hussain.reza.hr@gamil.com</i>
                            </div>
                        </div>
                        <div className="w-[90%] m-5 p-5 bg-gray-50 rounded-xl shadow-sm shadow-gray-600 flex gap-5 ">
                            <div className=" w-fit">
                                <img src="/whatsapp.png" className="w-10" alt="" />
                            </div>
                            <div>
                                <b>WhatsApp:</b><br />
                                <i className="text-gray-800">0322-6316239</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-start-2 md:col-end-3 w-[90%] grid wrap-break-word p-5 rounded-xl shadow-sm shadow-gray-600 h-fit self-center bg-gray-50 justify-self-center">
                    <form className=" p-5 w-full">
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name="name" id="name" 
                        className="outline outline-gray-600 w-full rounded sm:text-xl md:text-3xl"
                        onChange={(e) => setName(e.target.value)}
                        />
                        <br /><br />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"
                        className="outline outline-gray-600 w-full rounded sm:text-xl md:text-3xl"
                        onChange={(e) => setEmail(e.target.value)}
                         />
                        <br /><br />
                        <label htmlFor="msg">Message</label>
                        <textarea rows={4} type="text" name="msg" id="msg"
                        className="outline outline-gray-600 w-full rounded sm:text-xl md:text-2xl"
                        onChange={(e) => setMsg(e.target.value)} />
                        <br /><br />
                        <button className="bg-none p-0 w-full m-2" onClick={handleSubmit}>
                            <div id="btn1" className=" p-2 sm:w-full md:p-4 md:w-full text-center rounded-xl bg-black font-medium text-[#FFF8DC] cursor-pointer outline-1 outline-black text-sm flex gap-5 justify-center"> {resMsg} <img src="/send.png" className=" h-4 invert" alt="" /> </div>
                        </button>
                        <div className="flex gap-5 items-center justify-center text-gray-600"><img src="/c.png" className="h-4 brightness-50" alt="" /><i className="text-base">Usually replies with in 24 hours</i></div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}