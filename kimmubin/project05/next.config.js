// 프로젝트 루트에 next.config.js 파일 생성
module.exports = {
    webpack: (config, { dev }) => {
        if (dev) {
            config.devtool = 'source-map';
        }
        return config;
    },
};
