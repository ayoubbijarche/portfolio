import adapter from '@sveltejs/adapter-static';

// Check if it's in development mode to set base path correctly


export default {
  kit: {
		adapter: adapter({
		  pages: 'build',
		  assets: 'build',
		  fallback: null,
		  precompress: false,
		  strict: true
		}),
    
    paths: {
      // Ensure base path matches your deployment context
      base: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    },
  },


	
};
