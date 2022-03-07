import { createGlobalStyle } from "styled-components";

// ALL GLOBAL STYLE
export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after,
body, 
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif; 
}

img {
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: 0.4s;
}

a:hover{
    color: var(--color-brand);
}

button{
    cursor: pointer;
    color: inherit;
    font-family: inherit;
}

ul {
    list-style: none;
    color: inherit;
    margin: 0;
    padding: 0;
}

/*=============== SCROLL BAR ===============*/
::webkit-scrollbar{
    width: .6rem;
    background-color: hsl(206, 4%, 80%);
}
::webkit-scrollbar-thumb{
    background-color: hsl(206, 4%, 64%);
}
::webkit-scrollbar-thumb:hover{
    background-color: hsl(206, 4%, 48%);
}



/*=============== ROOTS ===============*/
:root{

.light-theme{
/* ----- Colors ------ */
--color-brand: #fef68a;
--color-brand-alt: #67d7cc;
--color-brand-dark: #c25189;
--color-white: #fff;
--color-black: #000;
--color-gray: gray;
--color-gray-light: lightgray;
/*  the colors below have a dark themed version: refer to: REF: A001 (line +- 55  ) */
--color-text-1: #202020;
--color-text-2: #414141;
--color-bg: #f7f7f7;
--color-bg-1: #fdfdfd;
--color-bg-2: #ebebeb;
--color-bg-dark: #1d1d1d;
--color-bg-dark-1: #303030;
--color-bg-dark-text: #f7f7f7;
--color-bg-dark-dark: #000e24;
--color-bg-galleryCard: #f0f0f0;
--color-boxShadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.dark-theme{
    --color-bg-dark-dark: #0f1f44;
    --color-text-1: #f1f1f1;
    --color-text-2: #ebebeb;
    --color-bg: #010d20;
    --color-bg-1: #020f24;
    --color-bg-2: #021430;
    --color-bg-dark: #f7f7f7;
    --color-bg-dark-1: #e0dfdf;
    --color-bg-dark-text: #1d1d1d;
    --color-boxShadow: 0 10px 10px rgba(255, 255, 255, 0.25);
    /* below colors, are the same in light theme */
    --color-brand: #ff69b4;;
    --color-brand-dark: #c25189;
    --color-brand-alt: lightblue;
    --color-white: #fff;
    --color-black: #000;
    --color-gray: gray;
    --color-gray-light: lightgray;
--color-bg-galleryCard: #f0f0f0;

}

/* ----- Font Weight ----- */
    --fw-medium: 500;
    --fw-semi-bold: 600;
    --fw-bold: 700;
    --fw-bolder: 800;

/* ----- Z Index ----- */
    --z-tooltip: 10;
    --z-fixed: 100;

/* --- Typography ----- */
--font-family: 'Poppins', sans-serif;
--font-family-narrow: 'Archivo Narrow', sans-serif;
--font-family-alt: 'Playfair Display', serif;

/* --------  Font Size  -------*/
--fz-largest: 2.25rem;
--fz-h1: 1.5rem;
--fz-h2: 1.25rem;
--fz-h3: 1rem;
--fz-normal: 0.938rem;
--fz-small: 0.813rem;
--fz-smaller: 0.75rem;

@media screen and (min-width: 768px){
    --fz-largest: 4rem;
    --fz-h1: 2.25rem;
    --fz-h2:: 1.5rem;
    --fz-h3: 1.25rem;
    --fz-normal: 1rem;
    --fz-small: .875rem;
    --fz-smaller: .813rem;
}

}

`;
