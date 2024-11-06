import { COMMON_CHUNK_NAME } from '../../../const/generator';
// ExternalDepsImport: 'CommonExternalDependencyImport',
// InternalDepsImport: 'CommonInternalDependencyImport',
// ImportAliasDefine: 'CommonImportAliasDefine',
// FileVarDefine: 'CommonFileScopeVarDefine',
// FileUtilDefine: 'CommonFileScopeMethodDefine',
// FileMainContent: 'CommonFileMainContent',
// FileExport: 'CommonFileExport',
// StyleDepsImport: 'CommonStyleDepsImport',
// StyleCssContent: 'CommonStyleCssContent',
// HtmlContent: 'CommonHtmlContent',
// CustomContent: 'CommonCustomContent',

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../types';


// 这个工厂函数被设计为生成一个特定的构建组件插件 plugin，该插件在构建过程中向代码结构中添加一个新的代码块
const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  // pre，代表构建前的代码结构
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    // 创建了一个新的 ICodeStruct 对象 next，
    // 它是 pre 的一个浅拷贝，以确保不会直接修改原始代码结构。
    const next: ICodeStruct = {
      ...pre,
    };

    // 修改代码结构
    // 向 next.chunks 数组中添加了一个新的代码块
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.JSX,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,// 用于导入外部依赖的代码块
      content: `
// 注意: 出码引擎注入的临时变量默认都以 "__$$" 开头，禁止在搭建的代码中直接访问。
// 例外：react 框架的导出名和各种组件名除外。
import React from \'react\';`, // content包含实际的代码内容
      linkAfter: [], // 一个空数组，可能用于指定这个代码块应该链接（或插入）在哪些代码块之后。
    });
    // console.log(`next==== ${JSON.stringify(next, null, 2)}`);
    return next;
  };
  return plugin;
};

export default pluginFactory;
