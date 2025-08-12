<script setup>
import logo from "../src/assets/png/logo.png";
import hero from "../src/assets/svg/hero.svg"


const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];
</script>

<template>
  <main class=" bg-black">
    <!--PAGE HEADER -->
    <header
      class="bg-black h-[70px] w-full flex justify-center relative px-20 items-center"
    >
      <div class="absolute left-20">
        <img :src="logo" />
      </div>

      <menu>
        <ul class="flex items-center gap-8">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="text-white font-light cursor-pointer"
          >
            <a :link="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </menu>
    </header>

    <!-------------------------------- FIRST SECTION ----------------------------->
    <section class=" px-20 mt-28 space-y-20">
      <div class=" flex justify-between gap-20 items-center">
        <div>
          <h1 class=" text-7xl font-bold text-white leading-[90px]">Your One-Stop Shop for Pet Essentials</h1>
        </div>

        <div class=" space-y-5">
          <p class=" text-white font-light">Discover a wide range of pet products tailored to meet your furry friend's needs. Join us to ensure your pet receives the best care and attention they deserve.</p>
          <button class=" bg-[#FFF200] text-black py-2 px-5 rounded-md">
            Join The Waitlist
          </button>
        </div>
      </div>

      <!-- -->
      <div class=" h-600px overflow-clip">
<img :src="hero" class=" h-full w-full" />
      </div>
    </section>
    
  </main>
</template>
