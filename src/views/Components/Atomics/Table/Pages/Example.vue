<template>
  <div class="flex flex-col space-y-8">
    <div class="w-full p-4 bg-white shadow-10">
      <p class="mb-2 font-semibold text-title-1 font-primary"># Table 1</p>

      <div class="flex flex-wrap mb-3 space-x-6">
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
      </div>
      <table class="w-full table-auto">
        <thead>
          <tr class="border-b border-gray-300 ">
            <th class="px-2 py-2 text-left text-gray-600">Project</th>
            <th class="px-2 py-2 text-left text-gray-600">Tittle</th>
            <th class="px-2 py-2 text-left text-gray-600">Status</th>
            <th class="px-2 py-2 text-left text-gray-600">User</th>
            <th class="px-2 py-2 text-left text-gray-600">Title</th>
          </tr>
        </thead>
        <tbody class="space-y-4 border-b border-gray-300">
          <tr>
            <td class="px-2 py-2">Project Name</td>
            <td class="px-2 py-2">Adam</td>
            <td class="px-2 py-2">858</td>
            <td class="px-2 py-2">858</td>
            <td class="px-2 py-2">858</td>
          </tr>
          <tr>
            <td class="px-2 py-2">Project Name</td>
            <td class="px-2 py-2">Adam</td>
            <td class="px-2 py-2">858</td>
            <td class="px-2 py-2">858</td>
            <td class="px-2 py-2">858</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="w-full p-4 bg-white shadow-10">
      <p class="mb-2 font-semibold text-title-1 font-primary"># Table 2</p>

      <div class="flex flex-wrap mb-3 space-x-6">
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
      </div>
      <table class="w-full border-collapse table-auto">
        <thead>
          <tr
            class="text-sm font-medium text-left text-gray-700 rounded-lg"
            style="font-size: 0.9674rem"
          >
            <th class="px-4 py-2 bg-gray-200 " style="background-color:#f8f8f8">
              Title
            </th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">
              Author
            </th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">
              Views
            </th>
          </tr>
        </thead>
        <tbody class="text-sm font-normal text-gray-700">
          <tr class="py-10 border-b-2 border-gray-200">
            <td class="px-4 py-4">Intro to CSS</td>
            <td class="px-4 py-4">Adam</td>
            <td class="px-4 py-4">858</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="w-full">
      <p class="mb-3 font-semibold text-title-1 font-primary"># Table 3</p>

      <div class="flex flex-wrap mb-3 space-x-6">
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
        <div class="w-56 h-8 bg-gray-300 rounded"></div>
      </div>
      <div class="flex flex-col space-y-3">
        <!-- Title -->
        <div
          class="flex flex-row items-center w-full p-2 space-x-4 text-gray-600 bg-gray-100 rounded"
        >
          <div class="w-1/6 ">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
        </div>

        <!-- Data -->
        <div
          class="flex flex-row items-center w-full h-12 p-2 space-x-4 bg-white rounded-lg shadow-10"
        >
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
        </div>
        <div
          class="flex flex-row items-center w-full h-12 p-2 space-x-4 bg-white rounded-lg shadow-10"
        >
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
          <div class="w-1/6">
            Project Name
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
