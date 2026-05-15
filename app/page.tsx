
import Image from "next/image";
import StackedAreaChart from "./components/charts/line_chart/StackedAreaChart";
import BasicBars from "./components/charts/bar_chart/BasicBars";
import PieChartWithPaddingAngle from "./components/charts/donut_chart/PieChartWithPaddingAngle";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">Submission Trend</h2>
          </div>
          <div className="w-full h-[300px]">
             <StackedAreaChart />
          </div>
        </div>

    
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
          <h2 className="font-semibold text-gray-700 self-start mb-4">Submission Trend</h2>
          <div className="w-full h-[300px] flex items-center justify-center">
            <PieChartWithPaddingAngle />
          </div>
        </div>

        <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-700 mb-4">Weekly VS Required Progress</h2>
          <div className="w-full h-[250px]">
            <BasicBars />
          </div>
        </div>

      </div>

{/* The table */}
      <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">The Table</h2>
          </div>
          <div className="w-full h-[300px]">
          {/* <RecentTask/> */}
          </div>
        </div>
    </main>
  );
}

