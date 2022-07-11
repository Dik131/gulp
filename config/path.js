import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());//Получаем имя папки проекта

const buildFolder = `./dist`; //Taк же можно использовать rootFolder
const srcFolder = `./src`;    

export const path = {
    build: {
        js: `${srcFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        svg: `${buildFolder}/img/svg/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`        
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        svg: `${srcFolder}/img/**/*.svg`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,        
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
}