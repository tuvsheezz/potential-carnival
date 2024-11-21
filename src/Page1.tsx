import { useState } from "react";


const Pag1 = () => {
  // Sanitize the user input to prevent XSS
  const [value, setValue] = useState("");
  return (

    <div>

      <h1>User Profile</h1>
      <input value={value} onChange={(e) => setValue(e.target.value || "")} />
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
};

export default Pag1;