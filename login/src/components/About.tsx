import Layout from "./Layout";
export default function About() {
  return (
    <Layout>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <p className="text-gray-600">我々について...</p>
      </div>
    </Layout>
  );
}
