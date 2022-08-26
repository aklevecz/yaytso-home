import { useEffect, useState } from "react";
import { fetchContact } from "../lib/api";

export default function useContact() {
  const [contact, setContact] = useState<{
    email: string;
    telegram: string;
    twitter: string;
    discord: string;
  } | null>(null);

  const onFetchContact = () =>
    setTimeout(() => fetchContact().then(setContact), 3000);

  const fetching = !contact;
  console.log(contact);
  return { contact, fetching, onFetchContact };
}
