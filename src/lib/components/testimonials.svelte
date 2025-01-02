<script>
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    let currentIndex = 0;
    const testimonials = [
        {
            text: "Trading with ForexPro has been a game-changer. Their platform is intuitive and their customer support is top-notch.",
            name: "John Doe",
            position: "Forex Trader",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        },
        {
            text: "I've tried several forex platforms, but ForexPro stands out with its comprehensive tools and resources.",
            name: "Jane Smith",
            position: "Financial Analyst",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        },
        {
            text: "ForexPro's educational resources have helped me become a better trader. Highly recommend!",
            name: "Michael Brown",
            position: "Day Trader",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        },
        {
            text: "The real-time data and analytics provided by ForexPro are invaluable. I can't imagine trading without it.",
            name: "Emily Davis",
            position: "Market Analyst",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        },
        {
            text: "ForexPro's platform is user-friendly and efficient. It's made my trading experience seamless.",
            name: "Chris Wilson",
            position: "Forex Enthusiast",
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
        }
    ];

    const transitionDuration = 5000; // 5 seconds
    const opacity = tweened(1, { duration: 400, easing: cubicOut });

    onMount(() => {
        const interval = setInterval(() => {
            opacity.set(0).then(() => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                opacity.set(1);
            });
        }, transitionDuration);

        return () => clearInterval(interval);
    });
</script>

<div class="flex justify-center items-center min-h-screen px-4 sm:px-0">
    <figure class="max-w-screen-md bg-white text-black p-4 sm:p-8 rounded-lg shadow-lg">
        <div class="flex items-center mb-1 text-yellow-300 justify-center">
            {#each Array(5) as _, i}
                <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            {/each}
        </div>
        <blockquote>
            <p class="text-lg sm:text-2xl font-semibold text-center" style:opacity={$opacity}>
                "{testimonials[currentIndex].text}"
            </p>
        </blockquote>
        <figcaption class="flex flex-col sm:flex-row items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse">
            <img class="w-10 h-10 rounded-full" src={testimonials[currentIndex].image} alt="profile picture">
            <div class="flex flex-col sm:flex-row items-center divide-y-2 sm:divide-y-0 sm:divide-x-2 rtl:divide-x-reverse divide-gray-300">
                <cite class="pe-3 font-medium text-center sm:text-left">{testimonials[currentIndex].name}</cite>
                <cite class="ps-3 text-sm text-gray-500 text-center sm:text-left">{testimonials[currentIndex].position}</cite>
            </div>
        </figcaption>
    </figure>
</div>
