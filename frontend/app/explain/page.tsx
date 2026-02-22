import Layout from "../../components/Layout";
import ApiForm from "../../components/ApiForm";

export default function ExplainPage() {
  return (
    <Layout>
      <ApiForm
        label="Explain Topic"
        apiEndpoint="explain"
        fields={[
            { name: "topic", placeholder: "Enter topic to explain" }
        ]}
       />
      {/* <ApiForm
        label="Explain Topic"
        apiEndpoint="explain"
        placeholder="Enter topic to explain"
        fieldName="topic"
      /> */}
    </Layout>
  );
}