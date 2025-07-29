<script lang="ts">
  import {items} from "$lib/data";
  import { spring } from 'svelte/motion';
  import { fade, fly } from 'svelte/transition';
  
  const coords = spring({ x: 0, y: 0 }, {
    stiffness: 0.05,
    damping: 0.25
  });

  let hoveredCard: number | null = null;
  let bgText = "BORED COLLECTION";

  function handleMouseMove(event: { clientX: any; clientY: any; }) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    coords.set({
      x: (clientX - innerWidth / 2) / (innerWidth / 4),
      y: (clientY - innerHeight / 2) / (innerHeight / 4)
    });
  }

  function handleCardHover(id, text) {
    hoveredCard = id;
    bgText = text;
  }

  function handleCardLeave() {
    hoveredCard = null;
  }
</script>

<div 
  class="gallery"
  on:mousemove={handleMouseMove}
  on:mouseleave={() => coords.set({ x: 0, y: 0 })}
  style="transform: translate({-$coords.x * 100}px, {-$coords.y * 100}px)"
>



<div>
  {#each items as item}
    <div 
      class="absolute shadow-md rounded-[15px] overflow-hidden transform transition-all duration-300 hover:scale-105 z-10"
      style="background-color: #f8f1e4; top: {item.top}; left: {item.left}; width: 250px; height: 350px;"
      class:opacity-50={hoveredCard !== null && hoveredCard !== item.id}
      on:mouseenter={() => handleCardHover(item.id, item.hoverText)}
      on:mouseleave={handleCardLeave}
    >
      <!-- Image -->
      <a href={item.link} class="block">
        <img 
          src={item.image} 
          alt={item.name} 
          loading="eager"
          class="ml-[5%] rounded-[15px] mt-[5%] w-[90%] h-[80%] object-cover"
        />
      </a>

      <!-- Title and Subtitle -->
      <div class="pt-1 pl-4">
        <h3 class="text-[18px] font-semibold text-gray-800">{item.title}</h3>
        <p class="text-[15px] pb-10 text-gray-600">{item.subtitle}</p>
      </div>

      <div class="absolute bottom-2 right-2">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
        <button 
          class="text-black text-[13px] px-2 py-2 rounded-[6px] hover:shadow-lg transition shadow-md"
          style="background-color: #f8f1e4;"
        >
          View source
        </button></a>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }

  .gallery {
    width: 200vw;
    height: 200vh;
    color: #fff;
    overflow: hidden;
    position: fixed;
    top: -50vh;
    left: -50vw;
    transition: transform 0.1s ease-out;
  }


  .background-content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }

  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
  }
  .gallery::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    pointer-events: none;
  }

 </style>
