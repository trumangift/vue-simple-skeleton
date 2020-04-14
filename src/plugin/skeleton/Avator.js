import className from 'classnames';
const skeletonAvatarProps = {
    size: {
        default: 'large',
        validator(value) {
            return ['large', 'small', 'default'].indexOf(value) !== -1 || typeof value === 'number';
        }
    },
    shape: {
        default: 'circle',
        validator(value) {
            return ['circle', 'square'].indexOf(value) !== -1;
        }
    }
};

const Avatar = {
    props: skeletonAvatarProps,
    render() {
        const { size, shape } = this.$props;
        const sizeCls = className({
            [`dz-skeleton-avator-lg`]: size === 'large',
            [`dz-skeleton-avator-sm`]: size === 'small'
        });
        const shapeCls = className({
            [`dz-skeleton-avator-circle`]: shape === 'circle',
            [`dz-skeleton-avator-square`]: shape === 'square'
        });
        const sizeStyle =
            typeof size === 'number'
                ? {
                    width: `${size}px`,
                    height: `${size}px`,
                    lineHeight: `${size}px`
                }
                : {};

        return <span class={className('dz-skeleton-avator', sizeCls, shapeCls)} style={sizeStyle} />;
    }
};

export default Avatar;
