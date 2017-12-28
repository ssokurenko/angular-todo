// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCobuf0nvCQaaiURH1pFlx8TaZkF8n5jmc",
    authDomain: "todo-sapp.firebaseapp.com",
    databaseURL: "https://todo-sapp.firebaseio.com",
    projectId: "todo-sapp",
    storageBucket: "todo-sapp.appspot.com",
    messagingSenderId: "1044497731965"
  }
};
