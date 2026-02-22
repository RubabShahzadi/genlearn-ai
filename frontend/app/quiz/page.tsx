import Layout from "../../components/Layout";
import ApiForm from "../../components/ApiForm";

export default function QuizPage() {
  return (
    <Layout>
      <ApiForm
        label="Quiz Generator"
        apiEndpoint="quiz"
        fields={[
            { name: "topic", placeholder: "Enter topic for quiz" }
        ]}
       />
      {/* <ApiForm
        label="Quiz Topic"
        apiEndpoint="quiz"
        placeholder="Enter topic to generate quiz for"
        fieldName="topic"
      /> */}
    </Layout>
  );
}