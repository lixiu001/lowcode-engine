//  ProjectBuilder
{
  // 1.1. 源schema ====
  {
    "version": "1.0.0",
      "componentsMap": [
        {
          "componentName": "Button",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Button"
        },
        {
          "componentName": "Button.Group",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Button",
          "subName": "Group"
        },
        {
          "componentName": "Input",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Input"
        },
        {
          "componentName": "Form",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Form"
        },
        {
          "componentName": "Form.Item",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Form",
          "subName": "Item"
        },
        {
          "componentName": "NumberPicker",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "NumberPicker"
        },
        {
          "componentName": "Select",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Select"
        }
      ],
        "componentsTree": [
          {
            "componentName": "Page",
            "id": "node$1",
            "meta": {
              "title": "测试",
              "router": "/"
            },
            "props": {
              "ref": "outerView",
              "autoLoading": true
            },
            "fileName": "test",
            "state": {
              "text": "outer"
            },
            "lifeCycles": {
              "componentDidMount": {
                "type": "JSFunction",
                "value": "function componentDidMount() { console.log('componentDidMount'); }"
              }
            },
            "dataSource": {
              "list": [
                {
                  "id": "urlParams",
                  "type": "urlParams"
                },
                {
                  "id": "user",
                  "type": "fetch",
                  "options": {
                    "method": "GET",
                    "uri": "https://shs.xxx.com/mock/1458/demo/user",
                    "isSync": true
                  },
                  "dataHandler": {
                    "type": "JSFunction",
                    "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
                  }
                },
                {
                  "id": "orders",
                  "type": "fetch",
                  "options": {
                    "method": "GET",
                    "uri": "https://shs.xxx.com/mock/1458/demo/orders",
                    "isSync": true
                  },
                  "dataHandler": {
                    "type": "JSFunction",
                    "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
                  }
                }
              ],
              "dataHandler": {
                "type": "JSFunction",
                "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
              }
            },
            "children": [
              {
                "componentName": "Form",
                "id": "node$2",
                "props": {
                  "labelCol": {
                    "type": "JSExpression",
                    "value": "this.state.colNum"
                  },
                  "style": {},
                  "ref": "testForm"
                },
                "children": [
                  {
                    "componentName": "Form.Item",
                    "id": "node$3",
                    "props": {
                      "label": "姓名：",
                      "name": "name",
                      "initValue": "李雷"
                    },
                    "children": [
                      {
                        "componentName": "Input",
                        "id": "node$4",
                        "props": {
                          "placeholder": "请输入",
                          "size": "medium",
                          "style": {
                            "width": 320
                          }
                        }
                      }
                    ]
                  },
                  {
                    "componentName": "Form.Item",
                    "id": "node$5",
                    "props": {
                      "label": "年龄：",
                      "name": "age",
                      "initValue": "22"
                    },
                    "children": [
                      {
                        "componentName": "NumberPicker",
                        "id": "node$6",
                        "props": {
                          "size": "medium",
                          "type": "normal"
                        }
                      }
                    ]
                  },
                  {
                    "componentName": "Form.Item",
                    "id": "node$7",
                    "props": {
                      "label": "职业：",
                      "name": "profession"
                    },
                    "children": [
                      {
                        "componentName": "Select",
                        "id": "node$8",
                        "props": {
                          "dataSource": [
                            {
                              "label": "教师",
                              "value": "t"
                            },
                            {
                              "label": "医生",
                              "value": "d"
                            },
                            {
                              "label": "歌手",
                              "value": "s"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "componentName": "Div",
                    "id": "node$9",
                    "props": {
                      "style": {
                        "textAlign": "center"
                      }
                    },
                    "children": [
                      {
                        "componentName": "Button.Group",
                        "id": "node$a",
                        "props": {},
                        "children": [
                          {
                            "componentName": "Button",
                            "id": "node$b",
                            "condition": {
                              "type": "JSExpression",
                              "value": "this.index >= 1"
                            },
                            "loop": [
                              "a",
                              "b",
                              "c"
                            ],
                            "props": {
                              "type": "primary",
                              "style": {
                                "margin": "0 5px 0 5px"
                              }
                            },
                            "children": [
                              {
                                "type": "JSExpression",
                                "value": "this.item"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
          "constants": {
      "ENV": "prod",
        "DOMAIN": "xxx.xxx.com"
    },
    "css": "body {font-size: 12px;} .table { width: 100px;}",
      "config": {
      "sdkVersion": "1.0.3",
        "historyMode": "hash",
          "targetRootID": "J_Container",
            "layout": {
        "componentName": "BasicLayout",
          "props": {
          "logo": "...",
            "name": "测试网站"
        }
      },
      "theme": {
        "package": "@alife/theme-fusion",
          "version": "^0.1.0",
            "primary": "#ff9966"
      }
    },
    "meta": {
      "name": "demo应用",
        "git_group": "appGroup",
          "project_name": "app_demo",
            "description": "这是一个测试应用",
              "spma": "spa23d",
                "creator": "Test"
    }
  }
  // 1.2. 解析parseResult ====
  {
    "containers": [
      {
        "componentName": "Page",
        "id": "node$1",
        "meta": {
          "title": "测试",
          "router": "/"
        },
        "props": {
          "ref": "outerView",
          "autoLoading": true
        },
        "fileName": "test",
        "state": {
          "text": "outer"
        },
        "lifeCycles": {
          "componentDidMount": {
            "type": "JSFunction",
            "value": "function componentDidMount() { console.log('componentDidMount'); }"
          }
        },
        "dataSource": {
          "list": [
            {
              "id": "urlParams",
              "type": "urlParams"
            },
            {
              "id": "user",
              "type": "fetch",
              "options": {
                "method": "GET",
                "uri": "https://shs.xxx.com/mock/1458/demo/user",
                "isSync": true
              },
              "dataHandler": {
                "type": "JSFunction",
                "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
              }
            },
            {
              "id": "orders",
              "type": "fetch",
              "options": {
                "method": "GET",
                "uri": "https://shs.xxx.com/mock/1458/demo/orders",
                "isSync": true
              },
              "dataHandler": {
                "type": "JSFunction",
                "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
              }
            }
          ],
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
          }
        },
        "children": [
          {
            "componentName": "Form",
            "id": "node$2",
            "props": {
              "labelCol": {
                "type": "JSExpression",
                "value": "this.state.colNum"
              },
              "style": {},
              "ref": "testForm"
            },
            "children": [
              {
                "componentName": "Form.Item",
                "id": "node$3",
                "props": {
                  "label": "姓名：",
                  "name": "name",
                  "initValue": "李雷"
                },
                "children": [
                  {
                    "componentName": "Input",
                    "id": "node$4",
                    "props": {
                      "placeholder": "请输入",
                      "size": "medium",
                      "style": {
                        "width": 320
                      }
                    }
                  }
                ]
              },
              {
                "componentName": "Form.Item",
                "id": "node$5",
                "props": {
                  "label": "年龄：",
                  "name": "age",
                  "initValue": "22"
                },
                "children": [
                  {
                    "componentName": "NumberPicker",
                    "id": "node$6",
                    "props": {
                      "size": "medium",
                      "type": "normal"
                    }
                  }
                ]
              },
              {
                "componentName": "Form.Item",
                "id": "node$7",
                "props": {
                  "label": "职业：",
                  "name": "profession"
                },
                "children": [
                  {
                    "componentName": "Select",
                    "id": "node$8",
                    "props": {
                      "dataSource": [
                        {
                          "label": "教师",
                          "value": "t"
                        },
                        {
                          "label": "医生",
                          "value": "d"
                        },
                        {
                          "label": "歌手",
                          "value": "s"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "componentName": "Div",
                "id": "node$9",
                "props": {
                  "style": {
                    "textAlign": "center"
                  }
                },
                "children": [
                  {
                    "componentName": "Button.Group",
                    "id": "node$a",
                    "props": {},
                    "children": [
                      {
                        "componentName": "Button",
                        "id": "node$b",
                        "condition": {
                          "type": "JSExpression",
                          "value": "this.index >= 1"
                        },
                        "loop": [
                          "a",
                          "b",
                          "c"
                        ],
                        "props": {
                          "type": "primary",
                          "style": {
                            "margin": "0 5px 0 5px"
                          }
                        },
                        "children": [
                          {
                            "type": "JSExpression",
                            "value": "this.item"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "containerType": "Page",
        "moduleName": "Test",
        "analyzeResult": {
          "isUsingRef": true
        },
        "deps": [
          {
            "componentName": "Form",
            "package": "@alifd/next",
            "version": "1.19.18",
            "destructuring": true,
            "exportName": "Form",
            "dependencyType": "External"
          },
          {
            "componentName": "Form.Item",
            "package": "@alifd/next",
            "version": "1.19.18",
            "destructuring": true,
            "exportName": "Form",
            "subName": "Item",
            "dependencyType": "External"
          },
          {
            "componentName": "Input",
            "package": "@alifd/next",
            "version": "1.19.18",
            "destructuring": true,
            "exportName": "Input",
            "dependencyType": "External"
          },
          {
            "componentName": "NumberPicker",
            "package": "@alifd/next",
            "version": "1.19.18",
            "destructuring": true,
            "exportName": "NumberPicker",
            "dependencyType": "External"
          },
          {
            "componentName": "Select",
            "package": "@alifd/next",
            "version": "1.19.18",
            "destructuring": true,
            "exportName": "Select",
            "dependencyType": "External"
          },
          {
            "componentName": "Button.Group",
            "package": "@alifd/next",
            "version": "1.19.18",
            "destructuring": true,
            "exportName": "Button",
            "subName": "Group",
            "dependencyType": "External"
          },
          {
            "componentName": "Button",
            "package": "@alifd/next",
            "version": "1.19.18",
            "destructuring": true,
            "exportName": "Button",
            "dependencyType": "External"
          }
        ]
      }
    ],
      "globalUtils": {
      "utils": [],
        "deps": []
    },
    "globalRouter": {
      "routes": [
        {
          "path": "/",
          "fileName": "test",
          "componentName": "Test"
        }
      ],
        "deps": [
          {
            "type": "pages",
            "moduleName": "Test",
            "destructuring": false,
            "exportName": "Test",
            "dependencyType": "Internal"
          }
        ]
    },
    "project": {
      "css": "body {font-size: 12px;} .table { width: 100px;}",
        "constants": {
        "ENV": "prod",
          "DOMAIN": "xxx.xxx.com"
      },
      "config": {
        "sdkVersion": "1.0.3",
          "historyMode": "hash",
            "targetRootID": "J_Container",
              "layout": {
          "componentName": "BasicLayout",
            "props": {
            "logo": "...",
              "name": "测试网站"
          }
        },
        "theme": {
          "package": "@alife/theme-fusion",
            "version": "^0.1.0",
              "primary": "#ff9966"
        }
      },
      "meta": {
        "name": "demo应用",
          "git_group": "appGroup",
            "project_name": "app_demo",
              "description": "这是一个测试应用",
                "spma": "spa23d",
                  "creator": "Test"
      },
      "containersDeps": [],
        "utilsDeps": [],
          "packages": [
            {
              "package": "@alifd/next",
              "version": "1.19.18"
            }
          ],
            "dataSourcesTypes": [
              "urlParams",
              "fetch"
            ],
              "projectRemark": {
        "isSingleComponent": false
      }
    }
  }
  // 1.3. 项目文件目录 projectRoot ====(需要自定义项目目录模版)
  {
    "name": ".",
      "dirs": [
        {
          "name": "src",
          "dirs": [
            {
              "name": "layouts",
              "dirs": [
                {
                  "name": "BasicLayout",
                  "dirs": [
                    {
                      "name": "components",
                      "dirs": [
                        {
                          "name": "Footer",
                          "dirs": [],
                          "files": [
                            {
                              "name": "index",
                              "ext": "jsx",
                              "content": "\nimport React from 'react';\nimport styles from './index.module.scss';\n\nexport default function Footer() {\n  return (\n    <p className={styles.footer}>\n      <span className={styles.logo}>Alibaba Fusion</span>\n      <br />\n      <span className={styles.copyright}>© 2019-现在 Alibaba Fusion & ICE</span>\n    </p>\n  );\n}\n    "
                            },
                            {
                              "name": "index",
                              "ext": "module.scss",
                              "content": "\n.footer {\n  line-height: 20px;\n  text-align: center;\n}\n\n.logo {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.copyright {\n  font-size: 12px;\n}\n    "
                            }
                          ]
                        },
                        {
                          "name": "Logo",
                          "dirs": [],
                          "files": [
                            {
                              "name": "index",
                              "ext": "jsx",
                              "content": "\nimport React from 'react';\nimport { Link } from 'ice';\nimport styles from './index.module.scss';\n\nexport default function Logo({ image, text, url }) {\n  return (\n    <div className=\"logo\">\n      <Link to={url || '/'} className={styles.logo}>\n        {image && <img src={image} alt=\"logo\" />}\n        <span>{text}</span>\n      </Link>\n    </div>\n  );\n}\n    "
                            },
                            {
                              "name": "index",
                              "ext": "module.scss",
                              "content": "\n.logo{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: $color-text1-1;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 22px;\n\n  &:visited, &:link {\n    color: $color-text1-1;\n  }\n\n  img {\n    height: 24px;\n    margin-right: 10px;\n  }\n}\n    "
                            }
                          ]
                        },
                        {
                          "name": "PageNav",
                          "dirs": [],
                          "files": [
                            {
                              "name": "index",
                              "ext": "jsx",
                              "content": "\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { Link, withRouter } from 'ice';\nimport { Nav } from '@alifd/next';\nimport { asideMenuConfig } from '../../menuConfig';\n\nconst { SubNav } = Nav;\nconst NavItem = Nav.Item;\n\nfunction getNavMenuItems(menusData) {\n  if (!menusData) {\n    return [];\n  }\n\n  return menusData\n    .filter(item => item.name && !item.hideInMenu)\n    .map((item, index) => getSubMenuOrItem(item, index));\n}\n\nfunction getSubMenuOrItem(item, index) {\n  if (item.children && item.children.some(child => child.name)) {\n    const childrenItems = getNavMenuItems(item.children);\n\n    if (childrenItems && childrenItems.length > 0) {\n      const subNav = (\n        <SubNav key={index} icon={item.icon} label={item.name}>\n          {childrenItems}\n        </SubNav>\n      );\n      return subNav;\n    }\n\n    return null;\n  }\n\n  const navItem = (\n    <NavItem key={item.path} icon={item.icon}>\n      <Link to={item.path}>{item.name}</Link>\n    </NavItem>\n  );\n  return navItem;\n}\n\nconst Navigation = (props, context) => {\n  const { location } = props;\n  const { pathname } = location;\n  const { isCollapse } = context;\n  return (\n    <Nav\n      type=\"primary\"\n      selectedKeys={[pathname]}\n      defaultSelectedKeys={[pathname]}\n      embeddable\n      openMode=\"single\"\n      iconOnly={isCollapse}\n      hasArrow={false}\n      mode={isCollapse ? 'popup' : 'inline'}\n    >\n      {getNavMenuItems(asideMenuConfig)}\n    </Nav>\n  );\n};\n\nNavigation.contextTypes = {\n  isCollapse: PropTypes.bool,\n};\nconst PageNav = withRouter(Navigation);\nexport default PageNav;\n    "
                            }
                          ]
                        }
                      ],
                      "files": []
                    }
                  ],
                  "files": [
                    {
                      "name": "index",
                      "ext": "jsx",
                      "content": "\nimport React, { useState } from 'react';\nimport { Shell, ConfigProvider } from '@alifd/next';\nimport PageNav from './components/PageNav';\nimport Logo from './components/Logo';\nimport Footer from './components/Footer';\n\n(function() {\n  const throttle = function(type, name, obj = window) {\n    let running = false;\n\n    const func = () => {\n      if (running) {\n        return;\n      }\n\n      running = true;\n      requestAnimationFrame(() => {\n        obj.dispatchEvent(new CustomEvent(name));\n        running = false;\n      });\n    };\n\n    obj.addEventListener(type, func);\n  };\n\n  throttle('resize', 'optimizedResize');\n})();\n\nexport default function BasicLayout({ children }) {\n  const getDevice = width => {\n    const isPhone =\n      typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);\n\n    if (width < 680 || isPhone) {\n      return 'phone';\n    }\n    if (width < 1280 && width > 680) {\n      return 'tablet';\n    }\n    return 'desktop';\n  };\n\n  const [device, setDevice] = useState(getDevice(NaN));\n  window.addEventListener('optimizedResize', e => {\n    setDevice(getDevice(e && e.target && e.target.innerWidth));\n  });\n  return (\n    <ConfigProvider device={device}>\n      <Shell\n        type=\"dark\"\n        style={{\n          minHeight: '100vh',\n        }}\n      >\n        <Shell.Branding>\n          <Logo\n            image=\"https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png\"\n            text=\"Logo\"\n          />\n        </Shell.Branding>\n        <Shell.Navigation\n          direction=\"hoz\"\n          style={{\n            marginRight: 10,\n          }}\n        ></Shell.Navigation>\n        <Shell.Action></Shell.Action>\n        <Shell.Navigation>\n          <PageNav />\n        </Shell.Navigation>\n\n        <Shell.Content>{children}</Shell.Content>\n        <Shell.Footer>\n          <Footer />\n        </Shell.Footer>\n      </Shell>\n    </ConfigProvider>\n  );\n}\n    "
                    },
                    {
                      "name": "menuConfig",
                      "ext": "js",
                      "content": "\nconst headerMenuConfig = [];\nconst asideMenuConfig = [\n  {\n    name: 'Dashboard',\n    path: '/',\n    icon: 'smile',\n  },\n];\nexport { headerMenuConfig, asideMenuConfig };\n    "
                    }
                  ]
                }
              ],
              "files": []
            }
          ],
          "files": []
        }
      ],
        "files": [
          {
            "name": "tsconfig",
            "ext": "json",
            "content": "\n{\n  \"compileOnSave\": false,\n  \"buildOnSave\": false,\n  \"compilerOptions\": {\n    \"baseUrl\": \".\",\n    \"outDir\": \"build\",\n    \"module\": \"esnext\",\n    \"target\": \"es6\",\n    \"jsx\": \"react\",\n    \"moduleResolution\": \"node\",\n    \"allowSyntheticDefaultImports\": true,\n    \"lib\": [\"es6\", \"dom\"],\n    \"sourceMap\": true,\n    \"allowJs\": true,\n    \"rootDir\": \"./\",\n    \"forceConsistentCasingInFileNames\": true,\n    \"noImplicitReturns\": true,\n    \"noImplicitThis\": true,\n    \"noImplicitAny\": false,\n    \"importHelpers\": true,\n    \"strictNullChecks\": true,\n    \"suppressImplicitAnyIndexErrors\": true,\n    \"noUnusedLocals\": true,\n    \"skipLibCheck\": true,\n    \"paths\": {\n      \"@/*\": [\"./src/*\"],\n      \"ice\": [\".ice/index.ts\"],\n      \"ice/*\": [\".ice/pages/*\"]\n    }\n  },\n  \"include\": [\"src/*\", \".ice\"],\n  \"exclude\": [\"node_modules\", \"build\", \"public\"]\n}\n    "
          },
          {
            "name": ".stylelintrc",
            "ext": "js",
            "content": "\nconst { stylelint } = require('@ice/spec');\n\nmodule.exports = stylelint;\n    "
          },
          {
            "name": ".stylelintignore",
            "ext": "",
            "content": "\n# 忽略目录\nbuild/\ntests/\ndemo/\n\n# node 覆盖率文件\ncoverage/\n    "
          },
          {
            "name": ".prettierrc",
            "ext": "js",
            "content": "\nconst { prettier } = require('@ice/spec');\n\nmodule.exports = prettier;\n    "
          },
          {
            "name": ".prettierignore",
            "ext": "",
            "content": "\nbuild/\ntests/\ndemo/\n.ice/\ncoverage/\n**/*-min.js\n**/*.min.js\npackage-lock.json\nyarn.lock\n    "
          },
          {
            "name": "jsconfig",
            "ext": "json",
            "content": "\n{\n  \"compilerOptions\": {\n    \"baseUrl\": \".\",\n    \"jsx\": \"react\",\n    \"paths\": {\n      \"@/*\": [\"./src/*\"],\n      \"ice\": [\".ice/index.ts\"],\n      \"ice/*\": [\".ice/pages/*\"]\n    }\n  }\n}\n    "
          },
          {
            "name": ".gitignore",
            "ext": "",
            "content": "\n# See https://help.github.com/ignore-files/ for more about ignoring files.\n\n# dependencies\nnode_modules/\n\n# production\nbuild/\ndist/\ntmp/\nlib/\n\n# misc\n.idea/\n.happypack\n.DS_Store\n*.swp\n*.dia~\n.ice\n\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\nindex.module.scss.d.ts\n    "
          },
          {
            "name": ".eslintrc",
            "ext": "js",
            "content": "\nconst { eslint } = require('@ice/spec');\n\nmodule.exports = eslint;\n    "
          },
          {
            "name": ".eslintignore",
            "ext": "",
            "content": "\n# 忽略目录\nbuild/\ntests/\ndemo/\n.ice/\n\n# node 覆盖率文件\ncoverage/\n\n# 忽略文件\n**/*-min.js\n**/*.min.js\n\npackage-lock.json\nyarn.lock\n    "
          },
          {
            "name": ".editorconfig",
            "ext": "",
            "content": "\n# http://editorconfig.org\nroot = true\n\n[*]\nindent_style = space\nindent_size = 2\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n\n[*.md]\ntrim_trailing_whitespace = false\n    "
          },
          {
            "name": "build",
            "ext": "json",
            "content": "\n{\n  \"entry\": \"src/app.js\",\n  \"plugins\": [\n    [\n      \"build-plugin-fusion\",\n      {\n        \"themePackage\": \"@alifd/theme-design-pro\"\n      }\n    ],\n    [\n      \"build-plugin-moment-locales\",\n      {\n        \"locales\": [\n          \"zh-cn\"\n        ]\n      }\n    ]\n  ]\n}\n      "
          },
          {
            "name": "abc",
            "ext": "json",
            "content": "\n{\n  \"type\": \"ice-app\",\n  \"builder\": \"@ali/builder-ice-app\"\n}\n    "
          },
          {
            "name": "README",
            "ext": "md",
            "content": "\n## Scaffold Lite\n\n> 轻量级模板，使用 JavaScript，仅包含基础的 Layout。\n\n## 使用\n\n```bash\n# 安装依赖\n$ npm install\n\n# 启动服务\n$ npm start  # visit http://localhost:3333\n```\n\n[More docs](https://ice.work/docs/guide/about).\n\n## 目录\n\n```md\n├── build/                         # 构建产物\n├── mock/                          # 本地模拟数据\n│   ├── index.[j,t]s\n├── public/\n│   ├── index.html                 # 应用入口 HTML\n│   └── favicon.png                # Favicon\n├── src/                           # 源码路径\n│   ├── components/                # 自定义业务组件\n│   │   └── Guide/\n│   │       ├── index.[j,t]sx\n│   │       ├── index.module.scss\n│   ├── layouts/                   # 布局组件\n│   │   └── BasicLayout/\n│   │       ├── index.[j,t]sx\n│   │       └── index.module.scss\n│   ├── pages/                     # 页面\n│   │   └── Home/                  # home 页面，约定路由转成小写\n│   │       ├── components/        # 页面级自定义业务组件\n│   │       ├── models.[j,t]sx     # 页面级数据状态\n│   │       ├── index.[j,t]sx      # 页面入口\n│   │       └── index.module.scss  # 页面样式文件\n│   ├── configs/                   # [可选] 配置文件\n│   │   └── menu.[j,t]s            # [可选] 菜单配置\n│   ├── models/                    # [可选] 应用级数据状态\n│   │   └── user.[j,t]s\n│   ├── utils/                     # [可选] 工具库\n│   ├── global.scss                # 全局样式\n│   ├── routes.[j,t]s              # 路由配置\n│   └── app.[j,t]s[x]              # 应用入口脚本\n├── build.json                     # 工程配置\n├── README.md\n├── package.json\n├── .editorconfig\n├── .eslintignore\n├── .eslintrc.[j,t]s\n├── .gitignore\n├── .stylelintignore\n├── .stylelintrc.[j,t]s\n├── .gitignore\n└── [j,t]sconfig.json\n```\n    "
          }
        ]
  }
  // 1.4  builders==== 
  {
    "components": {
      // 构建ModuleBuilder，入参：
      // createModuleBuilder: {
      //   plugins: [
      //     reactCommonDeps(),
      //     esmodule({
      //       fileType: 'jsx',
      //     }),
      //     styleImport(),
      //     containerClass(),
      //     containerInjectContext(),
      //     containerInjectUtils(),
      //     containerInjectDataSourceEngine(),
      //     containerInjectI18n(),
      //     containerInjectConstants(),
      //     containerInitState(),
      //     containerLifeCycle(),
      //     containerMethod(),
      //     jsx({
      //       nodeTypeMapping: {
      //         Div: 'div',
      //         Component: 'div',
      //         Page: 'div',
      //         Block: 'div',
      //       },
      //     }),
      //     css()
      //   ],
      //     postProcessors: [
      //       prettier()
      //     ],
      //       contextData: {
      //     inStrictMode: this.inStrictMode,
      //       tolerateEvalErrors: true,
      //         evalErrorsHandler: '',
      //     ...this.extraContextData,
      //     ...extraContextData,
      //   },
      //   ...options,
      // });
    }
  },
  "pages": {
    //入参同上,
    generateModule,
      generateModuleCode,
      linkCodeChunks,
      addPlugin: chunkGenerator.addPlugin.bind(chunkGenerator),
    },
  "router": {
    esmodule(), icejs.plugins.router()
  },
  "entry": {
    icejs.plugins.entry()
  },
  "constants": {
    constants()
  },
  "utils": {
    esmodule(), utils('react')
  },
  "i18n": {
    i18n()
  },
  "globalStyle": {
    icejs.plugins.globalStyle()
  },
  "htmlEntry": {
    icejs.plugins.entryHtml()
  },
  "packageJSON": {
    icejs.plugins.packageJSON()
  }

  // 1.5. containerBuildResult====
  [
    {
      "moduleName": "Test",
      "path": [
        "src",
        "pages"
      ],
      "files": [
        {
          "name": "index",
          "ext": "jsx",
          "content": "// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';\n\nimport { Form, Input, NumberPicker, Select, Button } from '@alifd/next';\n\nimport { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n\nimport { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n\nimport { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n\nimport '@alifd/next/lib/form/style';\n\nimport '@alifd/next/lib/input/style';\n\nimport '@alifd/next/lib/number-picker/style';\n\nimport '@alifd/next/lib/select/style';\n\nimport '@alifd/next/lib/button/style';\n\nimport utils, { RefsManager } from '../../utils';\n\nimport * as __$$i18n from '../../i18n';\n\nimport __$$constants from '../../constants';\n\nimport './index.css';\n\nclass Test$$Page extends React.Component {\n  _context = this;\n\n  _dataSourceConfig = this._defineDataSourceConfig();\n  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {\n    runtimeConfig: true,\n    requestHandlersMap: {\n      urlParams: __$$createUrlParamsRequestHandler(window.location.search),\n      fetch: __$$createFetchRequestHandler(),\n    },\n  });\n\n  get dataSourceMap() {\n    return this._dataSourceEngine.dataSourceMap || {};\n  }\n\n  reloadDataSource = async () => {\n    await this._dataSourceEngine.reloadDataSource();\n  };\n\n  get constants() {\n    return __$$constants || {};\n  }\n\n  constructor(props, context) {\n    super(props);\n\n    this.utils = utils;\n\n    this._refsManager = new RefsManager();\n\n    __$$i18n._inject2(this);\n\n    this.state = { text: 'outer' };\n  }\n\n  $ = (refName) => {\n    return this._refsManager.get(refName);\n  };\n\n  $$ = (refName) => {\n    return this._refsManager.getAll(refName);\n  };\n\n  _defineDataSourceConfig() {\n    const _this = this;\n    return {\n      list: [\n        {\n          id: 'urlParams',\n          type: 'urlParams',\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n          options: function () {\n            return undefined;\n          }.bind(_this),\n        },\n        {\n          id: 'user',\n          type: 'fetch',\n          options: function () {\n            return {\n              method: 'GET',\n              uri: 'https://shs.xxx.com/mock/1458/demo/user',\n              isSync: true,\n            };\n          }.bind(_this),\n          dataHandler: function (response) {\n            if (!response.data.success) {\n              throw new Error(response.data.message);\n            }\n            return response.data.data;\n          },\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n        },\n        {\n          id: 'orders',\n          type: 'fetch',\n          options: function () {\n            return {\n              method: 'GET',\n              uri: 'https://shs.xxx.com/mock/1458/demo/orders',\n              isSync: true,\n            };\n          }.bind(_this),\n          dataHandler: function (response) {\n            if (!response.data.success) {\n              throw new Error(response.data.message);\n            }\n            return response.data.data.result;\n          },\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n        },\n      ],\n      dataHandler: function (dataMap) {\n        console.info('All datasources loaded:', dataMap);\n      },\n    };\n  }\n\n  componentDidMount() {\n    this._dataSourceEngine.reloadDataSource();\n\n    console.log('componentDidMount');\n  }\n\n  render() {\n    const __$$context = this._context || this;\n    const { state } = __$$context;\n    return (\n      <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}>\n        <Form\n          labelCol={__$$eval(() => this.state.colNum)}\n          style={{}}\n          ref={this._refsManager.linkRef('testForm')}\n        >\n          <Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\">\n            <Input placeholder=\"请输入\" size=\"medium\" style={{ width: 320 }} />\n          </Form.Item>\n          <Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\">\n            <NumberPicker size=\"medium\" type=\"normal\" />\n          </Form.Item>\n          <Form.Item label=\"职业：\" name=\"profession\">\n            <Select\n              dataSource={[\n                { label: '教师', value: 't' },\n                { label: '医生', value: 'd' },\n                { label: '歌手', value: 's' },\n              ]}\n            />\n          </Form.Item>\n          <div style={{ textAlign: 'center' }}>\n            <Button.Group>\n              {__$$evalArray(() => ['a', 'b', 'c']).map((item, index) =>\n                ((__$$context) =>\n                  !!__$$eval(() => index >= 1) && (\n                    <Button type=\"primary\" style={{ margin: '0 5px 0 5px' }}>\n                      {__$$eval(() => item)}\n                    </Button>\n                  ))(__$$createChildContext(__$$context, { item, index }))\n              )}\n            </Button.Group>\n          </div>\n        </Form>\n      </div>\n    );\n  }\n}\n\nexport default Test$$Page;\n\nfunction __$$eval(expr) {\n  try {\n    return expr();\n  } catch (error) {}\n}\n\nfunction __$$evalArray(expr) {\n  const res = __$$eval(expr);\n  return Array.isArray(res) ? res : [];\n}\n\nfunction __$$createChildContext(oldContext, ext) {\n  const childContext = {\n    ...oldContext,\n    ...ext,\n  };\n  childContext.__proto__ = oldContext;\n  return childContext;\n}\n"
        },
        {
          "name": "index",
          "ext": "css",
          "content": ""
        }
      ]
    }
  ]
  // 1.6 buildResult====
  [
    {
      "moduleName": "Test",
      "path": [
        "src",
        "pages"
      ],
      "files": [
        {
          "name": "index",
          "ext": "jsx",
          "content": "// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';\n\nimport { Form, Input, NumberPicker, Select, Button } from '@alifd/next';\n\nimport { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n\nimport { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n\nimport { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n\nimport '@alifd/next/lib/form/style';\n\nimport '@alifd/next/lib/input/style';\n\nimport '@alifd/next/lib/number-picker/style';\n\nimport '@alifd/next/lib/select/style';\n\nimport '@alifd/next/lib/button/style';\n\nimport utils, { RefsManager } from '../../utils';\n\nimport * as __$$i18n from '../../i18n';\n\nimport __$$constants from '../../constants';\n\nimport './index.css';\n\nclass Test$$Page extends React.Component {\n  _context = this;\n\n  _dataSourceConfig = this._defineDataSourceConfig();\n  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {\n    runtimeConfig: true,\n    requestHandlersMap: {\n      urlParams: __$$createUrlParamsRequestHandler(window.location.search),\n      fetch: __$$createFetchRequestHandler(),\n    },\n  });\n\n  get dataSourceMap() {\n    return this._dataSourceEngine.dataSourceMap || {};\n  }\n\n  reloadDataSource = async () => {\n    await this._dataSourceEngine.reloadDataSource();\n  };\n\n  get constants() {\n    return __$$constants || {};\n  }\n\n  constructor(props, context) {\n    super(props);\n\n    this.utils = utils;\n\n    this._refsManager = new RefsManager();\n\n    __$$i18n._inject2(this);\n\n    this.state = { text: 'outer' };\n  }\n\n  $ = (refName) => {\n    return this._refsManager.get(refName);\n  };\n\n  $$ = (refName) => {\n    return this._refsManager.getAll(refName);\n  };\n\n  _defineDataSourceConfig() {\n    const _this = this;\n    return {\n      list: [\n        {\n          id: 'urlParams',\n          type: 'urlParams',\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n          options: function () {\n            return undefined;\n          }.bind(_this),\n        },\n        {\n          id: 'user',\n          type: 'fetch',\n          options: function () {\n            return {\n              method: 'GET',\n              uri: 'https://shs.xxx.com/mock/1458/demo/user',\n              isSync: true,\n            };\n          }.bind(_this),\n          dataHandler: function (response) {\n            if (!response.data.success) {\n              throw new Error(response.data.message);\n            }\n            return response.data.data;\n          },\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n        },\n        {\n          id: 'orders',\n          type: 'fetch',\n          options: function () {\n            return {\n              method: 'GET',\n              uri: 'https://shs.xxx.com/mock/1458/demo/orders',\n              isSync: true,\n            };\n          }.bind(_this),\n          dataHandler: function (response) {\n            if (!response.data.success) {\n              throw new Error(response.data.message);\n            }\n            return response.data.data.result;\n          },\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n        },\n      ],\n      dataHandler: function (dataMap) {\n        console.info('All datasources loaded:', dataMap);\n      },\n    };\n  }\n\n  componentDidMount() {\n    this._dataSourceEngine.reloadDataSource();\n\n    console.log('componentDidMount');\n  }\n\n  render() {\n    const __$$context = this._context || this;\n    const { state } = __$$context;\n    return (\n      <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}>\n        <Form\n          labelCol={__$$eval(() => this.state.colNum)}\n          style={{}}\n          ref={this._refsManager.linkRef('testForm')}\n        >\n          <Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\">\n            <Input placeholder=\"请输入\" size=\"medium\" style={{ width: 320 }} />\n          </Form.Item>\n          <Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\">\n            <NumberPicker size=\"medium\" type=\"normal\" />\n          </Form.Item>\n          <Form.Item label=\"职业：\" name=\"profession\">\n            <Select\n              dataSource={[\n                { label: '教师', value: 't' },\n                { label: '医生', value: 'd' },\n                { label: '歌手', value: 's' },\n              ]}\n            />\n          </Form.Item>\n          <div style={{ textAlign: 'center' }}>\n            <Button.Group>\n              {__$$evalArray(() => ['a', 'b', 'c']).map((item, index) =>\n                ((__$$context) =>\n                  !!__$$eval(() => index >= 1) && (\n                    <Button type=\"primary\" style={{ margin: '0 5px 0 5px' }}>\n                      {__$$eval(() => item)}\n                    </Button>\n                  ))(__$$createChildContext(__$$context, { item, index }))\n              )}\n            </Button.Group>\n          </div>\n        </Form>\n      </div>\n    );\n  }\n}\n\nexport default Test$$Page;\n\nfunction __$$eval(expr) {\n  try {\n    return expr();\n  } catch (error) {}\n}\n\nfunction __$$evalArray(expr) {\n  const res = __$$eval(expr);\n  return Array.isArray(res) ? res : [];\n}\n\nfunction __$$createChildContext(oldContext, ext) {\n  const childContext = {\n    ...oldContext,\n    ...ext,\n  };\n  childContext.__proto__ = oldContext;\n  return childContext;\n}\n"
        },
        {
          "name": "index",
          "ext": "css",
          "content": ""
        }
      ]
    }
  ]
  // 1.7 finalResult ====
  {
    "name": ".",
      "dirs": [
        {
          "name": "src",
          "dirs": [
            {
              "name": "layouts",
              "dirs": [
                {
                  "name": "BasicLayout",
                  "dirs": [
                    {
                      "name": "components",
                      "dirs": [
                        {
                          "name": "Footer",
                          "dirs": [],
                          "files": [
                            {
                              "name": "index",
                              "ext": "jsx",
                              "content": "\nimport React from 'react';\nimport styles from './index.module.scss';\n\nexport default function Footer() {\n  return (\n    <p className={styles.footer}>\n      <span className={styles.logo}>Alibaba Fusion</span>\n      <br />\n      <span className={styles.copyright}>© 2019-现在 Alibaba Fusion & ICE</span>\n    </p>\n  );\n}\n    "
                            },
                            {
                              "name": "index",
                              "ext": "module.scss",
                              "content": "\n.footer {\n  line-height: 20px;\n  text-align: center;\n}\n\n.logo {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.copyright {\n  font-size: 12px;\n}\n    "
                            }
                          ]
                        },
                        {
                          "name": "Logo",
                          "dirs": [],
                          "files": [
                            {
                              "name": "index",
                              "ext": "jsx",
                              "content": "\nimport React from 'react';\nimport { Link } from 'ice';\nimport styles from './index.module.scss';\n\nexport default function Logo({ image, text, url }) {\n  return (\n    <div className=\"logo\">\n      <Link to={url || '/'} className={styles.logo}>\n        {image && <img src={image} alt=\"logo\" />}\n        <span>{text}</span>\n      </Link>\n    </div>\n  );\n}\n    "
                            },
                            {
                              "name": "index",
                              "ext": "module.scss",
                              "content": "\n.logo{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: $color-text1-1;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 22px;\n\n  &:visited, &:link {\n    color: $color-text1-1;\n  }\n\n  img {\n    height: 24px;\n    margin-right: 10px;\n  }\n}\n    "
                            }
                          ]
                        },
                        {
                          "name": "PageNav",
                          "dirs": [],
                          "files": [
                            {
                              "name": "index",
                              "ext": "jsx",
                              "content": "\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { Link, withRouter } from 'ice';\nimport { Nav } from '@alifd/next';\nimport { asideMenuConfig } from '../../menuConfig';\n\nconst { SubNav } = Nav;\nconst NavItem = Nav.Item;\n\nfunction getNavMenuItems(menusData) {\n  if (!menusData) {\n    return [];\n  }\n\n  return menusData\n    .filter(item => item.name && !item.hideInMenu)\n    .map((item, index) => getSubMenuOrItem(item, index));\n}\n\nfunction getSubMenuOrItem(item, index) {\n  if (item.children && item.children.some(child => child.name)) {\n    const childrenItems = getNavMenuItems(item.children);\n\n    if (childrenItems && childrenItems.length > 0) {\n      const subNav = (\n        <SubNav key={index} icon={item.icon} label={item.name}>\n          {childrenItems}\n        </SubNav>\n      );\n      return subNav;\n    }\n\n    return null;\n  }\n\n  const navItem = (\n    <NavItem key={item.path} icon={item.icon}>\n      <Link to={item.path}>{item.name}</Link>\n    </NavItem>\n  );\n  return navItem;\n}\n\nconst Navigation = (props, context) => {\n  const { location } = props;\n  const { pathname } = location;\n  const { isCollapse } = context;\n  return (\n    <Nav\n      type=\"primary\"\n      selectedKeys={[pathname]}\n      defaultSelectedKeys={[pathname]}\n      embeddable\n      openMode=\"single\"\n      iconOnly={isCollapse}\n      hasArrow={false}\n      mode={isCollapse ? 'popup' : 'inline'}\n    >\n      {getNavMenuItems(asideMenuConfig)}\n    </Nav>\n  );\n};\n\nNavigation.contextTypes = {\n  isCollapse: PropTypes.bool,\n};\nconst PageNav = withRouter(Navigation);\nexport default PageNav;\n    "
                            }
                          ]
                        }
                      ],
                      "files": []
                    }
                  ],
                  "files": [
                    {
                      "name": "index",
                      "ext": "jsx",
                      "content": "\nimport React, { useState } from 'react';\nimport { Shell, ConfigProvider } from '@alifd/next';\nimport PageNav from './components/PageNav';\nimport Logo from './components/Logo';\nimport Footer from './components/Footer';\n\n(function() {\n  const throttle = function(type, name, obj = window) {\n    let running = false;\n\n    const func = () => {\n      if (running) {\n        return;\n      }\n\n      running = true;\n      requestAnimationFrame(() => {\n        obj.dispatchEvent(new CustomEvent(name));\n        running = false;\n      });\n    };\n\n    obj.addEventListener(type, func);\n  };\n\n  throttle('resize', 'optimizedResize');\n})();\n\nexport default function BasicLayout({ children }) {\n  const getDevice = width => {\n    const isPhone =\n      typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);\n\n    if (width < 680 || isPhone) {\n      return 'phone';\n    }\n    if (width < 1280 && width > 680) {\n      return 'tablet';\n    }\n    return 'desktop';\n  };\n\n  const [device, setDevice] = useState(getDevice(NaN));\n  window.addEventListener('optimizedResize', e => {\n    setDevice(getDevice(e && e.target && e.target.innerWidth));\n  });\n  return (\n    <ConfigProvider device={device}>\n      <Shell\n        type=\"dark\"\n        style={{\n          minHeight: '100vh',\n        }}\n      >\n        <Shell.Branding>\n          <Logo\n            image=\"https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png\"\n            text=\"Logo\"\n          />\n        </Shell.Branding>\n        <Shell.Navigation\n          direction=\"hoz\"\n          style={{\n            marginRight: 10,\n          }}\n        ></Shell.Navigation>\n        <Shell.Action></Shell.Action>\n        <Shell.Navigation>\n          <PageNav />\n        </Shell.Navigation>\n\n        <Shell.Content>{children}</Shell.Content>\n        <Shell.Footer>\n          <Footer />\n        </Shell.Footer>\n      </Shell>\n    </ConfigProvider>\n  );\n}\n    "
                    },
                    {
                      "name": "menuConfig",
                      "ext": "js",
                      "content": "\nconst headerMenuConfig = [];\nconst asideMenuConfig = [\n  {\n    name: 'Dashboard',\n    path: '/',\n    icon: 'smile',\n  },\n];\nexport { headerMenuConfig, asideMenuConfig };\n    "
                    }
                  ]
                }
              ],
              "files": []
            },
            {
              "name": "pages",
              "dirs": [
                {
                  "name": "Test",
                  "dirs": [],
                  "files": [
                    {
                      "name": "index",
                      "ext": "jsx",
                      "content": "// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';\n\nimport { Form, Input, NumberPicker, Select, Button } from '@alifd/next';\n\nimport { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n\nimport { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n\nimport { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n\nimport '@alifd/next/lib/form/style';\n\nimport '@alifd/next/lib/input/style';\n\nimport '@alifd/next/lib/number-picker/style';\n\nimport '@alifd/next/lib/select/style';\n\nimport '@alifd/next/lib/button/style';\n\nimport utils, { RefsManager } from '../../utils';\n\nimport * as __$$i18n from '../../i18n';\n\nimport __$$constants from '../../constants';\n\nimport './index.css';\n\nclass Test$$Page extends React.Component {\n  _context = this;\n\n  _dataSourceConfig = this._defineDataSourceConfig();\n  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {\n    runtimeConfig: true,\n    requestHandlersMap: {\n      urlParams: __$$createUrlParamsRequestHandler(window.location.search),\n      fetch: __$$createFetchRequestHandler(),\n    },\n  });\n\n  get dataSourceMap() {\n    return this._dataSourceEngine.dataSourceMap || {};\n  }\n\n  reloadDataSource = async () => {\n    await this._dataSourceEngine.reloadDataSource();\n  };\n\n  get constants() {\n    return __$$constants || {};\n  }\n\n  constructor(props, context) {\n    super(props);\n\n    this.utils = utils;\n\n    this._refsManager = new RefsManager();\n\n    __$$i18n._inject2(this);\n\n    this.state = { text: 'outer' };\n  }\n\n  $ = (refName) => {\n    return this._refsManager.get(refName);\n  };\n\n  $$ = (refName) => {\n    return this._refsManager.getAll(refName);\n  };\n\n  _defineDataSourceConfig() {\n    const _this = this;\n    return {\n      list: [\n        {\n          id: 'urlParams',\n          type: 'urlParams',\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n          options: function () {\n            return undefined;\n          }.bind(_this),\n        },\n        {\n          id: 'user',\n          type: 'fetch',\n          options: function () {\n            return {\n              method: 'GET',\n              uri: 'https://shs.xxx.com/mock/1458/demo/user',\n              isSync: true,\n            };\n          }.bind(_this),\n          dataHandler: function (response) {\n            if (!response.data.success) {\n              throw new Error(response.data.message);\n            }\n            return response.data.data;\n          },\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n        },\n        {\n          id: 'orders',\n          type: 'fetch',\n          options: function () {\n            return {\n              method: 'GET',\n              uri: 'https://shs.xxx.com/mock/1458/demo/orders',\n              isSync: true,\n            };\n          }.bind(_this),\n          dataHandler: function (response) {\n            if (!response.data.success) {\n              throw new Error(response.data.message);\n            }\n            return response.data.data.result;\n          },\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n        },\n      ],\n      dataHandler: function (dataMap) {\n        console.info('All datasources loaded:', dataMap);\n      },\n    };\n  }\n\n  componentDidMount() {\n    this._dataSourceEngine.reloadDataSource();\n\n    console.log('componentDidMount');\n  }\n\n  render() {\n    const __$$context = this._context || this;\n    const { state } = __$$context;\n    return (\n      <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}>\n        <Form\n          labelCol={__$$eval(() => this.state.colNum)}\n          style={{}}\n          ref={this._refsManager.linkRef('testForm')}\n        >\n          <Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\">\n            <Input placeholder=\"请输入\" size=\"medium\" style={{ width: 320 }} />\n          </Form.Item>\n          <Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\">\n            <NumberPicker size=\"medium\" type=\"normal\" />\n          </Form.Item>\n          <Form.Item label=\"职业：\" name=\"profession\">\n            <Select\n              dataSource={[\n                { label: '教师', value: 't' },\n                { label: '医生', value: 'd' },\n                { label: '歌手', value: 's' },\n              ]}\n            />\n          </Form.Item>\n          <div style={{ textAlign: 'center' }}>\n            <Button.Group>\n              {__$$evalArray(() => ['a', 'b', 'c']).map((item, index) =>\n                ((__$$context) =>\n                  !!__$$eval(() => index >= 1) && (\n                    <Button type=\"primary\" style={{ margin: '0 5px 0 5px' }}>\n                      {__$$eval(() => item)}\n                    </Button>\n                  ))(__$$createChildContext(__$$context, { item, index }))\n              )}\n            </Button.Group>\n          </div>\n        </Form>\n      </div>\n    );\n  }\n}\n\nexport default Test$$Page;\n\nfunction __$$eval(expr) {\n  try {\n    return expr();\n  } catch (error) {}\n}\n\nfunction __$$evalArray(expr) {\n  const res = __$$eval(expr);\n  return Array.isArray(res) ? res : [];\n}\n\nfunction __$$createChildContext(oldContext, ext) {\n  const childContext = {\n    ...oldContext,\n    ...ext,\n  };\n  childContext.__proto__ = oldContext;\n  return childContext;\n}\n"
                    },
                    {
                      "name": "index",
                      "ext": "css",
                      "content": ""
                    }
                  ]
                }
              ],
              "files": []
            }
          ],
          "files": []
        }
      ],
        "files": [
          {
            "name": "tsconfig",
            "ext": "json",
            "content": "\n{\n  \"compileOnSave\": false,\n  \"buildOnSave\": false,\n  \"compilerOptions\": {\n    \"baseUrl\": \".\",\n    \"outDir\": \"build\",\n    \"module\": \"esnext\",\n    \"target\": \"es6\",\n    \"jsx\": \"react\",\n    \"moduleResolution\": \"node\",\n    \"allowSyntheticDefaultImports\": true,\n    \"lib\": [\"es6\", \"dom\"],\n    \"sourceMap\": true,\n    \"allowJs\": true,\n    \"rootDir\": \"./\",\n    \"forceConsistentCasingInFileNames\": true,\n    \"noImplicitReturns\": true,\n    \"noImplicitThis\": true,\n    \"noImplicitAny\": false,\n    \"importHelpers\": true,\n    \"strictNullChecks\": true,\n    \"suppressImplicitAnyIndexErrors\": true,\n    \"noUnusedLocals\": true,\n    \"skipLibCheck\": true,\n    \"paths\": {\n      \"@/*\": [\"./src/*\"],\n      \"ice\": [\".ice/index.ts\"],\n      \"ice/*\": [\".ice/pages/*\"]\n    }\n  },\n  \"include\": [\"src/*\", \".ice\"],\n  \"exclude\": [\"node_modules\", \"build\", \"public\"]\n}\n    "
          },
          {
            "name": ".stylelintrc",
            "ext": "js",
            "content": "\nconst { stylelint } = require('@ice/spec');\n\nmodule.exports = stylelint;\n    "
          },
          {
            "name": ".stylelintignore",
            "ext": "",
            "content": "\n# 忽略目录\nbuild/\ntests/\ndemo/\n\n# node 覆盖率文件\ncoverage/\n    "
          },
          {
            "name": ".prettierrc",
            "ext": "js",
            "content": "\nconst { prettier } = require('@ice/spec');\n\nmodule.exports = prettier;\n    "
          },
          {
            "name": ".prettierignore",
            "ext": "",
            "content": "\nbuild/\ntests/\ndemo/\n.ice/\ncoverage/\n**/*-min.js\n**/*.min.js\npackage-lock.json\nyarn.lock\n    "
          },
          {
            "name": "jsconfig",
            "ext": "json",
            "content": "\n{\n  \"compilerOptions\": {\n    \"baseUrl\": \".\",\n    \"jsx\": \"react\",\n    \"paths\": {\n      \"@/*\": [\"./src/*\"],\n      \"ice\": [\".ice/index.ts\"],\n      \"ice/*\": [\".ice/pages/*\"]\n    }\n  }\n}\n    "
          },
          {
            "name": ".gitignore",
            "ext": "",
            "content": "\n# See https://help.github.com/ignore-files/ for more about ignoring files.\n\n# dependencies\nnode_modules/\n\n# production\nbuild/\ndist/\ntmp/\nlib/\n\n# misc\n.idea/\n.happypack\n.DS_Store\n*.swp\n*.dia~\n.ice\n\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\nindex.module.scss.d.ts\n    "
          },
          {
            "name": ".eslintrc",
            "ext": "js",
            "content": "\nconst { eslint } = require('@ice/spec');\n\nmodule.exports = eslint;\n    "
          },
          {
            "name": ".eslintignore",
            "ext": "",
            "content": "\n# 忽略目录\nbuild/\ntests/\ndemo/\n.ice/\n\n# node 覆盖率文件\ncoverage/\n\n# 忽略文件\n**/*-min.js\n**/*.min.js\n\npackage-lock.json\nyarn.lock\n    "
          },
          {
            "name": ".editorconfig",
            "ext": "",
            "content": "\n# http://editorconfig.org\nroot = true\n\n[*]\nindent_style = space\nindent_size = 2\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n\n[*.md]\ntrim_trailing_whitespace = false\n    "
          },
          {
            "name": "build",
            "ext": "json",
            "content": "\n{\n  \"entry\": \"src/app.js\",\n  \"plugins\": [\n    [\n      \"build-plugin-fusion\",\n      {\n        \"themePackage\": \"@alifd/theme-design-pro\"\n      }\n    ],\n    [\n      \"build-plugin-moment-locales\",\n      {\n        \"locales\": [\n          \"zh-cn\"\n        ]\n      }\n    ]\n  ]\n}\n      "
          },
          {
            "name": "abc",
            "ext": "json",
            "content": "\n{\n  \"type\": \"ice-app\",\n  \"builder\": \"@ali/builder-ice-app\"\n}\n    "
          },
          {
            "name": "README",
            "ext": "md",
            "content": "\n## Scaffold Lite\n\n> 轻量级模板，使用 JavaScript，仅包含基础的 Layout。\n\n## 使用\n\n```bash\n# 安装依赖\n$ npm install\n\n# 启动服务\n$ npm start  # visit http://localhost:3333\n```\n\n[More docs](https://ice.work/docs/guide/about).\n\n## 目录\n\n```md\n├── build/                         # 构建产物\n├── mock/                          # 本地模拟数据\n│   ├── index.[j,t]s\n├── public/\n│   ├── index.html                 # 应用入口 HTML\n│   └── favicon.png                # Favicon\n├── src/                           # 源码路径\n│   ├── components/                # 自定义业务组件\n│   │   └── Guide/\n│   │       ├── index.[j,t]sx\n│   │       ├── index.module.scss\n│   ├── layouts/                   # 布局组件\n│   │   └── BasicLayout/\n│   │       ├── index.[j,t]sx\n│   │       └── index.module.scss\n│   ├── pages/                     # 页面\n│   │   └── Home/                  # home 页面，约定路由转成小写\n│   │       ├── components/        # 页面级自定义业务组件\n│   │       ├── models.[j,t]sx     # 页面级数据状态\n│   │       ├── index.[j,t]sx      # 页面入口\n│   │       └── index.module.scss  # 页面样式文件\n│   ├── configs/                   # [可选] 配置文件\n│   │   └── menu.[j,t]s            # [可选] 菜单配置\n│   ├── models/                    # [可选] 应用级数据状态\n│   │   └── user.[j,t]s\n│   ├── utils/                     # [可选] 工具库\n│   ├── global.scss                # 全局样式\n│   ├── routes.[j,t]s              # 路由配置\n│   └── app.[j,t]s[x]              # 应用入口脚本\n├── build.json                     # 工程配置\n├── README.md\n├── package.json\n├── .editorconfig\n├── .eslintignore\n├── .eslintrc.[j,t]s\n├── .gitignore\n├── .stylelintignore\n├── .stylelintrc.[j,t]s\n├── .gitignore\n└── [j,t]sconfig.json\n```\n    "
          }
        ]
  }
  //  变量： this.template.slots
  slots: {
    components: {
      path: ['src', 'components'],
  },
    pages: {
      path: ['src', 'pages'],
  },
    router: {
      path: ['src'],
        fileName: 'routes',
  },
    entry: {
      path: ['src'],
        fileName: 'app',
  },
    constants: {
      path: ['src'],
        fileName: 'constants',
  },
    utils: {
      path: ['src'],
        fileName: 'utils',
  },
    i18n: {
      path: ['src'],
        fileName: 'i18n',
  },
    globalStyle: {
      path: ['src'],
        fileName: 'global',
  },
    htmlEntry: {
      path: ['public'],
        fileName: 'index',
  },
    packageJSON: {
      path: [],
        fileName: 'package',
  },
  }
  //  变量： this.plugins
  {
    "components": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
      "pages": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
        "router": [
          null,
          null
        ],
          "entry": [
            null
          ],
            "constants": [
              null
            ],
              "utils": [
                null,
                null
              ],
                "i18n": [
                  null
                ],
                  "globalStyle": [
                    null
                  ],
                    "htmlEntry": [
                      null
                    ],
                      "packageJSON": [
                        null
                      ]
  }
}
// ModuleBuilder
{
  // 1.1 generateModule chunks
  // chunks ： { chunks } = await chunkGenerator.run(
  { // 没有这一层
    [
      [
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountContent",
          "content": "\n          this._dataSourceEngine.reloadDataSource();\n        ",
          "linkAfter": [
            "ReactComponentClassDidMountStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/form/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/input/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/number-picker/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/select/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/button/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineStart",
          "content": "class Test$$Page extends React.Component {",
          "linkAfter": [
            "CommonExternalDependencyImport",
            "CommonInternalDependencyImport",
            "CommonImportAliasDefine",
            "CommonFileScopeVarDefine",
            "CommonFileScopeMethodDefine"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineEnd",
          "content": "}",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd",
            "ReactComponentClassRenderEnd",
            "ReactComponentClassDidMountEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorStart",
          "content": "constructor(props, context) { super(props); ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorEnd",
          "content": "}",
          "linkAfter": [
            "CommonClassDefineConstructorStart",
            "CommonClassDefineConstructorContent"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountStart",
          "content": "componentDidMount() {",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountEnd",
          "content": "}",
          "linkAfter": [
            "ReactComponentClassDidMountContent",
            "ReactComponentClassDidMountStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderStart",
          "content": "render() {",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd",
            "ReactComponentClassDidMountEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderEnd",
          "content": "}",
          "linkAfter": [
            "ReactComponentClassRenderStart",
            "ReactComponentClassRenderPre",
            "ReactComponentClassRenderJSX"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonFileExport",
          "content": "export default Test$$Page;",
          "linkAfter": [
            "CommonExternalDependencyImport",
            "CommonInternalDependencyImport",
            "CommonImportAliasDefine",
            "CommonFileScopeVarDefine",
            "CommonFileScopeMethodDefine",
            "CommonClassDefineEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n          _context = this;\n        ",
          "linkAfter": [
            "CommonClassDefineStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this.utils = utils;",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this._refsManager = new RefsManager();",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            ",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            ",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        ",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "\n        import * as __$$i18n from '../../i18n';\n      ",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "\n        __$$i18n._inject2(this);\n      ",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import __$$constants from '../../constants';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n        get constants() {\n          return __$$constants || {};\n        }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this.state = { text: \"outer\", };",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountContent",
          "content": "console.log('componentDidMount');",
          "linkAfter": [
            "ReactComponentClassDidMountStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderJSX",
          "content": "\n        const __$$context = this._context || this;\n        const { state } = __$$context;\n        return <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}><Form labelCol={__$$eval(() => (this.state.colNum))} style={{}} ref={this._refsManager.linkRef('testForm')}><Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\"><Input placeholder=\"请输入\" size=\"medium\" style={{\"width\": 320}} /></Form.Item><Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\"><NumberPicker size=\"medium\" type=\"normal\" /></Form.Item><Form.Item label=\"职业：\" name=\"profession\"><Select dataSource={[{\"label\": \"教师\",\n\"value\": \"t\"},{\"label\": \"医生\",\n\"value\": \"d\"},{\"label\": \"歌手\",\n\"value\": \"s\"}]} /></Form.Item><div style={{\"textAlign\": \"center\"}}><Button.Group>{(__$$evalArray(() => ([\"a\",\"b\",\"c\"]))).map((item, index) => ((__$$context) => (!!(__$$eval(() => (index >= 1))) && (<Button type=\"primary\" style={{\"margin\": \"0 5px 0 5px\"}}>{__$$eval(() => (item))}</Button>)))(__$$createChildContext(__$$context, { item, index })))}</Button.Group></div></Form></div>;\n      ",
          "linkAfter": [
            "ReactComponentClassRenderStart",
            "ReactComponentClassRenderPre"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonCustomContent",
          "content": "\n          function __$$eval(expr) {\n            try {\n              return expr();\n            } catch (error) {\n              \n            }\n          }\n\n          function __$$evalArray(expr) {\n            const res = __$$eval(expr);\n            return Array.isArray(res) ? res : [];\n          }\n      \n\n        function __$$createChildContext(oldContext, ext) {\n          const childContext = {\n            ...oldContext,\n            ...ext,\n          };\n          childContext.__proto__ = oldContext;\n          return childContext;\n        }\n      ",
          "linkAfter": [
            "CommonFileExport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import './index.css';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        }
      ],
      [
        {
          "type": "string",
          "fileType": "css",
          "name": "CommonStyleCssContent",
          "linkAfter": [
            "CommonStyleDepsImport"
          ]
        }
      ]
    ]
  }

  // 1.2 generateModule files
  {// 没层
    [
      {
        "name": "index",
        "ext": "jsx",
        "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';\n\nimport { Form, Input, NumberPicker, Select, Button } from '@alifd/next';\n\n\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            \n\n\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            \n\n\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        \n\nimport '@alifd/next/lib/form/style';\n\nimport '@alifd/next/lib/input/style';\n\nimport '@alifd/next/lib/number-picker/style';\n\nimport '@alifd/next/lib/select/style';\n\nimport '@alifd/next/lib/button/style';\n\n\n        import utils, { RefsManager } from '../../utils';\n      \n\n\n        import * as __$$i18n from '../../i18n';\n      \n\nimport __$$constants from '../../constants';\n\nimport './index.css';\n\nclass Test$$Page extends React.Component {\n\n\n          _context = this;\n        \n\n\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          \n\n\n        get constants() {\n          return __$$constants || {};\n        }\n        \n\nconstructor(props, context) { super(props); \n\nthis.utils = utils;\n\nthis._refsManager = new RefsManager();\n\n\n        __$$i18n._inject2(this);\n      \n\nthis.state = { text: \"outer\", };\n\n}\n\n\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        \n\n\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        \n\n\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        \n\ncomponentDidMount() {\n\n\n          this._dataSourceEngine.reloadDataSource();\n        \n\nconsole.log('componentDidMount');\n\n}\n\nrender() {\n\n\n        const __$$context = this._context || this;\n        const { state } = __$$context;\n        return <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}><Form labelCol={__$$eval(() => (this.state.colNum))} style={{}} ref={this._refsManager.linkRef('testForm')}><Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\"><Input placeholder=\"请输入\" size=\"medium\" style={{\"width\": 320}} /></Form.Item><Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\"><NumberPicker size=\"medium\" type=\"normal\" /></Form.Item><Form.Item label=\"职业：\" name=\"profession\"><Select dataSource={[{\"label\": \"教师\",\n\"value\": \"t\"},{\"label\": \"医生\",\n\"value\": \"d\"},{\"label\": \"歌手\",\n\"value\": \"s\"}]} /></Form.Item><div style={{\"textAlign\": \"center\"}}><Button.Group>{(__$$evalArray(() => ([\"a\",\"b\",\"c\"]))).map((item, index) => ((__$$context) => (!!(__$$eval(() => (index >= 1))) && (<Button type=\"primary\" style={{\"margin\": \"0 5px 0 5px\"}}>{__$$eval(() => (item))}</Button>)))(__$$createChildContext(__$$context, { item, index })))}</Button.Group></div></Form></div>;\n      \n\n}\n\n}\n\nexport default Test$$Page;\n\n\n          function __$$eval(expr) {\n            try {\n              return expr();\n            } catch (error) {\n              \n            }\n          }\n\n          function __$$evalArray(expr) {\n            const res = __$$eval(expr);\n            return Array.isArray(res) ? res : [];\n          }\n      \n\n        function __$$createChildContext(oldContext, ext) {\n          const childContext = {\n            ...oldContext,\n            ...ext,\n          };\n          childContext.__proto__ = oldContext;\n          return childContext;\n        }\n      \n"
      },
      {
        "name": "index",
        "ext": "css",
        "content": ""
      }
    ]

  }

  // 1.3 经过processer 格式化后的 files
  { // 没层
    [
      {
        "name": "index",
        "ext": "jsx",
        "content": "// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';\n\nimport { Form, Input, NumberPicker, Select, Button } from '@alifd/next';\n\nimport { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n\nimport { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n\nimport { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n\nimport '@alifd/next/lib/form/style';\n\nimport '@alifd/next/lib/input/style';\n\nimport '@alifd/next/lib/number-picker/style';\n\nimport '@alifd/next/lib/select/style';\n\nimport '@alifd/next/lib/button/style';\n\nimport utils, { RefsManager } from '../../utils';\n\nimport * as __$$i18n from '../../i18n';\n\nimport __$$constants from '../../constants';\n\nimport './index.css';\n\nclass Test$$Page extends React.Component {\n  _context = this;\n\n  _dataSourceConfig = this._defineDataSourceConfig();\n  _dataSourceEngine = __$$createDataSourceEngine(this._dataSourceConfig, this, {\n    runtimeConfig: true,\n    requestHandlersMap: {\n      urlParams: __$$createUrlParamsRequestHandler(window.location.search),\n      fetch: __$$createFetchRequestHandler(),\n    },\n  });\n\n  get dataSourceMap() {\n    return this._dataSourceEngine.dataSourceMap || {};\n  }\n\n  reloadDataSource = async () => {\n    await this._dataSourceEngine.reloadDataSource();\n  };\n\n  get constants() {\n    return __$$constants || {};\n  }\n\n  constructor(props, context) {\n    super(props);\n\n    this.utils = utils;\n\n    this._refsManager = new RefsManager();\n\n    __$$i18n._inject2(this);\n\n    this.state = { text: 'outer' };\n  }\n\n  $ = (refName) => {\n    return this._refsManager.get(refName);\n  };\n\n  $$ = (refName) => {\n    return this._refsManager.getAll(refName);\n  };\n\n  _defineDataSourceConfig() {\n    const _this = this;\n    return {\n      list: [\n        {\n          id: 'urlParams',\n          type: 'urlParams',\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n          options: function () {\n            return undefined;\n          }.bind(_this),\n        },\n        {\n          id: 'user',\n          type: 'fetch',\n          options: function () {\n            return {\n              method: 'GET',\n              uri: 'https://shs.xxx.com/mock/1458/demo/user',\n              isSync: true,\n            };\n          }.bind(_this),\n          dataHandler: function (response) {\n            if (!response.data.success) {\n              throw new Error(response.data.message);\n            }\n            return response.data.data;\n          },\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n        },\n        {\n          id: 'orders',\n          type: 'fetch',\n          options: function () {\n            return {\n              method: 'GET',\n              uri: 'https://shs.xxx.com/mock/1458/demo/orders',\n              isSync: true,\n            };\n          }.bind(_this),\n          dataHandler: function (response) {\n            if (!response.data.success) {\n              throw new Error(response.data.message);\n            }\n            return response.data.data.result;\n          },\n          isInit: function () {\n            return undefined;\n          }.bind(_this),\n        },\n      ],\n      dataHandler: function (dataMap) {\n        console.info('All datasources loaded:', dataMap);\n      },\n    };\n  }\n\n  componentDidMount() {\n    this._dataSourceEngine.reloadDataSource();\n\n    console.log('componentDidMount');\n  }\n\n  render() {\n    const __$$context = this._context || this;\n    const { state } = __$$context;\n    return (\n      <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}>\n        <Form\n          labelCol={__$$eval(() => this.state.colNum)}\n          style={{}}\n          ref={this._refsManager.linkRef('testForm')}\n        >\n          <Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\">\n            <Input placeholder=\"请输入\" size=\"medium\" style={{ width: 320 }} />\n          </Form.Item>\n          <Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\">\n            <NumberPicker size=\"medium\" type=\"normal\" />\n          </Form.Item>\n          <Form.Item label=\"职业：\" name=\"profession\">\n            <Select\n              dataSource={[\n                { label: '教师', value: 't' },\n                { label: '医生', value: 'd' },\n                { label: '歌手', value: 's' },\n              ]}\n            />\n          </Form.Item>\n          <div style={{ textAlign: 'center' }}>\n            <Button.Group>\n              {__$$evalArray(() => ['a', 'b', 'c']).map((item, index) =>\n                ((__$$context) =>\n                  !!__$$eval(() => index >= 1) && (\n                    <Button type=\"primary\" style={{ margin: '0 5px 0 5px' }}>\n                      {__$$eval(() => item)}\n                    </Button>\n                  ))(__$$createChildContext(__$$context, { item, index }))\n              )}\n            </Button.Group>\n          </div>\n        </Form>\n      </div>\n    );\n  }\n}\n\nexport default Test$$Page;\n\nfunction __$$eval(expr) {\n  try {\n    return expr();\n  } catch (error) {}\n}\n\nfunction __$$evalArray(expr) {\n  const res = __$$eval(expr);\n  return Array.isArray(res) ? res : [];\n}\n\nfunction __$$createChildContext(oldContext, ext) {\n  const childContext = {\n    ...oldContext,\n    ...ext,\n  };\n  childContext.__proto__ = oldContext;\n  return childContext;\n}\n"
      },
      {
        "name": "index",
        "ext": "css",
        "content": ""
      }
    ]
  }


  // 变量：options.contextData  
  {
    "inStrictMode": false,
      "tolerateEvalErrors": true,
        "evalErrorsHandler": "",
          "extraContextData": {
      "projectRemark": {
        "isSingleComponent": false
      },
      "template": {
        "slots": {
          "components": {
            "path": [
              "src",
              "components"
            ]
          },
          "pages": {
            "path": [
              "src",
              "pages"
            ]
          },
          "router": {
            "path": [
              "src"
            ],
              "fileName": "routes"
          },
          "entry": {
            "path": [
              "src"
            ],
              "fileName": "app"
          },
          "constants": {
            "path": [
              "src"
            ],
              "fileName": "constants"
          },
          "utils": {
            "path": [
              "src"
            ],
              "fileName": "utils"
          },
          "i18n": {
            "path": [
              "src"
            ],
              "fileName": "i18n"
          },
          "globalStyle": {
            "path": [
              "src"
            ],
              "fileName": "global"
          },
          "htmlEntry": {
            "path": [
              "public"
            ],
              "fileName": "index"
          },
          "packageJSON": {
            "path": [],
              "fileName": "package"
          }
        }
      }
    }
  }
}

// ChunkBuilder
{
  //  1.1 run函数 finalStructure
  {
    "ir": {
      "componentName": "Page",
        "id": "node$1",
          "meta": {
        "title": "测试",
          "router": "/"
      },
      "props": {
        "ref": "outerView",
          "autoLoading": true
      },
      "fileName": "test",
        "state": {
        "text": "outer"
      },
      "lifeCycles": {
        "componentDidMount": {
          "type": "JSFunction",
            "value": "function componentDidMount() { console.log('componentDidMount'); }"
        }
      },
      "dataSource": {
        "list": [
          {
            "id": "urlParams",
            "type": "urlParams"
          },
          {
            "id": "user",
            "type": "fetch",
            "options": {
              "method": "GET",
              "uri": "https://shs.xxx.com/mock/1458/demo/user",
              "isSync": true
            },
            "dataHandler": {
              "type": "JSFunction",
              "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
            }
          },
          {
            "id": "orders",
            "type": "fetch",
            "options": {
              "method": "GET",
              "uri": "https://shs.xxx.com/mock/1458/demo/orders",
              "isSync": true
            },
            "dataHandler": {
              "type": "JSFunction",
              "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
            }
          }
        ],
          "dataHandler": {
          "type": "JSFunction",
            "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
        }
      },
      "children": [
        {
          "componentName": "Form",
          "id": "node$2",
          "props": {
            "labelCol": {
              "type": "JSExpression",
              "value": "this.state.colNum"
            },
            "style": {},
            "ref": "testForm"
          },
          "children": [
            {
              "componentName": "Form.Item",
              "id": "node$3",
              "props": {
                "label": "姓名：",
                "name": "name",
                "initValue": "李雷"
              },
              "children": [
                {
                  "componentName": "Input",
                  "id": "node$4",
                  "props": {
                    "placeholder": "请输入",
                    "size": "medium",
                    "style": {
                      "width": 320
                    }
                  }
                }
              ]
            },
            {
              "componentName": "Form.Item",
              "id": "node$5",
              "props": {
                "label": "年龄：",
                "name": "age",
                "initValue": "22"
              },
              "children": [
                {
                  "componentName": "NumberPicker",
                  "id": "node$6",
                  "props": {
                    "size": "medium",
                    "type": "normal"
                  }
                }
              ]
            },
            {
              "componentName": "Form.Item",
              "id": "node$7",
              "props": {
                "label": "职业：",
                "name": "profession"
              },
              "children": [
                {
                  "componentName": "Select",
                  "id": "node$8",
                  "props": {
                    "dataSource": [
                      {
                        "label": "教师",
                        "value": "t"
                      },
                      {
                        "label": "医生",
                        "value": "d"
                      },
                      {
                        "label": "歌手",
                        "value": "s"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "componentName": "Div",
              "id": "node$9",
              "props": {
                "style": {
                  "textAlign": "center"
                }
              },
              "children": [
                {
                  "componentName": "Button.Group",
                  "id": "node$a",
                  "props": {},
                  "children": [
                    {
                      "componentName": "Button",
                      "id": "node$b",
                      "condition": {
                        "type": "JSExpression",
                        "value": "this.index >= 1"
                      },
                      "loop": [
                        "a",
                        "b",
                        "c"
                      ],
                      "props": {
                        "type": "primary",
                        "style": {
                          "margin": "0 5px 0 5px"
                        }
                      },
                      "children": [
                        {
                          "type": "JSExpression",
                          "value": "this.item"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
        "containerType": "Page",
          "moduleName": "Test",
            "analyzeResult": {
        "isUsingRef": true
      },
      "deps": [
        {
          "componentName": "Form",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Form",
          "dependencyType": "External"
        },
        {
          "componentName": "Form.Item",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Form",
          "subName": "Item",
          "dependencyType": "External"
        },
        {
          "componentName": "Input",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Input",
          "dependencyType": "External"
        },
        {
          "componentName": "NumberPicker",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "NumberPicker",
          "dependencyType": "External"
        },
        {
          "componentName": "Select",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Select",
          "dependencyType": "External"
        },
        {
          "componentName": "Button.Group",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Button",
          "subName": "Group",
          "dependencyType": "External"
        },
        {
          "componentName": "Button",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Button",
          "dependencyType": "External"
        }
      ]
    },
    "chunks": [
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassDidMountContent",
        "content": "\n          this._dataSourceEngine.reloadDataSource();\n        ",
        "linkAfter": [
          "ReactComponentClassDidMountStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/form/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/input/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/number-picker/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/select/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/button/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineStart",
        "content": "class Test$$Page extends React.Component {",
        "linkAfter": [
          "CommonExternalDependencyImport",
          "CommonInternalDependencyImport",
          "CommonImportAliasDefine",
          "CommonFileScopeVarDefine",
          "CommonFileScopeMethodDefine"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineEnd",
        "content": "}",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineInsMethod",
          "CommonClassDefineInsPrivateMethod",
          "CommonClassDefineConstructorEnd",
          "ReactComponentClassRenderEnd",
          "ReactComponentClassDidMountEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorStart",
        "content": "constructor(props, context) { super(props); ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorEnd",
        "content": "}",
        "linkAfter": [
          "CommonClassDefineConstructorStart",
          "CommonClassDefineConstructorContent"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassDidMountStart",
        "content": "componentDidMount() {",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineInsMethod",
          "CommonClassDefineInsPrivateMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassDidMountEnd",
        "content": "}",
        "linkAfter": [
          "ReactComponentClassDidMountContent",
          "ReactComponentClassDidMountStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassRenderStart",
        "content": "render() {",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineInsMethod",
          "CommonClassDefineInsPrivateMethod",
          "CommonClassDefineConstructorEnd",
          "ReactComponentClassDidMountEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassRenderEnd",
        "content": "}",
        "linkAfter": [
          "ReactComponentClassRenderStart",
          "ReactComponentClassRenderPre",
          "ReactComponentClassRenderJSX"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonFileExport",
        "content": "export default Test$$Page;",
        "linkAfter": [
          "CommonExternalDependencyImport",
          "CommonInternalDependencyImport",
          "CommonImportAliasDefine",
          "CommonFileScopeVarDefine",
          "CommonFileScopeMethodDefine",
          "CommonClassDefineEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsVar",
        "content": "\n          _context = this;\n        ",
        "linkAfter": [
          "CommonClassDefineStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorContent",
        "content": "this.utils = utils;",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorContent",
        "content": "this._refsManager = new RefsManager();",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsMethod",
        "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsMethod",
        "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            ",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            ",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        ",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsVar",
        "content": "\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsMethod",
        "content": "\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "\n        import * as __$$i18n from '../../i18n';\n      ",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorContent",
        "content": "\n        __$$i18n._inject2(this);\n      ",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import __$$constants from '../../constants';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsVar",
        "content": "\n        get constants() {\n          return __$$constants || {};\n        }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorContent",
        "content": "this.state = { text: \"outer\", };",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassDidMountContent",
        "content": "console.log('componentDidMount');",
        "linkAfter": [
          "ReactComponentClassDidMountStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassRenderJSX",
        "content": "\n        const __$$context = this._context || this;\n        const { state } = __$$context;\n        return <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}><Form labelCol={__$$eval(() => (this.state.colNum))} style={{}} ref={this._refsManager.linkRef('testForm')}><Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\"><Input placeholder=\"请输入\" size=\"medium\" style={{\"width\": 320}} /></Form.Item><Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\"><NumberPicker size=\"medium\" type=\"normal\" /></Form.Item><Form.Item label=\"职业：\" name=\"profession\"><Select dataSource={[{\"label\": \"教师\",\n\"value\": \"t\"},{\"label\": \"医生\",\n\"value\": \"d\"},{\"label\": \"歌手\",\n\"value\": \"s\"}]} /></Form.Item><div style={{\"textAlign\": \"center\"}}><Button.Group>{(__$$evalArray(() => ([\"a\",\"b\",\"c\"]))).map((item, index) => ((__$$context) => (!!(__$$eval(() => (index >= 1))) && (<Button type=\"primary\" style={{\"margin\": \"0 5px 0 5px\"}}>{__$$eval(() => (item))}</Button>)))(__$$createChildContext(__$$context, { item, index })))}</Button.Group></div></Form></div>;\n      ",
        "linkAfter": [
          "ReactComponentClassRenderStart",
          "ReactComponentClassRenderPre"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonCustomContent",
        "content": "\n          function __$$eval(expr) {\n            try {\n              return expr();\n            } catch (error) {\n              \n            }\n          }\n\n          function __$$evalArray(expr) {\n            const res = __$$eval(expr);\n            return Array.isArray(res) ? res : [];\n          }\n      \n\n        function __$$createChildContext(oldContext, ext) {\n          const childContext = {\n            ...oldContext,\n            ...ext,\n          };\n          childContext.__proto__ = oldContext;\n          return childContext;\n        }\n      ",
        "linkAfter": [
          "CommonFileExport"
        ]
      },
      {
        "type": "string",
        "fileType": "css",
        "name": "CommonStyleCssContent",
        "linkAfter": [
          "CommonStyleDepsImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import './index.css';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      }
    ],
      "depNames": [],
        "contextData": {
      "inStrictMode": false,
        "tolerateEvalErrors": true,
          "evalErrorsHandler": "",
            "extraContextData": {
        "projectRemark": {
          "isSingleComponent": false
        },
        "template": {
          "slots": {
            "components": {
              "path": [
                "src",
                "components"
              ]
            },
            "pages": {
              "path": [
                "src",
                "pages"
              ]
            },
            "router": {
              "path": [
                "src"
              ],
                "fileName": "routes"
            },
            "entry": {
              "path": [
                "src"
              ],
                "fileName": "app"
            },
            "constants": {
              "path": [
                "src"
              ],
                "fileName": "constants"
            },
            "utils": {
              "path": [
                "src"
              ],
                "fileName": "utils"
            },
            "i18n": {
              "path": [
                "src"
              ],
                "fileName": "i18n"
            },
            "globalStyle": {
              "path": [
                "src"
              ],
                "fileName": "global"
            },
            "htmlEntry": {
              "path": [
                "public"
              ],
                "fileName": "index"
            },
            "packageJSON": {
              "path": [],
                "fileName": "package"
            }
          }
        }
      },
      "useRefApi": true
    }
  }

  // 1.2  groupChunks chunks
  { //没有这一层
    [
      [
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountContent",
          "content": "\n          this._dataSourceEngine.reloadDataSource();\n        ",
          "linkAfter": [
            "ReactComponentClassDidMountStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/form/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/input/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/number-picker/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/select/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/button/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineStart",
          "content": "class Test$$Page extends React.Component {",
          "linkAfter": [
            "CommonExternalDependencyImport",
            "CommonInternalDependencyImport",
            "CommonImportAliasDefine",
            "CommonFileScopeVarDefine",
            "CommonFileScopeMethodDefine"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineEnd",
          "content": "}",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd",
            "ReactComponentClassRenderEnd",
            "ReactComponentClassDidMountEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorStart",
          "content": "constructor(props, context) { super(props); ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorEnd",
          "content": "}",
          "linkAfter": [
            "CommonClassDefineConstructorStart",
            "CommonClassDefineConstructorContent"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountStart",
          "content": "componentDidMount() {",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountEnd",
          "content": "}",
          "linkAfter": [
            "ReactComponentClassDidMountContent",
            "ReactComponentClassDidMountStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderStart",
          "content": "render() {",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd",
            "ReactComponentClassDidMountEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderEnd",
          "content": "}",
          "linkAfter": [
            "ReactComponentClassRenderStart",
            "ReactComponentClassRenderPre",
            "ReactComponentClassRenderJSX"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonFileExport",
          "content": "export default Test$$Page;",
          "linkAfter": [
            "CommonExternalDependencyImport",
            "CommonInternalDependencyImport",
            "CommonImportAliasDefine",
            "CommonFileScopeVarDefine",
            "CommonFileScopeMethodDefine",
            "CommonClassDefineEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n          _context = this;\n        ",
          "linkAfter": [
            "CommonClassDefineStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this.utils = utils;",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this._refsManager = new RefsManager();",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            ",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            ",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        ",
          "linkAfter": []
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "\n        import * as __$$i18n from '../../i18n';\n      ",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "\n        __$$i18n._inject2(this);\n      ",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import __$$constants from '../../constants';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n        get constants() {\n          return __$$constants || {};\n        }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this.state = { text: \"outer\", };",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountContent",
          "content": "console.log('componentDidMount');",
          "linkAfter": [
            "ReactComponentClassDidMountStart"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderJSX",
          "content": "\n        const __$$context = this._context || this;\n        const { state } = __$$context;\n        return <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}><Form labelCol={__$$eval(() => (this.state.colNum))} style={{}} ref={this._refsManager.linkRef('testForm')}><Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\"><Input placeholder=\"请输入\" size=\"medium\" style={{\"width\": 320}} /></Form.Item><Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\"><NumberPicker size=\"medium\" type=\"normal\" /></Form.Item><Form.Item label=\"职业：\" name=\"profession\"><Select dataSource={[{\"label\": \"教师\",\n\"value\": \"t\"},{\"label\": \"医生\",\n\"value\": \"d\"},{\"label\": \"歌手\",\n\"value\": \"s\"}]} /></Form.Item><div style={{\"textAlign\": \"center\"}}><Button.Group>{(__$$evalArray(() => ([\"a\",\"b\",\"c\"]))).map((item, index) => ((__$$context) => (!!(__$$eval(() => (index >= 1))) && (<Button type=\"primary\" style={{\"margin\": \"0 5px 0 5px\"}}>{__$$eval(() => (item))}</Button>)))(__$$createChildContext(__$$context, { item, index })))}</Button.Group></div></Form></div>;\n      ",
          "linkAfter": [
            "ReactComponentClassRenderStart",
            "ReactComponentClassRenderPre"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonCustomContent",
          "content": "\n          function __$$eval(expr) {\n            try {\n              return expr();\n            } catch (error) {\n              \n            }\n          }\n\n          function __$$evalArray(expr) {\n            const res = __$$eval(expr);\n            return Array.isArray(res) ? res : [];\n          }\n      \n\n        function __$$createChildContext(oldContext, ext) {\n          const childContext = {\n            ...oldContext,\n            ...ext,\n          };\n          childContext.__proto__ = oldContext;\n          return childContext;\n        }\n      ",
          "linkAfter": [
            "CommonFileExport"
          ]
        },
        {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import './index.css';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        }
      ],
      [
        {
          "type": "string",
          "fileType": "css",
          "name": "CommonStyleCssContent",
          "linkAfter": [
            "CommonStyleDepsImport"
          ]
        }
      ]
    ]
  }

  // 1，3  groupChunks col
  {
    "index": [
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountContent",
          "content": "\n          this._dataSourceEngine.reloadDataSource();\n        ",
          "linkAfter": [
            "ReactComponentClassDidMountStart"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
          "linkAfter": []
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
          "linkAfter": []
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/form/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/input/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/number-picker/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/select/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import '@alifd/next/lib/button/style';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineStart",
          "content": "class Test$$Page extends React.Component {",
          "linkAfter": [
            "CommonExternalDependencyImport",
            "CommonInternalDependencyImport",
            "CommonImportAliasDefine",
            "CommonFileScopeVarDefine",
            "CommonFileScopeMethodDefine"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineEnd",
          "content": "}",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd",
            "ReactComponentClassRenderEnd",
            "ReactComponentClassDidMountEnd"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorStart",
          "content": "constructor(props, context) { super(props); ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorEnd",
          "content": "}",
          "linkAfter": [
            "CommonClassDefineConstructorStart",
            "CommonClassDefineConstructorContent"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountStart",
          "content": "componentDidMount() {",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountEnd",
          "content": "}",
          "linkAfter": [
            "ReactComponentClassDidMountContent",
            "ReactComponentClassDidMountStart"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderStart",
          "content": "render() {",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineInsMethod",
            "CommonClassDefineInsPrivateMethod",
            "CommonClassDefineConstructorEnd",
            "ReactComponentClassDidMountEnd"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderEnd",
          "content": "}",
          "linkAfter": [
            "ReactComponentClassRenderStart",
            "ReactComponentClassRenderPre",
            "ReactComponentClassRenderJSX"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonFileExport",
          "content": "export default Test$$Page;",
          "linkAfter": [
            "CommonExternalDependencyImport",
            "CommonInternalDependencyImport",
            "CommonImportAliasDefine",
            "CommonFileScopeVarDefine",
            "CommonFileScopeMethodDefine",
            "CommonClassDefineEnd"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n          _context = this;\n        ",
          "linkAfter": [
            "CommonClassDefineStart"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this.utils = utils;",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this._refsManager = new RefsManager();",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            ",
          "linkAfter": []
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            ",
          "linkAfter": []
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonExternalDependencyImport",
          "content": "\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        ",
          "linkAfter": []
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsMethod",
          "content": "\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod",
            "CommonClassDefineInsVar",
            "CommonClassDefineInsVarMethod",
            "CommonClassDefineConstructorEnd"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "\n        import * as __$$i18n from '../../i18n';\n      ",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "\n        __$$i18n._inject2(this);\n      ",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import __$$constants from '../../constants';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineInsVar",
          "content": "\n        get constants() {\n          return __$$constants || {};\n        }\n        ",
          "linkAfter": [
            "CommonClassDefineStart",
            "CommonClassDefineStaticVar",
            "CommonClassDefineStaticMethod"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonClassDefineConstructorContent",
          "content": "this.state = { text: \"outer\", };",
          "linkAfter": [
            "CommonClassDefineConstructorStart"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassDidMountContent",
          "content": "console.log('componentDidMount');",
          "linkAfter": [
            "ReactComponentClassDidMountStart"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "ReactComponentClassRenderJSX",
          "content": "\n        const __$$context = this._context || this;\n        const { state } = __$$context;\n        return <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}><Form labelCol={__$$eval(() => (this.state.colNum))} style={{}} ref={this._refsManager.linkRef('testForm')}><Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\"><Input placeholder=\"请输入\" size=\"medium\" style={{\"width\": 320}} /></Form.Item><Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\"><NumberPicker size=\"medium\" type=\"normal\" /></Form.Item><Form.Item label=\"职业：\" name=\"profession\"><Select dataSource={[{\"label\": \"教师\",\n\"value\": \"t\"},{\"label\": \"医生\",\n\"value\": \"d\"},{\"label\": \"歌手\",\n\"value\": \"s\"}]} /></Form.Item><div style={{\"textAlign\": \"center\"}}><Button.Group>{(__$$evalArray(() => ([\"a\",\"b\",\"c\"]))).map((item, index) => ((__$$context) => (!!(__$$eval(() => (index >= 1))) && (<Button type=\"primary\" style={{\"margin\": \"0 5px 0 5px\"}}>{__$$eval(() => (item))}</Button>)))(__$$createChildContext(__$$context, { item, index })))}</Button.Group></div></Form></div>;\n      ",
          "linkAfter": [
            "ReactComponentClassRenderStart",
            "ReactComponentClassRenderPre"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonCustomContent",
          "content": "\n          function __$$eval(expr) {\n            try {\n              return expr();\n            } catch (error) {\n              \n            }\n          }\n\n          function __$$evalArray(expr) {\n            const res = __$$eval(expr);\n            return Array.isArray(res) ? res : [];\n          }\n      \n\n        function __$$createChildContext(oldContext, ext) {\n          const childContext = {\n            ...oldContext,\n            ...ext,\n          };\n          childContext.__proto__ = oldContext;\n          return childContext;\n        }\n      ",
          "linkAfter": [
            "CommonFileExport"
          ]
        },
        "familyIdx": 0
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "css",
          "name": "CommonStyleCssContent",
          "linkAfter": [
            "CommonStyleDepsImport"
          ]
        }
      },
      {
        "chunk": {
          "type": "string",
          "fileType": "jsx",
          "name": "CommonInternalDependencyImport",
          "content": "import './index.css';",
          "linkAfter": [
            "CommonExternalDependencyImport"
          ]
        },
        "familyIdx": 0
      }
    ]
  }

  // 1.4 groupChunks result
  [
    [
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassDidMountContent",
        "content": "\n          this._dataSourceEngine.reloadDataSource();\n        ",
        "linkAfter": [
          "ReactComponentClassDidMountStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/form/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/input/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/number-picker/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/select/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import '@alifd/next/lib/button/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineStart",
        "content": "class Test$$Page extends React.Component {",
        "linkAfter": [
          "CommonExternalDependencyImport",
          "CommonInternalDependencyImport",
          "CommonImportAliasDefine",
          "CommonFileScopeVarDefine",
          "CommonFileScopeMethodDefine"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineEnd",
        "content": "}",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineInsMethod",
          "CommonClassDefineInsPrivateMethod",
          "CommonClassDefineConstructorEnd",
          "ReactComponentClassRenderEnd",
          "ReactComponentClassDidMountEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorStart",
        "content": "constructor(props, context) { super(props); ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorEnd",
        "content": "}",
        "linkAfter": [
          "CommonClassDefineConstructorStart",
          "CommonClassDefineConstructorContent"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassDidMountStart",
        "content": "componentDidMount() {",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineInsMethod",
          "CommonClassDefineInsPrivateMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassDidMountEnd",
        "content": "}",
        "linkAfter": [
          "ReactComponentClassDidMountContent",
          "ReactComponentClassDidMountStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassRenderStart",
        "content": "render() {",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineInsMethod",
          "CommonClassDefineInsPrivateMethod",
          "CommonClassDefineConstructorEnd",
          "ReactComponentClassDidMountEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassRenderEnd",
        "content": "}",
        "linkAfter": [
          "ReactComponentClassRenderStart",
          "ReactComponentClassRenderPre",
          "ReactComponentClassRenderJSX"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonFileExport",
        "content": "export default Test$$Page;",
        "linkAfter": [
          "CommonExternalDependencyImport",
          "CommonInternalDependencyImport",
          "CommonImportAliasDefine",
          "CommonFileScopeVarDefine",
          "CommonFileScopeMethodDefine",
          "CommonClassDefineEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsVar",
        "content": "\n          _context = this;\n        ",
        "linkAfter": [
          "CommonClassDefineStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorContent",
        "content": "this.utils = utils;",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorContent",
        "content": "this._refsManager = new RefsManager();",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsMethod",
        "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsMethod",
        "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            ",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            ",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        ",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsVar",
        "content": "\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsMethod",
        "content": "\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsVarMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "\n        import * as __$$i18n from '../../i18n';\n      ",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorContent",
        "content": "\n        __$$i18n._inject2(this);\n      ",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import __$$constants from '../../constants';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineInsVar",
        "content": "\n        get constants() {\n          return __$$constants || {};\n        }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineStaticVar",
          "CommonClassDefineStaticMethod"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonClassDefineConstructorContent",
        "content": "this.state = { text: \"outer\", };",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassDidMountContent",
        "content": "console.log('componentDidMount');",
        "linkAfter": [
          "ReactComponentClassDidMountStart"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassRenderJSX",
        "content": "\n        const __$$context = this._context || this;\n        const { state } = __$$context;\n        return <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}><Form labelCol={__$$eval(() => (this.state.colNum))} style={{}} ref={this._refsManager.linkRef('testForm')}><Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\"><Input placeholder=\"请输入\" size=\"medium\" style={{\"width\": 320}} /></Form.Item><Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\"><NumberPicker size=\"medium\" type=\"normal\" /></Form.Item><Form.Item label=\"职业：\" name=\"profession\"><Select dataSource={[{\"label\": \"教师\",\n\"value\": \"t\"},{\"label\": \"医生\",\n\"value\": \"d\"},{\"label\": \"歌手\",\n\"value\": \"s\"}]} /></Form.Item><div style={{\"textAlign\": \"center\"}}><Button.Group>{(__$$evalArray(() => ([\"a\",\"b\",\"c\"]))).map((item, index) => ((__$$context) => (!!(__$$eval(() => (index >= 1))) && (<Button type=\"primary\" style={{\"margin\": \"0 5px 0 5px\"}}>{__$$eval(() => (item))}</Button>)))(__$$createChildContext(__$$context, { item, index })))}</Button.Group></div></Form></div>;\n      ",
        "linkAfter": [
          "ReactComponentClassRenderStart",
          "ReactComponentClassRenderPre"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonCustomContent",
        "content": "\n          function __$$eval(expr) {\n            try {\n              return expr();\n            } catch (error) {\n              \n            }\n          }\n\n          function __$$evalArray(expr) {\n            const res = __$$eval(expr);\n            return Array.isArray(res) ? res : [];\n          }\n      \n\n        function __$$createChildContext(oldContext, ext) {\n          const childContext = {\n            ...oldContext,\n            ...ext,\n          };\n          childContext.__proto__ = oldContext;\n          return childContext;\n        }\n      ",
        "linkAfter": [
          "CommonFileExport"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonInternalDependencyImport",
        "content": "import './index.css';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      }
    ],
    [
      {
        "type": "string",
        "fileType": "css",
        "name": "CommonStyleCssContent",
        "linkAfter": [
          "CommonStyleDepsImport"
        ]
      }
    ]
  ]
  // 变量：structure.contextData  
  {
    "inStrictMode": false,
      "tolerateEvalErrors": true,
        "evalErrorsHandler": "",
          "extraContextData": {
      "projectRemark": {
        "isSingleComponent": false
      },
      "template": {
        "slots": {
          "components": {
            "path": [
              "src",
              "components"
            ]
          },
          "pages": {
            "path": [
              "src",
              "pages"
            ]
          },
          "router": {
            "path": [
              "src"
            ],
              "fileName": "routes"
          },
          "entry": {
            "path": [
              "src"
            ],
              "fileName": "app"
          },
          "constants": {
            "path": [
              "src"
            ],
              "fileName": "constants"
          },
          "utils": {
            "path": [
              "src"
            ],
              "fileName": "utils"
          },
          "i18n": {
            "path": [
              "src"
            ],
              "fileName": "i18n"
          },
          "globalStyle": {
            "path": [
              "src"
            ],
              "fileName": "global"
          },
          "htmlEntry": {
            "path": [
              "public"
            ],
              "fileName": "index"
          },
          "packageJSON": {
            "path": [],
              "fileName": "package"
          }
        }
      }
    }
  }
}
// 变量 this.plugins
{ // 没有这一层
  [// 14个
    async (pre) => {
      const next = {
        ...pre
      };
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: COMMON_CHUNK_NAME.ExternalDepsImport,
        content: `
    // \u6CE8\u610F: \u51FA\u7801\u5F15\u64CE\u6CE8\u5165\u7684\u4E34\u65F6\u53D8\u91CF\u9ED8\u8BA4\u90FD\u4EE5 "__$$" \u5F00\u5934\uFF0C\u7981\u6B62\u5728\u642D\u5EFA\u7684\u4EE3\u7801\u4E2D\u76F4\u63A5\u8BBF\u95EE\u3002
    // \u4F8B\u5916\uFF1Areact \u6846\u67B6\u7684\u5BFC\u51FA\u540D\u548C\u5404\u79CD\u7EC4\u4EF6\u540D\u9664\u5916\u3002
    import React from 'react';`,
        linkAfter: []
      });
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const ir = next.ir;
      if (ir && ir.deps && ir.deps.length > 0) {
        const deps = cfg.filter ? cfg.filter(ir.deps) : ir.deps;
        const packs = groupDepsByPack(deps);
        Object.keys(packs).forEach((pkg) => {
          const chunks = buildPackageImport(pkg, packs[pkg], cfg.fileType, cfg.useAliasName);
          next.chunks.push(...chunks);
        });
      }
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const ir = next.ir;
      const { chunks } = next;
      if (ir && ir.deps && ir.deps.length > 0) {
        let lowcodeMaterialsStyleAdded = false;
        let fusionUIStyleAdded = false;
        let nextStyleAddedMap = {};
        ir.deps.forEach((dep) => {
          if (dep.package === "@alifd/next" && !nextStyleAddedMap[dep.exportName]) {
            chunks.push({
              type: "string" /* STRING */,
              fileType: "jsx" /* JSX */,
              name: COMMON_CHUNK_NAME.InternalDepsImport,
              content: `import '@alifd/next/lib/${import_change_case3.default.paramCase(dep.exportName)}/style';`,
              linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
            });
            nextStyleAddedMap[dep.exportName] = true;
          } else if (dep.package === "@alilc/lowcode-materials" && !lowcodeMaterialsStyleAdded) {
            chunks.push({
              type: "string" /* STRING */,
              fileType: "jsx" /* JSX */,
              name: COMMON_CHUNK_NAME.InternalDepsImport,
              content: "import '@alilc/lowcode-materials/lib/style';",
              linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
            });
            lowcodeMaterialsStyleAdded = true;
          } else if (dep.package === "@alifd/fusion-ui" && !fusionUIStyleAdded) {
            chunks.push({
              type: "string" /* STRING */,
              fileType: "jsx" /* JSX */,
              name: COMMON_CHUNK_NAME.InternalDepsImport,
              content: "import '@alifd/fusion-ui/lib/style';",
              linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
            });
            fusionUIStyleAdded = true;
          }
        });
      }
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const ir = next.ir;
      const componentClassName = ensureValidClassName(
        `${import_change_case4.default.pascalCase(ir.moduleName)}$$${ir.containerType}`
      );
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: CLASS_DEFINE_CHUNK_NAME.Start,
        content: `class ${componentClassName} extends React.Component {`,
        linkAfter: [
          COMMON_CHUNK_NAME.ExternalDepsImport,
          COMMON_CHUNK_NAME.InternalDepsImport,
          COMMON_CHUNK_NAME.ImportAliasDefine,
          COMMON_CHUNK_NAME.FileVarDefine,
          COMMON_CHUNK_NAME.FileUtilDefine
        ]
      });
      if (ir.containerType === "Component") {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: "jsx" /* JSX */,
          name: CLASS_DEFINE_CHUNK_NAME.InsVar,
          content: `static displayName = '${ir.moduleName}';`,
          linkAfter: [
            CLASS_DEFINE_CHUNK_NAME.Start
          ]
        });
      }
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: CLASS_DEFINE_CHUNK_NAME.End,
        content: "}",
        linkAfter: [
          ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
          REACT_CHUNK_NAME.ClassRenderEnd,
          REACT_CHUNK_NAME.ClassDidMountEnd
        ]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
        content: "constructor(props, context) { super(props); ",
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart]]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
        content: "}",
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorEnd]]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: REACT_CHUNK_NAME.ClassDidMountStart,
        content: "componentDidMount() {",
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End]]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: REACT_CHUNK_NAME.ClassDidMountEnd,
        content: "}",
        linkAfter: [REACT_CHUNK_NAME.ClassDidMountContent, REACT_CHUNK_NAME.ClassDidMountStart]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: REACT_CHUNK_NAME.ClassRenderStart,
        content: "render() {",
        linkAfter: [
          ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
          REACT_CHUNK_NAME.ClassDidMountEnd
        ]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: REACT_CHUNK_NAME.ClassRenderEnd,
        content: "}",
        linkAfter: [
          REACT_CHUNK_NAME.ClassRenderStart,
          REACT_CHUNK_NAME.ClassRenderPre,
          REACT_CHUNK_NAME.ClassRenderJSX
        ]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: COMMON_CHUNK_NAME.FileExport,
        content: `export default ${componentClassName};`,
        linkAfter: [
          COMMON_CHUNK_NAME.ExternalDepsImport,
          COMMON_CHUNK_NAME.InternalDepsImport,
          COMMON_CHUNK_NAME.ImportAliasDefine,
          COMMON_CHUNK_NAME.FileVarDefine,
          COMMON_CHUNK_NAME.FileUtilDefine,
          CLASS_DEFINE_CHUNK_NAME.End
        ]
      });
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const ir = next.ir;
      const scope = Scope.createRootScope();
      const { inStrictMode } = next.contextData;
      if (!inStrictMode) {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsVar,
          content: `
              _context = this;
            `,
          linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
        });
      } else {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsVar,
          content: `
              _context = this._createContext();
            `,
          linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
        });
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
          content: `
              _createContext() {
                const self = this;
                const context = {
                  get state() { return self.state; },
                  setState(newState, callback) { self.setState(newState, callback); },
                  get dataSourceMap() { return self._dataSourceEngine.dataSourceMap || {}; },
                  async reloadDataSource() { await self._dataSourceEngine.reloadDataSource(); },
                  get utils() { return self.utils; },
                  get page() { return context; },
                  get component() { return context; },
                  get props() { return self.props; },
                  get constants() { return self.constants; },
                  get $() { return self.$ },
                  get $$() { return self.$$ },
                  ...this._methods,
                };
      
                return context;
              }
            `,
          linkAfter: DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod]
        });
      }
      return next;
    },
    async (pre) => {
      var _a;
      const next = {
        ...pre
      };
      const ir = next.ir;
      next.contextData.useRefApi = true;
      const useRef = !!((_a = ir.analyzeResult) == null ? void 0 : _a.isUsingRef);
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: COMMON_CHUNK_NAME.InternalDepsImport,
        content: `
            import utils${useRef ? ", { RefsManager }" : ""} from '${getSlotRelativePath({ contextData: next.contextData, from: "components", to: "utils" })}';
          `,
        linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
      });
      if (cfg.preferClassProperty) {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsVar,
          content: "utils = utils;",
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
        });
      } else {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
          content: "this.utils = utils;",
          linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart]
        });
      }
      if (useRef) {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
          content: "this._refsManager = new RefsManager();",
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
        });
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
          content: `
              $ = (refName) => {
                return this._refsManager.get(refName);
              }
            `,
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
        });
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
          content: `
              $$ = (refName) => {
                return this._refsManager.getAll(refName);
              }
            `,
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
        });
      } else {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
          content: " $ = () => null; ",
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
        });
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
          content: " $$ = () => [];        ",
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
        });
      }
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const scope = Scope.createRootScope();
      const dataSourceConfig = isValidContainerType(pre.ir) ? pre.ir.dataSource : null;
      const dataSourceItems = dataSourceConfig && dataSourceConfig.list || [];
      const dataSourceEngineOptions = { runtimeConfig: true };
      if (dataSourceItems.length > 0) {
        const requestHandlersMap = {};
        dataSourceItems.forEach((ds) => {
          var _a, _b;
          const dsType = ds.type || "fetch";
          if (!(dsType in requestHandlersMap) && dsType !== "custom") {
            const handlerFactoryName = `__$$create${import_change_case5.default.pascal(dsType)}RequestHandler`;
            requestHandlersMap[dsType] = {
              type: "JSExpression",
              value: handlerFactoryName + (dsType === "urlParams" ? "(window.location.search)" : "()")
            };
            const handlerFactoryExportName = `create${import_change_case5.default.pascal(dsType)}Handler`;
            const handlerPkgName = ((_b = (_a = cfg.datasourceConfig) == null ? void 0 : _a.handlersPackages) == null ? void 0 : _b[dsType]) || `@alilc/lowcode-datasource-${import_change_case5.default.kebab(dsType)}-handler`;
            next.chunks.push({
              type: "string" /* STRING */,
              fileType: "jsx" /* JSX */,
              name: COMMON_CHUNK_NAME.ExternalDepsImport,
              content: `
                  import { ${handlerFactoryExportName} as ${handlerFactoryName} } from '${handlerPkgName}';
                `,
              linkAfter: []
            });
          }
        });
        Object.assign(dataSourceEngineOptions, { requestHandlersMap });
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: "jsx" /* JSX */,
          name: COMMON_CHUNK_NAME.ExternalDepsImport,
          content: `
              import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';
            `,
          linkAfter: []
        });
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsVar,
          content: `
              _dataSourceConfig = this._defineDataSourceConfig();
              _dataSourceEngine = __$$createDataSourceEngine(
                this._dataSourceConfig,
                this,
                ${generateCompositeType(dataSourceEngineOptions, scope)}
              );
    
              get dataSourceMap() {
                return this._dataSourceEngine.dataSourceMap || {};
              }
    
              reloadDataSource = async () => {
                await this._dataSourceEngine.reloadDataSource();
              }
    
              `,
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
        });
        next.chunks.unshift({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: REACT_CHUNK_NAME.ClassDidMountContent,
          content: `
              this._dataSourceEngine.reloadDataSource();
            `,
          linkAfter: [REACT_CHUNK_NAME.ClassDidMountStart]
        });
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
          content: `
      _defineDataSourceConfig() {
        const _this = this;
        return (${generateCompositeType(
            {
              ...dataSourceConfig,
              list: [
                ...dataSourceItems.map((item) => ({
                  ...item,
                  isInit: wrapAsFunction(item.isInit, scope),
                  options: wrapAsFunction(item.options, scope)
                }))
              ]
            },
            scope,
            {
              handlers: {
                function: (jsFunc) => parseExpressionConvertThis2Context(jsFunc.value, "_this"),
                expression: (jsExpr) => parseExpressionConvertThis2Context(jsExpr.value, "_this")
              }
            }
          )});
      }
            `,
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
        });
      }
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: COMMON_CHUNK_NAME.InternalDepsImport,
        content: `
            import * as __$$i18n from '${getSlotRelativePath({ contextData: next.contextData, from: "components", to: "i18n" })}';
          `,
        linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
        content: `
            __$$i18n._inject2(this);
          `,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
      });
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: COMMON_CHUNK_NAME.InternalDepsImport,
        content: "import __$$constants from '../../constants';",
        linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: `
            get constants() {
              return __$$constants || {};
            }
            `,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
      });
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const ir = next.ir;
      const scope = Scope.createRootScope();
      const state = ir.state || {};
      const fields = Object.keys(state).map((stateName) => {
        const value = generateCompositeType(state[stateName], scope);
        return `${stateName}: ${value},`;
      });
      if (cfg.implementType === "inConstructor") {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
          content: `this.state = { ${fields.join("")} };`,
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
        });
      } else if (cfg.implementType === "insMember") {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsVar,
          content: `state = { ${fields.join("")} };`,
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
        });
      }
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const ir = next.ir;
      if (ir.lifeCycles) {
        const { lifeCycles } = ir;
        const chunks = Object.keys(lifeCycles).map((lifeCycleName) => {
          var _a;
          if (!(0, import_lowcode_types6.isJSFunction)(lifeCycles[lifeCycleName]) && !isJSExpressionFn(lifeCycles[lifeCycleName]) && !(0, import_lowcode_types6.isJSExpression)(lifeCycles[lifeCycleName])) {
            return null;
          }
          let normalizeName;
          if (lifeCycleName === "constructor") {
            normalizeName = lifeCycleName;
          } else {
            normalizeName = cfg.normalizeNameMapping[lifeCycleName] || lifeCycleName;
          }
          if ((_a = cfg == null ? void 0 : cfg.exclude) == null ? void 0 : _a.includes(normalizeName)) {
            return null;
          }
          const exportName = cfg.exportNameMapping[lifeCycleName] || lifeCycleName;
          if (normalizeName === "constructor") {
            return {
              type: "string" /* STRING */,
              fileType: cfg.fileType,
              name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
              content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
              linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart]]
            };
          }
          if (normalizeName === "componentDidMount") {
            return {
              type: "string" /* STRING */,
              fileType: cfg.fileType,
              name: REACT_CHUNK_NAME.ClassDidMountContent,
              content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
              linkAfter: [REACT_CHUNK_NAME.ClassDidMountStart]
            };
          }
          if (normalizeName === "render") {
            return {
              type: "string" /* STRING */,
              fileType: cfg.fileType,
              name: REACT_CHUNK_NAME.ClassRenderPre,
              content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
              linkAfter: [REACT_CHUNK_NAME.ClassRenderStart]
            };
          }
          return {
            type: "string" /* STRING */,
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
            content: generateFunction(lifeCycles[lifeCycleName], {
              name: exportName,
              isMember: true
            }),
            linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
          };
        }).filter((i) => !!i);
        next.chunks.push(...chunks.filter((x) => x !== null));
      }
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const ir = next.ir;
      const { inStrictMode } = next.contextData;
      if (!ir.methods) {
        return next;
      }
      const { methods } = ir;
      const chunks = Object.keys(methods).map((methodName) => ({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
        content: generateFunction(methods[methodName], { name: methodName, isMember: true }),
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
      }));
      next.chunks.push(...chunks);
      if (inStrictMode) {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
          content: Object.keys(ir.methods).map(
            (methodName) => isValidIdentifier(methodName) ? `.${methodName}` : `[${JSON.stringify(methodName)}]`
          ).map((method) => `this._context${method} = this${method};`).join("\n"),
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
        });
      }
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const { tolerateEvalErrors = true, evalErrorsHandler = "" } = next.contextData;
      const customHandlers = {
        expression(input, scope2, config2) {
          var _a;
          return transformJsExpr(generateExpression(input, scope2), scope2, {
            dontWrapEval: !((_a = config2 == null ? void 0 : config2.tolerateEvalErrors) != null ? _a : tolerateEvalErrors),
            dontTransformThis2ContextAtRootScope: true
          });
        },
        function(input, scope2) {
          return transformThis2Context(
            generateCompositeType(
              {
                type: "JSFunction",
                value: input.value || "function () {}"
              },
              Scope.createRootScope()
            ),
            scope2,
            { ignoreRootScope: true }
          );
        }
      };
      const generatorPlugins = {
        handlers: customHandlers,
        tagMapping: (v) => nodeTypeMapping[v] || v,
        tolerateEvalErrors
      };
      if (next.contextData.useRefApi) {
        generatorPlugins.attrPlugins = [
          (attrData, scope2, pluginCfg, nextFunc) => {
            if (attrData.attrName === "ref") {
              return [
                {
                  name: attrData.attrName,
                  value: `this._refsManager.linkRef('${attrData.attrValue}')`,
                  type: "NodeCodePieceAttr" /* ATTR */
                }
              ];
            }
            return nextFunc ? nextFunc(attrData, scope2, pluginCfg) : [];
          }
        ];
      }
      const generator = createReactNodeGenerator(generatorPlugins);
      const ir = next.ir;
      const scope = Scope.createRootScope();
      const jsxContent = generator(ir, scope);
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: REACT_CHUNK_NAME.ClassRenderJSX,
        content: `
            const __$$context = this._context || this;
            const { state } = __$$context;
            return ${jsxContent};
          `,
        linkAfter: [REACT_CHUNK_NAME.ClassRenderStart, REACT_CHUNK_NAME.ClassRenderPre]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: COMMON_CHUNK_NAME.CustomContent,
        content: [
          tolerateEvalErrors && `
              function __$$eval(expr) {
                try {
                  return expr();
                } catch (error) {
                  ${evalErrorsHandler}
                }
              }
    
              function __$$evalArray(expr) {
                const res = __$$eval(expr);
                return Array.isArray(res) ? res : [];
              }
          `,
          `
            function __$$createChildContext(oldContext, ext) {
              const childContext = {
                ...oldContext,
                ...ext,
              };
              childContext.__proto__ = oldContext;
              return childContext;
            }
          `
        ].filter(Boolean).join("\n"),
        linkAfter: [COMMON_CHUNK_NAME.FileExport]
      });
      return next;
    },
    async (pre) => {
      const next = {
        ...pre
      };
      const ir = next.ir;
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: COMMON_CHUNK_NAME.StyleCssContent,
        content: ir.css,
        linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.moduleFileType,
        name: COMMON_CHUNK_NAME.InternalDepsImport,
        content: `import './index.${cfg.fileType}';`,
        linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
      });
      return next;
    }
  ]
}

// CodeBuilder
{
  // 1.1 link  unprocessedChunks
  { //没层
    [
      { 
        "name": "ReactComponentClassDidMountContent",
        "type": "string",
        "content": "\n          this._dataSourceEngine.reloadDataSource();\n        ",
        "linkAfter": [
          "ReactComponentClassDidMountStart"
        ]
      },
      // {  1 ===
      //   "name": "CommonExternalDependencyImport",
      //   "type": "string",
      //   "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
      //   "linkAfter": []
      // },
      // { 2 ===
      //   "name": "CommonExternalDependencyImport",
      //   "type": "string",
      //   "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
      //   "linkAfter": []
      // },
      {//[3, ]
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "import '@alifd/next/lib/form/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {//[4, ]
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "import '@alifd/next/lib/input/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {//[5, ]
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "import '@alifd/next/lib/number-picker/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {//[6, ]
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "import '@alifd/next/lib/select/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {//[7, ]
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "import '@alifd/next/lib/button/style';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {//[8, ]
        "name": "CommonClassDefineStart",
        "type": "string",
        "content": "class Test$$Page extends React.Component {",
        "linkAfter": [
          "CommonExternalDependencyImport",
          "CommonInternalDependencyImport"
        ]
      },
      {//[9, ]
        "name": "CommonClassDefineEnd",
        "type": "string",
        "content": "}",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsMethod",
          "CommonClassDefineConstructorEnd",
          "ReactComponentClassRenderEnd",
          "ReactComponentClassDidMountEnd"
        ]
      },
      {//[10, ]
        "name": "CommonClassDefineConstructorStart",
        "type": "string",
        "content": "constructor(props, context) { super(props); ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineInsVar"
        ]
      },
      {//[11, ]
        "name": "CommonClassDefineConstructorEnd",
        "type": "string",
        "content": "}",
        "linkAfter": [
          "CommonClassDefineConstructorStart",
          "CommonClassDefineConstructorContent"
        ]
      },
      {//[12, ]
        "name": "ReactComponentClassDidMountStart",
        "type": "string",
        "content": "componentDidMount() {",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsMethod",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {//[13, ]
        "name": "ReactComponentClassDidMountEnd",
        "type": "string",
        "content": "}",
        "linkAfter": [
          "ReactComponentClassDidMountContent",
          "ReactComponentClassDidMountStart"
        ]
      },
      {//[14, ]
        "name": "ReactComponentClassRenderStart",
        "type": "string",
        "content": "render() {",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineInsVar",
          "CommonClassDefineInsMethod",
          "CommonClassDefineConstructorEnd",
          "ReactComponentClassDidMountEnd"
        ]
      },
      {//[15, ]
        "name": "ReactComponentClassRenderEnd",
        "type": "string",
        "content": "}",
        "linkAfter": [
          "ReactComponentClassRenderStart",
          "ReactComponentClassRenderJSX"
        ]
      },
      {//[16, ]
        "name": "CommonFileExport",
        "type": "string",
        "content": "export default Test$$Page;",
        "linkAfter": [
          "CommonExternalDependencyImport",
          "CommonInternalDependencyImport",
          "CommonClassDefineEnd"
        ]
      },
      {//[17, ]
        "name": "CommonClassDefineInsVar",
        "type": "string",
        "content": "\n          _context = this;\n        ",
        "linkAfter": [
          "CommonClassDefineStart"
        ]
      },
      {//[18, ]
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {//[19, ]
        "name": "CommonClassDefineConstructorContent",
        "type": "string",
        "content": "this.utils = utils;",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {//[20, ]
        "name": "CommonClassDefineConstructorContent",
        "type": "string",
        "content": "this._refsManager = new RefsManager();",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {//[21, ]
        "name": "CommonClassDefineInsMethod",
        "type": "string",
        "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineInsVar",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "name": "CommonClassDefineInsMethod",
        "type": "string",
        "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineInsVar",
          "CommonClassDefineConstructorEnd"
        ]
      },
      // { //  3 ===
      //   "name": "CommonExternalDependencyImport",
      //   "type": "string",
      //   "content": "\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            ",
      //   "linkAfter": []
      // },
      // {//  4 ===
      //   "name": "CommonExternalDependencyImport",
      //   "type": "string",
      //   "content": "\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            ",
      //   "linkAfter": []
      // },
      {
        "name": "CommonExternalDependencyImport",
        "type": "string",
        "content": "\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        ",
        "linkAfter": []
      },
      {
        "name": "CommonClassDefineInsVar",
        "type": "string",
        "content": "\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          ",
        "linkAfter": [
          "CommonClassDefineStart"
        ]
      },
      {
        "name": "CommonClassDefineInsMethod",
        "type": "string",
        "content": "\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        ",
        "linkAfter": [
          "CommonClassDefineStart",
          "CommonClassDefineInsVar",
          "CommonClassDefineConstructorEnd"
        ]
      },
      {
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "\n        import * as __$$i18n from '../../i18n';\n      ",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "name": "CommonClassDefineConstructorContent",
        "type": "string",
        "content": "\n        __$$i18n._inject2(this);\n      ",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "import __$$constants from '../../constants';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      },
      {
        "name": "CommonClassDefineInsVar",
        "type": "string",
        "content": "\n        get constants() {\n          return __$$constants || {};\n        }\n        ",
        "linkAfter": [
          "CommonClassDefineStart"
        ]
      },
      {
        "name": "CommonClassDefineConstructorContent",
        "type": "string",
        "content": "this.state = { text: \"outer\", };",
        "linkAfter": [
          "CommonClassDefineConstructorStart"
        ]
      },
      {
        "name": "ReactComponentClassDidMountContent",
        "type": "string",
        "content": "console.log('componentDidMount');",
        "linkAfter": [
          "ReactComponentClassDidMountStart"
        ]
      },
      {
        "name": "ReactComponentClassRenderJSX",
        "type": "string",
        "content": "\n        const __$$context = this._context || this;\n        const { state } = __$$context;\n        return <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}><Form labelCol={__$$eval(() => (this.state.colNum))} style={{}} ref={this._refsManager.linkRef('testForm')}><Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\"><Input placeholder=\"请输入\" size=\"medium\" style={{\"width\": 320}} /></Form.Item><Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\"><NumberPicker size=\"medium\" type=\"normal\" /></Form.Item><Form.Item label=\"职业：\" name=\"profession\"><Select dataSource={[{\"label\": \"教师\",\n\"value\": \"t\"},{\"label\": \"医生\",\n\"value\": \"d\"},{\"label\": \"歌手\",\n\"value\": \"s\"}]} /></Form.Item><div style={{\"textAlign\": \"center\"}}><Button.Group>{(__$$evalArray(() => ([\"a\",\"b\",\"c\"]))).map((item, index) => ((__$$context) => (!!(__$$eval(() => (index >= 1))) && (<Button type=\"primary\" style={{\"margin\": \"0 5px 0 5px\"}}>{__$$eval(() => (item))}</Button>)))(__$$createChildContext(__$$context, { item, index })))}</Button.Group></div></Form></div>;\n      ",
        "linkAfter": [
          "ReactComponentClassRenderStart"
        ]
      },
      {
        "name": "CommonCustomContent",
        "type": "string",
        "content": "\n          function __$$eval(expr) {\n            try {\n              return expr();\n            } catch (error) {\n              \n            }\n          }\n\n          function __$$evalArray(expr) {\n            const res = __$$eval(expr);\n            return Array.isArray(res) ? res : [];\n          }\n      \n\n        function __$$createChildContext(oldContext, ext) {\n          const childContext = {\n            ...oldContext,\n            ...ext,\n          };\n          childContext.__proto__ = oldContext;\n          return childContext;\n        }\n      ",
        "linkAfter": [
          "CommonFileExport"
        ]
      },
      {
        "name": "CommonInternalDependencyImport",
        "type": "string",
        "content": "import './index.css';",
        "linkAfter": [
          "CommonExternalDependencyImport"
        ]
      }
    ]
    unprocessedChunks [
      {
        "name": "CommonStyleCssContent",
        "type": "string",
        "linkAfter": []
      }
    ]
  }
}

// 一、reactCommonDeps() react依赖项
// 二、 ESmodule  esmodule({fileType: 'jsx' }),
{
  // 5.1 esmodule groupDepsByPack  dep===
  { // 没有这一层 dep是一个一个item
    {
      componentName: 'Form',
        package: '@alifd/next',
          version: '1.19.18',
            destructuring: true,
              exportName: 'Form',
                dependencyType: 'External'
    }
    {
      componentName: 'Form.Item',
        package: '@alifd/next',
          version: '1.19.18',
            destructuring: true,
              exportName: 'Form',
                subName: 'Item',
                  dependencyType: 'External'
    }
    {
      componentName: 'Input',
        package: '@alifd/next',
          version: '1.19.18',
            destructuring: true,
              exportName: 'Input',
                dependencyType: 'External'
    }
    {
      componentName: 'NumberPicker',
        package: '@alifd/next',
          version: '1.19.18',
            destructuring: true,
              exportName: 'NumberPicker',
                dependencyType: 'External'
    }
    {
      componentName: 'Select',
        package: '@alifd/next',
          version: '1.19.18',
            destructuring: true,
              exportName: 'Select',
                dependencyType: 'External'
    }
    {
      componentName: 'Button.Group',
        package: '@alifd/next',
          version: '1.19.18',
            destructuring: true,
              exportName: 'Button',
                subName: 'Group',
                  dependencyType: 'External'
    }
    {
      componentName: 'Button',
        package: '@alifd/next',
          version: '1.19.18',
            destructuring: true,
              exportName: 'Button',
                dependencyType: 'External'
    }
  }
  // 5.2 depMap=== 
  {
    '@alifd/next': [
      {
        componentName: 'Form',
        package: '@alifd/next',
        version: '1.19.18',
        destructuring: true,
        exportName: 'Form',
        dependencyType: 'External'
      },
      {
        componentName: 'Form.Item',
        package: '@alifd/next',
        version: '1.19.18',
        destructuring: true,
        exportName: 'Form',
        subName: 'Item',
        dependencyType: 'External'
      },
      {
        componentName: 'Input',
        package: '@alifd/next',
        version: '1.19.18',
        destructuring: true,
        exportName: 'Input',
        dependencyType: 'External'
      },
      {
        componentName: 'NumberPicker',
        package: '@alifd/next',
        version: '1.19.18',
        destructuring: true,
        exportName: 'NumberPicker',
        dependencyType: 'External'
      },
      {
        componentName: 'Select',
        package: '@alifd/next',
        version: '1.19.18',
        destructuring: true,
        exportName: 'Select',
        dependencyType: 'External'
      },
      {
        componentName: 'Button.Group',
        package: '@alifd/next',
        version: '1.19.18',
        destructuring: true,
        exportName: 'Button',
        subName: 'Group',
        dependencyType: 'External'
      },
      {
        componentName: 'Button',
        package: '@alifd/next',
        version: '1.19.18',
        destructuring: true,
        exportName: 'Button',
        dependencyType: 'External'
      }
    ]
  }
  // 5.3 esmodule  pluginFactory  plugin  pre入参===:
  {
    "ir": {
      "componentName": "Page",
        "id": "node$1",
          "meta": {
        "title": "测试",
          "router": "/"
      },
      "props": {
        "ref": "outerView",
          "autoLoading": true
      },
      "fileName": "test",
        "state": {
        "text": "outer"
      },
      "lifeCycles": {
        "componentDidMount": {
          "type": "JSFunction",
            "value": "function componentDidMount() { console.log('componentDidMount'); }"
        }
      },
      "dataSource": {
        "list": [
          {
            "id": "urlParams",
            "type": "urlParams"
          },
          {
            "id": "user",
            "type": "fetch",
            "options": {
              "method": "GET",
              "uri": "https://shs.xxx.com/mock/1458/demo/user",
              "isSync": true
            },
            "dataHandler": {
              "type": "JSFunction",
              "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
            }
          },
          {
            "id": "orders",
            "type": "fetch",
            "options": {
              "method": "GET",
              "uri": "https://shs.xxx.com/mock/1458/demo/orders",
              "isSync": true
            },
            "dataHandler": {
              "type": "JSFunction",
              "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
            }
          }
        ],
          "dataHandler": {
          "type": "JSFunction",
            "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
        }
      },
      "children": [
        {
          "componentName": "Form",
          "id": "node$2",
          "props": {
            "labelCol": {
              "type": "JSExpression",
              "value": "this.state.colNum"
            },
            "style": {},
            "ref": "testForm"
          },
          "children": [
            {
              "componentName": "Form.Item",
              "id": "node$3",
              "props": {
                "label": "姓名：",
                "name": "name",
                "initValue": "李雷"
              },
              "children": [
                {
                  "componentName": "Input",
                  "id": "node$4",
                  "props": {
                    "placeholder": "请输入",
                    "size": "medium",
                    "style": {
                      "width": 320
                    }
                  }
                }
              ]
            },
            {
              "componentName": "Form.Item",
              "id": "node$5",
              "props": {
                "label": "年龄：",
                "name": "age",
                "initValue": "22"
              },
              "children": [
                {
                  "componentName": "NumberPicker",
                  "id": "node$6",
                  "props": {
                    "size": "medium",
                    "type": "normal"
                  }
                }
              ]
            },
            {
              "componentName": "Form.Item",
              "id": "node$7",
              "props": {
                "label": "职业：",
                "name": "profession"
              },
              "children": [
                {
                  "componentName": "Select",
                  "id": "node$8",
                  "props": {
                    "dataSource": [
                      {
                        "label": "教师",
                        "value": "t"
                      },
                      {
                        "label": "医生",
                        "value": "d"
                      },
                      {
                        "label": "歌手",
                        "value": "s"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "componentName": "Div",
              "id": "node$9",
              "props": {
                "style": {
                  "textAlign": "center"
                }
              },
              "children": [
                {
                  "componentName": "Button.Group",
                  "id": "node$a",
                  "props": {},
                  "children": [
                    {
                      "componentName": "Button",
                      "id": "node$b",
                      "condition": {
                        "type": "JSExpression",
                        "value": "this.index >= 1"
                      },
                      "loop": [
                        "a",
                        "b",
                        "c"
                      ],
                      "props": {
                        "type": "primary",
                        "style": {
                          "margin": "0 5px 0 5px"
                        }
                      },
                      "children": [
                        {
                          "type": "JSExpression",
                          "value": "this.item"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
        "containerType": "Page",
          "moduleName": "Test",
            "analyzeResult": {
        "isUsingRef": true
      },
      "deps": [
        {
          "componentName": "Form",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Form",
          "dependencyType": "External"
        },
        {
          "componentName": "Form.Item",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Form",
          "subName": "Item",
          "dependencyType": "External"
        },
        {
          "componentName": "Input",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Input",
          "dependencyType": "External"
        },
        {
          "componentName": "NumberPicker",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "NumberPicker",
          "dependencyType": "External"
        },
        {
          "componentName": "Select",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Select",
          "dependencyType": "External"
        },
        {
          "componentName": "Button.Group",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Button",
          "subName": "Group",
          "dependencyType": "External"
        },
        {
          "componentName": "Button",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Button",
          "dependencyType": "External"
        }
      ]
    },
    "chunks": [
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
        "linkAfter": []
      }
    ],
      "depNames": [],
        "contextData": {
      "inStrictMode": false,
        "tolerateEvalErrors": true,
          "evalErrorsHandler": "",
            "extraContextData": {
        "projectRemark": {
          "isSingleComponent": false
        },
        "template": {
          "slots": {
            "components": {
              "path": [
                "src",
                "components"
              ]
            },
            "pages": {
              "path": [
                "src",
                "pages"
              ]
            },
            "router": {
              "path": [
                "src"
              ],
                "fileName": "routes"
            },
            "entry": {
              "path": [
                "src"
              ],
                "fileName": "app"
            },
            "constants": {
              "path": [
                "src"
              ],
                "fileName": "constants"
            },
            "utils": {
              "path": [
                "src"
              ],
                "fileName": "utils"
            },
            "i18n": {
              "path": [
                "src"
              ],
                "fileName": "i18n"
            },
            "globalStyle": {
              "path": [
                "src"
              ],
                "fileName": "global"
            },
            "htmlEntry": {
              "path": [
                "public"
              ],
                "fileName": "index"
            },
            "packageJSON": {
              "path": [],
                "fileName": "package"
            }
          }
        }
      }
    }
  }
  // 5.4 next ====
  {
    "ir": {
      "componentName": "Page",
        "id": "node$1",
          "meta": {
        "title": "测试",
          "router": "/"
      },
      "props": {
        "ref": "outerView",
          "autoLoading": true
      },
      "fileName": "test",
        "state": {
        "text": "outer"
      },
      "lifeCycles": {
        "componentDidMount": {
          "type": "JSFunction",
            "value": "function componentDidMount() { console.log('componentDidMount'); }"
        }
      },
      "dataSource": {
        "list": [
          {
            "id": "urlParams",
            "type": "urlParams"
          },
          {
            "id": "user",
            "type": "fetch",
            "options": {
              "method": "GET",
              "uri": "https://shs.xxx.com/mock/1458/demo/user",
              "isSync": true
            },
            "dataHandler": {
              "type": "JSFunction",
              "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
            }
          },
          {
            "id": "orders",
            "type": "fetch",
            "options": {
              "method": "GET",
              "uri": "https://shs.xxx.com/mock/1458/demo/orders",
              "isSync": true
            },
            "dataHandler": {
              "type": "JSFunction",
              "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
            }
          }
        ],
          "dataHandler": {
          "type": "JSFunction",
            "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
        }
      },
      "children": [
        {
          "componentName": "Form",
          "id": "node$2",
          "props": {
            "labelCol": {
              "type": "JSExpression",
              "value": "this.state.colNum"
            },
            "style": {},
            "ref": "testForm"
          },
          "children": [
            {
              "componentName": "Form.Item",
              "id": "node$3",
              "props": {
                "label": "姓名：",
                "name": "name",
                "initValue": "李雷"
              },
              "children": [
                {
                  "componentName": "Input",
                  "id": "node$4",
                  "props": {
                    "placeholder": "请输入",
                    "size": "medium",
                    "style": {
                      "width": 320
                    }
                  }
                }
              ]
            },
            {
              "componentName": "Form.Item",
              "id": "node$5",
              "props": {
                "label": "年龄：",
                "name": "age",
                "initValue": "22"
              },
              "children": [
                {
                  "componentName": "NumberPicker",
                  "id": "node$6",
                  "props": {
                    "size": "medium",
                    "type": "normal"
                  }
                }
              ]
            },
            {
              "componentName": "Form.Item",
              "id": "node$7",
              "props": {
                "label": "职业：",
                "name": "profession"
              },
              "children": [
                {
                  "componentName": "Select",
                  "id": "node$8",
                  "props": {
                    "dataSource": [
                      {
                        "label": "教师",
                        "value": "t"
                      },
                      {
                        "label": "医生",
                        "value": "d"
                      },
                      {
                        "label": "歌手",
                        "value": "s"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "componentName": "Div",
              "id": "node$9",
              "props": {
                "style": {
                  "textAlign": "center"
                }
              },
              "children": [
                {
                  "componentName": "Button.Group",
                  "id": "node$a",
                  "props": {},
                  "children": [
                    {
                      "componentName": "Button",
                      "id": "node$b",
                      "condition": {
                        "type": "JSExpression",
                        "value": "this.index >= 1"
                      },
                      "loop": [
                        "a",
                        "b",
                        "c"
                      ],
                      "props": {
                        "type": "primary",
                        "style": {
                          "margin": "0 5px 0 5px"
                        }
                      },
                      "children": [
                        {
                          "type": "JSExpression",
                          "value": "this.item"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
        "containerType": "Page",
          "moduleName": "Test",
            "analyzeResult": {
        "isUsingRef": true
      },
      "deps": [
        {
          "componentName": "Form",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Form",
          "dependencyType": "External"
        },
        {
          "componentName": "Form.Item",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Form",
          "subName": "Item",
          "dependencyType": "External"
        },
        {
          "componentName": "Input",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Input",
          "dependencyType": "External"
        },
        {
          "componentName": "NumberPicker",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "NumberPicker",
          "dependencyType": "External"
        },
        {
          "componentName": "Select",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Select",
          "dependencyType": "External"
        },
        {
          "componentName": "Button.Group",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Button",
          "subName": "Group",
          "dependencyType": "External"
        },
        {
          "componentName": "Button",
          "package": "@alifd/next",
          "version": "1.19.18",
          "destructuring": true,
          "exportName": "Button",
          "dependencyType": "External"
        }
      ]
    },
    "chunks": [
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
        "linkAfter": []
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonExternalDependencyImport",
        "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
        "linkAfter": []
      }
    ],
    "depNames": [],
        "contextData": {
      "inStrictMode": false,
        "tolerateEvalErrors": true,
          "evalErrorsHandler": "",
            "extraContextData": {
        "projectRemark": {
          "isSingleComponent": false
        },
        "template": {
          "slots": {
            "components": {
              "path": [
                "src",
                "components"
              ]
            },
            "pages": {
              "path": [
                "src",
                "pages"
              ]
            },
            "router": {
              "path": [
                "src"
              ],
                "fileName": "routes"
            },
            "entry": {
              "path": [
                "src"
              ],
                "fileName": "app"
            },
            "constants": {
              "path": [
                "src"
              ],
                "fileName": "constants"
            },
            "utils": {
              "path": [
                "src"
              ],
                "fileName": "utils"
            },
            "i18n": {
              "path": [
                "src"
              ],
                "fileName": "i18n"
            },
            "globalStyle": {
              "path": [
                "src"
              ],
                "fileName": "global"
            },
            "htmlEntry": {
              "path": [
                "public"
              ],
                "fileName": "index"
            },
            "packageJSON": {
              "path": [],
                "fileName": "package"
            }
          }
        }
      }
    }
  }
}

// 三、styleImport  组件需要引入多样式
{
  "ir": {
    "componentName": "Page",
    "id": "node$1",
    "meta": {
      "title": "测试",
      "router": "/"
    },
    "props": {
      "ref": "outerView",
      "autoLoading": true
    },
    "fileName": "test",
    "state": {
      "text": "outer"
    },
    "lifeCycles": {
      "componentDidMount": {
        "type": "JSFunction",
        "value": "function componentDidMount() { console.log('componentDidMount'); }"
      }
    },
    "dataSource": {
      "list": [
        {
          "id": "urlParams",
          "type": "urlParams"
        },
        {
          "id": "user",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/user",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
          }
        },
        {
          "id": "orders",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/orders",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
          }
        }
      ],
      "dataHandler": {
        "type": "JSFunction",
        "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
      }
    },
    "children": [
      {
        "componentName": "Form",
        "id": "node$2",
        "props": {
          "labelCol": {
            "type": "JSExpression",
            "value": "this.state.colNum"
          },
          "style": {},
          "ref": "testForm"
        },
        "children": [
          {
            "componentName": "Form.Item",
            "id": "node$3",
            "props": {
              "label": "姓名：",
              "name": "name",
              "initValue": "李雷"
            },
            "children": [
              {
                "componentName": "Input",
                "id": "node$4",
                "props": {
                  "placeholder": "请输入",
                  "size": "medium",
                  "style": {
                    "width": 320
                  }
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$5",
            "props": {
              "label": "年龄：",
              "name": "age",
              "initValue": "22"
            },
            "children": [
              {
                "componentName": "NumberPicker",
                "id": "node$6",
                "props": {
                  "size": "medium",
                  "type": "normal"
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$7",
            "props": {
              "label": "职业：",
              "name": "profession"
            },
            "children": [
              {
                "componentName": "Select",
                "id": "node$8",
                "props": {
                  "dataSource": [
                    {
                      "label": "教师",
                      "value": "t"
                    },
                    {
                      "label": "医生",
                      "value": "d"
                    },
                    {
                      "label": "歌手",
                      "value": "s"
                    }
                  ]
                }
              }
            ]
          },
          {
            "componentName": "Div",
            "id": "node$9",
            "props": {
              "style": {
                "textAlign": "center"
              }
            },
            "children": [
              {
                "componentName": "Button.Group",
                "id": "node$a",
                "props": {},
                "children": [
                  {
                    "componentName": "Button",
                    "id": "node$b",
                    "condition": {
                      "type": "JSExpression",
                      "value": "this.index >= 1"
                    },
                    "loop": [
                      "a",
                      "b",
                      "c"
                    ],
                    "props": {
                      "type": "primary",
                      "style": {
                        "margin": "0 5px 0 5px"
                      }
                    },
                    "children": [
                      {
                        "type": "JSExpression",
                        "value": "this.item"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "containerType": "Page",
    "moduleName": "Test",
    "analyzeResult": {
      "isUsingRef": true
    },
    "deps": [
      {
        "componentName": "Form",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "dependencyType": "External"
      },
      {
        "componentName": "Form.Item",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "subName": "Item",
        "dependencyType": "External"
      },
      {
        "componentName": "Input",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Input",
        "dependencyType": "External"
      },
      {
        "componentName": "NumberPicker",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "NumberPicker",
        "dependencyType": "External"
      },
      {
        "componentName": "Select",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Select",
        "dependencyType": "External"
      },
      {
        "componentName": "Button.Group",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "subName": "Group",
        "dependencyType": "External"
      },
      {
        "componentName": "Button",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "dependencyType": "External"
      }
    ]
  },
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/form/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/input/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/number-picker/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/select/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/button/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    }
  ],
  "depNames": [],
  "contextData": {
    "inStrictMode": false,
    "tolerateEvalErrors": true,
    "evalErrorsHandler": "",
    "extraContextData": {
      "projectRemark": {
        "isSingleComponent": false
      },
      "template": {
        "slots": {
          "components": {
            "path": [
              "src",
              "components"
            ]
          },
          "pages": {
            "path": [
              "src",
              "pages"
            ]
          },
          "router": {
            "path": [
              "src"
            ],
            "fileName": "routes"
          },
          "entry": {
            "path": [
              "src"
            ],
            "fileName": "app"
          },
          "constants": {
            "path": [
              "src"
            ],
            "fileName": "constants"
          },
          "utils": {
            "path": [
              "src"
            ],
            "fileName": "utils"
          },
          "i18n": {
            "path": [
              "src"
            ],
            "fileName": "i18n"
          },
          "globalStyle": {
            "path": [
              "src"
            ],
            "fileName": "global"
          },
          "htmlEntry": {
            "path": [
              "public"
            ],
            "fileName": "index"
          },
          "packageJSON": {
            "path": [],
            "fileName": "package"
          }
        }
      }
    }
  }
}

// 四、 containerClass(),  ReactComponent组件大致结构
{
  "ir": {
    "componentName": "Page",
    "id": "node$1",
    "meta": {
      "title": "测试",
      "router": "/"
    },
    "props": {
      "ref": "outerView",
      "autoLoading": true
    },
    "fileName": "test",
    "state": {
      "text": "outer"
    },
    "lifeCycles": {
      "componentDidMount": {
        "type": "JSFunction",
        "value": "function componentDidMount() { console.log('componentDidMount'); }"
      }
    },
    "dataSource": {
      "list": [
        {
          "id": "urlParams",
          "type": "urlParams"
        },
        {
          "id": "user",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/user",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
          }
        },
        {
          "id": "orders",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/orders",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
          }
        }
      ],
      "dataHandler": {
        "type": "JSFunction",
        "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
      }
    },
    "children": [
      {
        "componentName": "Form",
        "id": "node$2",
        "props": {
          "labelCol": {
            "type": "JSExpression",
            "value": "this.state.colNum"
          },
          "style": {},
          "ref": "testForm"
        },
        "children": [
          {
            "componentName": "Form.Item",
            "id": "node$3",
            "props": {
              "label": "姓名：",
              "name": "name",
              "initValue": "李雷"
            },
            "children": [
              {
                "componentName": "Input",
                "id": "node$4",
                "props": {
                  "placeholder": "请输入",
                  "size": "medium",
                  "style": {
                    "width": 320
                  }
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$5",
            "props": {
              "label": "年龄：",
              "name": "age",
              "initValue": "22"
            },
            "children": [
              {
                "componentName": "NumberPicker",
                "id": "node$6",
                "props": {
                  "size": "medium",
                  "type": "normal"
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$7",
            "props": {
              "label": "职业：",
              "name": "profession"
            },
            "children": [
              {
                "componentName": "Select",
                "id": "node$8",
                "props": {
                  "dataSource": [
                    {
                      "label": "教师",
                      "value": "t"
                    },
                    {
                      "label": "医生",
                      "value": "d"
                    },
                    {
                      "label": "歌手",
                      "value": "s"
                    }
                  ]
                }
              }
            ]
          },
          {
            "componentName": "Div",
            "id": "node$9",
            "props": {
              "style": {
                "textAlign": "center"
              }
            },
            "children": [
              {
                "componentName": "Button.Group",
                "id": "node$a",
                "props": {},
                "children": [
                  {
                    "componentName": "Button",
                    "id": "node$b",
                    "condition": {
                      "type": "JSExpression",
                      "value": "this.index >= 1"
                    },
                    "loop": [
                      "a",
                      "b",
                      "c"
                    ],
                    "props": {
                      "type": "primary",
                      "style": {
                        "margin": "0 5px 0 5px"
                      }
                    },
                    "children": [
                      {
                        "type": "JSExpression",
                        "value": "this.item"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "containerType": "Page",
    "moduleName": "Test",
    "analyzeResult": {
      "isUsingRef": true
    },
    "deps": [
      {
        "componentName": "Form",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "dependencyType": "External"
      },
      {
        "componentName": "Form.Item",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "subName": "Item",
        "dependencyType": "External"
      },
      {
        "componentName": "Input",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Input",
        "dependencyType": "External"
      },
      {
        "componentName": "NumberPicker",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "NumberPicker",
        "dependencyType": "External"
      },
      {
        "componentName": "Select",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Select",
        "dependencyType": "External"
      },
      {
        "componentName": "Button.Group",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "subName": "Group",
        "dependencyType": "External"
      },
      {
        "componentName": "Button",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "dependencyType": "External"
      }
    ]
  },
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/form/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/input/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/number-picker/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/select/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/button/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineStart",
      "content": "class Test$$Page extends React.Component {",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassRenderEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorStart",
      "content": "constructor(props, context) { super(props); ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineConstructorStart",
        "CommonClassDefineConstructorContent"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountStart",
      "content": "componentDidMount() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassDidMountContent",
        "ReactComponentClassDidMountStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderStart",
      "content": "render() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassRenderStart",
        "ReactComponentClassRenderPre",
        "ReactComponentClassRenderJSX"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonFileExport",
      "content": "export default Test$$Page;",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine",
        "CommonClassDefineEnd"
      ]
    }
  ],
  "depNames": [],
  "contextData": {
    "inStrictMode": false,
    "tolerateEvalErrors": true,
    "evalErrorsHandler": "",
    "extraContextData": {
      "projectRemark": {
        "isSingleComponent": false
      },
      "template": {
        "slots": {
          "components": {
            "path": [
              "src",
              "components"
            ]
          },
          "pages": {
            "path": [
              "src",
              "pages"
            ]
          },
          "router": {
            "path": [
              "src"
            ],
            "fileName": "routes"
          },
          "entry": {
            "path": [
              "src"
            ],
            "fileName": "app"
          },
          "constants": {
            "path": [
              "src"
            ],
            "fileName": "constants"
          },
          "utils": {
            "path": [
              "src"
            ],
            "fileName": "utils"
          },
          "i18n": {
            "path": [
              "src"
            ],
            "fileName": "i18n"
          },
          "globalStyle": {
            "path": [
              "src"
            ],
            "fileName": "global"
          },
          "htmlEntry": {
            "path": [
              "public"
            ],
            "fileName": "index"
          },
          "packageJSON": {
            "path": [],
            "fileName": "package"
          }
        }
      }
    }
  }
}

// 五、containerInjectContext()  注入上下文： _context = this/this._createContext()
{
  "ir": {
    "componentName": "Page",
    "id": "node$1",
    "meta": {
      "title": "测试",
      "router": "/"
    },
    "props": {
      "ref": "outerView",
      "autoLoading": true
    },
    "fileName": "test",
    "state": {
      "text": "outer"
    },
    "lifeCycles": {
      "componentDidMount": {
        "type": "JSFunction",
        "value": "function componentDidMount() { console.log('componentDidMount'); }"
      }
    },
    "dataSource": {
      "list": [
        {
          "id": "urlParams",
          "type": "urlParams"
        },
        {
          "id": "user",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/user",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
          }
        },
        {
          "id": "orders",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/orders",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
          }
        }
      ],
      "dataHandler": {
        "type": "JSFunction",
        "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
      }
    },
    "children": [
      {
        "componentName": "Form",
        "id": "node$2",
        "props": {
          "labelCol": {
            "type": "JSExpression",
            "value": "this.state.colNum"
          },
          "style": {},
          "ref": "testForm"
        },
        "children": [
          {
            "componentName": "Form.Item",
            "id": "node$3",
            "props": {
              "label": "姓名：",
              "name": "name",
              "initValue": "李雷"
            },
            "children": [
              {
                "componentName": "Input",
                "id": "node$4",
                "props": {
                  "placeholder": "请输入",
                  "size": "medium",
                  "style": {
                    "width": 320
                  }
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$5",
            "props": {
              "label": "年龄：",
              "name": "age",
              "initValue": "22"
            },
            "children": [
              {
                "componentName": "NumberPicker",
                "id": "node$6",
                "props": {
                  "size": "medium",
                  "type": "normal"
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$7",
            "props": {
              "label": "职业：",
              "name": "profession"
            },
            "children": [
              {
                "componentName": "Select",
                "id": "node$8",
                "props": {
                  "dataSource": [
                    {
                      "label": "教师",
                      "value": "t"
                    },
                    {
                      "label": "医生",
                      "value": "d"
                    },
                    {
                      "label": "歌手",
                      "value": "s"
                    }
                  ]
                }
              }
            ]
          },
          {
            "componentName": "Div",
            "id": "node$9",
            "props": {
              "style": {
                "textAlign": "center"
              }
            },
            "children": [
              {
                "componentName": "Button.Group",
                "id": "node$a",
                "props": {},
                "children": [
                  {
                    "componentName": "Button",
                    "id": "node$b",
                    "condition": {
                      "type": "JSExpression",
                      "value": "this.index >= 1"
                    },
                    "loop": [
                      "a",
                      "b",
                      "c"
                    ],
                    "props": {
                      "type": "primary",
                      "style": {
                        "margin": "0 5px 0 5px"
                      }
                    },
                    "children": [
                      {
                        "type": "JSExpression",
                        "value": "this.item"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "containerType": "Page",
    "moduleName": "Test",
    "analyzeResult": {
      "isUsingRef": true
    },
    "deps": [
      {
        "componentName": "Form",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "dependencyType": "External"
      },
      {
        "componentName": "Form.Item",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "subName": "Item",
        "dependencyType": "External"
      },
      {
        "componentName": "Input",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Input",
        "dependencyType": "External"
      },
      {
        "componentName": "NumberPicker",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "NumberPicker",
        "dependencyType": "External"
      },
      {
        "componentName": "Select",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Select",
        "dependencyType": "External"
      },
      {
        "componentName": "Button.Group",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "subName": "Group",
        "dependencyType": "External"
      },
      {
        "componentName": "Button",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "dependencyType": "External"
      }
    ]
  },
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/form/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/input/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/number-picker/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/select/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/button/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineStart",
      "content": "class Test$$Page extends React.Component {",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassRenderEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorStart",
      "content": "constructor(props, context) { super(props); ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineConstructorStart",
        "CommonClassDefineConstructorContent"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountStart",
      "content": "componentDidMount() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassDidMountContent",
        "ReactComponentClassDidMountStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderStart",
      "content": "render() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassRenderStart",
        "ReactComponentClassRenderPre",
        "ReactComponentClassRenderJSX"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonFileExport",
      "content": "export default Test$$Page;",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine",
        "CommonClassDefineEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsVar",
      "content": "\n          _context = this;\n        ",
      "linkAfter": [
        "CommonClassDefineStart"
      ]
    }
  ],
  "depNames": [],
  "contextData": {
    "inStrictMode": false,
    "tolerateEvalErrors": true,
    "evalErrorsHandler": "",
    "extraContextData": {
      "projectRemark": {
        "isSingleComponent": false
      },
      "template": {
        "slots": {
          "components": {
            "path": [
              "src",
              "components"
            ]
          },
          "pages": {
            "path": [
              "src",
              "pages"
            ]
          },
          "router": {
            "path": [
              "src"
            ],
            "fileName": "routes"
          },
          "entry": {
            "path": [
              "src"
            ],
            "fileName": "app"
          },
          "constants": {
            "path": [
              "src"
            ],
            "fileName": "constants"
          },
          "utils": {
            "path": [
              "src"
            ],
            "fileName": "utils"
          },
          "i18n": {
            "path": [
              "src"
            ],
            "fileName": "i18n"
          },
          "globalStyle": {
            "path": [
              "src"
            ],
            "fileName": "global"
          },
          "htmlEntry": {
            "path": [
              "public"
            ],
            "fileName": "index"
          },
          "packageJSON": {
            "path": [],
            "fileName": "package"
          }
        }
      }
    }
  }
}
// 六、containerInjectUtils(), 导入工具和ref引用
{
  "ir": {
    "componentName": "Page",
    "id": "node$1",
    "meta": {
      "title": "测试",
      "router": "/"
    },
    "props": {
      "ref": "outerView",
      "autoLoading": true
    },
    "fileName": "test",
    "state": {
      "text": "outer"
    },
    "lifeCycles": {
      "componentDidMount": {
        "type": "JSFunction",
        "value": "function componentDidMount() { console.log('componentDidMount'); }"
      }
    },
    "dataSource": {
      "list": [
        {
          "id": "urlParams",
          "type": "urlParams"
        },
        {
          "id": "user",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/user",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
          }
        },
        {
          "id": "orders",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/orders",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
          }
        }
      ],
      "dataHandler": {
        "type": "JSFunction",
        "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
      }
    },
    "children": [
      {
        "componentName": "Form",
        "id": "node$2",
        "props": {
          "labelCol": {
            "type": "JSExpression",
            "value": "this.state.colNum"
          },
          "style": {},
          "ref": "testForm"
        },
        "children": [
          {
            "componentName": "Form.Item",
            "id": "node$3",
            "props": {
              "label": "姓名：",
              "name": "name",
              "initValue": "李雷"
            },
            "children": [
              {
                "componentName": "Input",
                "id": "node$4",
                "props": {
                  "placeholder": "请输入",
                  "size": "medium",
                  "style": {
                    "width": 320
                  }
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$5",
            "props": {
              "label": "年龄：",
              "name": "age",
              "initValue": "22"
            },
            "children": [
              {
                "componentName": "NumberPicker",
                "id": "node$6",
                "props": {
                  "size": "medium",
                  "type": "normal"
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$7",
            "props": {
              "label": "职业：",
              "name": "profession"
            },
            "children": [
              {
                "componentName": "Select",
                "id": "node$8",
                "props": {
                  "dataSource": [
                    {
                      "label": "教师",
                      "value": "t"
                    },
                    {
                      "label": "医生",
                      "value": "d"
                    },
                    {
                      "label": "歌手",
                      "value": "s"
                    }
                  ]
                }
              }
            ]
          },
          {
            "componentName": "Div",
            "id": "node$9",
            "props": {
              "style": {
                "textAlign": "center"
              }
            },
            "children": [
              {
                "componentName": "Button.Group",
                "id": "node$a",
                "props": {},
                "children": [
                  {
                    "componentName": "Button",
                    "id": "node$b",
                    "condition": {
                      "type": "JSExpression",
                      "value": "this.index >= 1"
                    },
                    "loop": [
                      "a",
                      "b",
                      "c"
                    ],
                    "props": {
                      "type": "primary",
                      "style": {
                        "margin": "0 5px 0 5px"
                      }
                    },
                    "children": [
                      {
                        "type": "JSExpression",
                        "value": "this.item"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "containerType": "Page",
    "moduleName": "Test",
    "analyzeResult": {
      "isUsingRef": true
    },
    "deps": [
      {
        "componentName": "Form",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "dependencyType": "External"
      },
      {
        "componentName": "Form.Item",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "subName": "Item",
        "dependencyType": "External"
      },
      {
        "componentName": "Input",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Input",
        "dependencyType": "External"
      },
      {
        "componentName": "NumberPicker",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "NumberPicker",
        "dependencyType": "External"
      },
      {
        "componentName": "Select",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Select",
        "dependencyType": "External"
      },
      {
        "componentName": "Button.Group",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "subName": "Group",
        "dependencyType": "External"
      },
      {
        "componentName": "Button",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "dependencyType": "External"
      }
    ]
  },
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/form/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/input/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/number-picker/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/select/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/button/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineStart",
      "content": "class Test$$Page extends React.Component {",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassRenderEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorStart",
      "content": "constructor(props, context) { super(props); ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineConstructorStart",
        "CommonClassDefineConstructorContent"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountStart",
      "content": "componentDidMount() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassDidMountContent",
        "ReactComponentClassDidMountStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderStart",
      "content": "render() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassRenderStart",
        "ReactComponentClassRenderPre",
        "ReactComponentClassRenderJSX"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonFileExport",
      "content": "export default Test$$Page;",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine",
        "CommonClassDefineEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsVar",
      "content": "\n          _context = this;\n        ",
      "linkAfter": [
        "CommonClassDefineStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorContent",
      "content": "this.utils = utils;",
      "linkAfter": [
        "CommonClassDefineConstructorStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorContent",
      "content": "this._refsManager = new RefsManager();",
      "linkAfter": [
        "CommonClassDefineConstructorStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsMethod",
      "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsMethod",
      "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineConstructorEnd"
      ]
    }
  ],
  "depNames": [],
  "contextData": {
    "inStrictMode": false,
    "tolerateEvalErrors": true,
    "evalErrorsHandler": "",
    "extraContextData": {
      "projectRemark": {
        "isSingleComponent": false
      },
      "template": {
        "slots": {
          "components": {
            "path": [
              "src",
              "components"
            ]
          },
          "pages": {
            "path": [
              "src",
              "pages"
            ]
          },
          "router": {
            "path": [
              "src"
            ],
            "fileName": "routes"
          },
          "entry": {
            "path": [
              "src"
            ],
            "fileName": "app"
          },
          "constants": {
            "path": [
              "src"
            ],
            "fileName": "constants"
          },
          "utils": {
            "path": [
              "src"
            ],
            "fileName": "utils"
          },
          "i18n": {
            "path": [
              "src"
            ],
            "fileName": "i18n"
          },
          "globalStyle": {
            "path": [
              "src"
            ],
            "fileName": "global"
          },
          "htmlEntry": {
            "path": [
              "public"
            ],
            "fileName": "index"
          },
          "packageJSON": {
            "path": [],
            "fileName": "package"
          }
        }
      }
    },
    "useRefApi": true
  }
}
// 七、 containerInjectDataSourceEngine(), 组件中获取dataSource
{
  "ir": {
    "componentName": "Page",
    "id": "node$1",
    "meta": {
      "title": "测试",
      "router": "/"
    },
    "props": {
      "ref": "outerView",
      "autoLoading": true
    },
    "fileName": "test",
    "state": {
      "text": "outer"
    },
    "lifeCycles": {
      "componentDidMount": {
        "type": "JSFunction",
        "value": "function componentDidMount() { console.log('componentDidMount'); }"
      }
    },
    "dataSource": {
      "list": [
        {
          "id": "urlParams",
          "type": "urlParams"
        },
        {
          "id": "user",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/user",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n}"
          }
        },
        {
          "id": "orders",
          "type": "fetch",
          "options": {
            "method": "GET",
            "uri": "https://shs.xxx.com/mock/1458/demo/orders",
            "isSync": true
          },
          "dataHandler": {
            "type": "JSFunction",
            "value": "function (response) {\nif (!response.data.success){\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n}"
          }
        }
      ],
      "dataHandler": {
        "type": "JSFunction",
        "value": "function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}"
      }
    },
    "children": [
      {
        "componentName": "Form",
        "id": "node$2",
        "props": {
          "labelCol": {
            "type": "JSExpression",
            "value": "this.state.colNum"
          },
          "style": {},
          "ref": "testForm"
        },
        "children": [
          {
            "componentName": "Form.Item",
            "id": "node$3",
            "props": {
              "label": "姓名：",
              "name": "name",
              "initValue": "李雷"
            },
            "children": [
              {
                "componentName": "Input",
                "id": "node$4",
                "props": {
                  "placeholder": "请输入",
                  "size": "medium",
                  "style": {
                    "width": 320
                  }
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$5",
            "props": {
              "label": "年龄：",
              "name": "age",
              "initValue": "22"
            },
            "children": [
              {
                "componentName": "NumberPicker",
                "id": "node$6",
                "props": {
                  "size": "medium",
                  "type": "normal"
                }
              }
            ]
          },
          {
            "componentName": "Form.Item",
            "id": "node$7",
            "props": {
              "label": "职业：",
              "name": "profession"
            },
            "children": [
              {
                "componentName": "Select",
                "id": "node$8",
                "props": {
                  "dataSource": [
                    {
                      "label": "教师",
                      "value": "t"
                    },
                    {
                      "label": "医生",
                      "value": "d"
                    },
                    {
                      "label": "歌手",
                      "value": "s"
                    }
                  ]
                }
              }
            ]
          },
          {
            "componentName": "Div",
            "id": "node$9",
            "props": {
              "style": {
                "textAlign": "center"
              }
            },
            "children": [
              {
                "componentName": "Button.Group",
                "id": "node$a",
                "props": {},
                "children": [
                  {
                    "componentName": "Button",
                    "id": "node$b",
                    "condition": {
                      "type": "JSExpression",
                      "value": "this.index >= 1"
                    },
                    "loop": [
                      "a",
                      "b",
                      "c"
                    ],
                    "props": {
                      "type": "primary",
                      "style": {
                        "margin": "0 5px 0 5px"
                      }
                    },
                    "children": [
                      {
                        "type": "JSExpression",
                        "value": "this.item"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "containerType": "Page",
    "moduleName": "Test",
    "analyzeResult": {
      "isUsingRef": true
    },
    "deps": [
      {
        "componentName": "Form",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "dependencyType": "External"
      },
      {
        "componentName": "Form.Item",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Form",
        "subName": "Item",
        "dependencyType": "External"
      },
      {
        "componentName": "Input",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Input",
        "dependencyType": "External"
      },
      {
        "componentName": "NumberPicker",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "NumberPicker",
        "dependencyType": "External"
      },
      {
        "componentName": "Select",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Select",
        "dependencyType": "External"
      },
      {
        "componentName": "Button.Group",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "subName": "Group",
        "dependencyType": "External"
      },
      {
        "componentName": "Button",
        "package": "@alifd/next",
        "version": "1.19.18",
        "destructuring": true,
        "exportName": "Button",
        "dependencyType": "External"
      }
    ]
  },
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountContent",
      "content": "\n          this._dataSourceEngine.reloadDataSource();\n        ",
      "linkAfter": [
        "ReactComponentClassDidMountStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/form/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/input/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/number-picker/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/select/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/button/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineStart",
      "content": "class Test$$Page extends React.Component {",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassRenderEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorStart",
      "content": "constructor(props, context) { super(props); ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineConstructorStart",
        "CommonClassDefineConstructorContent"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountStart",
      "content": "componentDidMount() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassDidMountContent",
        "ReactComponentClassDidMountStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderStart",
      "content": "render() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassRenderStart",
        "ReactComponentClassRenderPre",
        "ReactComponentClassRenderJSX"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonFileExport",
      "content": "export default Test$$Page;",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine",
        "CommonClassDefineEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsVar",
      "content": "\n          _context = this;\n        ",
      "linkAfter": [
        "CommonClassDefineStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorContent",
      "content": "this.utils = utils;",
      "linkAfter": [
        "CommonClassDefineConstructorStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorContent",
      "content": "this._refsManager = new RefsManager();",
      "linkAfter": [
        "CommonClassDefineConstructorStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsMethod",
      "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsMethod",
      "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            ",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            ",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        ",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsVar",
      "content": "\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsMethod",
      "content": "\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineConstructorEnd"
      ]
    }
  ],
  "depNames": [],
  "contextData": {
    "inStrictMode": false,
    "tolerateEvalErrors": true,
    "evalErrorsHandler": "",
    "extraContextData": {
      "projectRemark": {
        "isSingleComponent": false
      },
      "template": {
        "slots": {
          "components": {
            "path": [
              "src",
              "components"
            ]
          },
          "pages": {
            "path": [
              "src",
              "pages"
            ]
          },
          "router": {
            "path": [
              "src"
            ],
            "fileName": "routes"
          },
          "entry": {
            "path": [
              "src"
            ],
            "fileName": "app"
          },
          "constants": {
            "path": [
              "src"
            ],
            "fileName": "constants"
          },
          "utils": {
            "path": [
              "src"
            ],
            "fileName": "utils"
          },
          "i18n": {
            "path": [
              "src"
            ],
            "fileName": "i18n"
          },
          "globalStyle": {
            "path": [
              "src"
            ],
            "fileName": "global"
          },
          "htmlEntry": {
            "path": [
              "public"
            ],
            "fileName": "index"
          },
          "packageJSON": {
            "path": [],
            "fileName": "package"
          }
        }
      }
    },
    "useRefApi": true
  }
}
// 八、containerInjectI18n(),
{
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountContent",
      "content": "\n          this._dataSourceEngine.reloadDataSource();\n        ",
      "linkAfter": [
        "ReactComponentClassDidMountStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n// 注意: 出码引擎注入的临时变量默认都以 \"__$$\" 开头，禁止在搭建的代码中直接访问。\n// 例外：react 框架的导出名和各种组件名除外。\nimport React from 'react';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "import { Form, Input, NumberPicker, Select, Button } from '@alifd/next';",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/form/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/input/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/number-picker/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/select/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import '@alifd/next/lib/button/style';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineStart",
      "content": "class Test$$Page extends React.Component {",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassRenderEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorStart",
      "content": "constructor(props, context) { super(props); ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorEnd",
      "content": "}",
      "linkAfter": [
        "CommonClassDefineConstructorStart",
        "CommonClassDefineConstructorContent"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountStart",
      "content": "componentDidMount() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassDidMountContent",
        "ReactComponentClassDidMountStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderStart",
      "content": "render() {",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineInsMethod",
        "CommonClassDefineInsPrivateMethod",
        "CommonClassDefineConstructorEnd",
        "ReactComponentClassDidMountEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassRenderEnd",
      "content": "}",
      "linkAfter": [
        "ReactComponentClassRenderStart",
        "ReactComponentClassRenderPre",
        "ReactComponentClassRenderJSX"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonFileExport",
      "content": "export default Test$$Page;",
      "linkAfter": [
        "CommonExternalDependencyImport",
        "CommonInternalDependencyImport",
        "CommonImportAliasDefine",
        "CommonFileScopeVarDefine",
        "CommonFileScopeMethodDefine",
        "CommonClassDefineEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsVar",
      "content": "\n          _context = this;\n        ",
      "linkAfter": [
        "CommonClassDefineStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "\n        import utils, { RefsManager } from '../../utils';\n      ",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorContent",
      "content": "this.utils = utils;",
      "linkAfter": [
        "CommonClassDefineConstructorStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorContent",
      "content": "this._refsManager = new RefsManager();",
      "linkAfter": [
        "CommonClassDefineConstructorStart"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsMethod",
      "content": "\n          $ = (refName) => {\n            return this._refsManager.get(refName);\n          }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsMethod",
      "content": "\n          $$ = (refName) => {\n            return this._refsManager.getAll(refName);\n          }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n              import { createUrlParamsHandler as __$$createUrlParamsRequestHandler } from '@alilc/lowcode-datasource-url-params-handler';\n            ",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n              import { createFetchHandler as __$$createFetchRequestHandler } from '@alilc/lowcode-datasource-fetch-handler';\n            ",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonExternalDependencyImport",
      "content": "\n          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';\n        ",
      "linkAfter": []
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsVar",
      "content": "\n          _dataSourceConfig = this._defineDataSourceConfig();\n          _dataSourceEngine = __$$createDataSourceEngine(\n            this._dataSourceConfig,\n            this,\n            {\"runtimeConfig\": true,\n\"requestHandlersMap\": {\"urlParams\": __$$createUrlParamsRequestHandler(window.location.search),\n\"fetch\": __$$createFetchRequestHandler()}}\n          );\n\n          get dataSourceMap() {\n            return this._dataSourceEngine.dataSourceMap || {};\n          }\n\n          reloadDataSource = async () => {\n            await this._dataSourceEngine.reloadDataSource();\n          }\n\n          ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsMethod",
      "content": "\n  _defineDataSourceConfig() {\n    const _this = this;\n    return ({\"list\": [{\"id\": \"urlParams\",\n\"type\": \"urlParams\",\n\"isInit\": function () {\n  return undefined;\n}.bind(_this),\n\"options\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"user\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/user\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)},{\"id\": \"orders\",\n\"type\": \"fetch\",\n\"options\": function () {\n  return {\n    \"method\": \"GET\",\n    \"uri\": \"https://shs.xxx.com/mock/1458/demo/orders\",\n    \"isSync\": true\n  };\n}.bind(_this),\n\"dataHandler\": function (response) {\n  if (!response.data.success) {\n    throw new Error(response.data.message);\n  }\n  return response.data.data.result;\n},\n\"isInit\": function () {\n  return undefined;\n}.bind(_this)}],\n\"dataHandler\": function (dataMap) {\n  console.info(\"All datasources loaded:\", dataMap);\n}});\n  }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod",
        "CommonClassDefineInsVar",
        "CommonClassDefineInsVarMethod",
        "CommonClassDefineConstructorEnd"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "\n        import * as __$$i18n from '../../i18n';\n      ",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorContent",
      "content": "\n        __$$i18n._inject2(this);\n      ",
      "linkAfter": [
        "CommonClassDefineConstructorStart"
      ]
    }
  ],
}
// 九、containerInjectConstants(),
{
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import __$$constants from '../../constants';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineInsVar",
      "content": "\n        get constants() {\n          return __$$constants || {};\n        }\n        ",
      "linkAfter": [
        "CommonClassDefineStart",
        "CommonClassDefineStaticVar",
        "CommonClassDefineStaticMethod"
      ]
    }
  ]
}
// 十、containerInitState(),
{
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonClassDefineConstructorContent",
      "content": "this.state = { text: \"outer\", };",
      "linkAfter": [
        "CommonClassDefineConstructorStart"
      ]
    }
  ]
}
// 十一、containerLifeCycle(),
{
  "chunks": [
    {
      "type": "string",
      "fileType": "jsx",
      "name": "ReactComponentClassDidMountContent",
      "content": "console.log('componentDidMount');",
      "linkAfter": [
        "ReactComponentClassDidMountStart"
      ]
    }
  ]
}
// 十二、,containerMethod(),
{
  "chunks": [

  ]
}
// 十三、,  jsx({ nodeTypeMapping: {Div: 'div', Component: 'div',Page: 'div',Block: 'div'},}),
{
  {
    "chunks": [
      {
        "type": "string",
        "fileType": "jsx",
        "name": "ReactComponentClassRenderJSX",
        "content": "\n        const __$$context = this._context || this;\n        const { state } = __$$context;\n        return <div ref={this._refsManager.linkRef('outerView')} autoLoading={true}><Form labelCol={__$$eval(() => (this.state.colNum))} style={{}} ref={this._refsManager.linkRef('testForm')}><Form.Item label=\"姓名：\" name=\"name\" initValue=\"李雷\"><Input placeholder=\"请输入\" size=\"medium\" style={{\"width\": 320}} /></Form.Item><Form.Item label=\"年龄：\" name=\"age\" initValue=\"22\"><NumberPicker size=\"medium\" type=\"normal\" /></Form.Item><Form.Item label=\"职业：\" name=\"profession\"><Select dataSource={[{\"label\": \"教师\",\n\"value\": \"t\"},{\"label\": \"医生\",\n\"value\": \"d\"},{\"label\": \"歌手\",\n\"value\": \"s\"}]} /></Form.Item><div style={{\"textAlign\": \"center\"}}><Button.Group>{(__$$evalArray(() => ([\"a\",\"b\",\"c\"]))).map((item, index) => ((__$$context) => (!!(__$$eval(() => (index >= 1))) && (<Button type=\"primary\" style={{\"margin\": \"0 5px 0 5px\"}}>{__$$eval(() => (item))}</Button>)))(__$$createChildContext(__$$context, { item, index })))}</Button.Group></div></Form></div>;\n      ",
        "linkAfter": [
          "ReactComponentClassRenderStart",
          "ReactComponentClassRenderPre"
        ]
      },
      {
        "type": "string",
        "fileType": "jsx",
        "name": "CommonCustomContent",
        "content": "\n          function __$$eval(expr) {\n            try {\n              return expr();\n            } catch (error) {\n              \n            }\n          }\n\n          function __$$evalArray(expr) {\n            const res = __$$eval(expr);\n            return Array.isArray(res) ? res : [];\n          }\n      \n\n        function __$$createChildContext(oldContext, ext) {\n          const childContext = {\n            ...oldContext,\n            ...ext,\n          };\n          childContext.__proto__ = oldContext;\n          return childContext;\n        }\n      ",
        "linkAfter": [
          "CommonFileExport"
        ]
      }
    ]
  }
},
// 十四、css(),
{
  "chunks": [
    {
      "type": "string",
      "fileType": "css",
      "name": "CommonStyleCssContent",
      "linkAfter": [
        "CommonStyleDepsImport"
      ]
    },
    {
      "type": "string",
      "fileType": "jsx",
      "name": "CommonInternalDependencyImport",
      "content": "import './index.css';",
      "linkAfter": [
        "CommonExternalDependencyImport"
      ]
    }
  ]
}



