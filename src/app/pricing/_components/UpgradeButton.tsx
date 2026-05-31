import { Zap } from "lucide-react";

export default function UpgradeButton() {
  return (
    <button
      disabled
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        opacity-75 cursor-not-allowed"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro - Coming Soon
    </button>
  );
}