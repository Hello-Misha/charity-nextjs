import Heading from "@/components/Heading";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Heading text={"Hello"} />
      <Link href={"/education"}>Education</Link>
    </div>
  );
}

export default Home;
