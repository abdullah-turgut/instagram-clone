import Stories from '@/components/Stories';
import Posts from '@/components/Posts';
import MiniProfile from '@/components/MiniProfile';
import Suggestions from '@/components/Suggestions';
export default function Home() {
  return (
    <main className="flex flex-grow mt-10 md:mt-0 md:ml-[72px] xl:ml-56 justify-center pt-8 gap-x-16">
      <section className="flex flex-col w-full max-w-[630px]">
        <Stories />
        <Posts />
      </section>
      <section className="hidden lg:flex w-full flex-col max-w-[320px] border border-gray-700">
        <MiniProfile />
        <Suggestions />
      </section>
    </main>
  );
}
