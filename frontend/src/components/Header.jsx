function Header() {
  const handleCodeClick = () => {
    // Replace 'your-url' with the actual URL you want to navigate to
    window.location.href = "https://github.com/Shivam27777/typeSpeed";
  };
  return (
    <header className="bg-gray-700 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-extrabold tracking-wide font-mono">
        Check Your Speed
      </div>
      <div className="text-lg flex items-center font-mono">
        <span
          className="mr-2 underline font-mono"
          onClick={handleCodeClick}
          style={{ cursor: "pointer" }}
        >
          Code
        </span>
      </div>
    </header>
  );
}

export default Header;
