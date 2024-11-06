import { BuilderComponentPlugin, IChunkBuilder, ICodeChunk, ICodeStruct, FileType } from '../types';

import { COMMON_SUB_MODULE_NAME } from '../const/generator';
import { FILE_TYPE_FAMILY } from '../const/file';

interface ChunkGroupInfo {
  chunk: ICodeChunk;
  familyIdx?: number;
}

function whichFamily(type: FileType): [number, FileType[]] | undefined {
  const idx = FILE_TYPE_FAMILY.findIndex((family) => family.indexOf(type) >= 0);
  if (idx < 0) {
    return undefined;
  }
  return [idx, FILE_TYPE_FAMILY[idx]];
}

// 将代码片段按 fileType 和 subModule 进行分组
export const groupChunks = (chunks: ICodeChunk[]): ICodeChunk[][] => {
  // console.log(`groupChunks-befor==== ${JSON.stringify(chunks, null, 2)}`);
  // [
  //   {
  //     "type": "json",
  //     "fileType": "json",
  //     "name": "CommonFileMainContent",
  //     "content": {
  //       "name": "icejs-demo-app",
  //       "version": "0.1.5",
  //       "description": "轻量级模板，使用 JavaScript，仅包含基础的 Layout。",
  //       "dependencies": {
  //         "moment": "^2.24.0",
  //         "react": "^16.4.1",
  //         "react-dom": "^16.4.1",
  //         "react-router": "^5.2.1",
  //         "@alifd/theme-design-pro": "^0.x",
  //         "intl-messageformat": "^9.3.6",
  //         "@ice/store": "^1.4.3",
  //         "@loadable/component": "^5.15.2",
  //         "@alilc/lowcode-datasource-engine": "^1.0.0",
  //         "@alilc/lowcode-datasource-url-params-handler": "^1.0.0",
  //         "@alilc/lowcode-datasource-fetch-handler": "^1.0.0",
  //         "@alifd/next": "1.19.18"
  //       },
  //       "devDependencies": {
  //         "@ice/spec": "^1.0.0",
  //         "build-plugin-fusion": "^0.1.0",
  //         "build-plugin-moment-locales": "^0.1.0",
  //         "eslint": "^6.0.1",
  //         "ice.js": "^1.0.0",
  //         "stylelint": "^13.2.0"
  //       },
  //       "scripts": {
  //         "start": "icejs start",
  //         "build": "icejs build",
  //         "lint": "npm run eslint && npm run stylelint",
  //         "eslint": "eslint --cache --ext .js,.jsx ./",
  //         "stylelint": "stylelint ./**/*.scss"
  //       },
  //       "ideMode": {
  //         "name": "ice-react"
  //       },
  //       "iceworks": {
  //         "type": "react",
  //         "adapter": "adapter-react-v3"
  //       },
  //       "engines": {
  //         "node": ">=8.0.0"
  //       },
  //       "repository": {
  //         "type": "git",
  //         "url": "http://gitlab.xxx.com/msd/leak-scan/tree/master"
  //       },
  //       "private": true,
  //       "originTemplate": "@alifd/scaffold-lite-js"
  //     },
  //     "linkAfter": []
  //   }
  // ]

  const tmp: Record<string, Record<number, number>> = {};
  const col = chunks.reduce((chunksSet: Record<string, ChunkGroupInfo[]>, chunk) => {
    const fileKey = chunk.subModule || COMMON_SUB_MODULE_NAME;
    // fileKey==== "index"
    if (!chunksSet[fileKey]) {
      // eslint-disable-next-line no-param-reassign
      chunksSet[fileKey] = [];
    }
    const res = whichFamily(chunk.fileType as FileType);
    // res： [0,[ "tsx","ts","jsx","js"]]
    const info: ChunkGroupInfo = {
      chunk,
    };
    if (res) {
      const [familyIdx, family] = res;
      // familyIdx === 0
      // family === [ "tsx","ts","jsx","js"]
      // fileKey==== "index"
      // chunk.fileType === "jsx"
      const rank = family.indexOf(chunk.fileType as FileType);
      // rank==== 2
      // console.log(`rank==== ${JSON.stringify(rank, null, 2)}`);
      if (tmp[fileKey]) {
        if (tmp[fileKey][familyIdx] !== undefined) {
          if (tmp[fileKey][familyIdx] > rank) {
            tmp[fileKey][familyIdx] = rank;
          }
        } else {
          tmp[fileKey][familyIdx] = rank;
        }
      } else {
        tmp[fileKey] = {};
        tmp[fileKey][familyIdx] = rank;
      }
      // console.log(`tmp==== ${JSON.stringify(tmp, null, 2)}`);
       // tmp==== { "index": {
      //   "0": 2
      // }
      info.familyIdx = familyIdx;
      //  console.log(`info==== ${JSON.stringify(info, null, 2)}`);
    }
    chunksSet[fileKey].push(info);
    return chunksSet;
  }, {});
  // console.log(`col==== ${JSON.stringify(col, null, 2)}`);


  const result: ICodeChunk[][] = [];
  Object.keys(col).forEach((key) => {
    const byType: Record<string, ICodeChunk[]> = {};
    col[key].forEach((info) => {
      let t: string = info.chunk.fileType;
      if (info.familyIdx !== undefined) {
        t = FILE_TYPE_FAMILY[info.familyIdx][tmp[key][info.familyIdx]];
        // eslint-disable-next-line no-param-reassign
        info.chunk.fileType = t;
      }
      if (!byType[t]) {
        byType[t] = [];
      }
      byType[t].push(info.chunk);
    });
    result.push(...Object.keys(byType).map((t) => byType[t]));
  });
  // console.log(`result==== ${JSON.stringify(result, null, 2)}`);
  return result;
};

/**
 * 代码片段构建器
 * 通过插件机制处理和组织代码片段，然后对它们进行分类和分组
 * @export
 * @class ChunkBuilder
 * @template T
 */
export class ChunkBuilder implements IChunkBuilder {
  private plugins: BuilderComponentPlugin[];

  constructor(plugins: BuilderComponentPlugin[] = []) {
    this.plugins = plugins;
  }

  async run(
    ir: unknown,
    initialStructure: ICodeStruct = {
      ir,
      chunks: [],
      depNames: [],
      contextData: {},
    },
  ) {
    const structure = initialStructure;
    // console.log(`structure ${JSON.stringify(structure, null, 2)}`);
    const finalStructure: ICodeStruct = await this.plugins.reduce(
      async (previousPluginOperation: Promise<ICodeStruct>, plugin) => {
        const modifiedStructure = await previousPluginOperation;
        // console.log(plugin.toString());
        return plugin(modifiedStructure);
      },
      Promise.resolve(structure),
    );
    // console.log(`finalStructure ${JSON.stringify(finalStructure, null, 2)}`);
    const chunks = groupChunks(finalStructure.chunks);
    // console.log(`groupChunks ==== ${JSON.stringify(chunks, null, 2)}`);
    return {
      chunks,
    };
  }

  getPlugins() {
  //   this.plugins.forEach((plugin) => {
  //     console.log(plugin.toString());
  // });
    return this.plugins;
  }

  addPlugin(plugin: BuilderComponentPlugin) {
    this.plugins.push(plugin);
  }
}

export default ChunkBuilder;
