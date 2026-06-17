<template>
  <div class="spot-bg" aria-hidden="true">
    <div v-for="spot in spots" :key="spot.id" class="spot" :class="`s${spot.id}`">
      <svg :width="spot.size" :height="spot.size * 0.78" :viewBox="`-${spot.r} -${spot.r} ${spot.r*2} ${spot.r*2}`">
        <path :d="spot.path" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const spots = [
  {
    id: 1, size: 110, r: 60,
    path: 'M0,-56 C26,-64 60,-44 66,-14 C72,18 54,56 24,64 C-6,72 -40,54 -54,24 C-68,-6 -52,-42 -26,-58 C-12,-64 -8,-54 0,-56 Z'
  },
  {
    id: 2, size: 80, r: 45,
    path: 'M0,-40 C18,-46 42,-30 46,-6 C50,18 36,42 12,46 C-12,50 -36,34 -42,10 C-48,-14 -34,-38 -12,-44 C-4,-46 -2,-42 0,-40 Z'
  },
  {
    id: 3, size: 56, r: 32,
    path: 'M0,-30 C12,-36 30,-22 32,-2 C34,18 20,32 0,30 C-20,28 -30,14 -28,-6 C-26,-22 -10,-28 0,-30 Z'
  },
  {
    id: 4, size: 90, r: 50,
    path: 'M0,-44 C20,-50 48,-34 52,-10 C56,16 40,44 16,50 C-8,56 -34,40 -44,16 C-54,-8 -40,-34 -18,-46 C-8,-50 -6,-42 0,-44 Z'
  },
  {
    id: 5, size: 70, r: 40,
    path: 'M0,-34 C14,-40 36,-26 40,-4 C44,18 30,38 8,42 C-14,46 -34,30 -36,6 C-38,-18 -24,-36 -6,-38 C-2,-40 0,-36 0,-34 Z'
  },
  {
    id: 6, size: 46, r: 26,
    path: 'M0,-22 C8,-26 20,-16 22,0 C24,16 12,24 -2,22 C-16,20 -22,6 -18,-10 C-14,-20 -6,-20 0,-22 Z'
  },
  {
    id: 7, size: 64, r: 36,
    path: 'M0,-32 C14,-38 34,-24 38,-2 C42,20 28,36 6,38 C-18,40 -34,24 -34,2 C-34,-18 -18,-32 0,-32 Z'
  },
]
</script>

<style scoped>
.spot-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.spot {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.09;
}

.s1 { animation: roam1 22s ease-in-out infinite; }
.s2 { animation: roam2 28s ease-in-out infinite; }
.s3 { animation: roam3 18s ease-in-out infinite; }
.s4 { animation: roam4 24s ease-in-out infinite; }
.s5 { animation: roam5 20s ease-in-out infinite; }
.s6 { animation: roam6 15s ease-in-out infinite; }
.s7 { animation: roam7 26s ease-in-out infinite; }

@keyframes roam1 {
  0%   { transform: translate(5vw,   5vh)  rotate(0deg)   scale(1);    }
  20%  { transform: translate(75vw,  12vh) rotate(40deg)  scale(1.1);  }
  40%  { transform: translate(65vw,  70vh) rotate(90deg)  scale(0.9);  }
  60%  { transform: translate(10vw,  80vh) rotate(150deg) scale(1.05); }
  80%  { transform: translate(30vw,  25vh) rotate(200deg) scale(0.95); }
  100% { transform: translate(5vw,   5vh)  rotate(360deg) scale(1);    }
}
@keyframes roam2 {
  0%   { transform: translate(80vw,  8vh)  rotate(20deg)  scale(0.8);  }
  25%  { transform: translate(8vw,   45vh) rotate(100deg) scale(1.0);  }
  50%  { transform: translate(42vw,  85vh) rotate(190deg) scale(0.85); }
  75%  { transform: translate(72vw,  60vh) rotate(270deg) scale(1.05); }
  100% { transform: translate(80vw,  8vh)  rotate(380deg) scale(0.8);  }
}
@keyframes roam3 {
  0%   { transform: translate(35vw,  40vh) rotate(10deg)  scale(0.65); }
  33%  { transform: translate(68vw,  82vh) rotate(130deg) scale(0.7);  }
  66%  { transform: translate(12vw,  85vh) rotate(250deg) scale(0.6);  }
  100% { transform: translate(35vw,  40vh) rotate(370deg) scale(0.65); }
}
@keyframes roam4 {
  0%   { transform: translate(68vw,  45vh) rotate(30deg)  scale(1.2);  }
  30%  { transform: translate(10vw,  10vh) rotate(110deg) scale(1.0);  }
  60%  { transform: translate(20vw,  75vh) rotate(210deg) scale(1.3);  }
  100% { transform: translate(68vw,  45vh) rotate(390deg) scale(1.2);  }
}
@keyframes roam5 {
  0%   { transform: translate(48vw,  6vh)  rotate(5deg)   scale(0.75); }
  25%  { transform: translate(82vw,  70vh) rotate(80deg)  scale(0.85); }
  50%  { transform: translate(25vw,  88vh) rotate(170deg) scale(0.7);  }
  75%  { transform: translate(6vw,   25vh) rotate(260deg) scale(0.8);  }
  100% { transform: translate(48vw,  6vh)  rotate(365deg) scale(0.75); }
}
@keyframes roam6 {
  0%   { transform: translate(15vw,  68vh) rotate(45deg)  scale(0.55); }
  40%  { transform: translate(78vw,  30vh) rotate(160deg) scale(0.6);  }
  80%  { transform: translate(55vw,  82vh) rotate(300deg) scale(0.5);  }
  100% { transform: translate(15vw,  68vh) rotate(405deg) scale(0.55); }
}
@keyframes roam7 {
  0%   { transform: translate(60vw,  88vh) rotate(60deg)  scale(0.9);  }
  30%  { transform: translate(28vw,  10vh) rotate(140deg) scale(1.0);  }
  70%  { transform: translate(85vw,  15vh) rotate(260deg) scale(0.85); }
  100% { transform: translate(60vw,  88vh) rotate(420deg) scale(0.9);  }
}
</style>