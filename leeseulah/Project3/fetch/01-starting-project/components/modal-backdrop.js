"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();

  <div className="modal-backdrop" onClick={router.back} />;
}
