/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [], // add image domains here
	},
	async headers() {
		return [{ source: '/(.*)', headers: securityHeaders }];
	},
};

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    child-src 'self';
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'self';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=(), autoplay=()',
	},
];

export default nextConfig;