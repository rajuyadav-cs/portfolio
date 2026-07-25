import { ArrowRight } from "lucide-react";
type MagicButtonProps = {
  text: string;
};

export default function MagicButton({ text }: MagicButtonProps) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-0.5 transition-all duration-300  hover:scale-110 active:scale-90">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 p-4 text-medium font-medium text-white backdrop-blur-3xl tracking-widest">
        <span>Contact Me</span> <ArrowRight />
      </span>
    </button>
  );
}
