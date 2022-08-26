const endpoints = {
  fetchContact: "./api/fetch-contact",
};

export const fetchContact = () => {
  return fetch(endpoints.fetchContact)
    .then((r) => r.json())
    .then(({ contact }) => contact);
};
