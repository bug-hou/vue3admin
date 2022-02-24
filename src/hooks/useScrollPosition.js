import { ref } from "vue"

export const useScrollPosition = function (element) {
  const scrollX = ref(0);
  const scrollY = ref(0);
  let callback;
  if (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    const scrollHandle = () => {
      scrollX.value = element.scrollLeft.toFixed(1);
      scrollY.value = element.scrollTop.toFixed(1);
    }
    element.addEventListener("scroll", scrollHandle)
    callback = (cb) => {
      cb();
      element.removeEventListener("scroll", scrollHandle)
    };
  } else {
    const scrollHandle = () => {
      scrollX.value = window.scrollX.toFixed(1);
      scrollY.value = window.scrollY.toFixed(1);
    }
    window.addEventListener("scroll", scrollHandle)
    callback = (cb) => {
      cb();
      element.removeEventListener("scroll", scrollHandle)
    };
  }
  return {
    scrollX,
    scrollY,
    callback
  }
}