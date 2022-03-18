const JWT_AUTH_BASE_URL = 'http://laravel-jwt-auth.test'

export default {
	redirect: {
		login: '/auth/login',
		logout: '/auth/login',
		callback: '/auth/login/callback',
		home: '/',
	},

	strategies: {
		laravelJWT: {
			provider: 'laravel/jwt',
			url: JWT_AUTH_BASE_URL,
		},
	},
}
