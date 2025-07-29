<script>
  import { page } from '$app/stores';
  import { Home, Briefcase, Wrench } from 'lucide-svelte';
  import {base} from "$app/paths";
  
  const routes = [
    { path: base + '/', icon: Home, label: 'Home'},
    { path: base + '/projects', icon: Briefcase, label: 'Projects'},
];

</script>

<nav class="fixed w-full bottom-3 left-0 right-0 flex justify-center z-40">
  <div class="flex items-center gap-1 px-3 py-2 rounded-[15px] backdrop-blur-lg shadow-lg" style="background-color: #f8f1e4;">
    {#each routes as route}
    <a 
      href={route.path}
      class="p-3 rounded-[10px] transition-all duration-300 {($page.url.pathname === '/' ? base + '/' : $page.url.pathname) === route.path ? 
        `text-black` : 
        'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}"
    >
        <svelte:component this={route.icon} size={24} />
        <span class="sr-only">{route.label}</span>
      </a>
    {/each}
  </div>
</nav>
