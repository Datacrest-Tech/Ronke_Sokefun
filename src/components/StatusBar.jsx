import { statusBar } from "../data/content";

export default function StatusBar() {
  return (
    <div className="bg-navy text-white/70 text-xs py-2 px-6 text-center tracking-wide">
      {statusBar.text}
    </div>
  );
}
