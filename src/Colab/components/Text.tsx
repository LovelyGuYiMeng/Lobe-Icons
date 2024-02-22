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
      viewBox="0 0 135 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M10.597 19.359c-1.606 0-3.066-.38-4.38-1.137A8.217 8.217 0 013.125 15.1C2.374 13.777 2 12.304 2 10.68c0-1.625.375-3.099 1.124-4.422a8.217 8.217 0 013.094-3.12C7.53 2.378 8.99 2 10.598 2c1.235 0 2.367.236 3.394.708a7.898 7.898 0 012.677 2.007l-1.414 1.37c-.633-.759-1.324-1.316-2.074-1.671-.749-.356-1.61-.534-2.584-.534-1.205 0-2.31.282-3.313.847a6.302 6.302 0 00-2.399 2.39c-.595 1.029-.892 2.216-.892 3.562 0 1.346.297 2.534.892 3.563a6.302 6.302 0 002.399 2.39c1.004.565 2.108.847 3.313.847 2.009 0 3.716-.828 5.122-2.483l1.436 1.392a8.372 8.372 0 01-2.85 2.17c-1.128.534-2.364.8-3.708.8zm13.447 0c-1.158 0-2.201-.279-3.128-.836a5.839 5.839 0 01-2.167-2.274c-.517-.96-.776-2.019-.776-3.18 0-1.16.259-2.22.776-3.179a5.839 5.839 0 012.167-2.274c.927-.557 1.97-.835 3.128-.835 1.159 0 2.202.278 3.129.835A5.839 5.839 0 0129.34 9.89c.517.96.776 2.02.776 3.18 0 1.16-.259 2.22-.776 3.179a5.839 5.839 0 01-2.167 2.274c-.927.557-1.97.836-3.129.836zm0-1.787c.726 0 1.402-.182 2.028-.546.626-.363 1.128-.885 1.506-1.566.379-.68.568-1.478.568-2.39 0-.913-.19-1.71-.568-2.39-.378-.681-.88-1.204-1.506-1.567a3.967 3.967 0 00-2.028-.545 4.03 4.03 0 00-2.039.545 4.002 4.002 0 00-1.518 1.566c-.378.681-.568 1.478-.568 2.39 0 .913.19 1.71.568 2.39.379.682.885 1.204 1.518 1.567a4.03 4.03 0 002.04.546zm7.723-15.2h1.97v16.615h-1.97V2.371zm8.025 16.987c-.865 0-1.638-.17-2.318-.51-.68-.341-1.205-.81-1.575-1.405-.371-.596-.556-1.272-.556-2.03 0-1.254.47-2.232 1.413-2.936.942-.704 2.132-1.056 3.569-1.056.71 0 1.37.077 1.981.232.61.155 1.078.333 1.402.534v-.72c0-.882-.309-1.59-.927-2.123-.618-.534-1.398-.8-2.34-.8-.665 0-1.275.142-1.831.429a3.347 3.347 0 00-1.32 1.195l-1.484-1.114c.463-.712 1.1-1.269 1.912-1.671.81-.402 1.71-.603 2.7-.603 1.606 0 2.87.421 3.788 1.264.92.844 1.38 1.992 1.38 3.447v7.495h-1.878v-1.694h-.093c-.34.573-.85 1.06-1.529 1.462-.68.403-1.444.604-2.294.604zm.185-1.74a3.56 3.56 0 001.854-.511 3.867 3.867 0 001.367-1.37c.34-.572.51-1.199.51-1.88-.37-.247-.826-.448-1.367-.603a6.205 6.205 0 00-1.715-.232c-1.081 0-1.896.225-2.445.673a2.145 2.145 0 00-.822 1.74c0 .65.247 1.177.741 1.579.495.402 1.12.603 1.877.603zm13.818 1.74c-.896 0-1.703-.205-2.422-.615-.718-.41-1.255-.91-1.61-1.497h-.093v1.74h-1.877V2.371h1.97v4.897l-.093 1.648h.093c.355-.604.892-1.11 1.61-1.52.719-.41 1.526-.615 2.422-.615 1.05 0 2.008.27 2.873.812.866.541 1.545 1.292 2.04 2.25.494.96.741 2.035.741 3.227 0 1.206-.247 2.285-.741 3.237-.495.951-1.174 1.698-2.04 2.24a5.308 5.308 0 01-2.873.812zm-.232-1.787c.68 0 1.321-.186 1.924-.557.602-.372 1.085-.901 1.448-1.59.363-.688.545-1.474.545-2.355 0-.882-.182-1.667-.545-2.356-.363-.688-.846-1.218-1.448-1.59a3.605 3.605 0 00-1.924-.556c-.68 0-1.32.185-1.923.556-.603.372-1.082.898-1.437 1.579-.355.68-.533 1.47-.533 2.367s.178 1.686.533 2.367c.355.68.834 1.206 1.437 1.578a3.605 3.605 0 001.923.557zm13.1 1.787c-1.16 0-2.202-.279-3.129-.836a5.839 5.839 0 01-2.167-2.274c-.517-.96-.776-2.019-.776-3.18 0-1.16.259-2.22.776-3.179a5.839 5.839 0 012.167-2.274c.927-.557 1.97-.835 3.129-.835 1.158 0 2.201.278 3.128.835a5.839 5.839 0 012.167 2.274c.517.96.776 2.02.776 3.18 0 1.16-.259 2.22-.776 3.179a5.839 5.839 0 01-2.167 2.274c-.927.557-1.97.836-3.128.836zm0-1.787c.726 0 1.402-.182 2.027-.546.626-.363 1.128-.885 1.507-1.566.378-.68.567-1.478.567-2.39 0-.913-.189-1.71-.567-2.39-.379-.681-.881-1.204-1.507-1.567a3.967 3.967 0 00-2.027-.545 4.03 4.03 0 00-2.04.545 4.002 4.002 0 00-1.518 1.566c-.378.681-.567 1.478-.567 2.39 0 .913.189 1.71.567 2.39.379.682.885 1.204 1.518 1.567a4.03 4.03 0 002.04.546zm7.607-10.42h1.877v1.903h.093c.231-.65.68-1.188 1.344-1.613.664-.425 1.36-.638 2.085-.638.541 0 1.004.077 1.39.232V9.17a3.675 3.675 0 00-1.668-.371c-.571 0-1.097.162-1.576.487a3.506 3.506 0 00-1.147 1.311 3.79 3.79 0 00-.428 1.775v6.614h-1.97V7.152zm11.477 12.207c-.865 0-1.638-.17-2.317-.51-.68-.341-1.205-.81-1.576-1.405-.37-.596-.556-1.272-.556-2.03 0-1.254.47-2.232 1.413-2.936.943-.704 2.132-1.056 3.569-1.056.71 0 1.371.077 1.981.232.61.155 1.078.333 1.402.534v-.72c0-.882-.309-1.59-.927-2.123-.618-.534-1.398-.8-2.34-.8-.664 0-1.275.142-1.83.429a3.347 3.347 0 00-1.322 1.195l-1.483-1.114c.464-.712 1.1-1.269 1.912-1.671.811-.402 1.711-.603 2.7-.603 1.606 0 2.87.421 3.789 1.264.919.844 1.378 1.992 1.378 3.447v7.495h-1.877v-1.694h-.092c-.34.573-.85 1.06-1.53 1.462-.68.403-1.444.604-2.294.604zm.185-1.74a3.56 3.56 0 001.854-.511 3.867 3.867 0 001.368-1.37c.34-.572.51-1.199.51-1.88-.371-.247-.827-.448-1.368-.603a6.205 6.205 0 00-1.715-.232c-1.081 0-1.896.225-2.445.673a2.145 2.145 0 00-.822 1.74c0 .65.247 1.177.741 1.579.495.402 1.12.603 1.877.603zm12.127 1.554a3.74 3.74 0 01-1.333-.232 3.046 3.046 0 01-1.031-.627 2.86 2.86 0 01-.695-1.02c-.155-.388-.232-.86-.232-1.416v-6.94h-2.063V7.153h2.063V3.81h1.97v3.342h2.873v1.787h-2.873v6.451c0 .65.123 1.13.37 1.44.294.34.719.51 1.275.51a2.4 2.4 0 001.298-.395v1.926a3.025 3.025 0 01-.707.232c-.24.047-.545.07-.915.07zm8.348.186c-1.158 0-2.201-.279-3.128-.836a5.839 5.839 0 01-2.167-2.274c-.517-.96-.776-2.019-.776-3.18 0-1.16.259-2.22.776-3.179a5.839 5.839 0 012.167-2.274c.927-.557 1.97-.835 3.128-.835 1.159 0 2.202.278 3.129.835a5.839 5.839 0 012.166 2.274c.518.96.777 2.02.777 3.18 0 1.16-.259 2.22-.777 3.179a5.839 5.839 0 01-2.166 2.274c-.927.557-1.97.836-3.129.836zm0-1.787c.726 0 1.402-.182 2.028-.546.626-.363 1.128-.885 1.506-1.566.379-.68.568-1.478.568-2.39 0-.913-.19-1.71-.568-2.39-.378-.681-.88-1.204-1.506-1.567a3.967 3.967 0 00-2.028-.545 4.03 4.03 0 00-2.039.545 4.002 4.002 0 00-1.518 1.566c-.378.681-.568 1.478-.568 2.39 0 .913.19 1.71.568 2.39.379.682.885 1.204 1.518 1.567a4.03 4.03 0 002.04.546zm7.608-10.42h1.877v1.903h.092c.232-.65.68-1.188 1.344-1.613.665-.425 1.36-.638 2.086-.638.54 0 1.004.077 1.39.232V9.17a3.675 3.675 0 00-1.668-.371c-.572 0-1.097.162-1.576.487a3.506 3.506 0 00-1.147 1.311 3.79 3.79 0 00-.429 1.775v6.614h-1.97V7.152zm12.288 11.093l-4.89-11.093h2.132l3.708 8.795h.046l3.569-8.795H133L125.7 24h-2.039l2.642-5.755z"></path>
    </svg>
  );
});

export default Icon;
