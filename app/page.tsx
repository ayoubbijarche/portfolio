import Profile from "@/components/profile";
import TechStack from "@/components/techstack";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row  flex-grow gap-10 ">
      <Profile/>
      <TechStack/>
    </section>
  );
}
