import React from "react";

import { Button } from "@/packages/Button";
import { Input } from "@/packages/Input";
import { NumberInput } from "@/packages/Input/NumberInput.tsx";

function App() {
  // TODO: add simple validation or using 3rd party
  const sampleError = { name: ["Name is too short"] };
  const sampleError2 = { title: ["Title is too short"] };

  // TODO: add logic to handle form event to receive FormData instead of
  //  form event
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(e.target[0].value);
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="max-w-4xl rounded-sm p-10 border-2">
        <form onSubmit={onSubmit}>
          <Input
            id="name"
            placeholder="Your name"
            label="Name"
            // errors={sampleError}
          />
          <Input
            id="title"
            placeholder="Your title"
            label="Title"
            // errors={sampleError2}
          />
          <NumberInput
            id="age"
            placeholder="Your age"
            label="Age"
            defaultValue=""
          />
          <Button size="sm" variant="primary" className="w-full mt-2">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
