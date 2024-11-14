function Header() {
  const handleCodeClick = () => {
    window.location.href = "https://github.com/Shivam27777/typeSpeed";
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg rounded-md">
      <div className="text-2xl font-bold tracking-tight font-mono text-indigo-400">
        Check Your Speed
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="text-lg underline font-mono text-indigo-300 hover:text-indigo-500 transition-colors duration-200"
          onClick={handleCodeClick}
        >
          Code
        </button>
      </div>
    </header>
  );
}

export default Header;
