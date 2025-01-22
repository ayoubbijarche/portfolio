<script>
  import { onMount } from 'svelte';
  import { fade , blur , slide , draw , fly , scale } from 'svelte/transition';
  import {Button} from '$lib/components/ui/button';
  import {Card} from '$lib/components/ui/card';
  import { Github, Mail } from 'lucide-svelte';
  import profile from '$lib/static/coprofile.webp'
  import gitprofile from '$lib/static/gitprofile.webp'
  
  let isHovered = false;
  let mounted = false;
  let shouldReduceMotion = false
  
  onMount(() => {
    mounted = true;
  });
</script>

<div class="relative min-h-screen overflow-hidden flex items-center justify-center">
  <!-- Main content container -->
  <div 
    class="relative z-10 max-w-screen-lg mx-auto px-4 -mt-20"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
  >
    <div class="flex gap-8 items-center justify-center">
      <!-- Left appearing container -->
      {#if isHovered}
        <div 
          transition:fly={{ x: shouldReduceMotion ? 0 : -50, duration: 300 }}
          class="relative"
        >
          <Card class="w-40 bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-[#262626] shadow-lg rounded-[10px]">
            <div class="p-4 flex flex-col items-center">
              <img src={profile} alt="Profile" loading="lazy" class="w-24 h-24 rounded-full mb-2 object-cover" />
              <span class="font-semibold text-gray-800 dark:text-white text-sm">Ayoub</span>
              <span class="text-xs text-gray-600 dark:text-gray-400">Software Developer</span>
            </div>
          </Card>
        </div>
      {/if}

      <!-- Main container -->
      <div class="w-auto rounded-[15px] bg-white dark:bg-[#121212] p-8 shadow-xl transition-all duration-300">
        <div class="space-y-2 text-2xl font-bold">
          <p class="text-gray-800 dark:text-white text-center">
            Hey, I'm <span class="inline-flex items-center gap-1 rounded-[10px] bg-blue-500 px-3 py-1 text-white">Ayoub 👋</span>
          </p>
          <p class="text-gray-800 dark:text-white text-center">
            I'm a <span class="inline-flex items-center gap-1 rounded-[10px] bg-orange-500 px-3 py-1 text-white">Software Developer</span>,
          </p>
          <p class="text-gray-800 dark:text-white text-center">
            a <span class="inline-flex items-center gap-1 rounded-[10px] bg-purple-500 px-3 py-1 text-white">Freelancer 🕊️</span>
          </p>
        </div>
      </div>

      <!-- Right appearing container -->
      {#if isHovered}
        <div 
          transition:fly={{ x: shouldReduceMotion ? 0 : -50, duration: 300 }}
          class="flex flex-col items-center space-y-5"
        >
          <Card class="w-40 mt-16 bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-[#262626] shadow-lg rounded-[10px]">
            <div class="p-4 flex flex-col items-center rounded-[5px]">
              <img src={gitprofile}  loading="lazy" alt="GitHub Profile" class="w-20 h-20 rounded-full mb-2 object-cover" />
              <span class="font-semibold text-gray-800 dark:text-white text-sm mb-2">ayoubbijarche</span>
              <Button variant="outline" size="sm" class="flex items-center gap-2 rounded-[5px] dark:border-[#262626] border-gray-300">
                <Github class="h-4 w-4" />
                  
              <a href="https://github.com/ayoubbijarche" target="_blank" rel="noopener noreferrer">
                  <p class="text-gray-800 dark:text-white">View Profile</p>
               </a>
              </Button>
            </div>
          </Card>
          <div class="flex space-x-4 rounded-[15px] ">
            <a href="mailto:ayoubbijarche6@gmail.com">
              <Button variant="outline" size="icon" class="rounded-[5px] border-gray-400 dark:border-[#262626]">
                <Mail class="h-4 w-4 text-gray-800 dark:text-white" />
              </Button>
            </a>
            <a href="https://www.fiverr.com/bi_ayoub/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" class="bg-[#50caa3] rounded-[5px] border-none dark:border-[#262626]">
                <span class="font-bold text-white">F</span>
              </Button>
            </a>
            <a href="https://www.upwork.com/freelancers/~019f2d8062659aa24e" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" class="bg-[#37A000] rounded-[5px] border-none dark:border-[#262626]">
                <span class="font-bold text-white">U</span>
              </Button>
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>


