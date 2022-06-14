# I - Create next app

JS is cool but TS is more serious
```console
 yarn create next-app --typescript
 ```

# II - Make it a PWA

- Run
```console
yarn add next-pwa
```

`next-pwa` is powered by `workbox` and will generate an initial **service worker** on build 
> **_NOTE:_** We update the .gitignore file to exclude the generated files

- Add `manifest.webmanifest` (or `manifest.json`) file in the `public` folder 
> **_NOTE:_** This file tells the browsers that it's an installable PWA

- Add the sized icons to make it look good on all devices

- Add the meta tags and link in `_app.tsx` to link the `manifest.webmanifest`, the icons and other PWA compliant stuff

- Give it a try
At this point you can run a build and start the app to see the installable PWA

```console
yarn build
```
It will create a `.next` folder

```console
yarn start
```

In Brave (or Chrome, or Firefox, etc), in the right end side of the url bar there should be an option to "install" the app

On android device, installing a PWA is automatically prompted to the user iirc

On safari... *To install one on iOS or iPadOS, load the PWA-capable site, choose the Share up-arrow at the bottom of the screen, and select Add to Home Screen. Note you can do the same for any website, but you won't get the offline functionality of a true PWA.* 🤮
But there are work arounds to give a decent UX on iOs too!

# III - SSR and offline support

- Add `_document.tsx` file
`_document.tsx` forms the overall structure of the **HTML**. This file is only rendered on the server so same the `_app.tsx` it needs its set of meta tags

- Add `_offline.tsx` file
Static page that will render when the user goes offline and browse a page which wasn't cached previously

- Add `_error.tsx` and `404.tsx` files
Static page to render the ...*suspense*... Errors! 

# IV - Setup the app skeleton
- Create a default Layout component and its css module
That will be use as default layout on every pages, custom layout can still overwrite the default one
- Extract the Home or Landing component in it's own folder
- Add some components
- Add context and api service factory

### Folder structure:
|- api // contains the API calls
|- components // contains the shared components
|- context // contains global contexts
|- hooks // contains all the fancy custom hooks
|- pages // folder that Next uses to know which page to render
|- public // contains the static assets and service worker
|- styles // contains shared CSS

# IV - Make it pretty with some CSS
Sure, we could go with CSS-in-JS but let's respect ourselves a little bit and go with CSS module 😎
We'll use SCSS to generate a theme color based on CSS variables.
Each pages or components requiring styling will have its own scss module, and these module will have access to the global theme.

- Install `sass` 
```console
yarn add sass
```
- In `globals.css` add the theme colors (ie: light & dark themes) as CSS variables
- Add the shared theming tools (spacing /colors / media queries / mixins / functions)
- Update the `next.config.js` file to include automatically the theme in every scss files (pretty cool feature from Next btw)
- Rename the CSS module into 'Blah.module.**scss**'
- Make it look decent (check out this cool burger button)
- Add the material icons stylesheet and make a reusable Icon component (always useful at the begining, and pretty easy to ditch if another icon library is prefered)

===================================

# Git commit icons

🎉 Initial commit 🎉

🚀 [ADD] - when implementing a new feature

🔨 [FIX] - when fixing a bug or issue

🎨 [REFACTOR] - when refactor/improving code

🚧 [WIP] - Work in progress

📝 [MINOR] - Some small updates

✅ [MERGED] - when merging a feature