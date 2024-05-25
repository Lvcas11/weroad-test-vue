<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4 text-blue-500">Travels</h1>
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="py-2 px-4">Name</th>
          <th class="py-2 px-4">Departure Date</th>
          <th class="py-2 px-4">Return Date</th>
          <th class="py-2 px-4">Price</th>
          <th class="py-2 px-4">Rating</th>
          <th class="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="travel in travels" :key="travel.id" class="border-b">
          <td class="py-2 px-4">
            <NuxtLink
              :to="`/travels/${travel.id}`"
              class="text-blue-500 hover:underline"
            >
              {{ travel.name }}
            </NuxtLink>
          </td>
          <td class="py-2 px-4">{{ travel.departureDate }}</td>
          <td class="py-2 px-4">{{ travel.returnDate }}</td>
          <td class="py-2 px-4">{{ travel.price }}</td>
          <td class="py-2 px-4">{{ travel.rating }}</td>
          <td class="py-2 px-4">
            <button
              @click="editTravel(travel.id)"
              class="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-700"
            >
              Edit
            </button>
            <button
              @click="deleteTravel(travel.id)"
              class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      @click="addTravel"
      class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Add Travel
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const travels = ref([
  {
    id: 1,
    name: "Paris Trip",
    departureDate: "2023-06-01",
    returnDate: "2023-06-10",
    price: 500,
    rating: 4.5,
  },
  // Add more mock data as needed
]);

const addTravel = () => {
  // Logic to add a new travel
};

const editTravel = (id: number) => {
  // Logic to edit an existing travel
};

const deleteTravel = (id: number) => {
  // Logic to delete a travel
};
</script>

<style>
/* No additional styles needed as we're using Tailwind CSS */
</style>
