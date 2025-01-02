<script lang="ts">
    // Define the services offered
    const services = [
      {
        title: "Price Action",
        icon: "📊", 
        color: "bg-blue-500"
      },
      {
        title: "Trading System",
        icon: "💹",
        color: "bg-blue-500"
      },
      {
        title: "Psychology",
        icon: "🧠",
        color: "bg-blue-500"
      },
      {
        title: "Mentorship", 
        icon: "👥",
        color: "bg-blue-500"
      }
    ];
  </script>
  
  <section class="py-16 bg-white">
    <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">What We Offer</h2>
        <p class="mt-4 text-lg text-gray-600 sm:text-xl">
          Learn to trade like a professional through our comprehensive trading education program
        </p>
      </div>
  
      <!-- Services Display -->
      <div class="mt-16 p-1 flex flex-wrap items-center justify-center gap-4 overflow-x-auto">
        {#each services as service}
          <div class="flex-shrink-0 relative overflow-hidden {service.color} rounded-lg w-[180px] sm:w-[200px] md:w-[250px] shadow-lg group h-44 sm:h-48 md:h-56 flex flex-col justify-center items-center">
            <!-- Background SVG -->
            <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" 
                 viewBox="0 0 375 283" 
                 fill="none" 
                 style="opacity: 0.1;">
              <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
              <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <!-- Service Content -->
            <div class="relative flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
              <div class="block absolute w-28 h-28 bottom-0 left-0 -mb-16 ml-3"
                   style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
              </div>
              <div class="relative text-white text-2xl sm:text-3xl md:text-4xl mb-4">
                {service.icon}
              </div>
              <div class="text-white text-center">
                
                <span class="block font-semibold text-base sm:text-lg md:text-xl mb-2">{service.title}</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  