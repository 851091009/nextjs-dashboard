import {Inter, Lusitana} from 'next/font/google';

export const inter = Inter({subsets: ['latin']});


export const lusitana = Lusitana({
    weight: '400', // 指定字体权重，可以根据实际支持的权重调整
    subsets: ['latin'], // 指定字符集
    variable: '--font-lusitana', // 可选变量名称
});
