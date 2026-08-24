import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 text-gray-900">
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About
          </h1>

          <div className="mt-12 space-y-10">
            {/* Me */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                … Me 🧑‍💻
              </h2>

      <br />

<span className="text-lg">
I'm Yahia, a Web Application Penetration Tester and Security Researcher with a strong Full-Stack Development background.
I focus on web and API security, covering both client-side and server-side attack surfaces.
My experience includes vulnerability research, bug bounty hunting, CTFs, JavaScript analysis, and manual penetration testing.
I'm also interested in AI-assisted security workflows, automation, and emerging web attack techniques.
I enjoy building applications, breaking them, and understanding why they work—and how they can be made more secure.
</span>
            </section>

            
          </div>
        </section>
      </main>
    </>
  );
}

export default About;