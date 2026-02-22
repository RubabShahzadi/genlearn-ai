import Layout from "../../components/Layout";
import ApiForm from "../../components/ApiForm";

export default function SummaryPage() {
  return (
    <Layout>
      <ApiForm
        label="Summarize Content"
        apiEndpoint="summary"
        fields={[
            { name: "content", placeholder: "Paste content to summarize" }
        ]}
       />
      {/* <ApiForm
        label="Summary Topic"
        apiEndpoint="summary"
        placeholder="Enter content to summarize"
        fieldName="content"
      /> */}
    </Layout>
  );
}