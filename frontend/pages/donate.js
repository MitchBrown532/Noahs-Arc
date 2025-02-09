import Head from "next/head";

export default function Donate() {
  return (
    <div className="text-center p-8">
      <Head>
        <title>Donate - Noah's Arc</title>
      </Head>
      <h1 className="text-3xl font-bold">Support Our Mission</h1>
      <p className="mt-4">
        Your contributions help us build orphanages and provide for children in
        need.
      </p>
    </div>
  );
}
