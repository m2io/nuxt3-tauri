const host = process.env.TAURI_DEV_HOST

export default defineNuxtConfig({
	compatibilityDate: '2024-08-06',
	ssr: false,
	devServer: { host, port: 1420 },
	srcDir: 'src/',
	vite: {
		// Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
		//
		// 1. prevent vite from obscuring rust errors
		clearScreen: false,
		// 2. tauri expects a fixed port, fail if that port is not available
		server: {
			strictPort: true,
			hmr: host
				? {
					protocol: "ws",
					host,
					port: 1421,
				}
				: undefined,
			watch: {
				// 3. tell vite to ignore watching `src-tauri`
				ignored: ["**/src-tauri/**"],
			},
		},
	},
})
