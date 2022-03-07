import { css } from "styled-components";

// Create media queries
export const mobile = (props) => {
    return css`
        @media (min-width: 420px) {
            ${props}
        }
    `;
};

export const mobileMd = (props) => {
    return css`
        @media (min-width: 576px) {
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css`
        @media (min-width: 768px) {
            ${props}
        }
    `;
};

export const tabletMd = (props) => {
    return css`
        @media (min-width: 992px) {
            ${props}
        }
    `;
};

export const tabletLg = (props) => {
    return css`
        @media (min-width: 1050px) {
            ${props}
        }
    `;
};

export const laptop = (props) => {
    return css`
        @media (min-width: 1200px) {
            ${props}
        }
    `;
};

export const laptopMd = (props) => {
    return css`
        @media (min-width: 1400px) {
            ${props}
        }
    `;
};

// How to use media queries
/* /420 */
// ${mobile({})}
/* 576 */
// ${mobileMd({})}
/* 768 */
// ${tablet({})}
/* 992 */
// ${tabletMd({})}
/* 1050 */
// ${tabletLg({})}
/* 1200 */
// ${laptop({})}
