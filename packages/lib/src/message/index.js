import { createApp, watch } from "vue";
import UMessage from "./index.vue";

let uMsgIndex = 0,
  uMsgInstances = [],
  uMsgOffsetTop = 20;

function computeOffsetTop(instance) {
  let filterInstances = uMsgInstances.filter(
    (item) => item["msg-position"] === instance.position
  );

  return filterInstances.reduce((acc, cul) => {
    return cul.$el.offsetHeight + acc + uMsgOffsetTop;
  }, uMsgOffsetTop);
}

function updateOffsetTop(instance) {
  let removeTop = instance["msg-top"];
  let index = 0;
  for (; index < uMsgInstances.length; index++) {
    if (uMsgInstances[index]["msg-index"] === instance["msg-index"]) {
      break;
    }
  }
  uMsgInstances.splice(index, 1);
  for (; index < uMsgInstances.length; index++) {
    let item = uMsgInstances[index];
    if (item["msg-position"] === instance["msg-position"]) {
      let currentTop = item["msg-top"];
      item["msg-top"] = removeTop;
      removeTop = currentTop;
      item.$el.style.top = item["msg-top"];
    }
  }
}

function validatePosition(position) {
  if (!position) {
    return "center";
  }
  return ["left", "center", "right"].includes(position) ? position : "center";
}

const createInstance = (options) => {
  if (!options) {
    throw new Error(`require options but get ${options}`)
  }
  options.position = validatePosition(options.position);
  const messageApp = createApp(UMessage, options);

  const oFragment = document.createDocumentFragment();
  const vm = messageApp.mount(oFragment);
  vm["msg-position"] = options.position;
  vm["msg-index"] = `msg-${uMsgIndex++}`;
  vm["msg-top"] = computeOffsetTop(options) + "px";
  vm.$el.style.top = vm["msg-top"];
  uMsgInstances.push(vm);
  vm.open();
  document.body.appendChild(oFragment);

  watch(
    () => vm.visible,
    (newValue) => {
      if (!newValue) {
        messageApp.unmount();
        updateOffsetTop(vm);
      }
    }
  );
}

export default function useMessage() {
  return options => createInstance(options)
}
