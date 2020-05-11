# 物料提交指南

### 介绍

感谢你使用 物料集成平台。

以下是关于向 物料集成平台 提交反馈或代码的指南。在向 物料集成平台 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## 参与开发

### 本地开发

按照下面的步骤操作，即可在本地开发 物料集成平台 组件

```bash
# 克隆仓库
git clone http://gitlab.zoomlion.com/po_web/materials.git

# 安装依赖
cd materials && lerna bootstrap

# 进入开发模式
# 电脑版环境
npm run pc:serve 
# 手机端环境
npm run m:serve
```

### 相关说明

- 仓库的组件代码位于 packages 下，按照平台分为PC端(PC)和移动端(mobile)
- 每个端下面的文件夹结构和项目的结构一样
- 物料对应的开发规范参考公司指定的开发规范执行
- components文件夹存放组件级物料，每个组件对应一个文件夹
- views文件夹存放页面级物料，每个页面对应一个文件夹

### 添加新组件和页面

添加新组件和页面时，请按照下面的目录结构组织文件

notice: 
- 组件的入口文件为index.vue,内容过多的时候可以拆分成多个.vue文件，入口只有index.vue
- style最好写到vue中，保持样式的独立。如果样式文件过大时，可以抽离出style.scss文件。
```
components
└─ button
   ├─ demo             # 示例代码(本地测试看效果时，请将其放到views文件夹下，调试完成后挪到demo文件夹下)
   ├─ test             # 单元测试(可不用)
   ├─ index.vue        # 组件入口(可拆分成多个)
   ├─ README.md        # 英文文档
   ├─ README.zh-CN.md  # 中文文档
   └─ package.json     # 依赖的第三方库的内容

```

## 提交 PR

### Pull Request 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码
2. 基于 fork 后仓库的 master 分支新建一个分支，比如`feature/pc/components(or views)/name`
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 master 分支
4. Pull Request 会在 Review 通过后被合并到主仓库

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码

```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream http://gitlab.zoomlion.com/po_web/materials.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 dev 分支
git checkout master

# 合并主仓库代码
git merge upstream/master
```