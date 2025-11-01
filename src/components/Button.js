export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl dark:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 font-medium hover:bg-gradient-to-br">
      {children}
    </button>
  );
};
