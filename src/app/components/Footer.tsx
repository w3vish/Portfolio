import { SiGithub, SiInstagram, SiX } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-background mt-10 py-6 border-t">
            <div className="mx-auto px-4 max-w-screen-lg">
                {/* Footer Content */}
                <div className="flex md:flex-row flex-col md:justify-between items-center space-y-4 md:space-y-0">
                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <h2 className="font-semibold text-gray-800 text-xl dark:text-gray-200">
                            Vishal Suryavanshi
                        </h2>
                        <p className="text-gray-600 text-sm dark:text-gray-400">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/w3vish"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary dark:hover:text-secondary dark:text-gray-400 transition"
                        >
                            <SiGithub size={24} />
                        </a>
                        <a
                            href="https://instagram.com/exultico"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary dark:hover:text-secondary dark:text-gray-400 transition"
                        >
                            <SiInstagram size={24} />
                        </a>
                        <a
                            href="https://x.com/w3vish"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary dark:hover:text-secondary dark:text-gray-400 transition"
                        >
                            <SiX size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
