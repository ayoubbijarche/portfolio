<script>
  import { onMount } from 'svelte';
  import Navbar from '../components/Navbar.svelte';
  import { Sun, Moon } from 'lucide-svelte';
  import '../app.css';


  let isDarkMode = true;
  
  onMount(() => {
    document.documentElement.classList.add('dark');
  });

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark');
  }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<div class={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-[#020205]' : 'bg-gray-50'}`}>
  <button 
    on:click={toggleTheme}
    class="fixed top-4 right-4 p-2 rounded-full transition-colors z-50
           {isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}"
  >
    {#if isDarkMode}
      <Sun size={24} />
    {:else}
      <Moon size={24} />
    {/if}
  </button>
  
  <!-- Glowing elements -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-[60%] left-[70%] w-40 h-40 rounded-full bg-red-500 dark:bg-red-500 
                blur-[50px] animate-pulse-slow"></div>
    <div class="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-blue-500 dark:bg-blue-500 
                blur-[50px] animate-pulse-slower"></div>
    <div class="absolute top-[80%] left-[20%] w-24 h-24 rounded-full bg-purple-500 dark:bg-purple-500 
                blur-[50px] animate-pulse-slow"></div>
    <div class="absolute top-[15%] left-[85%] w-40 h-40 rounded-full bg-orange-500 dark:bg-orange-500 
                blur-[50px] animate-pulse-slower"></div>
  </div>
  
  <slot />
  <Navbar {isDarkMode} />
</div>

<style>
  :global(body) {
    font-family: 'Roboto', sans-serif;
  }

  :global(.dark) {
    color-scheme: dark;
  }

  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.4; }
  }
  
  @keyframes pulse-slower {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.4; }
  }
  
  :global(.animate-pulse-slow) {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  
  :global(.animate-pulse-slower) {
    animation: pulse-slower 6s ease-in-out infinite;
  }
</style>


