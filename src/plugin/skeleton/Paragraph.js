const skeletonParagraphProps = {
    width: {
        validator(value) {
            return ['string', 'number'].indexOf(typeof value) !== -1;
        }
    },
    rows: {
        type: Number
    }
};

const Paragraph = {
    props: skeletonParagraphProps,
    methods: {
        getWidth(index) {
            const { width, rows = 2 } = this;
            if (Array.isArray(width)) {
                return width[index];
            }
            // last paragraph
            if (rows - 1 === index) {
                return width;
            }
            return undefined;
        }
    },
    render() {
        const { rows } = this.$props;
        const rowList = [...Array(rows)].map((_, index) => {
            const width = this.getWidth(index);
            return <li key={index} style={{ width: typeof width === 'number' ? `${width}px` : width }} />;
        });
        return <ul class='dz-skeleton-paragraph'>{rowList}</ul>;
    }
};

export default Paragraph;
