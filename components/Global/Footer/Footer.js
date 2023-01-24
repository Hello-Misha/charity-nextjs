import { useRouter } from "next/router";

export default function Footer(props) {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const changeLanguage = () => {
    if (router.locale === "ua") {
      return "en";
    } else {
      return "ua";
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          router.push({ pathname, query }, asPath, {
            locale: changeLanguage(),
          });
        }}
      >
        UA
      </button>
    </div>
  );
}
