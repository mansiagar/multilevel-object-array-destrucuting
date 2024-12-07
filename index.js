const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 },
    },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

const formattedString = people.map(
  (people) =>
    `${people.name} lives in ${people.address.city} on ${people.address.street.name}`
);
console.log(formattedString);
