import { ref, watch } from "vue";

export const useTitle = (name = '') => {
  const title = ref(name);

  watch(title,
    (newValue) => {
      document.title = newValue
    },
    {
      immediate: true
    }
  )
  return title
}