import Header from '@/components/common/Header';
import Main from '@/components/main/Main';
import Nav from '@/components/common/Nav';

import { getRankingTips } from '@/apis/getRankingTips';

export default async function Home() {
  const res = await getRankingTips();

  return (
    <>
      <Header />
      <section className="min-h-screen">
        <div className="px-[20px] xs:px-[12px] md:px-[24px]">
          <h1 className="pt-[20px] text-[24px] font-semibold">
            집안일요정이 알려드려요
          </h1>
        </div>
        {res && <Main tips={res} />}
      </section>
      <Nav />
    </>
  );
}
