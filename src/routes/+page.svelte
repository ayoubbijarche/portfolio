<script>
  import { onMount } from 'svelte';
  import { fade , blur , slide , draw , fly , scale } from 'svelte/transition';
  import {Button} from '$lib/components/ui/button';
  import {Card} from '$lib/components/ui/card';
  import { Github, Mail } from 'lucide-svelte';
  import profile from '$lib/static/coprofile.webp'
  import gitprofile from '$lib/static/gitprofile.webp'
  import img from '$lib/static/img.webp'
  
  let isHovered = false;
  let mounted = false;
  let shouldReduceMotion = false
  
  onMount(() => {
    mounted = true;
  });
</script>

<div class="relative min-h-screen overflow-hidden flex items-center justify-center">
  <!-- Background Image -->
  <div class="absolute inset-0 flex justify-end items-center pr-4 md:pr-20 pointer-events-none">
    <img src={img} alt="" class="w-40 h-60 md:w-80 md:h-auto object-cover opacity-100 rounded-[20px]" />
  </div>
  
  <!-- Main content container -->
  <div 
    class="relative z-10 max-w-screen-lg mx-auto px-4 -mt-10 md:-mt-20"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
  >
    <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
      <!-- Left appearing container -->
      {#if isHovered}
        <div 
          transition:fly={{ x: shouldReduceMotion ? 0 : -50, duration: 300 }}
          class="relative order-1 md:order-none"
        >
          <Card class="w-32 md:w-40 shadow-lg rounded-[10px] border-gray-200" style="background-color: #f8f1e4;">
            <div class="p-3 md:p-4 flex flex-col items-center">
              <img src={profile} alt="Profile" loading="lazy" class="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2 object-cover" />
              <span class="font-semibold text-gray-800 text-xs md:text-sm">Ayoub</span>
              <span class="text-xs text-gray-600">Software Developer</span>
            </div>
          </Card>
        </div>
      {/if}

      <!-- Main container -->
      <div class="w-auto rounded-[15px] p-4 md:p-8 shadow-xl transition-all duration-300 order-2 md:order-none" style="background-color: #f8f1e4;">
        <div class="space-y-2 text-lg md:text-2xl font-bold">
          <p class="text-gray-800 text-center">
            Hey, I'm <span class="inline-flex items-center gap-1 rounded-[10px] bg-blue-500 px-2 md:px-3 py-1 text-sm md:text-base text-white">Ayoub 👋</span>
          </p>
          <p class="text-gray-800 text-center">
            I'm a <span class="inline-flex items-center gap-1 rounded-[10px] bg-orange-500 px-2 md:px-3 py-1 text-sm md:text-base text-white">Blockchain Developer⛓️</span>
          </p>
        </div>
      </div>

      <!-- Right appearing container -->
      {#if isHovered}
        <div 
          transition:fly={{ x: shouldReduceMotion ? 0 : -50, duration: 300 }}
          class="flex flex-col items-center space-y-3 md:space-y-5 order-3 md:order-none"
        >
          <Card class="w-32 md:w-40 mt-4 md:mt-16 shadow-lg rounded-[10px] border-gray-200" style="background-color: #f8f1e4;">
            <div class="p-3 md:p-4 flex flex-col items-center rounded-[5px]">
              <img src={gitprofile}  loading="lazy" alt="GitHub Profile" class="w-16 h-16 md:w-20 md:h-20 rounded-full mb-2 object-cover" />
              <span class="font-semibold text-gray-800 text-xs md:text-sm mb-2">ayoubbijarche</span>
              <Button variant="outline" size="sm" class="flex items-center gap-1 md:gap-2 rounded-[5px] border-gray-300 text-xs md:text-sm px-2 md:px-3">
                <Github class="h-3 w-3 md:h-4 md:w-4" />
                <a href="https://github.com/ayoubbijarche" target="_blank" rel="noopener noreferrer">
                  <p class="text-gray-800">View Profile</p>
                </a>
              </Button>
            </div>
          </Card>
          <div class="flex space-x-2 md:space-x-4 rounded-[15px]">
            <a href="mailto:ayoubbijarche6@gmail.com">
              <Button variant="outline" size="icon" class="rounded-[5px] border-gray-400 w-8 h-8 md:w-10 md:h-10">
                <Mail class="h-3 w-3 md:h-4 md:w-4 text-gray-800" />
              </Button>
            </a>

            <a href="https://www.upwork.com/freelancers/~019f2d8062659aa24e" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" class="bg-[#37A000] rounded-[5px] border-none w-8 h-8 md:w-10 md:h-10">
                <span class="font-bold text-white text-sm md:text-base">U</span>
              </Button>
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>


