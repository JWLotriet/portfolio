import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 px-5 lg:px-48">
      <div className="p-4 text-center col-span-12 lg:col-span-3 py-10 bg-white rounded-2xl">
        <Sidebar />
      </div>
      <div className="col-span-12 lg:col-span-9 bg-white rounded-2xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
