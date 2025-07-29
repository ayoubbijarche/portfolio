<script>
  import Navbar from '../components/Navbar.svelte';
  import '../app.css';
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen" style="background-color: #f8f1e4;">
  
  <!-- Fire Particles -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <!-- Fire sparks emerging from bottom -->
    <div class="fire-particle fire-particle-1"></div>
    <div class="fire-particle fire-particle-2"></div>
    <div class="fire-particle fire-particle-3"></div>
    <div class="fire-particle fire-particle-4"></div>
    <div class="fire-particle fire-particle-5"></div>
    <div class="fire-particle fire-particle-6"></div>
    <div class="fire-particle fire-particle-7"></div>
    <div class="fire-particle fire-particle-8"></div>
    <div class="fire-particle fire-particle-9"></div>
    <div class="fire-particle fire-particle-10"></div>
  </div>
  
  <slot />
  <Navbar />
</div>

<style>
  :global(body) {
    font-family: 'Roboto', sans-serif;
  }

  :global(.dark) {
    color-scheme: dark;
  }

  /* Fire Particle Animations */
  @keyframes fire-spark {
    0% {
      transform: translateY(0) translateX(0) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 0.8;
      transform: translateY(-20vh) translateX(var(--drift-x)) scale(1);
    }
    50% {
      opacity: 0.6;
      transform: translateY(-50vh) translateX(calc(var(--drift-x) * 2)) scale(0.8);
    }
    80% {
      opacity: 0.3;
      transform: translateY(-80vh) translateX(calc(var(--drift-x) * 3)) scale(0.5);
    }
    100% {
      opacity: 0;
      transform: translateY(-100vh) translateX(calc(var(--drift-x) * 4)) scale(0);
    }
  }
  
  .fire-particle {
    position: absolute;
    bottom: 0;
    width: 3px;
    height: 8px;
    background: #442d18;
    border-radius: 50%;
    box-shadow: 
      0 0 6px #442d18,
      0 0 12px rgba(68, 45, 24, 0.8),
      0 0 18px rgba(68, 45, 24, 0.6);
    animation: fire-spark linear infinite;
  }
  
  .fire-particle-1 {
    left: 10%;
    --drift-x: -10px;
    animation-duration: 4s;
    animation-delay: 0s;
  }
  
  .fire-particle-2 {
    left: 20%;
    --drift-x: 15px;
    animation-duration: 5s;
    animation-delay: 0.5s;
  }
  
  .fire-particle-3 {
    left: 30%;
    --drift-x: -8px;
    animation-duration: 4.5s;
    animation-delay: 1s;
  }
  
  .fire-particle-4 {
    left: 40%;
    --drift-x: 12px;
    animation-duration: 5.5s;
    animation-delay: 1.5s;
  }
  
  .fire-particle-5 {
    left: 50%;
    --drift-x: -15px;
    animation-duration: 4.2s;
    animation-delay: 2s;
  }
  
  .fire-particle-6 {
    left: 60%;
    --drift-x: 8px;
    animation-duration: 5.2s;
    animation-delay: 2.5s;
  }
  
  .fire-particle-7 {
    left: 70%;
    --drift-x: -12px;
    animation-duration: 4.8s;
    animation-delay: 3s;
  }
  
  .fire-particle-8 {
    left: 80%;
    --drift-x: 18px;
    animation-duration: 5.8s;
    animation-delay: 3.5s;
  }
  
  .fire-particle-9 {
    left: 90%;
    --drift-x: -6px;
    animation-duration: 4.3s;
    animation-delay: 4s;
  }
  
  .fire-particle-10 {
    left: 15%;
    --drift-x: 10px;
    animation-duration: 5.3s;
    animation-delay: 4.5s;
  }
</style>


