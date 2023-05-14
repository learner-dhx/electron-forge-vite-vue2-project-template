/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
// Since we declared the script as type=module in the HTML file,
// we can use ES Modules (adapted from the Vue 2 Introduction
// https://vuejs.org/v2/guide/#Declarative-Rendering

// Alternatively, omit the .min from the path for Vue debugging purposes.
import Vue from 'vue';
import App from '../src/App.vue';
const app = new Vue({
  render: (h) => h(App),
});
app.$mount('#app');
console.log('👋 APP:', app);
console.log(
  '👋 This message is being logged by "renderer.js", included via Vite'
);
