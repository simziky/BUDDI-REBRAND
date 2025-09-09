<script setup>
import logo from "../src/assets/png/logo.png";
import hero from "../src/assets/svg/hero.svg";
import { Icon } from "@iconify/vue";
const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const services = [
  {
    icon: "mdi:cart",
    title:
      "Order products effortlessly and stay updated on delivery timelines.",
    description: "We ensure you have the support you need for your pet.",
  },
  {
    icon: "map:veterinary-care",
    title: "Get quick responses for pet emergencies and vet locations.",
    description: "Our resources are just a click away for urgent pet care.",
  },
  {
    icon: "majesticons:bath-shower-line",
    title: "Access top-notch training and care services for your beloved pet.",
    description: "Travel with confidence knowing your pet is in good hands.",
  },
];
</script>

<template>
  <main class="bg-black">
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
    <section class="px-20 mt-28 space-y-20">
      <div class="flex justify-between gap-20 items-center">
        <div>
          <h1 class="text-7xl font-bold text-white leading-[90px]">
            Your One-Stop Shop for Pet Essentials
          </h1>
        </div>

        <div class="space-y-5">
          <p class="text-white font-light">
            Discover a wide range of pet products tailored to meet your furry
            friend's needs. Join us to ensure your pet receives the best care
            and attention they deserve.
          </p>
          <button class="bg-[#FFF200] text-black py-2 px-5 rounded-md">
            Join The Waitlist
          </button>
        </div>
      </div>

      <!-- -->
      <div class="h-600px overflow-clip">
        <img :src="hero" class="h-full w-full" />
      </div>
    </section>

    <section class="mt-20 px-10">
      <div class="grid grid-cols-2 justify-between gap-20 items-center">
        <div>
          <h3 class="text-4xl font-bold text-white leading-[40px]">
            Discover the essential features that enhance your pet ownership
            experience.
          </h3>
        </div>

        <div class="">
          <p class="text-white font-light">
            Easily browse our extensive product categories and receive timely
            delivery notifications. Get immediate assistance for pet first aid
            and locate the best veterinary clinics nearby. Enjoy peace of mind
            knowing your pet is well cared for, even when you’re away.
          </p>
        </div>
      </div>

      <div class="w-full grid grid-cols-3 gap-10 mt-20">
        <div class=" space-y-5" v-for="(item, index) in services" :key="index">
          <div>
            {{ item.icon }}
            <Icon :icon=item.icon color="FFF200" height="48" width="48" />
          </div>
          <h4 class=" font-bold text-2xl text-white">{{ item.title }}</h4>
          <p class=" text-white">{{ item.description }}</p>
        </div>
      </div>
    </section>
  </main>
</template>
