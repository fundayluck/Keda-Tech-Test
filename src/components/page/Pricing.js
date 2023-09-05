import React from 'react'

const Pricing = () => {

    const listPrice = [
        {
            tier: 'Basic',
            price: "1.000.000",
            task: [
                "Mencatat barang masuk",
                "Mencatat barang keluar",
                "Mencatat hasil keuntungan"
            ]
        },
        {
            tier: 'Business',
            price: "1.500.000",
            task: [
                "Mencatat barang masuk dan keluar",
                "Mencatat Keuntungan",
                "Dapat menganalisa hasil penjualan dengan CHART",
                "Support 7x24 Jam"
            ]
        },
        {
            tier: 'Entrepreneur',
            price: "2.500.000",
            task: [
                "Mencatat barang masuk dan keluar",
                "Mencatat Keuntungan",
                "Dapat menganalisa hasil penjualan dengan CHART",
                "Support 7x24 Jam",
                "Export data ke Excel",
                "AI Prediksi penghasilan"
            ]
        },
    ]

    return (

        <div className="py-8 px-4 mx-auto max-w-screen-xl">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight ">Designed for business teams like yours</h2>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-2 lg:space-y-0">
                {listPrice.map((list, index) =>
                    <div className="flex flex-col p-6 text-center bg-white rounded-lg border border-gray-100 shadow xl:p-8" key={index}>
                        <h3 className="mb-4 text-2xl font-semibold">{list.tier}</h3>
                        <div className="flex justify-center items-baseline my-2">
                            <span className="mr-2 text-2xl">Rp.{list.price}</span>
                            <span className="text-gray-500 ">/month</span>
                        </div>
                        <ul className="mb-8 space-y-2 text-left">
                            {list.task.map((item, index) =>
                                <li className="flex items-center space-x-5" key={index}>
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className=''>{item}</span>
                                </li>

                            )}
                        </ul>
                        <div className="bg-[#26C1F7] hover:bg-white hover:border hover:border-[#26C1F7] hover:cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</div>
                    </div>
                )}
            </div>
        </div >

    )
}

export default Pricing