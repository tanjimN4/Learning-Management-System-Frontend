import { LineChart } from '@mui/x-charts';
import { HiArrowTrendingUp } from 'react-icons/hi2';

const DHome = () => {
    return (
        <div className="container mx-auto p-6">
            {/* Header */}
            <h1 className="text-2xl font-bold">Dashboard</h1>

            <div className='lg:flex justify-between'>
                {/* Stats */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="card flex flex-row items-center bg-base-100 shadow-md p-4">
                        <HiArrowTrendingUp className="text-green-500 w-10 h-7" />
                        <div>
                            <h2 className="text-lg font-semibold">$1K</h2>
                            <p className="text-gray-500">Life Time Courses Commission</p>
                        </div>
                    </div>
                    <div className="card flex flex-row items-center  bg-base-100 shadow-md p-4">
                        <HiArrowTrendingUp className="text-green-500 w-10 h-7" />
                        <div>
                            <h2 className="text-lg font-semibold">$800.0</h2>
                            <p className="text-gray-500">Life Time Received Commission</p>
                        </div>
                    </div>
                    <div className="card flex flex-row items-center  bg-base-100 shadow-md p-4">
                        <HiArrowTrendingUp className="text-green-500 w-10 h-7" />
                        <div>
                            <h2 className="text-lg font-semibold">$200.00</h2>
                            <p className="text-gray-500">Life Time Pending Commission</p>
                        </div>
                    </div>
                </div>

                {/* Graph */}
                <div className="card bg-base-100 shadow-md mb-6">
                    <div className="card-body">
                        <h2 className="card-title">Life Time Sales</h2>
                        <div className="h-64  sm:w-[300px] lg:w-[500px]">
                            <LineChart
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    },
                                ]}
                                className='w-96'
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                <div className="card bg-base-100 shadow-md p-4">
                    <h2 className="text-lg font-semibold">1000</h2>
                    <p className="text-gray-500">Total Reviews</p>
                </div>
                <div className="card bg-base-100 shadow-md p-4">
                    <h2 className="text-lg font-semibold text-red-500">100</h2>
                    <p className="text-gray-500">1 star reviews</p>
                </div>
                <div className="card bg-base-100 shadow-md p-4">
                    <h2 className="text-lg font-semibold text-yellow-500">100</h2>
                    <p className="text-gray-500">2 star reviews</p>
                </div>
                <div className="card bg-base-100 shadow-md p-4">
                    <h2 className="text-lg font-semibold text-green-500">100</h2>
                    <p className="text-gray-500">3 star reviews</p>
                </div>
                <div className="card bg-base-100 shadow-md p-4">
                    <h2 className="text-lg font-semibold text-blue-500">100</h2>
                    <p className="text-gray-500">4 star reviews</p>
                </div>
            </div>

            {/* Courses */}
            <h1 className='text-3xl font-bold'>Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Beginner's Guide to Design</h2>
                        <p>Price: <span className="text-lg font-bold">Free</span></p>
                        <p>Chapters: 10</p>
                        <p>Orders: 254</p>
                        <p>Added to Shelf: 500</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Beginner's Guide to Design</h2>
                        <p>Price: <span className="text-lg font-bold">Free</span></p>
                        <p>Chapters: 10</p>
                        <p>Orders: 254</p>
                        <p>Added to Shelf: 500</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Beginner's Guide to Design</h2>
                        <p>Price: <span className="text-lg font-bold">Free</span></p>
                        <p>Chapters: 10</p>
                        <p>Orders: 254</p>
                        <p>Added to Shelf: 500</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DHome;
