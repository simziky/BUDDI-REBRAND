<script setup lang="ts">
import { ref } from "vue";
import logo from "../src/assets/png/logo.png";
import hero from "../src/assets/svg/hero.svg?url";
import petDog from "../src/assets/png/pet-dog.png";
import img1 from "../src/assets/png/img1.png";
import img2 from "../src/assets/png/img2.png";
import img3 from "../src/assets/png/img3.png";
import img4 from "../src/assets/png/img4.png";
import img5 from "../src/assets/png/img5.png";
import { Icon } from "@iconify/vue";
import PersonStar from "./assets/icon/personStar.svg?component";
import MegaPhone from "./assets/icon/megaphone.svg?component";
import CircularGroup from "./assets/icon/circular-group.svg?component";
import DogSpotBackground from './DogSpotBackground.vue'


const services = [
  {
    icon: "mdi:cart",
    title: "Order products effortlessly and stay updated on delivery timelines.",
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

const buyersSection = [
  {
   
    title: "Training",
    description: "Teach and get your pet to understand every word",
    img: img1,
  },
  {
    title: "Guard Dog",
    description: "Get any dog for your security and safety anytime, anywhere.",
    img: img2,
  },
  {
    title: "Grooming",
    description: "Make your pet look like a model with a proper care.",
    img: img3,
  },
  {
    title: "Daycare",
    description: " Get comfort anywhere knowing your friend is well cared for.",
    img: img4,
  },
  {
    title: "Vet Clinic",
    description: " Get a virtual assistant also know the closest clinic near you.",
    img: img5,
  },
]


const sellersSection = [
  {
   icon: "solar:wallet-linear",
    title: "Pre-Funded Wallets",
    description: "Know clients are serious before committing. Payment are confirmed before you ship or schedule services or hand-over.",
  },
  {
    icon: "cil:badge",
    title: "Reputable Platform Badges",
    description: "Accumulate verified historical feedback rankings, background checks, and license verification badges to stand apart from amateur breeders.",
  },
  {
    icon: "lineicons:dashboard-square-1",
    title: "Inventory & Analytics Dashboard",
    description: "rack real-time stock levels, monitor active listings, and analyze sales performance stats to capture deeper insights.",
  },
]

const vetSection = [
  {
   icon: "famicons:create-outline",
    title: "Create Registered Clinic Accounts",
    description: "Build a fully customized medical team profile showcasing licensing credentials, consultation rates, and operational details.",
  },
  {
    icon: "lucide:calendar",
    title: "Schedule",
    description: "Unlock scheduling streams for non-emergency ear checks, allergies, and puppy deworming guidance safely inside the browser.",
  },
  {
    icon: "mdi:drugs",
    title: "Certified Digital Prescriptions & Notes",
    description: "Instantly write post-call therapy instructions or drug formulas, and transmit official digital copies directly to the buyer's account.",
  },
]

const sellerFeatures = [
  {
    icon: PersonStar,
    title: "Expand Your Customer Base Effortlessly",
    description: "We provide tools for large outreach to grow your business.",
  },
  {
    icon: MegaPhone,
    title: "Free Marketing Opportunities Await You",
    description: "Take advantage of free advertising on social media platforms.",
  },
  {
    icon: CircularGroup,
    title: "Join Our Community of Successful Sellers",
    description: "Connect with like-minded individuals and share your journey.",
  },
];

const faqs = [
  {
    q: "How do I order?",
    a: "Ordering is simple! Browse our categories, select your desired products, and proceed to checkout. You'll receive notifications about your delivery date.",
  },
  {
    q: "What if my pet is sick?",
    a: "If your pet is unwell, we provide quick access to first aid tips and the best vet clinics nearby. Just check our resources for guidance.",
  },
  {
    q: "Can I sell products?",
    a: "Absolutely! You can create your own store as a seller. We help you reach a larger audience and manage your customer interactions effectively.",
  },
  {
    q: "Is marketing included?",
    a: "Yes, we offer free marketing opportunities! Your products will be advertised across various social media platforms to increase visibility.",
  },
  {
    q: "Need more help?",
    a: "If you still have questions, our support team is here to assist you. Don't hesitate to reach out for any inquiries.",
  },
];



const activeTab = ref('buyers')

const tabs = [
  { key: 'buyers', label: 'Buyers' },
  { key: 'sellers', label: 'Sellers' },
  { key: 'vetClinic', label: 'Vet clinic' },
]

const activeIndex = ref<number | null>(null);
const toggleFaq = (i: number) => {
  activeIndex.value = activeIndex.value === i ? null : i;
};

const waitlistEmail = ref('');
const waitlistLoading = ref(false);
const waitlistStatus = ref<'idle' | 'success' | 'error'>('idle');

const submitWaitlist = async () => {
  if (!waitlistEmail.value) return;
  waitlistLoading.value = true;
  waitlistStatus.value = 'idle';
  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: waitlistEmail.value }),
    });
    waitlistStatus.value = res.ok ? 'success' : 'error';
  } catch {
    waitlistStatus.value = 'error';
  } finally {
    waitlistLoading.value = false;
  }
};

const mobileMenuOpen = ref(false);

const scrollToWaitlist = () => {
  document.getElementById('waitlist-input')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const socials = [
  { icon: "mdi:facebook", label: "Facebook" },
  { icon: "mdi:instagram", label: "Instagram" },
  { icon: "mdi:twitter", label: "X" },
  { icon: "mdi:linkedin", label: "LinkedIn" },
];
</script>

<template>
  <main class="bg-black">
     <DogSpotBackground />
    <!-- PAGE HEADER -->
    <header class="bg-black w-full sticky top-0 z-40 ">
      <div class="h-[70px] flex justify-center relative px-6 lg:px-20 items-center">
        <div
          class="absolute left-6 lg:left-20"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        >
          <img :src="logo" />
        </div>

        
      </div>

      
    </header>

    <!-- HERO SECTION -->
    <section class="px-6 lg:px-20 mt-16 lg:mt-28 space-y-10 lg:space-y-20">
      <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        >
          <h1 class="text-4xl lg:text-7xl font-bold text-white leading-tight lg:leading-[90px]">
            Your One-Stop Shop for Pet Essentials
          </h1>
        </div>

        <div
          class="space-y-5"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
        >
          <p class="text-white font-light">
            Discover a wide range of pet products tailored to meet your furry
            friend's needs. Join us to ensure your pet receives the best care
            and attention they deserve.
          </p>
          <button
            class="border border-white text-white py-2 px-5 hover:bg-white hover:text-black lg:bg-[#FFF200] lg:text-black lg:border-0 lg:hover:bg-yellow-300 lg:hover:text-black transition-colors duration-300 cursor-pointer"
            @click="scrollToWaitlist"
          >
            Join The Waitlist
          </button>
        </div>
      </div>

      <div
        class="overflow-clip"
        v-motion
        :initial="{ opacity: 0, scale: 0.97 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 300 } }"
      >
        <img :src="hero" class="h-full w-full" />
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="mt-20 px-6 lg:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 lg:gap-20 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h3 class="text-3xl lg:text-4xl font-bold text-white leading-tight lg:leading-[40px]">
            Discover the essential features that enhance your pet ownership
            experience.
          </h3>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0 }"
          :visible-once="{ opacity: 1, transition: { duration: 600, delay: 150 } }"
        >
          <p class="text-white font-light">
            Easily browse our extensive product categories and receive timely
            delivery notifications. Get immediate assistance for pet first aid
            and locate the best veterinary clinics nearby. Enjoy peace of mind
            knowing your pet is well cared for, even when you're away.
          </p>
        </div>
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16 lg:mt-20">
        <div
          class="space-y-5"
          v-for="(item, index) in services"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 150 } }"
        >
          <div>
            <Icon :icon="item.icon" color="#FFF200" height="48" width="48" />
          </div>
          <h4 class="font-bold text-2xl text-white">{{ item.title }}</h4>
          <p class="text-white font-light">{{ item.description }}</p>
        </div>
      </div>
    </section>

     
     <!-- CUSTOMERS SECTION -->
<section class="mt-28 px-6 lg:px-20">

  <!-- TAB BUTTONS -->
  <div>
    <div class="border-2 border-[#FFF200] p-3 rounded-[55px] w-[486px] mx-auto flex justify-between">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        class="py-3 px-10 rounded-3xl transition-colors duration-200 cursor-pointer"
        :class="activeTab === tab.key
          ? 'bg-[#FFF200] text-black'
          : 'bg-transparent text-white'"
      >
        {{ tab.label }}
      </button>
    </div>
  </div>

  <!-- BUYERS SECTION -->
  <div v-if="activeTab === 'buyers'" class="mt-16 lg:mt-20">
    <div>
      <h3 class="text-3xl lg:text-4xl font-bold text-white leading-tight lg:leading-[40px] max-w-2xl">
        Buying Pets & Supplies with Unconditional Peace of Mind
      </h3>
      <p class="text-white font-light mt-5">
        For standard buyers, our marketplace is an end-to-end haven.
        Bypassing unverified online boards means you are always
        interacting with verified sellers checked for fraud patterns.
      </p>
    </div>
    <div class="w-full grid grid-cols-1 lg:grid-cols-5 gap-3 mt-16 lg:mt-20">
      <div
        class=" overflow-clip relative  h-[400px] border-2 border-[#FFF200] rounded-xl flex flex-col justify-end "
        v-for="(item, index) in buyersSection"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 150 } }"
      >
    
        <img :src="item.img" class=" w-full h-full absolute object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        <div class="p-[2rem] space-y-3 absolute z-10">
        <h4 class="font-bold text-2xl text-white">{{ item.title }}</h4>
        <p class="text-white font-light text-xs">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SELLERS SECTION -->
  <div v-else-if="activeTab === 'sellers'" class="mt-16 lg:mt-20">
    <div>
      <h3 class="text-3xl lg:text-4xl font-bold text-white leading-tight lg:leading-[40px] max-w-2xl">
        Post Listings & Start Selling Your Products or Pets
      </h3>
      <p class="text-white font-light mt-5">
        Whether you are an authorized premium breeder or a trusted supplier of pet accessories and organic feed,
        Pet gives you the tools to list your goods or pets and receive secure, pre-funded escrow payments without worry.
      </p>
    </div>
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 mt-16 lg:mt-20">
      <div
        class="space-y-3 h-[400px] border-2  border-[#FFF200] rounded-xl flex flex-col justify-end p-[2rem]"
        v-for="(item, index) in sellersSection"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 150 } }"
      >
      <div class="absolute top-10">
            <Icon :icon="item.icon" color="#FFF200" height="48" width="48" />
          </div>
        <h4 class="font-bold text-2xl text-white">{{ item.title }}</h4>
        <p class="text-white font-light text-xs">{{ item.description }}</p>
      </div>
    </div>
  </div>

  <!-- VET CLINIC SECTION -->
  <div v-else-if="activeTab === 'vetClinic'" class="mt-16 lg:mt-20">
    <div>
      <h3 class="text-3xl lg:text-4xl font-bold text-white leading-tight lg:leading-[40px] max-w-2xl">
        Create Your Clinic Account & Expand Remote Consultations
      </h3>
      <p class="text-white font-light mt-5">
        Establish an authorized clinical account so pet parents can find,
        triage, and schedule video appointments with your licensed doctors
        under official verification credentials.
      </p>
    </div>
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 mt-16 lg:mt-20">
      <div
        class="space-y-3 h-[400px] border-2 border-[#FFF200] rounded-xl flex flex-col justify-end p-[2rem]"
        v-for="(item, index) in vetSection"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 150 } }"
      >
       <div class="absolute top-10">
            <Icon :icon="item.icon" color="#FFF200" height="48" width="48" />
          </div>
        <h4 class="font-bold text-2xl text-white">{{ item.title }}</h4>
        <p class="text-white font-light text-xs">{{ item.description }}</p>
      </div>
    </div>
  </div>

</section>

    <!-- EMPOWER / SELLING POTENTIAL SECTION -->
    <section class="mt-28 px-6 lg:px-20 text-center">
      <p
        class="text-white text-sm tracking-widest uppercase mb-3"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { duration: 500 } }"
      >Empower</p>
      <h2
        class="text-3xl lg:text-5xl font-bold text-white mb-4"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      >
        Unlock Your Selling Potential Today
      </h2>
      <p
        class="text-white text-base lg:text-lg font-light max-w-xl mx-auto mb-10 lg:mb-16"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { duration: 600, delay: 200 } }"
      >
        As a seller, you can create your own store and reach a wider audience.
        Our platform is designed to help you manage your customers effectively.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 mt-10 lg:mt-20">
        <div
          v-for="(item, index) in sellerFeatures"
          :key="index"
          class="flex flex-col items-center space-y-4"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 150 } }"
        >
          <component :is="item.icon" height="90" />
          <h4 class="font-bold text-2xl lg:text-3xl text-white">{{ item.title }}</h4>
          <p class="text-white font-light text-sm">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- JOIN WAITLIST SECTION -->
    <section class="mt-28 lg:mt-48 px-6 lg:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div
          class="space-y-6"
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Join Our Exclusive Waitlist
          </h2>
          <p class="text-white font-light">
            Be the first to know about our launch and exclusive offers for pet
            lovers!
          </p>
          <input
            id="waitlist-input"
            v-model="waitlistEmail"
            type="email"
            placeholder="Enter your email"
            class="w-full bg-transparent border border-white/40 text-white placeholder-white/40 px-4 py-3 outline-none focus:border-white transition-colors"
          />
          <div class="flex gap-4">
            <button
              @click="submitWaitlist"
              :disabled="waitlistLoading"
              class="border border-white bg-white text-black py-3 px-6 hover:bg-[#FFF200] hover:border-[#FFF200] transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ waitlistLoading ? 'Sending...' : 'Sign Up' }}
            </button>
            <button
              class="border border-white text-white py-3 px-6 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Learn More
            </button>
          </div>
          <p v-if="waitlistStatus === 'success'" class="text-[#FFF200] text-sm">
            You're on the list! Check your inbox for a confirmation.
          </p>
          <p v-if="waitlistStatus === 'error'" class="text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        </div>

        <div
          class="rounded-2xl h-[320px] lg:h-[420px] overflow-hidden"
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 150 } }"
        >
          <img
            :src="petDog"
            class="h-full w-full object-cover object-top"
            alt="Pet owner with dog"
          />
        </div>
      </div>
    </section>

    <!-- FAQs SECTION -->
    <section class="mt-28 px-6 lg:px-20">
      <h2
        class="text-5xl font-bold text-white mb-2"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >FAQs</h2>
      <p
        class="text-white font-light mb-12"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { duration: 600, delay: 100 } }"
      >
        Find answers to common questions about our services for both buyers and
        sellers.
      </p>

      <div class="space-y-1">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="border-b border-white/20"
          v-motion
          :initial="{ opacity: 0 }"
          :visible-once="{ opacity: 1, transition: { duration: 400, delay: i * 80 } }"
        >
          <button
            class="w-full flex justify-between items-center py-5 text-left"
            @click="toggleFaq(i)"
          >
            <span class="text-white font-medium text-lg">{{ faq.q }}</span>
            <Icon
              :icon="activeIndex === i ? 'mdi:chevron-up' : 'mdi:chevron-down'"
              color="white"
              height="24"
              width="24"
              class="shrink-0 ml-4 cursor-pointer"
            />
          </button>
          <Transition name="faq">
            <div v-if="activeIndex === i" class="pb-5 overflow-hidden">
              <p class="text-white font-light">{{ faq.a }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- STILL HAVE QUESTIONS CTA -->
    <section class="mt-28 px-6 lg:px-20 py-16">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-4xl font-bold text-white mb-2">Still have questions?</h2>
        <p class="text-white font-light mb-8">We're here to help!</p>
        <button
          class="border border-white text-white py-3 px-6 rounded-md hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
        >
          Contact
        </button>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="mt-20 px-6 lg:px-20 pt-16 pb-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { duration: 600 } }"
      >
        <!-- Newsletter -->
        <div class="space-y-4">
          <img :src="logo" class="mb-2" />
          <p class="text-white font-light text-sm">
            Subscribe to our newsletter for the latest updates on products and
            promotions.
          </p>
          <div class="flex flex-col lg:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email Here"
              class="w-full bg-transparent border border-white text-white placeholder-white/40 text-sm px-3 py-3 outline-none focus:border-[#FFF200]"
            />
            <button class="w-full lg:w-auto text-white border-white border text-sm px-4 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
              Join
            </button>
          </div>
          <p class="text-white text-xs">
            By joining, you accept our Privacy Policy and consent to receive updates.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h5 class="text-white font-semibold mb-4">Quick Links</h5>
          <ul class="space-y-3 text-white font-light text-sm">
            <li><a href="/about" class="hover:text-[#FFF200]">About Us</a></li>
            <li><a href="/contact" class="hover:text-[#FFF200]">Contact Us</a></li>
            <li><a href="/faq" class="hover:text-[#FFF200]">FAQ</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h5 class="text-white font-semibold mb-4">Resources</h5>
          <ul class="space-y-3 text-white font-light text-sm">
            <li><a href="/community" class="hover:text-[#FFF200]">Community</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h5 class="text-white font-semibold mb-4">Connect With Us</h5>
          <div class="flex flex-col gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              href="#"
              class="flex items-center gap-3 text-white hover:text-[#FFF200] transition-colors"
            >
              <Icon :icon="social.icon" height="20" width="20" />
              <span class="text-sm">{{ social.label }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center border-t border-white/10 pt-6 gap-4 lg:gap-0">
        <div class="flex flex-col gap-2 text-white/60 text-sm lg:hidden">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
        <p class="text-white/40 text-sm">© 2025 Relume. All rights reserved.</p>
        <div class="hidden lg:flex gap-6 text-white/40 text-sm">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms of Service</a>
          <a href="#" class="hover:text-white">Cookie Settings</a>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: max-height 0.35s ease, opacity 0.3s ease;
  max-height: 300px;
  overflow: hidden;
}
.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>


