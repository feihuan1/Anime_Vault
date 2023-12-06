import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921] fixed bottom-0 w-full">
      <p className="text-base font-bold text-white">@{currentYear} Feihuan Peng</p>
      <Image
        src="/logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <a href="https://feihuan-portfolio.vercel.app" target="_blank">
        <Image
          src="/phone.png"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        </a>
        <a href="https://linkedin.com/in/feihuan-peng-03711927a" target="_blank">
        <Image
          src="/linkedin.png"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
          />
          </a>
          <a href="https://github.com/feihuan1" target="_blank">
        <Image
          src="/github.png"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
          />
          </a>
      </div>
    </footer>
  );
}

export default Footer;
