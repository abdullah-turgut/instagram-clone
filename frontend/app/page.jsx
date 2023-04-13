import Stories from '@/components/Stories';
import Posts from '@/components/Posts';
import MiniProfile from '@/components/MiniProfile';
import Suggestions from '@/components/Suggestions';
export default function Home() {
  return (
    <main className="flex flex-grow mt-10 md:mt-0 md:ml-[72px] xl:ml-56 justify-center pt-8">
      <section className="flex flex-col flex-grow max-w-[630px] border border-gray-700">
        <Stories />
        <Posts />
      </section>
      <section className="hidden lg:flex flex-col w-[320px] border border-gray-700">
        <MiniProfile />
        <Suggestions />
      </section>
    </main>
  );
}
