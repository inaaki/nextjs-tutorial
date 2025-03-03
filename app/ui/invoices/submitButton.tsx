"use client";

import { Button } from "@/app/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      Create Invoice{!!pending && "..."}
    </Button>
  );
}
