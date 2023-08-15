import Head from "next/head";
import Accordion from "./components/Accordion.js";

const Home = () => {
  return (
    <div className="bg-gray-900 mx-auto ">
      

        <h1 className="text-center font-bold p-4 text-3xl text-red-500"> NextJS <span className="text-blue-400"> Main Features </span></h1>
      <main className="h-screen w-96 mx-auto overflow-hidden">
        <Accordion
          title="Routing"
          content="A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more."
        />
        <Accordion
          title="Rendering"
          content="Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes."
        />
        <Accordion
          title="Data Fetching"
          content="Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation."
        />
        <Accordion
          title="Styling"
          content="Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS."
        />
        <Accordion
          title="Optimizations"
          content="Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience."
        />
        <Accordion
          title="TypeScript"
          content="Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker."
        />
        <h1 className="text-center font-bold text-3xl text-yellow-500"> Mustafa<span className="text-red-500"> Rahman </span></h1>

      </main>

    </div>
  );
};

export default Home;
