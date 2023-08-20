const nextjsDistDir = require("./next.config.js").distDir;
const nextjsServer = next({
    dev: isDev,
    conf: {
        distDir: nextjsDistDir,
        images: {
            domains: ['p3.hopefulpakistan.com'],
        }
    }
});