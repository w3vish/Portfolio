"use client";
import { FormEvent, useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("Submit");

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Submitting...");

        // Prepare the form data to send to Google Forms
        const formData = new URLSearchParams({
            "entry.2005620554": name,
            "entry.1045781291": email,
            "entry.839337160": message,
        });

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSeFcL8MnHxlW5tBDY6XOfKsz5lZwFGFpPSz_LsmuV4HBWcQ4g/formResponse",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formData.toString(),
                    mode: "no-cors",
                }
            );

            // Reset form on success
            setName("");
            setEmail("");
            setMessage("");
            setStatus("Submitted");
            alert("Your message has been sent successfully!");
        } catch {
            setStatus("Try Again");
            alert("There was an error sending your message. Please try again later.");
        }
    };

    return (
        <section className="mx-auto mt-16 max-w-screen-lg">
            <h2 className="mb-6 font-semibold text-2xl text-center text-gray-800 dark:text-gray-200">
                Contact Me
            </h2>
            <div className="mb-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    Feel free to reach out at <span className="font-semibold text-primary">w3vish@gmail.com</span>
                </p>
            </div>

            <form onSubmit={submitForm} className="space-y-6">
                {/* Name and Email */}
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700 text-sm dark:text-gray-300">
                            Full Name
                        </label>
                        <input
                            className="block border-gray-300 focus:border-primary dark:border-gray-600 dark:bg-gray-700 shadow-sm mt-1 p-2 border rounded-md focus:ring-primary w-full dark:text-gray-300"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700 text-sm dark:text-gray-300">
                            Email
                        </label>
                        <input
                            className="block border-gray-300 focus:border-primary dark:border-gray-600 dark:bg-gray-700 shadow-sm mt-1 p-2 border rounded-md focus:ring-primary w-full dark:text-gray-300"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block font-medium text-gray-700 text-sm dark:text-gray-300">
                        Message
                    </label>
                    <textarea
                        className="block border-gray-300 focus:border-primary dark:border-gray-600 dark:bg-gray-700 shadow-sm mt-1 p-2 border rounded-md focus:ring-primary w-full dark:text-gray-300"
                        name="message"
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-primary hover:bg-secondary dark:hover:bg-primary dark:bg-secondary shadow-md px-6 py-2 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-gray-500 focus:ring-offset-2 text-white focus:outline-none"
                    >
                        {status}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
