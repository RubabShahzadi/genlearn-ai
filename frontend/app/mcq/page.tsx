import Layout from "../../components/Layout";
import ApiForm from "../../components/ApiForm";

export default function MCQPage() {
  return (
    <Layout>
      <ApiForm
        label="MCQ Generator"
        apiEndpoint="mcq"
        fields={[
            { name: "topic", placeholder: "Enter topic for MCQs" }
        ]}
       />
      {/* <ApiForm
        label="MCQ Topic"
        apiEndpoint="mcq"
        placeholder="Enter topic to generate MCQs for"
        fieldName="topic"
      /> */}
    </Layout>
  );
}