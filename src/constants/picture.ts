// 定义一个类型，包含所有可能的键和值
type PicReviewStatus = '待审核' | '通过' | '拒绝';

// 定义一个接口，包含 label 和 value 属性
interface PicReviewOption {
  label: PicReviewStatus;
  value: number;
}

// 定义状态映射，使用接口类型
const PIC_REVIEW_STATUS_MAP: Record<number, PicReviewStatus> = {
  0: '待审核',
  1: '通过',
  2: '拒绝',
};

/**
 * 图片审核下拉表单选项
 */
const PIC_REVIEW_STATUS_OPTIONS: PicReviewOption[] = Object.keys(PIC_REVIEW_STATUS_MAP).map((key) => {
  return {
    label: PIC_REVIEW_STATUS_MAP[Number(key)],
    value: Number(key),
  };
});

export { PIC_REVIEW_STATUS_MAP, PIC_REVIEW_STATUS_OPTIONS };

export const PIC_REVIEW_STATUS_ENUM = {
  REVIEWING: 0,
  PASS: 1,
  REJECT: 2,
}



