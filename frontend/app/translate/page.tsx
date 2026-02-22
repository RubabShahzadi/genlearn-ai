import Layout from "../../components/Layout";
import ApiForm from "../../components/ApiForm";

export default function TranslatePage() {
  return (
    <Layout>
      <ApiForm
        label="AI Translator"
        apiEndpoint="translate"
        fields={[
            { name: "text", placeholder: "Enter text to translate" },
            {
            name: "language",
            placeholder: "Language",
            type: "select",
            options: ["Urdu", "Chinese", "Arabic", "French", "German", "Spanish"]
            }
        ]}
       />
      {/* <ApiForm
        label="AI Translator"
        apiEndpoint="translate"
        placeholder="Enter text to translate..."
        fieldName="text"
        extraField={{
          name: "language",
          placeholder: "Select language",
          type: "select",
        }}
      /> */}
    </Layout>
  );
}

// export default function TranslatePage() {
//   return (
//     <Layout>
//         <ApiForm
//             label="Translate Text"
//             apiEndpoint="translate"
//             placeholder="Enter text"
//             fieldName="text"
//             extraField={{
//                 name: "language",
//                 placeholder: "Enter language (e.g. Urdu)",
//             }}
//         />
//       {/* <ApiForm
//         label="Translate Topic"
//         apiEndpoint="translate"
//         placeholder="Enter text to translate"
//         fieldName="text"
//         extraField={{ name: "language", defaultValue: "Urdu" }}
//       /> */}
//     </Layout>
//   );
// }