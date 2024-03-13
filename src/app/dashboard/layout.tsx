import Navbar from "../../components/dashboard/navbar/navbar";
import Sidebar from "../../components/dashboard/sidebar/sidebar";
import Footer from "../../components/dashboard/footer/footer"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="w-screen h-screen flex flex-row overflow-hidden">
        <nav className="h-full w-[200px] border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow">
          <Sidebar/>
        </nav>

        <div className="h-full w-[calc(100%-200px)] border border-background-yellow flex flex-col">
            <div className="w-full h-[50px] flex flex-row drop-shadow-xl shadow-xl bg-background-yellow">
                <Navbar/>
            </div>

            <div className="w-full h-[calc(100%-50px)] bg-background-yellow overflow-hidden">
                {children}
                <Footer/>
            </div>
        </div>
      </div>
    );
  }
  