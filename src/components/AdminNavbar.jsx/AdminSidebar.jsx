import React from 'react'
import { HomeIcon, PlusIcon, ListIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function AdminSidebar() {
    const navigate = useNavigate();
    const sidebarItems = [
        {
          label: "Dashboard",
          icon: <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
          path: "/admin/dashboard",
          onClick: () => {
            navigate("/admin/dashboard");
          },
        },
        {
          label: "Add Shows",
          icon: <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
          path: "/admin/add-shows",
          onClick: () => {
            navigate("/admin/add-shows");
          },
        },
        {
          label: "List Shows",
          icon: <ListIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
          path: "/admin/list-shows",
          onClick: () => {
            navigate("/admin/list-shows");
          },
        },
        {
          label: "List Bookings",
          icon: <ListIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
          path: "/admin/list-bookings",
          onClick: () => {
            navigate("/admin/list-bookings");
          },
        },
      ];
  return (
    <div className="w-full lg:w-64 xl:w-72 shrink-0">
    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-5 md:p-6">
      <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-5">
        Navigation
      </h2>
      <div className="flex flex-col gap-2 sm:gap-3">
        {sidebarItems.map((item) => (
          <button
            onClick={item.onClick}
            key={item.path}
            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-left text-sm sm:text-base text-gray-300 hover:bg-primary/20 hover:text-white transition-colors duration-200"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
  )
}

export default AdminSidebar
