import Navbar from "../components/navbar/_navbar";
import IndexHead from "../components/head/head";

export default function About() {
  return (
    <>
      <IndexHead title="ABOUT" />
      <Navbar />
      <div className="container mx-auto px-4">
        This is Page ABOUT!
      </div>
    </>
  )
}