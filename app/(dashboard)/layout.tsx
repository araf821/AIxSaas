import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="relative h-full">
      <div className="hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-80">
        <Navbar />
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
