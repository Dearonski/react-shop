function Footer() {
    return (
        <footer className="bg-white">
            <div className="h-1 bg-gray-200"></div>
            <div className="p-4">
                <div className="text-gray-700 flex justify-center text-2xl">
                    © {new Date().getFullYear()} Copyright Text
                </div>
            </div>
        </footer>
    );
}

export default Footer;
