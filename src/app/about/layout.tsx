export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <aside className="fixed right-0 top-12 z-[-1] h-screen w-60 bg-gray-800">
        <ul className="text-blue-300 px-5 py-10">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </aside>
      {children}
    </>
  )
}