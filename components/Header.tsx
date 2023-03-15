import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-black text-neutral-content">
      <div className="flex-1">
        <div className="btn btn-ghost normal-case text-2xl">
          <Link href="/">AI Generated</Link>
        </div>
      </div>
      <div className="flex-auto">
        <ul className="menu menu-vertical lg:menu-horizontal bg-emerald-700 text-neutral-content rounded-box">
          <li>
            <Link href="/generation">rust GPT2</Link>
          </li>
          <li>
            <Link href="/lambda">Lambda worker</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
