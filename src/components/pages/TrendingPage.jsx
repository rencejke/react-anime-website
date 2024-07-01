import React from 'react'
import Header from '../partials/Header'
import { TfiLayoutGrid3Alt } from 'react-icons/tfi'
import { IoGridSharp } from 'react-icons/io5'
import { MdViewList } from 'react-icons/md'
import { HiViewList } from 'react-icons/hi'

const TrendingPage = () => {

    const [view, setView] = React.useState('gridType')

    const toggleView = (viewType) => {
        setView(viewType)
    }

  return (
    <>
    <Header/>
    <section className='trending_page '>
    <div className="container">
     <h2 className='mt-10'>Trending Anime</h2>
    <div className="wrapper grid grid-rows-2">
     <form action="" className='flex justify-between'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="search">Search</label>
            <input type="text" placeholder='Search' className='px-2 py-1 rounded-md w-[100%]'/>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="genre">Genre</label>
            <select  className='px-2 py-[4.5px] rounded-md w-[190px] text-black'>
            <option value="any">Any</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="year">Year</label>
            <select  className='px-2 py-[4.5px] rounded-md w-[190px] text-black'>
            <option value="any">Any</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="season">Season</label>
            <select  className='px-2 py-[4.5px] rounded-md w-[190px] text-black'>
            <option value="any">Any</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="format">Format</label>
            <select  className='px-2 py-[4.5px] rounded-md w-[190px] text-black'>
            <option value="any">Any</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="airing">Airing Status</label>
            <select  className='px-2 py-[4.5px] rounded-md w-[190px] text-black'>
            <option value="any">Any</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>
     </form>
     
     <div className='flex justify-end items-center gap-2 text-[20px] mt-3'>
     <button className={`${view === 'gridType' ? 'active' : ''}`} onClick={() => toggleView('gridType')}><TfiLayoutGrid3Alt /></button>
     <button className={`${view === 'detailed' ? 'active' : ''}`} onClick={() => toggleView('detailed')}><IoGridSharp size='23px' /></button>
     <button className={`${view === 'list' ? 'active' : ''}`} onClick={() => toggleView('list')}><MdViewList size='30px'/></button>
     </div>
    </div>
      
      <div className={`mt-5 text-black`}>
        <div className={`wrapper ${(view === 'gridType' ? 'grid grid-cols-6 gap-12' : '' ) || (view === 'detailed' ? 'grid grid-cols-3 gap-6 ' : '' ) || (view === 'list' ? 'grid gap-6  grid-cols-1' : '' )}`}> 
         
         <div className={` card-item ${(view === 'detailed' ? 'detailed-style' : '' ) || (view === 'list' ? '' : '' )} rounded-md`}>
            <div className="image relative">
             
             {/* for Grid */}
            <div className={`${(view === 'gridType' ? 'block' : '' ) || (view === 'detailed' ? '' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]' : '' )}`}/>
            <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'text-black' : '' )} mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            </div>

            {/* for list */}
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex justify-between items-center  gap-2 bg-white p-2 rounded-md`}>

        <div className='flex items-center gap-3'>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]  object-cover' : '' )}`}/>
            
           <div>
           <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )} text-black mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal`}>
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
           </div>
            </div>
         
               <div className='flex gap-10 pr-2 items-center'>
               <div>
               <h3 className='text-black'>Tv Show</h3>
                <p>8 Episodes</p>
                </div>

                <div>
               <h3 className='text-black'>Spring 2024</h3>
                <p>Finished</p>
                </div>
               </div>
            </div>
         
                


                 {/* overlay */}
                <div className={`overlay absolute bottom-0 bg-gray-500/90 p-[20px] ${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
                    <h3>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
                    <p className='studio text-yellow-500'>Ufotable</p>
                </div>
                </div>
            
            {/* content */}
           <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )} content  grid grid-rows-[7fr_1fr]`}>
           <div className='pl-4 max-h-[420px] h-[332px] overflow-hidden hover:overflow-auto'>
           <p className='anime-date font-bold pt-2'>Spring 2024</p>
           <p className='type text-[12px]'>Tv Show - 8 episodes</p>
           <p className='text-[13px] justify-evenly'>
            Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps'
            highest ranking swordsmen and members. The Hashira Training has begun in order
            to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and
            hopes held in their hearts, a new story for Tanjiro and the Hashira begins. Note: The first
            episode received an early premiere in cinemas as part of a special screening alongside the
            final episode of Kimetsu no Yaiba: Katanakaji no Sato-hen.
           </p>
          </div>

            <div className='tag bg-gray-500/30'>
            <div className="flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal">
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
            </div>
            </div>
         </div>

         <div className={` card-item ${(view === 'detailed' ? 'detailed-style' : '' ) || (view === 'list' ? '' : '' )} rounded-md`}>
            <div className="image relative">
             
             {/* for Grid */}
            <div className={`${(view === 'gridType' ? 'block' : '' ) || (view === 'detailed' ? '' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]' : '' )}`}/>
            <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'text-black' : '' )} mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            </div>

            {/* for list */}
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex justify-between items-center  gap-2 bg-white p-2 rounded-md`}>

        <div className='flex items-center gap-3'>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]  object-cover' : '' )}`}/>
            
           <div>
           <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )} text-black mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal`}>
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
           </div>
            </div>
         
               <div className='flex gap-10 pr-2 items-center'>
               <div>
               <h3 className='text-black'>Tv Show</h3>
                <p>8 Episodes</p>
                </div>

                <div>
               <h3 className='text-black'>Spring 2024</h3>
                <p>Finished</p>
                </div>
               </div>
            </div>
         
                


                 {/* overlay */}
                <div className={`overlay absolute bottom-0 bg-gray-500/90 p-[20px] ${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
                    <h3>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
                    <p className='studio text-yellow-500'>Ufotable</p>
                </div>
                </div>
            
            {/* content */}
           <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )} content  grid grid-rows-[7fr_1fr]`}>
           <div className='pl-4 max-h-[420px] h-[332px] overflow-hidden hover:overflow-auto'>
           <p className='anime-date font-bold pt-2'>Spring 2024</p>
           <p className='type text-[12px]'>Tv Show - 8 episodes</p>
           <p className='text-[13px] justify-evenly'>
            Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps'
            highest ranking swordsmen and members. The Hashira Training has begun in order
            to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and
            hopes held in their hearts, a new story for Tanjiro and the Hashira begins. Note: The first
            episode received an early premiere in cinemas as part of a special screening alongside the
            final episode of Kimetsu no Yaiba: Katanakaji no Sato-hen.
           </p>
          </div>

            <div className='tag bg-gray-500/30'>
            <div className="flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal">
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
            </div>
            </div>
         </div>

         <div className={` card-item ${(view === 'detailed' ? 'detailed-style' : '' ) || (view === 'list' ? '' : '' )} rounded-md`}>
            <div className="image relative">
             
             {/* for Grid */}
            <div className={`${(view === 'gridType' ? 'block' : '' ) || (view === 'detailed' ? '' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]' : '' )}`}/>
            <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'text-black' : '' )} mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            </div>

            {/* for list */}
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex justify-between items-center  gap-2 bg-white p-2 rounded-md`}>

        <div className='flex items-center gap-3'>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]  object-cover' : '' )}`}/>
            
           <div>
           <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )} text-black mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal`}>
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
           </div>
            </div>
         
               <div className='flex gap-10 pr-2 items-center'>
               <div>
               <h3 className='text-black'>Tv Show</h3>
                <p>8 Episodes</p>
                </div>

                <div>
               <h3 className='text-black'>Spring 2024</h3>
                <p>Finished</p>
                </div>
               </div>
            </div>
         
                


                 {/* overlay */}
                <div className={`overlay absolute bottom-0 bg-gray-500/90 p-[20px] ${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
                    <h3>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
                    <p className='studio text-yellow-500'>Ufotable</p>
                </div>
                </div>
            
            {/* content */}
           <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )} content  grid grid-rows-[7fr_1fr]`}>
           <div className='pl-4 max-h-[420px] h-[332px] overflow-hidden hover:overflow-auto'>
           <p className='anime-date font-bold pt-2'>Spring 2024</p>
           <p className='type text-[12px]'>Tv Show - 8 episodes</p>
           <p className='text-[13px] justify-evenly'>
            Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps'
            highest ranking swordsmen and members. The Hashira Training has begun in order
            to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and
            hopes held in their hearts, a new story for Tanjiro and the Hashira begins. Note: The first
            episode received an early premiere in cinemas as part of a special screening alongside the
            final episode of Kimetsu no Yaiba: Katanakaji no Sato-hen.
           </p>
          </div>

            <div className='tag bg-gray-500/30'>
            <div className="flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal">
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
            </div>
            </div>
         </div>

         <div className={` card-item ${(view === 'detailed' ? 'detailed-style' : '' ) || (view === 'list' ? '' : '' )} rounded-md`}>
            <div className="image relative">
             
             {/* for Grid */}
            <div className={`${(view === 'gridType' ? 'block' : '' ) || (view === 'detailed' ? '' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]' : '' )}`}/>
            <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'text-black' : '' )} mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            </div>

            {/* for list */}
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex justify-between items-center  gap-2 bg-white p-2 rounded-md`}>

        <div className='flex items-center gap-3'>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]  object-cover' : '' )}`}/>
            
           <div>
           <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )} text-black mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal`}>
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
           </div>
            </div>
         
               <div className='flex gap-10 pr-2 items-center'>
               <div>
               <h3 className='text-black'>Tv Show</h3>
                <p>8 Episodes</p>
                </div>

                <div>
               <h3 className='text-black'>Spring 2024</h3>
                <p>Finished</p>
                </div>
               </div>
            </div>
         
                


                 {/* overlay */}
                <div className={`overlay absolute bottom-0 bg-gray-500/90 p-[20px] ${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
                    <h3>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
                    <p className='studio text-yellow-500'>Ufotable</p>
                </div>
                </div>
            
            {/* content */}
           <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )} content  grid grid-rows-[7fr_1fr]`}>
           <div className='pl-4 max-h-[420px] h-[332px] overflow-hidden hover:overflow-auto'>
           <p className='anime-date font-bold pt-2'>Spring 2024</p>
           <p className='type text-[12px]'>Tv Show - 8 episodes</p>
           <p className='text-[13px] justify-evenly'>
            Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps'
            highest ranking swordsmen and members. The Hashira Training has begun in order
            to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and
            hopes held in their hearts, a new story for Tanjiro and the Hashira begins. Note: The first
            episode received an early premiere in cinemas as part of a special screening alongside the
            final episode of Kimetsu no Yaiba: Katanakaji no Sato-hen.
           </p>
          </div>

            <div className='tag bg-gray-500/30'>
            <div className="flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal">
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
            </div>
            </div>
         </div>

         <div className={` card-item ${(view === 'detailed' ? 'detailed-style' : '' ) || (view === 'list' ? '' : '' )} rounded-md`}>
            <div className="image relative">
             
             {/* for Grid */}
            <div className={`${(view === 'gridType' ? 'block' : '' ) || (view === 'detailed' ? '' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]' : '' )}`}/>
            <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'text-black' : '' )} mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            </div>

            {/* for list */}
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex justify-between items-center  gap-2 bg-white p-2 rounded-md`}>

        <div className='flex items-center gap-3'>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]  object-cover' : '' )}`}/>
            
           <div>
           <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )} text-black mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal`}>
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
           </div>
            </div>
         
               <div className='flex gap-10 pr-2 items-center'>
               <div>
               <h3 className='text-black'>Tv Show</h3>
                <p>8 Episodes</p>
                </div>

                <div>
               <h3 className='text-black'>Spring 2024</h3>
                <p>Finished</p>
                </div>
               </div>
            </div>
         
                


                 {/* overlay */}
                <div className={`overlay absolute bottom-0 bg-gray-500/90 p-[20px] ${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
                    <h3>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
                    <p className='studio text-yellow-500'>Ufotable</p>
                </div>
                </div>
            
            {/* content */}
           <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )} content  grid grid-rows-[7fr_1fr]`}>
           <div className='pl-4 max-h-[420px] h-[332px] overflow-hidden hover:overflow-auto'>
           <p className='anime-date font-bold pt-2'>Spring 2024</p>
           <p className='type text-[12px]'>Tv Show - 8 episodes</p>
           <p className='text-[13px] justify-evenly'>
            Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps'
            highest ranking swordsmen and members. The Hashira Training has begun in order
            to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and
            hopes held in their hearts, a new story for Tanjiro and the Hashira begins. Note: The first
            episode received an early premiere in cinemas as part of a special screening alongside the
            final episode of Kimetsu no Yaiba: Katanakaji no Sato-hen.
           </p>
          </div>

            <div className='tag bg-gray-500/30'>
            <div className="flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal">
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
            </div>
            </div>
         </div>

         <div className={` card-item ${(view === 'detailed' ? 'detailed-style' : '' ) || (view === 'list' ? '' : '' )} rounded-md`}>
            <div className="image relative">
             
             {/* for Grid */}
            <div className={`${(view === 'gridType' ? 'block' : '' ) || (view === 'detailed' ? '' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]' : '' )}`}/>
            <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'text-black' : '' )} mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            </div>

            {/* for list */}
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex justify-between items-center  gap-2 bg-white p-2 rounded-md`}>

        <div className='flex items-center gap-3'>
            <img src="../../public/img/trend-1.jpg" alt="" className={` ${(view === 'detailed' ? 'h-[400px] w-full object-cover rounded-md' : '' ) || (view === 'list' ? 'size-[60px]  object-cover' : '' )}`}/>
            
           <div>
           <h3 className={`${(view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )} text-black mt-2`}>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
            <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'hidden' : '' ) || (view === 'list' ? 'block' : '' )}
            flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal`}>
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
           </div>
            </div>
         
               <div className='flex gap-10 pr-2 items-center'>
               <div>
               <h3 className='text-black'>Tv Show</h3>
                <p>8 Episodes</p>
                </div>

                <div>
               <h3 className='text-black'>Spring 2024</h3>
                <p>Finished</p>
                </div>
               </div>
            </div>
         
                


                 {/* overlay */}
                <div className={`overlay absolute bottom-0 bg-gray-500/90 p-[20px] ${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )}`}>
                    <h3>Kimetsu no Yaiba: Hashira Geiko-hen</h3>
                    <p className='studio text-yellow-500'>Ufotable</p>
                </div>
                </div>
            
            {/* content */}
           <div className={`${(view === 'gridType' ? 'hidden' : '' ) || (view === 'detailed' ? 'block' : '' ) || (view === 'list' ? 'hidden' : '' )} content  grid grid-rows-[7fr_1fr]`}>
           <div className='pl-4 max-h-[420px] h-[332px] overflow-hidden hover:overflow-auto'>
           <p className='anime-date font-bold pt-2'>Spring 2024</p>
           <p className='type text-[12px]'>Tv Show - 8 episodes</p>
           <p className='text-[13px] justify-evenly'>
            Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps'
            highest ranking swordsmen and members. The Hashira Training has begun in order
            to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and
            hopes held in their hearts, a new story for Tanjiro and the Hashira begins. Note: The first
            episode received an early premiere in cinemas as part of a special screening alongside the
            final episode of Kimetsu no Yaiba: Katanakaji no Sato-hen.
           </p>
          </div>

            <div className='tag bg-gray-500/30'>
            <div className="flex gap-1 items-center mt-2 pt-1 text-[16px] pl-4 font-normal">
            <p className='bg-line text-white px-3 rounded-full'>Active</p>
            <p className='bg-line text-white px-3 rounded-full'>Series</p>
            </div>
            </div>
            </div>
         </div>
        </div>        
      </div>

    </div>
    </section>
    </>
  )
}

export default TrendingPage 