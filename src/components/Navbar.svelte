<script>
  import { page } from '$app/stores';
  import { Home, User, Briefcase, Wrench } from 'lucide-svelte';
  import {base} from "$app/paths";

  
  export let isDarkMode;
  
  const routes = [
    { path: base + '/', icon: Home, label: 'Home', activeColor: 'bg-blue-600' },
    { path: base + '/about', icon: User, label: 'About', activeColor: 'bg-[#1da04f]' },
    { path: base + '/projects', icon: Briefcase, label: 'Projects', activeColor: 'bg-yellow-600' },
];

</script>

<nav class="fixed w-full bottom-3 left-0 right-0 flex justify-center z-40">
  <div class="flex items-center gap-1 px-3 py-2 rounded-[15px] {isDarkMode ? 'bg-[#0b0d14]' : 'bg-white/80'} backdrop-blur-lg shadow-lg">
    {#each routes as route}
    <a 
      href={route.path}
      class="p-3 rounded-[10px] transition-all duration-300 {($page.url.pathname === '/' ? base + '/' : $page.url.pathname) === route.path ? 
        `${route.activeColor} text-white` : 
        (isDarkMode ? 'text-white hover:text-white hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100')}"
    >
        <svelte:component this={route.icon} size={24} />
        <span class="sr-only">{route.label}</span>
      </a>
    {/each}
  </div>
</nav>
