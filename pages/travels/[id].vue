<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4 text-blue-500">Travel Details</h1>
    <div v-if="travel">
      <img
        :src="travel.picture"
        alt="Travel Picture"
        class="w-full h-64 object-cover mb-4"
      />
      <h2 class="text-xl font-semibold mb-2">{{ travel.name }}</h2>
      <p class="mb-2">Departure Date: {{ travel.departureDate }}</p>
      <p class="mb-2">Return Date: {{ travel.returnDate }}</p>
      <p class="mb-2">Price: ${{ travel.price }}</p>
      <p class="mb-2">Rating: {{ travel.rating }}</p>
      <p class="mb-4">{{ travel.description }}</p>
      <button
        @click="goBack"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Go Back
      </button>
    </div>
    <div v-else>
      <p>Loading travel details...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const travel = ref(null);

const fetchTravel = async (id: string) => {
  // Simulate fetching travel data based on ID
  const mockTravels = [
    {
      id: 1,
      name: "Paris Trip",
      departureDate: "2023-06-01",
      returnDate: "2023-06-10",
      picture: "https://example.com/paris.jpg",
      description: "A wonderful trip to Paris.",
      price: 500,
      rating: 4.5,
    },
    // Add more mock data as needed
  ];

  travel.value = mockTravels.find((t) => t.id === Number(id));
};

onMounted(() => {
  const { id } = route.params;
  fetchTravel(id as string);
});

const goBack = () => {
  router.push("/travels");
};
</script>

<style scoped>
/* Add your styles here */
</style>
