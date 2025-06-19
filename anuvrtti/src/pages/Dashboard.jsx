import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
        <Header />
      <Sidebar />
      <div className="flex-1 p-6 bg-red-50">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="mt-4 font-medium text-gray-700">
          Upcoming Compliances (Due in the next 8 days):
        </p>
        <p className="mt-1 text-sm text-green-600">No Upcoming Compliances in the next 15 days.</p>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Compliance Status Breakdown (by ALR)</h2>
          <div className="mt-4 text-5xl font-extrabold text-blue-600">0%</div>
          <div className="flex justify-between w-1/2 mt-6 text-sm">
            <div>Class A<br />0%</div>
            <div>Class B<br />0%</div>
            <div>Class C<br />0%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
