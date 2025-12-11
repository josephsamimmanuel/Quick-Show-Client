import React from 'react'
import AdminLogo from '../components/AdminNavbar.jsx/AdminLogo';
import AdminSidebar from '../components/AdminNavbar.jsx/AdminSidebar';
import AddShowContent from '../components/AddShows/AddShowContent';

function AddShows() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <AdminLogo />

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          <AdminSidebar />

          <div className="flex-1 min-w-0">
            <AddShowContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddShows
