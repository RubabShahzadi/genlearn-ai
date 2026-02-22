import Layout from "../components/Layout";
import Link from "next/link";

const features = [
  { title: "Explain Topic", href: "/explain" },
  { title: "Quiz Generator", href: "/quiz" },
  { title: "MCQs", href: "/mcq" },
  { title: "Roadmap", href: "/roadmap" },
  { title: "Summary", href: "/summary" },
  { title: "Translate", href: "/translate" },
];

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          GenLearn AI 🚀
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Smart Learning Assistant for Pakistani Students
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center font-semibold text-purple-700"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </Layout>
  );
}



// import Layout from "../components/Layout";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <Layout>
//       <h1 className="text-3xl font-bold mb-4">GenLearn AI Dashboard 🚀</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Link href="/explain" className="p-4 bg-purple-600 text-white rounded text-center">Explain Topic</Link>
//         <Link href="/quiz" className="p-4 bg-purple-600 text-white rounded text-center">Quiz Generator</Link>
//         <Link href="/mcq" className="p-4 bg-purple-600 text-white rounded text-center">MCQs</Link>
//         <Link href="/roadmap" className="p-4 bg-purple-600 text-white rounded text-center">Roadmap</Link>
//         <Link href="/summary" className="p-4 bg-purple-600 text-white rounded text-center">Summary</Link>
//         <Link href="/translate" className="p-4 bg-purple-600 text-white rounded text-center">Translate</Link>
//       </div>
//     </Layout>
//   );
// }



// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
