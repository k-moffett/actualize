/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // TODO: Figure out another solution for external imports, or why this works...
    experimental: {
        externalDir: true,
    },
};

module.exports = nextConfig;
