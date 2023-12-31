npm create vite@latest

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

npm i -D tailwindcss-animate

- npm install react-router-dom

# File & Folder Structure

- create \_auth folder

* form: login, register
* AuthLayout to wrap login, register

# https://ui.shadcn.com/

Update vite.config.ts
Add the following code to the vite.config.ts so your app can resolve paths without error

- npm i -D @types/node
- modify vite.config.ts

- npx shadcn-ui@latest init

Would you like to use TypeScript (recommended)? ... no / yes
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... src/globals.css
√ Would you like to use CSS variables for colors? ... no / yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / yes
√ Write configuration to components.json. Proceed? ... yes

=> Done! 🚀

# install shadcn ui components

- npx shadcn-ui@latest add button

- npx shadcn-ui@latest add form

=> Create a form schema

# Appwrite

- npm install appwrite
  [...]

# Storage & Database Design

- npm install @tanstack/react-query

# Create Post

1. CreatePost.tsx
2. PostForm.tsx
3. FileUploader.tsx

- npm install react-dropzone

* lib appwrite => api.ts[get] => queriesAndMutations.ts[use]

# Post Card

lib appwrite => api.ts[get]
create fuc likePost(), unlikePost() ,deleteSavedPost().
queriesAndMutations.ts[use]
=> useuseLikePost(), useUnlikePost(), useDeleteSavedPost()

# Update Post and Post Detail

- getPostById api

# Explore Page and Search Function

- getInfinitePosts api => useGetPosts
- searchPosts api => useSearchPosts

- create hooks fodder + useDebounce.ts

- create infinite scroll
  npm install react-intersection-observer

# User
