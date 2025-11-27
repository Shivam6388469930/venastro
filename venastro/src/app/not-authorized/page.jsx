export default function NotAuthorized() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold text-red-500">Access Denied</h1>
      <p className="text-gray-400 mt-4">You are not authorized to access this page.</p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
