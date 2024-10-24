import Image from "next/image";

export default function Header() {
  return (
  <header>
    <Image 
        src={"https://mariastarostina.42web.io/exp1.svg"}
        alt="Logo"
        width="50"
        height="50"
    />
  </header>
  );
}
