import { CSSProperties, forwardRef, useMemo } from 'react';

import DefaultAvatar from './DefaultAvatar';
import DefaultIcon from './DefaultIcon';
import { modelMappings } from './const';

export interface ModelIconProps {
  className?: string;
  model?: string;
  size?: number;
  style?: CSSProperties;
  type?: 'avatar' | 'mono' | 'color' | 'combine' | 'combine-color';
}

const ModelIcon = forwardRef<any, ModelIconProps>(
  ({ model: originModel, size = 12, type = 'avatar', ...rest }, ref) => {
    const Render = useMemo(() => {
      if (!originModel) return;
      const model = originModel.toLowerCase();
      for (const item of modelMappings) {
        if (item.keywords.some((keyword) => new RegExp(keyword, 'i').test(model))) {
          return item;
        }
      }
    }, [originModel]);

    switch (type) {
      case 'avatar': {
        if (!Render?.Icon) return <DefaultAvatar ref={ref} size={size} {...rest} />;
        return <Render.Icon.Avatar ref={ref} size={size} {...(Render?.props || {})} {...rest} />;
      }
      case 'mono': {
        if (!Render?.Icon) return <DefaultIcon ref={ref} size={size} {...rest} />;
        return <Render.Icon ref={ref} size={size} {...(Render?.props || {})} {...rest} />;
      }
      case 'color': {
        if (!Render?.Icon) return <DefaultIcon ref={ref} size={size} {...rest} />;
        return Render.Icon?.Color ? (
          <Render.Icon.Color ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : (
          <Render.Icon ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        );
      }
      case 'combine': {
        if (!Render?.Icon) return <DefaultIcon ref={ref} size={size} {...rest} />;
        return Render.Icon?.Combine ? (
          <Render.Icon.Combine ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : Render.Icon?.Brand ? (
          <Render.Icon.Brand ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : Render.Icon?.Text ? (
          <Render.Icon.Text ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : (
          <Render.Icon ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        );
      }
      case 'combine-color': {
        if (!Render?.Icon) return <DefaultIcon ref={ref} size={size} {...rest} />;
        return Render.Icon?.Combine ? (
          <Render.Icon.Combine
            ref={ref}
            size={size}
            type={'color'}
            {...(Render?.props || {})}
            {...rest}
          />
        ) : Render.Icon?.BrandColor ? (
          <Render.Icon.BrandColor
            ref={ref}
            size={size}
            type={'color'}
            {...(Render?.props || {})}
            {...rest}
          />
        ) : Render.Icon?.Text ? (
          <Render.Icon.Text ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : (
          <Render.Icon ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        );
      }
      default: {
        return <DefaultIcon ref={ref} size={size} {...rest} />;
      }
    }
  },
);

export default ModelIcon;