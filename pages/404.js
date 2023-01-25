import { useEffect } from "react";
import { useRouter } from "next/router";

import Heading from "@/components/TechComponents/Heading";

function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);
  return (
    <>
      <Heading text={"404"} />
      <p className="Text DarkBlue">Someting is going wrong...</p>
    </>
  );
}

export default Error;
