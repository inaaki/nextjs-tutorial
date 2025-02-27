export default async function Customers() {
  await new Promise((resolve) => setTimeout(() => resolve(23), 2000));

  return <p>Customers Page</p>;
}
