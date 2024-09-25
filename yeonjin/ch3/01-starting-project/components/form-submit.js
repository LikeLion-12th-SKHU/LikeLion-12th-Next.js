"use client"

import { useFormStatus } from 'react-dom'; // Assuming you have this hook from a package

export default function FormSubmit() {
  const status = useFormStatus();


  if (status.pending) {
    return <p>Creating post...</p>;
  }
  
  return (
    <>
        <button type="reset">Reset</button>
        <button>Create Post</button>
    </>
  );
}
