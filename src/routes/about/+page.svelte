<script>
  import { Github, Briefcase , Mail } from 'lucide-svelte';
  import profile from "$lib/static/me.webp"

  // Replace these with your actual details
  const name = "Ayoub bijarche";
  const title = "🚀Software Developer from Morocco🚀";
  const description = "✨I'm Ayoub Bijarche, a software developer from Morocco with a passion for creating innovative solutions. I work with a variety of technologies, including Rust, C, TypeScript, and Next.js. I enjoy building modern web applications using Pocketbase and Supabase, and I develop mobile apps with React Native and Flutter. Additionally, I specialize in blockchain development on Solana, leveraging the Anchor framework in Rust to create decentralized applications (dApps). I love exploring new tools, frameworks, and technologies to continuously enhance my skills and deliver impactful projects.✨"
  const githubUrl = "https://github.com/ayoubbijarche";
  const fiverrUrl = "https://www.fiverr.com/ayoubbijarche";
</script>

<div class="min-h-screen flex items-center justify-center p-4">
  <div class="bg-white dark:bg-[#121212] h-96 rounded-[15px] shadow-lg overflow-hidden max-w-4xl w-full">
    <div class="md:flex">
      <div class="md:w-1/3 p-4  flex flex-col items-center dark:bg-[#121212]">
        <img src={profile} alt={name} class="w-53 h-64 bg-auto rounded-[15px] mb-4" />
        <h2 class="text-xl font-bold text-gray-800 mb-2 dark:text-white">{name}</h2>
        <div class="flex space-x-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-white hover:text-gray-800">
            <Github size={24} />
          </a>
          <a href="mailto:ayoubbijarche6@gmail.com" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-white hover:text-gray-800">
            <Mail size={24} />
          </a>
            <a href={fiverrUrl} target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-white hover:text-gray-800">
              <button size="icon" class="bg-[#1dbf73] rounded-[5px] border-none dark:border-[#262626] w-6">
                <span class="font-bold text-white">F</span>
              </button>
            </a>
        </div>

      </div>
      <div class="md:w-2/3 pt-4 pr-10 ">
        <h1 class="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{title}</h1>
        <p class="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
</div>
