import adapter from '@sveltejs/adapter-auto';

// Check if it's in development mode to set base path correctly


export default {
  kit: {
		adapter: adapter(),
    
    paths: {
      // Ensure base path matches your deployment context
      base: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    },
  },


	
};
