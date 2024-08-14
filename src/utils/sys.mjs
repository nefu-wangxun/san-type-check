import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __fileName = (metaUrl) => {
    return fileURLToPath(metaUrl);
}

const __dirname = (metaUrl) => {
    return dirname(__fileName(metaUrl));
}

export {
    __fileName,
    __dirname
}