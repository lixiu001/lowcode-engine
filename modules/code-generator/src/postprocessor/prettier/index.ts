// 格式化不同类型的代码文件

// 代码格式化工具，支持多种语言和文件类型
import prettier from 'prettier';
// prettier 的解析器插件，分别用于解析 Babel JavaScript、PostCSS CSS 和 HTML。
import parserBabel from 'prettier/parser-babel';
import parserPostCss from 'prettier/parser-postcss';
import parserHtml from 'prettier/parser-html';

import { PostProcessor, PostProcessorFactory } from '../../types';

// 定义支持的解析器类型
const PARSERS = ['css', 'scss', 'less', 'json', 'html', 'vue'];

// 定义处理器配置接口
export interface ProcessorConfig {
  customFileTypeParser: Record<string, string>;
  plugins?: prettier.Plugin[];
}

const factory: PostProcessorFactory<ProcessorConfig> = (config?: ProcessorConfig) => {
  const cfg: ProcessorConfig = {
    customFileTypeParser: {},
    ...config,
  };

  // content（要格式化的代码字符串）和 fileType（文件类型）。
  const codePrettier: PostProcessor = (content: string, fileType: string) => {
    let parser: prettier.BuiltInParserName | any;
    // 根据 fileType，选择适当的 prettier 解析器
    if (fileType === 'js' || fileType === 'jsx' || fileType === 'ts' || fileType === 'tsx') {
      parser = 'babel-ts';
    } else if (fileType === 'json') {
      parser = 'json-stringify';
    } else if (PARSERS.indexOf(fileType) >= 0) {
      parser = fileType;
    } else if (cfg.customFileTypeParser[fileType]) {
      // 如果在 cfg.customFileTypeParser 中有对应的自定义解析器配置，则使用该配置
      parser = cfg.customFileTypeParser[fileType];
    } else {
      // 如果以上条件都不满足，直接返回原始内容，不进行格式化
      return content;
    }

    return prettier.format(content, {
      parser,
      plugins: [parserBabel, parserPostCss, parserHtml, ...(cfg.plugins || [])],// 包括默认插件和可选的自定义插件
      singleQuote: true,
      jsxSingleQuote: false,
    });
  };

  return codePrettier;
};

export default factory;
