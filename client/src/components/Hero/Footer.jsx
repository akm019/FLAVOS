import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis neque, consequat ut rhoncus id, luctus nec magna.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/hero" className="hover:text-orange-500">Home</a></li>
                            <li><a href="/cuisine" className="hover:text-orange-500">Menu</a></li>
                            <li><a href="/about" className="hover:text-orange-500">About</a></li>
                            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                        <p>123 Orange St, Black City</p>
                        <p>Email: info@fooddelivery.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-orange-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.968 3.627 9.098 8.349 9.869-.135-0.875-0.254-2.186 0.054-3.131l1.636-6.696s-0.429-0.854-0.429-2.124c0-1.988 1.149-3.476 2.577-3.476 1.211 0 1.797 0.908 1.797 1.992 0 1.215-0.773 3.025-1.174 4.701-0.336 1.447 0.703 2.624 2.135 2.624 2.563 0 4.524-2.696 4.524-6.598 0-3.441-2.47-5.833-6.013-5.833-4.101 0-6.553 3.083-6.553 6.281 0 1.235 0.473 2.562 1.065 3.285 0.121 0.147 0.139 0.28 0.104 0.426-0.111 0.457-0.344 1.448-0.396 1.648-0.066 0.266-0.217 0.32-0.485 0.245-1.742-0.59-2.818-2.295-2.818-4.103 0-3.012 2.284-6.084 6.7-6.084 3.525 0 5.893 2.599 5.893 5.375 0 3.219-2.039 5.812-4.859 5.812-0.948 0-1.842-0.489-2.143-1.064l0.607 2.49c0.273 1.123 0.039 2.498 0.019 2.641C16.876 21.08 20 18.736 20 14.329c0-4.664-2.781-8.329-8.219-8.329z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-orange-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.968 3.627 9.098 8.349 9.869-.135-0.875-0.254-2.186 0.054-3.131l1.636-6.696s-0.429-0.854-0.429-2.124c0-1.988 1.149-3.476 2.577-3.476 1.211 0 1.797 0.908 1.797 1.992 0 1.215-0.773 3.025-1.174 4.701-0.336 1.447 0.703 2.624 2.135 2.624 2.563 0 4.524-2.696 4.524-6.598 0-3.441-2.47-5.833-6.013-5.833-4.101 0-6.553 3.083-6.553 6.281 0 1.235 0.473 2.562 1.065 3.285 0.121 0.147 0.139 0.28 0.104 0.426-0.111 0.457-0.344 1.448-0.396 1.648-0.066 0.266-0.217 0.32-0.485 0.245-1.742-0.59-2.818-2.295-2.818-4.103 0-3.012 2.284-6.084 6.7-6.084 3.525 0 5.893 2.599 5.893 5.375 0 3.219-2.039 5.812-4.859 5.812-0.948 0-1.842-0.489-2.143-1.064l0.607 2.49c0.273 1.123 0.039 2.498 0.019 2.641C16.876 21.08 20 18.736 20 14.329c0-4.664-2.781-8.329-8.219-8.329z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-orange-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.968 3.627 9.098 8.349 9.869-.135-0.875-0.254-2.186 0.054-3.131l1.636-6.696s-0.429-0.854-0.429-2.124c0-1.988 1.149-3.476 2.577-3.476 1.211 0 1.797 0.908 1.797 1.992 0 1.215-0.773 3.025-1.174 4.701-0.336 1.447 0.703 2.624 2.135 2.624 2.563 0 4.524-2.696 4.524-6.598 0-3.441-2.47-5.833-6.013-5.833-4.101 0-6.553 3.083-6.553 6.281 0 1.235 0.473 2.562 1.065 3.285 0.121 0.147 0.139 0.28 0.104 0.426-0.111 0.457-0.344 1.448-0.396 1.648-0.066 0.266-0.217 0.32-0.485 0.245-1.742-0.59-2.818-2.295-2.818-4.103 0-3.012 2.284-6.084 6.7-6.084 3.525 0 5.893 2.599 5.893 5.375 0 3.219-2.039 5.812-4.859 5.812-0.948 0-1.842-0.489-2.143-1.064l0.607 2.49c0.273 1.123 0.039 2.498 0.019 2.641C16.876 21.08 20 18.736 20 14.329c0-4.664-2.781-8.329-8.219-8.329z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Food Delivery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
