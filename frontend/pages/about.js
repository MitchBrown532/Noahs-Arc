import Head from "next/head";

export default function About() {
  return (
    <div className="text-center p-8">
      <Head>
        <title>About Us - Noah's Arc</title>
      </Head>
      <h1 className="text-3xl font-bold">Who We Are</h1>
      <p className="mt-4">
        Noah's Arc is a church-run initiative dedicated to building orphanages
        and supporting children in need.
      </p>
    </div>
  );
}
