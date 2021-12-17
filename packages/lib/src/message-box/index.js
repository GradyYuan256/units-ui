import { createApp, watch } from "vue";
import UMessageBox from "./index.vue";

const fields = ["confirm", "alert"];
const MessageBox = (options) => {
  if(!options) {
    throw new Error(`require options but get ${options}`)
  }

  const messageBoxApp = createApp(UMessageBox, options);

  return new Promise((resolve, reject) => {
    showMessageBox(messageBoxApp, { resolve, reject });
  });
};

const showMessageBox = (app, { resolve, reject }) => {
  const oFragment = document.createDocumentFragment();
  const vm = app.mount(oFragment);
  vm.open();
  document.body.appendChild(oFragment);

  watch(() => vm.state, (newState) => {
    if (!newState.visible) {
        switch (newState.eventType) {
            case 'cancel': 
                reject()
                break
            case 'confirm': 
                resolve()
                break
            default: break
        }
        app.unmount();
    }
  }, {deep: true, flush: 'post'})
};

export default function useMessageBox() {
  fields.forEach((field) => {
    MessageBox[field] = (options) => {
      options.field = field;
      return MessageBox(options);
    };
  });

  return MessageBox
}

