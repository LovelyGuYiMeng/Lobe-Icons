import { forwardRef } from 'react';

import type { IconType } from '@/types';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 103 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M12.914 22c-1.98 0-3.804-.48-5.472-1.441a10.717 10.717 0 01-3.971-3.97C2.49 14.901 2 13.038 2 11c0-2.04.49-3.902 1.47-5.588a10.717 10.717 0 013.972-3.97C9.11.48 10.934 0 12.914 0c1.55 0 3.006.275 4.37.824 1.362.549 2.485 1.323 3.368 2.323l-1.795 1.794c-.667-.823-1.52-1.456-2.56-1.897a8.494 8.494 0 00-3.353-.662c-1.49 0-2.878.358-4.163 1.074-1.285.716-2.314 1.725-3.089 3.03C4.917 7.788 4.53 9.293 4.53 11c0 1.706.387 3.21 1.162 4.515a8.144 8.144 0 003.104 3.03 8.44 8.44 0 004.148 1.073c1.412 0 2.594-.22 3.545-.662a7.943 7.943 0 002.456-1.75 6.43 6.43 0 001.236-1.985c.314-.775.51-1.633.588-2.574h-7.796v-2.323h10.12c.098.549.147 1.058.147 1.529 0 1.294-.205 2.554-.617 3.78a8.347 8.347 0 01-1.971 3.22C18.71 20.95 16.13 22 12.914 22zm18.727 0c-1.432 0-2.716-.343-3.854-1.03a7.143 7.143 0 01-2.662-2.838c-.638-1.206-.957-2.563-.957-4.073 0-1.451.3-2.784.898-4a7.26 7.26 0 012.545-2.912c1.098-.725 2.373-1.088 3.824-1.088 1.47 0 2.746.328 3.824.985a6.54 6.54 0 012.486 2.72c.579 1.158.868 2.481.868 3.971 0 .294-.03.55-.088.765H26.669c.059 1.137.334 2.098.824 2.882.49.785 1.113 1.373 1.868 1.765a5.072 5.072 0 002.368.588c1.922 0 3.403-.902 4.442-2.706l2.119 1.03c-.648 1.216-1.525 2.176-2.633 2.882C34.548 21.647 33.21 22 31.64 22zm4.324-9.559a4.868 4.868 0 00-.53-1.882c-.313-.628-.808-1.157-1.485-1.588-.676-.432-1.525-.647-2.544-.647-1.177 0-2.173.377-2.986 1.132-.814.755-1.349 1.75-1.604 2.985h9.15zm4.223-5.912h2.383v2.206h.118c.432-.764 1.079-1.402 1.942-1.911a5.296 5.296 0 012.736-.765c1.098 0 2.054.265 2.868.794a4.446 4.446 0 011.75 2.118 6.125 6.125 0 012.104-2.118c.873-.53 1.888-.794 3.045-.794 1.726 0 3.025.524 3.898 1.573.872 1.05 1.309 2.476 1.309 4.28v9.617H59.87v-9.235c0-1.392-.285-2.402-.853-3.03-.57-.627-1.413-.94-2.53-.94-.746 0-1.422.215-2.03.647-.608.431-1.084 1.01-1.427 1.735a5.432 5.432 0 00-.515 2.353v8.47h-2.5v-9.205c0-1.412-.285-2.432-.854-3.06-.569-.627-1.402-.94-2.5-.94-.746 0-1.422.22-2.03.661-.608.441-1.084 1.03-1.427 1.765a5.528 5.528 0 00-.515 2.368v8.411h-2.5v-15zm24.405 0h2.383v2.206h.117c.432-.764 1.08-1.402 1.942-1.911a5.296 5.296 0 012.736-.765c1.098 0 2.054.265 2.868.794a4.446 4.446 0 011.75 2.118 6.125 6.125 0 012.104-2.118c.873-.53 1.888-.794 3.045-.794 1.726 0 3.025.524 3.898 1.573.873 1.05 1.31 2.476 1.31 4.28v9.617h-2.472v-9.235c0-1.392-.284-2.402-.853-3.03-.569-.627-1.412-.94-2.53-.94-.745 0-1.422.215-2.03.647-.608.431-1.084 1.01-1.427 1.735a5.432 5.432 0 00-.515 2.353v8.47h-2.5v-9.205c0-1.412-.285-2.432-.853-3.06-.57-.627-1.403-.94-2.501-.94-.745 0-1.422.22-2.03.661-.608.441-1.084 1.03-1.427 1.765a5.528 5.528 0 00-.515 2.368v8.411h-2.5v-15zM93.645 22c-1.098 0-2.079-.216-2.942-.647-.863-.431-1.53-1.025-2-1.78-.47-.754-.706-1.612-.706-2.573 0-1.588.598-2.828 1.794-3.72 1.197-.893 2.707-1.339 4.53-1.339.903 0 1.742.098 2.516.294.775.196 1.368.422 1.78.677V12c0-1.118-.392-2.015-1.177-2.691-.784-.677-1.775-1.015-2.971-1.015a5.01 5.01 0 00-2.324.544 4.246 4.246 0 00-1.677 1.515L88.585 8.94c.589-.902 1.398-1.608 2.427-2.117 1.03-.51 2.172-.765 3.428-.765 2.04 0 3.643.534 4.81 1.603 1.167 1.068 1.75 2.524 1.75 4.367v9.5h-2.383v-2.147H98.5c-.431.726-1.078 1.343-1.941 1.853S94.724 22 93.645 22zm.236-2.206c.843 0 1.627-.216 2.353-.647a4.905 4.905 0 001.736-1.735c.431-.726.647-1.52.647-2.383-.47-.313-1.05-.568-1.736-.764a7.89 7.89 0 00-2.177-.294c-1.373 0-2.407.284-3.103.853-.697.568-1.045 1.303-1.045 2.205 0 .824.314 1.49.942 2 .627.51 1.422.765 2.383.765z"></path>
    </svg>
  );
});

export default Icon;
