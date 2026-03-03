import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { compression } from 'vite-plugin-compression2';

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'hidden',
    // Optimización de chunks para mejor caché y paralelismo
    rollupOptions: {
      output: {
        // Separar chunks de vendor para mejor caché
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['lucide-react', 'react-helmet-async'],
        },
        // Nombres de archivo con hash para caché
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || '';
          if (info.endsWith('.css')) {
            return 'css/[name]-[hash][extname]';
          }
          if (info.endsWith('.png') || info.endsWith('.jpg') || info.endsWith('.jpeg') || info.endsWith('.gif') || info.endsWith('.webp')) {
            return 'img/[name]-[hash][extname]';
          }
          if (info.endsWith('.svg') || info.endsWith('.ico')) {
            return 'icons/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Reducir tamaño de chunks
    chunkSizeWarningLimit: 500,
    // Minificación avanzada
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // Mejorar tiempo de carga con precarga de módulos
    modulePreload: {
      polyfill: true,
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    // Compresión Gzip y Brotli
    compression({
      include: [/\.(js|css|html|json|svg)$/],
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 1024,
    }),
  ],
  // Optimizaciones de dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react', 'react-helmet-async'],
  },
  // Server config para desarrollo
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  // Preview config con headers de producción
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
