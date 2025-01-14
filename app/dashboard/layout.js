import SideNav from "./SideNav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SideNav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}
