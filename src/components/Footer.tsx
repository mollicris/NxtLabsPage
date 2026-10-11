export function Footer() {
  return (
    <footer className="flex flex-col items-start gap-6 bg-black p-6 sm:flex-row sm:items-start sm:justify-between sm:p-10">
      <div className="text-sm font-bold uppercase leading-normal text-white sm:text-[16px]">
        <p>P.O. Box 13346</p>
        <p>+591 78921050</p>
        <p>r.delgadillo@nxtlabs.com.bo</p>
        <p>Calle Los Pinos # 4 - Umamanta, Zona Jupapina</p>
        <p>La Paz - Bolivia</p>
      </div>
      <div className="flex items-center gap-3">
        {/* Facebook, LinkedIn, Instagram — mismos 3 íconos del footer real */}
        <a href="#" aria-label="Facebook" className="flex h-5 w-5 items-center justify-center rounded bg-white text-[10px] font-bold text-black">f</a>
        <a href="#" aria-label="LinkedIn" className="flex h-5 w-5 items-center justify-center rounded bg-white text-[9px] font-bold text-black">in</a>
        <a href="#" aria-label="Instagram" className="flex h-5 w-5 items-center justify-center rounded bg-white text-[10px] font-bold text-black">◎</a>
      </div>
    </footer>
  );
}
