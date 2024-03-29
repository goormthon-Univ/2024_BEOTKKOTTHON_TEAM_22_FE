'use client';

import { NoSearchResults, SearchIcon } from '@/components/common/Icons';
import RecommendCard from '@/components/common/RecommendCard';
import Link from 'next/link';
import Nav from '@/components/common/Nav';
import { useState } from 'react';
import Like from '@/components/like/Like';

const testData = [
  {
    "id": 1,
    'img':'/images/Logo.svg',
   "store":'중고나라',
    "product": "어쩌구저쩌구",
    "price":20000,
    "url": "https://www.daangn.com/"
  }
  ,
  {
    "id": 3,
    'img':'/images/Logo.svg',
    "store":'당근마켄',
    "product": "새로운 상품",
    "price":20000,
    "url": "https://www.daangn.com/"
  }
  ,{
    "id": 2,
    'img':'/images/Logo.svg',
    "store":'당근',
    "product": "새상품",
    "price":20000,
    "url": "https://www.daangn.com/"
  }
]

interface SearchResultProps {
  searchKeyword: string;
}



export default function SearchResultsView({searchKeyword}:SearchResultProps) {
  const [isResult, setIsResult] =useState(true)
  console.log('keyword:',searchKeyword)



  return (
    <>
      <div className={'px-[24px] ' }>
        <div className={'mt-[20px] mb-[40px] flex justify-between gap-[24px] '}>
          <div className={'flex w-[328px] h-[52px] text-darkGray rounded-[12px] border-mint border-[2px]'}>
            <div className={'my-auto px-[8px]'}>
              <SearchIcon />
            </div>
            <div className={'my-auto outline-none w-full'}>{searchKeyword}</div>
          </div>
          <div className={'m-auto'}>
            <Link href={'/search'}>
              <p>취소</p>
            </Link>
          </div>
        </div>
        {isResult ? (
          <div className={'font-semibold text-[24px] '}>
            <div className={'mb-[20px]'}>추천상품</div>
            <div
              className={'flex mb-[28px] justify-between xs:gap-[10px] sm:gap-[12px] md:gap-[18px] lg:gap-[22px] overflow-x-scroll scrollbar-hide'}>
              {testData.map(item => (
                <div key={item.id}>
                  <RecommendCard img={item.img} price={item.price} product={item.product} store={item.store}
                                 url={item.url} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={'flex justify-center items-center'}><NoSearchResults /></div>

        )}
      </div>
      <div className={'bg-dividing_line h-[12px]'}></div>
      <div className={'px-[24px] min-h-[60vh]'}>
        <Like  />

      </div>


      <Nav />
    </>
  );
}