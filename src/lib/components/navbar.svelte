<script lang="ts">
    import { onMount } from 'svelte';
  
    let isMenuOpen = false;
    let isDarkTheme = false;
    
    onMount(() => {
      isDarkTheme = localStorage.getItem('theme') === 'dark';
      if (isDarkTheme) {
        document.body.classList.add('dark');
      }
    });
  
    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
    };
  
    const toggleTheme = () => {
      isDarkTheme = !isDarkTheme;
      document.body.classList.toggle('dark', isDarkTheme);
      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    };
  </script>
  
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img class="h-32 w-auto" src="/logo3.png" alt="Flakes Academy logo">
        </div>
  
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 justify-center flex-1">
          <a href="/" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold relative group">
            Home
            <span class="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-300"></span>
          </a>
          <a href="/services" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold relative group">
            Services
            <span class="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-300"></span>
          </a>
          <a href="/contact" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold relative group">
            Contact us
            <span class="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-300"></span>
          </a>
          <a href="/projects" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold relative group">
            Our projects
            <span class="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-500 group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-300"></span>
          </a>
        </div>
  
        <!-- Theme Toggle and Login -->
        <div class="hidden md:flex items-center space-x-4">
          <button 
            on:click={toggleTheme}
            class="p-2 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100"
            aria-label="Toggle theme"
          >
            {#if isDarkTheme}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            {:else}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            {/if}
          </button>
          <a href="/login" class="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-150 ease-in-out">
            Login
          </a>
        </div>
  
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            on:click={toggleMenu}
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              class="h-6 w-6" 
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              {#if isMenuOpen}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              {:else}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              {/if}
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Home</a>
          <a href="/services" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Services</a>
          <a href="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Contact us</a>
          <a href="/projects" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Our projects</a>
          <a href="/login" class="block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white hover:bg-blue-600">Login</a>
        </div>
      </div>
    {/if}
  </nav>