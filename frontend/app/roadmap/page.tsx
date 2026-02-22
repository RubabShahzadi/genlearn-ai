// import { useState } from "react";
import Layout from "../../components/Layout";
import ApiForm from "../../components/ApiForm";

export default function RoadmapPage() {
//   const [days, setDays] = useState(7); // default 7 days

  return (
    <Layout>
      <ApiForm
        label="Learning Roadmap"
        apiEndpoint="roadmap"
        fields={[
            { name: "subject", placeholder: "Enter subject" },
            { name: "days", placeholder: "Number of days", type: "number" }
        ]}
       />
        {/* <ApiForm
            label="Generate Roadmap"
            apiEndpoint="roadmap"
            placeholder="Enter subject"
            fieldName="subject"
            extraField={{
                name: "days",
                placeholder: "Enter number of days",
                type: "number",
            }}
        /> */}
      {/* <ApiForm
        label="Roadmap Topic"
        apiEndpoint="roadmap"
        placeholder="Enter subject for roadmap"
        fieldName="subject"
        extraField={{
          name: "days",
          defaultValue: days,
          type: "number",
          setter: setDays,
          placeholder: "Enter number of days",
        }}
      /> */}
    </Layout>
  );
}