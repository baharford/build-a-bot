import { ref, onMounted } from 'vue';
import parts from '../data/parts';

const allParts = [...parts.heads, ...parts.arms, ...parts.torsos, ...parts.bases];

export default function useSearch(originalSearchTerm) {
  const results = ref([]);

  const searchInventory = (searchTerm) => {
    let searchResults;
    const term = searchTerm || originalSearchTerm;

    if (!term) searchResults = allParts;
    else {
      const lowerTerm = term.toLowerCase();
      console.log(`lowerTerm: "${lowerTerm}"`);
      searchResults = allParts.filter(
        (part) => part.title.toLowerCase().includes(lowerTerm),
      );
    }
    console.log(searchResults);
    console.log(results.value);
    results.value = [...searchResults];
  };

  searchInventory(originalSearchTerm);

  onMounted(() => console.log('Mounted: useSearch'));

  return { searchResults: results, search: searchInventory };
}
