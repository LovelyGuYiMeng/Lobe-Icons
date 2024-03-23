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
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 73 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g>
        <path d="M14.745 1.383c-.254.593-.861.914-1.31 1.348-.688.668-.98 1.725-1.195 2.682 3.309.775 5.884 3.532 6.367 7.025.555 4.016-1.817 7.859-5.639 9.134-3.822 1.276-8.003-.38-9.94-3.935-1.936-3.555-1.075-7.996 2.047-10.556.104-.085.21-.168.318-.248-.193-.396-.373-.8-.54-1.21a8.817 8.817 0 01-.606-1.987 7.656 7.656 0 01-.05-.37 3.786 3.786 0 01-.024-.34 2.55 2.55 0 01.13-.872c.067-.23.198-.436.377-.594a.816.816 0 011.144.11c.68.82.165 2.078.138 3.02.01.574.11 1.143.296 1.683l-.101.053a8.22 8.22 0 001.294-.79c.274-.243.442-.742.767-.864.324-.121.669.146.928.297.273.145.577.219.885.214l.453.007c.075.002.15.005.222.011l.31.02.307.03.077-.435c.114-.646.23-1.292.379-1.931.138-.7.413-1.367.808-1.96a2.274 2.274 0 011.238-.89c.86-.217 1.217.629.92 1.348zm-2.203 5.44C9.754 6.824 7.734 9.354 8 12.462c.266 3.11 2.73 5.642 5.51 5.666 2.78.024 4.841-2.512 4.573-5.644-.268-3.133-2.75-5.666-5.54-5.663zm.351.57a4.581 4.581 0 013.243 1.445 5.748 5.748 0 011.613 3.49 4.902 4.902 0 01-1.12 3.705v.015c-.701.799-1.699 1.27-2.757 1.303a4.536 4.536 0 01-3.305-1.387 5.72 5.72 0 01-1.677-3.518 4.893 4.893 0 011.117-3.753 3.821 3.821 0 012.762-1.3h.124zM48.394 10.7c.31.52 1.15 1.559 3.045 1.924l.16-.834a3.86 3.86 0 01-2.152-1.09h2.178v-.828h-3.664v-.428h3.387v-.79h-3.243V8.29h3.01V7.52h-2.998v-.419h3.01v-.769h-3.01v-.418h3.243v-.79h-3.125c.188-.117.349-.273.472-.457.097-.155.15-.25.153-.259l-.775-.424c-.09.159-.188.313-.295.46a1.412 1.412 0 01-1.365.683h-.976c.168-.224.323-.457.466-.698l-.776-.425a10.18 10.18 0 01-2.193 2.572l.566.68c.147-.125.295-.25.419-.374v1.734c0 .57.268.84.834.84h2.311v.427h-3.664v.829h2.178a3.86 3.86 0 01-2.152 1.09l.16.834c1.895-.365 2.735-1.402 3.045-1.924h.433v2.01h.885v-2.01l.433-.012zm-1.161-3.195h-2.439v-.404h2.439v.404zm0-1.582v.397h-2.439v-.347l.042-.05h2.397zm-2.439 2.562v-.196h2.439v.377H44.96c-.142-.015-.163-.036-.163-.181h-.003zM32.047 11.306c.186-.511.212-1.66.212-2.732v-.386H31.08l.239-3.652h-3.85v.828h2.906l-.182 2.824h-1.507l.168-2.375h-.846l-.23 3.203h3.594c0 1.06-.062 1.687-.156 1.942-.133.363-.363.77-1.247.77h-1.38v.849h1.436c1.06.003 1.707-.401 2.022-1.271z"></path>
        <path d="M27.371 11.852v-1.057h3.049v-.89H27.37v.875h-.884v.867h-.702v-1.484h.407a.943.943 0 00.73-.278.957.957 0 00.275-.735V5.397h-1.409V4.209h-.884v1.188h-1.365v4.75h1.37v1.485h-1.388v.93h3.137a.66.66 0 00.518-.191.67.67 0 00.195-.519zm-1.058-5.591V9.18a.124.124 0 01-.124.124h-.404v-3.04l.528-.003zm-1.89 3.032V6.264h.487V9.29l-.487.003zM61.274 11.125V4.429h-7.989v8.284h6.412c1.035 0 1.577-.564 1.577-1.588zm-.884 0c.017.19-.05.379-.185.514a.637.637 0 01-.51.186h-5.52V5.32h6.215v5.805z"></path>
        <path d="M54.674 9.708l.294.835a7.5 7.5 0 003.267-2.423v1.683a.65.65 0 01-.67.627h-.792v.849h.884c.389.02.768-.122 1.048-.395s.434-.65.426-1.042v-2.21h.64v-.848h-.64v-.912h-.884v.912h-3.42v.849h2.73a7.033 7.033 0 01-2.883 2.075zM42.368 12.057a18.925 18.925 0 01-2.09-1.998c.302-.401.57-.827.799-1.274.59-1.17.649-2.42.649-3.599h-.923c0 1.066-.041 2.191-.546 3.174-.168.328-.359.644-.572.944a7.79 7.79 0 01-.571-.944c-.505-.983-.546-2.108-.546-3.174h-.923c0 1.128.05 2.432.649 3.599.23.447.497.873.799 1.274a17.486 17.486 0 01-1.795 1.746v-1.022h-.885v.867h-.702v-1.484h.404a.943.943 0 00.73-.278.957.957 0 00.276-.735V5.397h-1.41V4.209h-.884v1.188h-1.37v4.75h1.37v1.485h-1.389v.93h3.137a.676.676 0 00.61-.297l.407.487a20.503 20.503 0 002.093-1.984c.651.71 1.35 1.373 2.094 1.984l.59-.695zm-6.132-5.793V9.18a.124.124 0 01-.124.124h-.403v-3.04h.527zM34.341 9.29V6.264h.486V9.29h-.486z"></path>
        <path d="M39.373 6.834l.725-.092a21.667 21.667 0 00-.191-2.592l-.885.128v.098c.164.812.28 1.632.351 2.458zM68.992 14.557h-2.53v5.71c.165.035.332.052.5.05.167.001.333-.016.497-.05V18.42h1.569c1.179 0 1.972-.766 1.972-1.954 0-1.187-.784-1.909-2.008-1.909zm-.165 2.97h-1.362v-2.08h1.368c.855 0 1.224.298 1.224 1.046s-.466 1.033-1.23 1.033zM51.952 18.275c-.294-.238-.56-.297-.554-.342.006-.044.148-.027.395-.104a1.586 1.586 0 001.227-1.57c0-1.346-.923-1.71-2.259-1.71h-2.458v5.718c.163.035.329.052.495.05.166.001.332-.016.495-.05v-2.18h.637a1.68 1.68 0 011.04.247c.3.256.553.564.747.908.162.253.563 1.016.563 1.016.194.035.392.052.59.05.19.003.382-.023.565-.077 0 0-.59-.965-.852-1.294a3.91 3.91 0 00-.63-.662zm-1.347-1.028h-1.3v-1.856h1.474c.855 0 1.253.17 1.253.87 0 .701-.572.986-1.427.986zM64.317 14.557v3.394c0 .92-.54 1.502-1.433 1.502s-1.433-.594-1.433-1.502v-3.394a2.31 2.31 0 00-.498-.05c-.167-.001-.334.016-.498.05v3.427c0 1.671 1.064 2.402 2.426 2.402s2.426-.73 2.426-2.402v-3.427a2.31 2.31 0 00-.498-.05c-.165 0-.33.016-.492.05zM44.576 15.362c.76-.03 1.48.345 1.896.985l.731-.543c-.657-.911-1.37-1.357-2.706-1.357a2.852 2.852 0 00-2.073.865c-.545.56-.84 1.32-.816 2.104 0 1.726 1.208 2.97 2.706 2.97.387 0 .77-.078 1.126-.229.229-.088.446-.203.649-.341.08-.054.17-.12.23-.095.059.023.053.074.053.136v.398c.123.035.25.052.377.05.13.002.258-.02.38-.062v-3.046h-2.544v.813h1.672c0 .612-.554 1.464-1.807 1.464-1.18 0-1.875-.947-1.875-2.043a2.036 2.036 0 01.57-1.456c.377-.39.892-.61 1.431-.613zM56.67 14.447c-1.629 0-2.949 1.33-2.949 2.97 0 1.64 1.32 2.969 2.948 2.969 1.629 0 2.948-1.33 2.948-2.97 0-1.64-1.32-2.969-2.948-2.969zm0 4.947c-.795 0-1.51-.482-1.815-1.22a1.988 1.988 0 01.426-2.156 1.953 1.953 0 012.14-.429 1.978 1.978 0 011.212 1.827 1.97 1.97 0 01-1.96 1.978h-.004zM34.812 15.469h2.064v4.795c.174.035.35.052.528.05.177.001.354-.016.527-.05v-4.795h2.064v-.924h-5.183v.924zM32.996 14.542V18.7a36.335 36.335 0 00-2.9-4.157 2.231 2.231 0 00-.49-.05c-.164-.001-.329.016-.49.05v5.722c.16.035.324.052.487.05.164.001.327-.016.486-.05V15.83a53.939 53.939 0 012.89 4.433c.161.035.326.052.492.05.165.001.33-.016.492-.05v-5.722a2.199 2.199 0 00-.486-.05c-.162 0-.323.016-.48.05zM28.388 20.222l-.035-.124-.035-.122-.148-.49-.073-.246-.08-.244-.16-.487c-.052-.163-.111-.324-.167-.484l-.083-.24c-.026-.08-.059-.16-.088-.24l-.177-.482a36.53 36.53 0 00-.784-1.894c-.071-.158-.142-.312-.216-.466l-.082-.173h-1.336l-.085.181a36.45 36.45 0 00-.99 2.36l-.178.482-.088.24-.085.241-.168.484-.16.487-.08.243-.076.244-.15.49c-.027.08-.05.163-.074.246v.042c.166.034.335.051.504.05.17.001.34-.016.507-.05l.142-.481.07-.24.077-.238.198-.594a6.332 6.332 0 011.312-.048c.42.036.835.128 1.232.274.127.059.186.092.227.19l.056.175.074.237.07.24.139.482v.015c.165.036.335.053.504.05.168 0 .336-.016.501-.05l-.015-.06zm-2.786-2.298a4.165 4.165 0 00-1.108.17c.018-.048.053-.176.068-.22l.168-.47c.233-.623.474-1.244.74-1.852l.044-.104c.027-.066.056-.083.086-.083.029 0 .056.017.08.07l.05.11c.265.595.51 1.227.742 1.854l.168.469.053.148a5.434 5.434 0 00-1.09-.092z"></path>
      </g>
    </svg>
  );
});

export default Icon;
