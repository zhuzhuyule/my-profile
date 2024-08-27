import * as yup from 'yup';
import { IProfileData } from '../../types';

const newRegex = (forbiddenChars: string) => {
  const escapedChars = forbiddenChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^[^${escapedChars}]*$`);
};
const baseString = (forbiddenChars = '') =>
  yup.string().matches(newRegex(`${forbiddenChars}<>{}&`), '不能包含特殊字符');

const schema = yup.object<IProfileData>().shape({
  name: yup
    .string()
    .min(1, '姓名至少包含1个字符')
    .max(50, '姓名不能超过50个字符')
    .matches(/^[\p{L}\p{N}\s]+$/u, '不能包含特殊符号')
    .required('姓名为必填项'),
  slogan: baseString().max(100, '口号不能超过100个字符'),
  person: yup.object().shape({
    title: baseString('$#%&^*\\:;')
      .min(2, '标题至少包含2个字符')
      .max(50, '标题不能超过50个字符')
      .required('标题为必填项'),
    detail: baseString().max(5000, '介绍不能超过5000个字符'),
  }),
  contact: yup.object().shape({
    title: baseString('$#%&^*\\:;')
      .min(2, '标题至少包含2个字符')
      .max(50, '标题不能超过50个字符')
      .required('标题为必填项'),
    email: yup.string().email('请输入有效的邮箱地址，如：example@example.com').required('邮箱为必填项'),
    phone: yup
      .string()
      .matches(/^\+?\d{6,15}$/, '电话号码必须是6到15位数字,如：88883333、+8613800138000')
      .required('电话号码为必填项'),
    address: baseString().max(100, '地址不能超过100个字符'),
  }),
});

export default schema;
