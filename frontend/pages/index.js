import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Noah's Arc</title>
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Noah's Arc
        </h1>
        <p className="mt-4 text-gray-700">
          A church-run initiative dedicated to building orphanages and providing
          homes for children in need.
        </p>
        <a
          href="/donate"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Donate Now
        </a>
      </main>
    </div>
  );
}
