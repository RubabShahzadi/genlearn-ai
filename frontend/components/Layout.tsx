import { ReactNode } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-6">
        {children}
      </main>
      <footer className="bg-white text-center py-6 text-gray-500 shadow-inner">
        © 2026 GenLearn AI 
        {/* © 2026 GenLearn AI | Built with ❤️ by Rubab Shahzadi */}
      </footer>
    </div>
  );
}

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-1 container mx-auto p-4">{children}</main>
//       <footer className="bg-gray-200 text-center py-4">
//         GenLearn AI © 2026
//       </footer>
//     </div>
//   );
// }