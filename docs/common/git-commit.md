# Git提交日志规范
统一规范的日志利于后期的代码检查和问题排除，使用标准兼容的日志格式更能够与其他工具配合提高项目代码日志的规范性。推荐使用[Conventional Commits Specification](https://conventionalcommits.org/)

## 日志格式结构
日志内容由几个关键信息组成
* type(必填)，表示该次提交的类型，如新增功能还是修复bug等
* scope(选填)，表示上下文相关的信息，如lang，`feat(lang): add polish language`
* description(必填)，表示该次提交的简要描述，内容不宜过长
* body(选填)，提交的详细描述信息，如果description不足以描述该次提交则可以将更多内容写入body中
```
// 结构
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

```
// 示例
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```
## 提交类型说明
Type | Description
-|-|
feat | 新增feature
fix | 修复bug
docs | 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
style | 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
refactor | 代码重构，没有加新功能或者修复bug
perf | 优化相关，比如提升性能、体验
test | 测试用例，包括单元测试、集成测试等
chore | 改变构建流程、或者增加依赖库、工具等

::: tip 提示
更多关于conventional commit规范请去[官网查看](https://www.conventionalcommits.org/)
:::

## 使用commitlint+husky实现提交日志的规范检查
[commitlint](https://commitlint.js.org/)和[husky](https://github.com/typicode/husky)配合能够实现提交日志的规范检查。

Husky是一个工具能够让我们非常便捷的执行git hooks，Commitlint提供了对commit message进行检查的工具，如果不符合规范则不允许进行提交操作。

1. 安装commitlint
```shell
// 安装commitlint
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```
2. 编写commitlint配置文件
```js
//编写commitlint配置文件commitlint.config.js
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ]
}
```

```json
// package.json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }  
  }
}
```

## 使用standard-version自动生成CHANGELOG

standard-version能够根据符合conventional-commit规范的git提交日志自动的生成项目的CHANGELOG。

standard-version做了三件事情：根据git message生成CHANGELOG；修改version；基于语义化版本规范生成添加版本tag

standard-version能够根据repository.url自动生成issue、commit等地址。git commit -m "feat: xxxxx(#JIRA_ID)"

::: tip 提示
[standard-version](https://github.com/conventional-changelog/standard-version)不适合于版本频繁发布的项目，存在一定的局限性，是否在项目中使用请根据实际情况考虑
:::
