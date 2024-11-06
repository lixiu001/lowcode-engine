import {
  ChunkContent,
  ChunkType,
  CodeGeneratorError,
  CodeGeneratorFunction,
  ICodeBuilder,
  ICodeChunk,
} from '../types';

export class CodeBuilder implements ICodeBuilder {
  private chunkDefinitions: ICodeChunk[] = [];

  // 索引签名，表示对象可以有任意数量的字符串键，每个键都映射到一个CodeGeneratorFunction<ChunkContent>类型的值
  private generators: { [key: string]: CodeGeneratorFunction<ChunkContent> } = {
    [ChunkType.STRING]: (str: string) => str, // no-op for string chunks
    [ChunkType.JSON]: (json: Record<string, unknown>) => JSON.stringify(json), // stringify json to string
  };

  constructor(chunkDefinitions: ICodeChunk[] = []) {
    this.chunkDefinitions = chunkDefinitions;
  }

  /**
   * Links all chunks together based on their requirements. Returns an array
   * of ordered chunk names which need to be compiled and glued together.
   */
  /**
 * 将代码块链接并生成字符串
 *
 * @param chunkDefinitions 代码块定义数组，默认为空数组
 * @returns 返回生成的字符串
 * @throws 如果代码块之间存在循环依赖，则抛出 CodeGeneratorError 异常
 */
  link(chunkDefinitions: ICodeChunk[] = []): string {
    const chunks = chunkDefinitions || this.chunkDefinitions;
    if (chunks.length <= 0) {
      return '';
    }

    const unprocessedChunks = chunks.map((chunk) => {
      return {
        name: chunk.name,
        type: chunk.type,
        content: chunk.content,
        // 过滤出其他chunks name =  linkAfter的值的linkAfter
        linkAfter: this.cleanupInvalidChunks(chunk.linkAfter, chunks),
      };
    });
    //  console.log(`unprocessedChunks ${JSON.stringify(unprocessedChunks, null, 2)}`);

    const resultingString: string[] = [];

    while (unprocessedChunks.length > 0) {
      let indexToRemove = 0;
      // 寻找数组中第一个其linkAfter属性长度为0的元素
      for (let index = 0; index < unprocessedChunks.length; index++) {
        if (unprocessedChunks[index].linkAfter.length <= 0) {
          indexToRemove = index;
          break;
        }
      }
      // console.log(`indexToRemove ${JSON.stringify(indexToRemove, null, 2)}`);
      // 1 1 21 21 21 1 1 1 1 1 11 17 18 23 1 9 13 15 2 8 8 11 11 2 7 7 7 2 0 5 1 1 3 1 0 0 0 0
      if (unprocessedChunks[indexToRemove].linkAfter.length > 0) {
        throw new CodeGeneratorError(
          'Operation aborted. Reason: cyclic dependency between chunks.',
        );
      }

      const { type, content, name } = unprocessedChunks[indexToRemove];
      const compiledContent = this.generateByType(type, content);
      // console.log(`compiledContent ${JSON.stringify(compiledContent, null, 2)}`);
      if (compiledContent) {
        resultingString.push(`${compiledContent}\n`);
        //  console.log(`resultingString ${JSON.stringify(resultingString, null, 2)}`);
      }

      unprocessedChunks.splice(indexToRemove, 1);
      // 检查unprocessedChunks数组中是否 不存在 任何其name属性等于删除chunk的name值的元素
      if (!unprocessedChunks.some((ch) => ch.name === name)) {
        unprocessedChunks.forEach(
          // remove the processed chunk from all the linkAfter arrays from the remaining chunks
          (ch) => {
            // eslint-disable-next-line no-param-reassign
            // 如果chunks中不存在相同name的chunk，将所有linkAfter的name值过滤掉
            ch.linkAfter = ch.linkAfter.filter((after) => after !== name);
          },
        );
      }
    }
    return resultingString.join('\n');
  }

  /**
   * 根据类型生成字符串
   *
   * @param type 类型名称
   * @param content 生成字符串所需的内容
   * @returns 根据给定类型和内容生成的字符串
   * @throws 如果尝试生成未知类型或生成器未注册，则抛出错误
   */
  generateByType(type: string, content: unknown): string {
    if (!content) {
      return '';
    }
    if (Array.isArray(content)) {
      return content.map((contentItem) => this.generateByType(type, contentItem)).join('\n');
    }

    if (!this.generators[type]) {
      throw new Error(
        `Attempted to generate unknown type ${type}. Please register a generator for this type in builder/index.ts`,
      );
    }

    return this.generators[type](content);
  }

  // remove invalid chunks (which did not end up being created) from the linkAfter fields
  // one use-case is when you want to remove the import plugin
  /**
 * 清理无效的代码块
 * @param linkAfter 待清理的链接名称数组
 * @param chunks 原始代码块数组
 * @returns 清理后的链接名称数组
 */
  private cleanupInvalidChunks(linkAfter: string[], chunks: ICodeChunk[]) {
    return linkAfter.filter((chunkName) => chunks.some((chunk) => chunk.name === chunkName));
  }
}

export default CodeBuilder;
