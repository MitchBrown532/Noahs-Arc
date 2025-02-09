import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>{" "}
    </div>
  );
}
