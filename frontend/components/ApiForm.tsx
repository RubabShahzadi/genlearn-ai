"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FaCopy, FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";

interface Field {
  name: string;
  placeholder: string;
  type?: "text" | "number" | "select";
  options?: string[];
}

interface ApiFormProps {
  label: string;
  apiEndpoint: string;
  fields: Field[];
}

const ApiForm: React.FC<ApiFormProps> = ({
  label,
  apiEndpoint,
  fields,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const res = await fetch(`/api/${apiEndpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResult(data.result || data.error || "No result returned");
    } catch (err: any) {
      setResult(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(result, 10, 10);
    doc.save(`${label}.pdf`);
  };

  return (
    <div className="max-w-5xl mx-auto my-12 p-10 bg-white rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        {label}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {fields.map((field) =>
          field.type === "select" ? (
            <select
              key={field.name}
              required
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select {field.placeholder}</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              key={field.name}
              type={field.type || "text"}
              required
              placeholder={field.placeholder}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
            />
          )
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
        >
          {loading ? "Generating..." : "Generate 🚀"}
        </button>
      </form>
      
      {result && (
        <div className="mt-10 bg-gray-50 p-8 rounded-2xl shadow-inner relative animate-fadeIn">
            <div className="absolute top-4 right-4 flex gap-4">
            <button onClick={copyToClipboard}>
                <FaCopy />
            </button>
            <button onClick={downloadPDF}>
                <FaDownload />
            </button>
            </div>

            <div className="prose max-w-none">
            <ReactMarkdown>
                {result}
            </ReactMarkdown>
            </div>
        </div>
       )}

      {/* {result && (
        <div className="mt-10 bg-gray-50 p-8 rounded-2xl shadow-inner relative animate-fadeIn">
          <div className="absolute top-4 right-4 flex gap-4">
            <button onClick={copyToClipboard}>
              <FaCopy />
            </button>
            <button onClick={downloadPDF}>
              <FaDownload />
            </button>
          </div>

          <ReactMarkdown className="prose max-w-none">
            {result}
          </ReactMarkdown>
        </div>
      )} */}
    </div>
  );
};

export default ApiForm;



// "use client";

// import React, { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import { FaCopy, FaDownload } from "react-icons/fa";
// import jsPDF from "jspdf";

// interface ExtraField {
//   name: string;
//   placeholder: string;
//   type?: string;
//   options?: string[];
// }

// interface ApiFormProps {
//   label: string;
//   apiEndpoint: string;
//   placeholder?: string;
//   fieldName?: string;
//   extraField?: ExtraField;
// }

// const ApiForm: React.FC<ApiFormProps> = ({
//   label,
//   apiEndpoint,
//   placeholder = "Enter text...",
//   fieldName,
//   extraField,
// }) => {
//   const [input, setInput] = useState("");
//   const [extraInput, setExtraInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult("");

//     try {
//       const payload: Record<string, any> = {
//         [fieldName || "topic"]: input,
//       };

//       if (extraField && extraInput) {
//         payload[extraField.name] = extraInput;
//       }

//       const res = await fetch(`/api-proxy?endpoint=${apiEndpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       setResult(data.result || data.error || "No result returned");
//     } catch (err: any) {
//       setResult(`Error: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(result);
//     alert("Copied to clipboard!");
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text(result, 10, 10);
//     doc.save(`${label}.pdf`);
//   };

//   return (
//     <div className="max-w-8xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-purple-700">{label}</h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <textarea
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder={placeholder}
//           rows={4}
//           className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//           required
//         />

//         {extraField && (
//           <select
//             value={extraInput}
//             onChange={(e) => setExtraInput(e.target.value)}
//             className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
//             required
//           >
//             <option value="">Select Language</option>
//             <option value="Urdu">Urdu</option>
//             <option value="Chinese">Chinese</option>
//             <option value="Arabic">Arabic</option>
//             <option value="French">French</option>
//             <option value="German">German</option>
//             <option value="Spanish">Spanish</option>
//           </select>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-purple-600 text-white py-3 rounded-lg cursor-pointer hover:bg-purple-700 transition"
//         >
//           {loading ? "Generating..." : "Generate"}
//         </button>
//       </form>

//       {result && (
//         <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-inner relative">
//           {/* Action Buttons */}
//           <div className="absolute top-4 right-4 flex gap-3">
//             <button onClick={copyToClipboard} className="text-gray-600 hover:text-purple-600">
//               <FaCopy />
//             </button>
//             <button onClick={downloadPDF} className="text-gray-600 hover:text-purple-600">
//               <FaDownload />
//             </button>
//           </div>

//           <ReactMarkdown
//             components={{
//               h1: (props) => <h1 className="text-2xl font-bold mt-4 mb-2" {...props} />,
//               h2: (props) => <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />,
//               h3: (props) => <h3 className="text-lg font-semibold mt-3 mb-2" {...props} />,
//               p: (props) => <p className="mb-3 leading-relaxed" {...props} />,
//               li: (props) => <li className="ml-6 list-disc mb-1" {...props} />,
//             }}
//           >
//             {result}
//           </ReactMarkdown>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApiForm;



// "use client";

// import React, { useState } from "react";

// interface ExtraField {
//   name: string;
//   placeholder: string;
//   type?: string; // text | number
// }

// interface ApiFormProps {
//   label: string;
//   apiEndpoint: string;
//   placeholder?: string;
//   fieldName?: string;     // topic | content | text | subject
//   extraField?: ExtraField;
// }

// const ApiForm: React.FC<ApiFormProps> = ({
//   label,
//   apiEndpoint,
//   placeholder = "Enter text...",
//   fieldName = "topic",
//   extraField,
// }) => {
//   const [input, setInput] = useState("");
//   const [extraInput, setExtraInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult("");

//     try {
//       // Build payload dynamically
//       const payload: Record<string, any> = {
//         [fieldName]: input,
//       };

//       if (extraField) {
//         payload[extraField.name] =
//           extraField.type === "number"
//             ? Number(extraInput)
//             : extraInput;
//       }

//       const res = await fetch(`/api-proxy?endpoint=${apiEndpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Request failed");
//       }

//       setResult(data.result || JSON.stringify(data, null, 2));
//     } catch (err: any) {
//       setResult(`Error: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-8xl mx-auto my-8 p-6 bg-white rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">{label}</h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         {/* Main Input */}
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder={placeholder}
//           className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//           required
//         />

//         {/* Extra Field (if exists) */}
//         {extraField && (
//           <input
//             type={extraField.type || "text"}
//             value={extraInput}
//             onChange={(e) => setExtraInput(e.target.value)}
//             placeholder={extraField.placeholder}
//             className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//             required
//           />
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:opacity-50"
//         >
//           {loading ? "Generating..." : "Generate"}
//         </button>
//       </form>

//       {result && (
//         <div className="mt-6 p-4 bg-gray-100 rounded whitespace-pre-wrap">
//           {result}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApiForm;



// "use client";

// import React, { useState } from "react";

// interface ExtraField {
//   name: string;
//   defaultValue: string;
// }

// interface ApiFormProps {
//   label: string;
//   apiEndpoint: string;            // e.g., "explain", "quiz", "summary", etc.
//   placeholder?: string;
//   fieldName?: string;             // key to send instead of "topic"
//   extraField?: ExtraField;        // additional field like language for Translate
// }

// const ApiForm: React.FC<ApiFormProps> = ({
//   label,
//   apiEndpoint,
//   placeholder = "Enter text...",
//   fieldName,
//   extraField,
// }) => {
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult("");

//     try {
//       // Construct payload dynamically
//       const payload: Record<string, any> = {
//         [fieldName || "topic"]: input,
//         ...(extraField ? { [extraField.name]: extraField.defaultValue } : {}),
//       };

//       const res = await fetch(`/api-proxy?endpoint=${apiEndpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(errorText || "Request failed");
//       }

//       const data = await res.json();
//       setResult(data.result || data.error || "No result returned");
//     } catch (err: any) {
//       setResult(`Error: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-8xl mx-auto my-8 p-6 bg-white rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">{label}</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder={placeholder}
//           className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//           required
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-purple-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-purple-700 disabled:opacity-50"
//         >
//           {loading ? "Generating..." : "Generate"}
//         </button>
//       </form>

//       {result && (
//         <div className="mt-6 p-4 bg-gray-100 rounded whitespace-pre-wrap">
//           {result}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApiForm;



// "use client";
// import { useState } from "react";

// type ApiFormProps = {
//   label: string;
//   apiEndpoint: string;
//   placeholder?: string;
// };

// export default function ApiForm({ label, apiEndpoint, placeholder }: ApiFormProps) {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setOutput("");

//     try {
//       const res = await fetch(`/api-proxy?endpoint=${apiEndpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic: input, subject: input, days: input }), // send flexible body
//       });
//       const data = await res.json();
//       if (data.result) setOutput(data.result);
//       else setError("No result returned.");
//     } catch (err: any) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white shadow rounded p-4">
//       <h2 className="text-xl font-bold mb-2">{label}</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
//         <input
//           type="text"
//           className="border p-2 rounded"
//           placeholder={placeholder || "Enter topic"}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//           disabled={loading}
//         >
//           {loading ? "Generating..." : "Generate"}
//         </button>
//       </form>
//       {output && <pre className="mt-4 p-2 bg-gray-100 rounded">{output}</pre>}
//       {error && <p className="mt-2 text-red-500">{error}</p>}
//     </div>
//   );
// }