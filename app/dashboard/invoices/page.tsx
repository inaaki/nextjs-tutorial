export default async function Invoices() {
  await new Promise((resolve) => setTimeout(() => resolve(23), 2000));

  return <div>Invoices Page</div>;
}
