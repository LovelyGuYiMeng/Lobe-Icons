import Avatar from './components/Avatar';
import Color from './components/Color';
import Combine from './components/Combine';
import Mono from './components/Mono';
import Text from './components/Text';
import { COLOR_PRIMARY } from './style';

type CompoundedComponent = typeof Mono & {
  Avatar: typeof Avatar;
  Color: typeof Color;
  Combine: typeof Combine;
  Mono: typeof Mono;
  Text: typeof Text;
  colorPrimary: string;
};

const Icons = Mono as CompoundedComponent;
Icons.Color = Color;
Icons.Text = Text;
Icons.Combine = Combine;
Icons.Avatar = Avatar;
Icons.colorPrimary = COLOR_PRIMARY;

export default Icons;