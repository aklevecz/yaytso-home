import { useEffect, useState } from "react";
import { fetchContact } from "../lib/api";

export default function useContact() {
  const [contact, setContact] = useState<{
    email: string;
    telegram: string;
    twitter: string;
    discord: string;
  } | null>(null);

  const [fetching, setFetching] = useState(false);

  const onFetchContact = () => {
    setFetching(true);
    setTimeout(() => {
      fetchContact().then((contact) => {
        setContact(contact);
        setFetching(false);
      });
    }, 3000);
  };

  // const fetching = !contact;
  return { contact, fetching, onFetchContact };
}
