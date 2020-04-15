import className from 'classnames';
import { hasProps } from '../../util/props_utils';
import Avatar from './Avator';
import Paragraph from './Paragraph';
import Title from './Title';

export const SkeletonProps = {
    active: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    title: {
        type: Boolean,
        default: true
    },
    titleRows: {
        type: Number,
        default: 1
    },
    avatar: {
        type: Boolean,
        default: false
    },
    paragraph: {
        type: Object,
        default() {
            return { rows: 4, width: '50%' };
        }
    },
    titleWidth: {
        default: '50%',
        validator(value) {
            return ['[object Number]', '[object String]'].indexOf(Object.prototype.toString.call(value)) !== -1;
        }
    },
    wrapperClass: {
        type: String,
        default: ''
    }
};

const Skeleton = {
    name: 'DZ_Skeleton',
    props: SkeletonProps,
    render() {
        const { active, loading, avatar, paragraph, title, titleRows, titleWidth } = this.$props;
        if (loading || !hasProps(this, 'loading')) {
            const hasAvatar = !!avatar || avatar === '';
            const hasParagraph = !!paragraph;
            const hasTitle = !!title;
            let avatorNode;
            if (hasAvatar) {
                avatorNode = (<div class='dz-skeleton-header'>
                    <Avatar/>
                </div>);
            }
            let contentNode;
            if (hasTitle || hasParagraph) {
                if (typeof paragraph === 'object') {
                    const rows = paragraph.rows;
                    const width = paragraph.width;
                    let titleNode = hasTitle ? <Title width={titleWidth} rows={titleRows}/> : null;
                    contentNode = (
                        <div class='dz-skeleton-content'>
                            {titleNode}
                            <Paragraph width={width} rows={rows} >
                            </Paragraph>
                        </div>);
                }
            }
            const cls = className('dz-skeleton', this.wrapperClass, {
                [`dz-skeleton-with-avatar`]: hasAvatar,
                [`dz-skeleton-active`]: active
            });
            return (
                <div class={cls}>
                    {avatorNode}
                    {contentNode}
                </div>
            );
        }
        const wrapperNode = this.$slots.default && this.$slots.default.length > 1 ? <div>
          {this.$slots.default }
        </div> : this.$slots.default && this.$slots.default[0];
        return wrapperNode;
    }
};
export default Skeleton;
