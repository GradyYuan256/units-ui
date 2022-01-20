import { createVNode, nextTick, render } from "vue";
import UToast from "./index.vue";

let vm = null,
  timer = null,
  container = null;

function clear() {
  if (document) {
    document.body.removeChild(container);
  }
  clearTimeout(timer);
  timer = null;
  vm = null;
}

const createInstance = ({ message = "", duration = 3000, type = 'default', enableHtml = false }) => {
  if (vm) {
    clear();
  }
  container = document.createElement("div");
  vm = createVNode(UToast, { message, duration, type, enableHtml });
  render(vm, container);
  document.body.append(container);

  nextTick(() => {
    timer = setTimeout(() => {
      clear();
    }, duration + 100);
  });

  return vm;
}

export default function useToast() {
  return options => createInstance(options)
}
