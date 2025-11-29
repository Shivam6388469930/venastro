import Footer from "../compontent/Footer";
import Navbar from "../compontent/Navbar";

export default function UserPanelLayout({ children }) {
  return (
    <div className="min-h-screen flex">

      {/* Main Content */}
      <main className="flex-1 ">
        <Navbar/>
        {children}
        <Footer/>
      </main>
    </div>
  );
}
