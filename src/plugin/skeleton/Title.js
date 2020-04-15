const skeletonTitleProps = {
    width: {
        validator(value) {
          return ['[object Number]', '[object String]'].indexOf(Object.prototype.toString.call(value)) !== -1;
        }
    },
    rows: {
        type: Number,
        default: 1
    }
};
const Title = {
    props: skeletonTitleProps,
    render() {
        const { width, rows } = this.$props;
        const zWidth = typeof width === 'number' ? `${width}px` : width;
        return rows === 1 ? <h3 class='dz-skeleton-title' style={{ width: zWidth }} /> : <div class='dz-skeleton-title-row'>
            <h3 class='dz-skeleton-title' style={{ width: zWidth }}/>
            <div class='dz-skeleton-others'></div>
        </div>;
    }
};

export default Title;
