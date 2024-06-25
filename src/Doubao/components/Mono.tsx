import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="-5 0 80 100"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M13.846 58.921c.577-12.544 6.299-20.062 8.524-22.537-10.904 6.88-18.143 18.922-21.261 27.784v3.745c0 10.262 9.113 18.579 20.358 18.579 2.596 0 5.074-.446 7.359-1.254 1.181-.401 2.34-.83 3.474-1.266 3.053-3.005 5.521-6.387 7.502-10.006-16.311 8.132-26.668.241-25.961-15.048l.005.003z"></path>
      <path d="M71.57 40.618c-4.051-3.015-13.74-8.04-24.737-9.364.986 12.68.311 29.315-7.026 42.717-1.981 3.619-4.449 7.001-7.502 10.006 12.587-4.844 22.56-11.561 28.748-17.453 9.429-8.975 11.215-17.32 11.242-22.274a9.156 9.156 0 00-.725-3.627v-.005z"></path>
      <path d="M43.924 12.469c-4.51-3.903-10.219-6.243-16.435-6.243-6.213 0-11.726 2.263-16.201 6.043-5.867 4.959-9.76 12.541-10.184 21.132v30.772c3.118-8.862 10.357-20.904 21.261-27.784a36.908 36.908 0 015.247-2.772c6.298-2.679 12.968-3.118 19.216-2.363-.74-9.466-2.4-16.728-2.907-18.785h.003z"></path>
      <path d="M53.964 22.819a661.917 661.917 0 01-3.614-3.66c-.675-.712-1.329-1.4-1.959-2.079-2.694-2.782-4.46-4.611-4.46-4.611.507 2.057 2.167 9.319 2.907 18.785 10.997 1.324 20.686 6.349 24.737 9.364-4.367-4.262-11.623-11.659-17.611-17.799z"></path>
      <path d="M445.82 21.376h19.686v4.937c-1.746 5.056-3.793 10.414-6.141 16.073 3.672 5.599 5.659 10.415 6.02 14.508 0 2.89-.602 4.997-1.806 6.261-1.806 1.565-4.876 2.348-9.21 2.408l-2.107-6.381c1.384.241 2.528.361 3.371.361 1.445-.12 2.408-.301 2.889-.662.482-.361.723-1.024.723-1.987 0-4.033-2.047-8.548-6.02-13.545 2.649-5.96 4.756-11.317 6.2-16.073h-7.464v47.979h-6.141V21.376zm31.304-1.445h6.201c0 6.02-.301 11.499-.783 16.495 3.251 13.726 9.09 24.742 17.458 32.93l-4.635 5.418c-6.382-7.044-11.378-15.532-14.87-25.465-2.167 10.294-7.525 18.843-16.013 25.645l-4.154-5.057c7.224-5.959 11.92-13.183 14.087-21.732 1.746-7.224 2.649-16.675 2.709-28.234zM395.493 35.945h19.565v-6.502h5.96v6.502h6.802v5.598h-6.802v16.796c0 4.094-1.987 6.201-5.84 6.201h-6.983l-1.324-5.78c2.167.241 4.214.422 6.261.422 1.264 0 1.926-.843 1.926-2.408V43.349c-4.455 7.224-10.234 13.003-17.337 17.338l-3.372-5.599c6.863-3.371 12.341-7.886 16.435-13.545h-15.291v-5.598zm40.996-14.388v53.698h-6.02v-2.107h-38.287v2.107h-6.02V21.557h50.327zm-44.307 45.932h38.287V27.216h-38.287v40.273zM326.083 21.617h29.016v5.538h-5.538v7.285h6.862v5.779h-6.862v12.582h-6.02V40.219h-6.261c-.723 5.899-2.95 10.294-6.562 13.304l-4.756-4.154c2.77-2.107 4.455-5.177 5.178-9.15h-6.622V34.44h6.983v-7.285h-5.418v-5.538zm11.498 5.538v7.285h5.96v-7.285h-5.96zm21.13-3.551h5.96v20.588h-5.96V23.604zm-31.063 33.892h20.408v-4.033h6.26v4.033h19.987v5.779h-19.987v4.997h23.298v5.719h-53.337v-5.719h23.779v-4.997h-20.408v-5.779zm42.26-3.913h-8.067l-1.384-5.899c2.588.24 5.057.421 7.344.421 1.144 0 1.746-.963 1.746-2.89V20.293h6.08V46.72c0 4.576-1.926 6.863-5.719 6.863zM281.475 24.025h7.886v-4.334h5.839v4.334h7.886v-4.334h5.9v4.334h8.669v5.538h-8.669v3.552h-5.9v-3.552H295.2v3.552h-5.839v-3.552h-7.886v-5.538zm17.217 39.852a37.554 37.554 0 01-2.047 3.01c-2.769 3.552-7.706 6.321-14.689 8.368l-2.167-5.177c5.719-1.565 9.873-3.853 12.401-6.742.241-.301.422-.542.542-.723H280.09v-5.659h15.532c.301-1.023.541-2.107.782-3.19h-12.22V34.44h29.859v19.324h-12.1c-.181 1.083-.362 2.167-.602 3.19h16.434v5.659h-13.244c3.251 3.131 7.886 5.779 14.027 7.826l-4.274 5.057c-7.104-3.13-12.341-6.983-15.592-11.619zM276.538 46.54v28.474h-5.899V48.888c-1.566 4.394-3.372 8.488-5.539 12.28l-2.709-6.983c3.733-5.057 6.502-10.776 8.248-17.157v-.542h-6.321v-5.719h6.321V19.871h5.899v10.896h5.659v5.719h-5.659v3.131a170.778 170.778 0 017.465 9.391l-3.311 4.997a195.382 195.382 0 00-4.154-7.465zm31.846 2.528v-2.649h-18.602v2.649h18.602zm-18.602-7.224h18.602v-2.588h-18.602v2.588zM206.706 34.62h22.816c.361-3.13.602-6.321.662-9.692V19.51h6.382v3.973c0 3.913-.241 7.646-.663 11.137h24.141v6.141h-22.696c4.335 12.581 12.341 22.274 24.08 29.136l-3.973 5.178c-11.318-6.984-19.324-16.676-23.899-29.077-4.094 13.425-12.161 23.297-24.201 29.618l-4.033-5.297c12.16-5.9 19.866-15.773 23.117-29.558h-21.733V34.62zM184.917 37.269v19.746h-21.251v9.27c0 1.505.843 2.288 2.649 2.288h27.331c1.204-.12 1.986-.602 2.408-1.505.301-.662.662-2.769 1.023-6.261l5.96 1.987c-.422 3.612-.903 6.14-1.445 7.645-.843 2.529-2.769 3.853-5.9 3.973h-32.026c-4.214 0-6.321-1.866-6.321-5.598V40.038c-1.204 1.325-2.348 2.589-3.552 3.793l-4.454-5.298c5.177-4.575 9.632-11.137 13.484-19.565l6.381 1.445c-.722 1.686-1.505 3.311-2.227 4.876h32.628c0 16.013-.361 25.886-.963 29.619-.602 3.732-3.13 5.658-7.585 5.658-.722 0-2.047-.12-3.853-.301l-1.505-5.598c1.686.18 3.131.301 4.335.301 1.444 0 2.287-.963 2.528-2.89.361-2.047.542-8.97.662-20.829h-29.558a80.514 80.514 0 01-4.033 6.02h25.284zm-21.251 14.087h14.93v-8.428h-14.93v8.428zM94.196 22.4h49.965v5.899H94.196V22.4zm-2.288 44.788h15.531c-1.444-4.214-3.01-7.946-4.635-11.137l5.418-1.806c1.806 3.552 3.311 7.345 4.635 11.378l-3.431 1.565h14.749c1.926-3.612 3.612-8.006 5.057-13.063l6.14 1.686c-1.384 4.153-3.07 7.946-4.996 11.377h15.652v6.141h-54.12v-6.141zm7.946-34.795h38.588v20.889H99.854V32.393zm32.508 15.11v-9.331h-26.428v9.331h26.428z"></path>
    </svg>
  );
});

export default Icon;