import { Logo } from "#/ui/icons";

export default function Skeleton() {
  return (
    <div className="w-screen h-screen bg-black overflow-auto no-scrollbar flex justify-center items-center">
      <Logo />
    </div>
  );
}
