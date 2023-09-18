import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isSubscribed = await checkSubscription();

  return (
    <div className="relative h-full">
      <div className="hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col">
        <Sidebar apiLimitCount={apiLimitCount} isSubscribed={isSubscribed} />
      </div>
      <main className="md:pl-80">
        <Navbar />
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
