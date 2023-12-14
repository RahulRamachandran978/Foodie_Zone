import React from 'react'
import AppStoreImg from "../../assets/app_store.png"
import PlayStoreImg from "../../assets/play_store.png"
import Gif from "../../assets/mobile_bike.gif"

const AppStore = () => {
  return (
    <>
        <div className='bg-gray-100 dark:bg-gray-800 py-14'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <div className='space-y-6 max-w-xl mx-auto'>
                        <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700'>Foodie Zone is Available for android and IOS</h1>
                            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                                <a href="#">
                                <img src={PlayStoreImg} alt="playstore" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                                </a>
                                <a href="#">
                                <img src={AppStoreImg} alt="playstore" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                                </a>
                            </div>
                    </div>  
                    <div>
                        <img src={Gif} alt="gif" className='max-w-[300px] mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppStore
