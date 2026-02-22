import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          GenLearn AI
        </Link>

        <div className="space-x-6 hidden md:flex">
          {["Explain", "Quiz", "MCQ", "Roadmap", "Summary", "Translate"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-purple-600 transition"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}



// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-purple-600 text-white p-4">
//       <div className="container mx-auto flex space-x-4">
//         <Link href="/">Home</Link>
//         <Link href="/explain">Explain</Link>
//         <Link href="/quiz">Quiz</Link>
//         <Link href="/mcq">MCQ</Link>
//         <Link href="/roadmap">Roadmap</Link>
//         <Link href="/summary">Summary</Link>
//         <Link href="/translate">Translate</Link>
//       </div>
//     </nav>
//   );
// }