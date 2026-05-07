import pjson from '../package.json';

interface ConfigType {
    env: 'development' | 'production';
    version: string;
    port: number
};

const config: ConfigType = {
  env: (process.env.NODE_ENV as 'development' | 'production') || 'development',
    version: pjson.version,
    port: parseInt(process.env.PORT || '8000', 10),
}

export default config;