
import Feed from '@components/Feed'

const Home = () => (
  <section className='m-y-3 w-full flex-center flex-col'>
    <h1 className="text-6xl text-center font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text
   
    ">
      Dive into and Elevate.

      <br className="max-md:hidden" />
      <span className="text-5xl text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">

        AI PROMPTS


      </span>
    </h1>
    <p className="text_center desc
    ">
      Ignite your creativity with PromptWave, the open-source prompting tool that elevates your artistic journey and sets new standards in the world of prompts. Contribute, collaborate, and ride the wave of inspiration to unlock your full creative potential.

    </p>

    {/* this is for feed */}






  </section>
);

export default Home;
