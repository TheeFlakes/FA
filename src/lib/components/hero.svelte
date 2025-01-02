<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, crossfade } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
  
    // Contact information
    let phoneNumber = "+254717053207";
    
    // Business hours configuration
    let businessHours = {
      asianKillZone: "Asian Session: 07:00 PM - 10:00 PM EST",
      londonKillZone: "London Session: 02:00 AM - 05:00 AM EST",
      newYorkKillZone: "New York Session: 07:00 AM - 10:00 AM EST",
      londonCloseKillZone: "London Close Session: 10:00 AM - 12:00 PM EST"
    };
  
    let currentSessionIndex = 0;
    let visible = true;
    const sessions = Object.values(businessHours);
    
    // Colors array for rotation with base colors blue, red and black
    const colors = ['text-blue-600', 'text-red-600', 'text-black'];
    let currentColorIndex = 0;
  
    // Animation configuration
    const [send, receive] = crossfade({
      duration: 800,
      fallback(node, params) {
        return {
          duration: 800,
          easing: elasticOut,
          css: t => `
            transform: scale(${t});
            opacity: ${t}
          `
        };
      }
    });
  
    onMount(() => {
      const interval = setInterval(() => {
        visible = false;
        setTimeout(() => {
          currentSessionIndex = (currentSessionIndex + 1) % sessions.length;
          currentColorIndex = (currentColorIndex + 1) % colors.length;
          visible = true;
        }, 500); // Increased timing for smoother transition
      }, 4000); // Increased duration for better readability
  
      return () => clearInterval(interval);
    });
  </script>
  
  <div class="relative min-h-screen">
    <!-- Hero Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-white z-10"></div>
    </div>
  
    <!-- Content Container -->
    <div class="relative z-20 container mx-auto px-6 py-12 md:pt-32 text-black">
      <div class="max-w-4xl mx-auto">
        <!-- Main Content -->
        <div class="text-center space-y-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Master the Markets with the FLAKES Trading Course
          </h1>
          <p class="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-600">
              Learn the secrets of reading price action, mastering trading psychology, and building a profitable system.
          </p>
          
          <!-- CTA Button -->
          <div class="mt-10">
            <button 
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transform transition hover:scale-105"
              aria-label="Start Trading Now"
            >
              START TRADING NOW
            </button>
          </div>
        </div>
  
        <!-- Contact Info Grid -->
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Contact Details -->
          <div class="text-center sm:text-left">
            <h3 class="font-bold text-gray-800 uppercase tracking-wide mb-2">Contact Us</h3>
            <p class="text-lg text-gray-600">{phoneNumber}</p>
          </div>
          
          <!-- Business Hours with Enhanced Animations -->
          <div class="text-center sm:text-right">
            <h3 class="font-bold text-gray-800 uppercase tracking-wide mb-2">Entry Sessions</h3>
            {#if visible}
              <p 
                class="text-base font-bold {colors[currentColorIndex]} transition-all duration-500 transform"
                in:fly={{ y: 20, duration: 800, easing: elasticOut }}
                out:fly={{ y: -20, duration: 800, easing: elasticOut }}
              >
                {sessions[currentSessionIndex]}
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
  