export default function Layout({
  children,
  products,
  payments,
  analytics
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  payments: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex gap-5">
        {products}
        {payments}
      </div>
      {analytics}
    </div>
  )
}