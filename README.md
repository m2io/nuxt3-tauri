# Nuxt 3 + Tauri V2 RC HMR reproduction

- `pnpm install`
- `pnpm tauri android dev`
- change something in the `/pages/index.vue`
- Nothing changes

- add a `.env` with `NUXI_DISABLE_VITE_HMR=true`
- Seems like the server reloaded every few seconds 

- `pnpm tauri dev` - works fine
