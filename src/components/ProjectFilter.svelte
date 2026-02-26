<script lang="ts">
  type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    thumbnail?: string;
    image?: string;
  };

  export let projects: Project[] = [];

  let filter = "All";
  let categories = ["All", ...new Set(projects.map((p) => p.category))];

  $: filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
</script>

<div class="flex flex-wrap gap-4 mb-6">
  {#each categories as cat}
    <button
      on:click={() => (filter = cat)}
      class={`px-4 py-2 rounded transition-all ${filter === cat ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-800"}`}
    >
      {cat}
    </button>
  {/each}
</div>

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {#each filteredProjects as project (project.slug)}
    <li
      class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
    >
      <a href={`/projects/${project.slug}`} class="block">
        <img
          src={project.thumbnail || project.image}
          alt={project.title}
          class="w-full h-48 object-cover mb-4"
        />
        <div class="px-4 pb-4">
          <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
          <p class="text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>
      </a>
    </li>
  {/each}
</ul>
