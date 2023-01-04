const rootDomain = process.env.VITE_DOMAIN; // or your server IP for dev

const cspDirectives = {
	'base-uri': ["'self'"],
	'child-src': ["'self'"],
	'connect-src': ["'self'", 'ws://localhost:*'],
	// 'connect-src': ["'self'", 'ws://localhost:*', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
	'img-src': ["'self'", 'data:'],
	'font-src': ["'self'", 'data:'],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': ["'self'"],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:'],
	'object-src': ["'none'"],
	'style-src': ["'self'", "'unsafe-inline'"],
	'default-src': ['self', ...(rootDomain ? [rootDomain, `ws://${rootDomain}`] : [])],
	'script-src': ['self'],
	'worker-src': ["'self'"]
};

export default cspDirectives;
