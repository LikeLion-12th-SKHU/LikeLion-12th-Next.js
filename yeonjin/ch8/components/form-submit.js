"use client";

import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>포스트 만드는중...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
