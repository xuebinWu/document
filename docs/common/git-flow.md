# Git分支策略
在常规项目中使用最多的是基于git-flow的分支策略，git-flow分支策略已被证明是一种分支管理的良好实践，对于固定发布周期以及同岗位多人协作的项目尤其适用。

::: tip
关于Git分支策略最早的见于Vincent在2010年发表的一篇博文[《A successful Git branching model》](https://nvie.com/posts/a-successful-git-branching-model/)
，有兴趣的同学可以去仔细阅读下。
:::

## git-flow策略
<img :src="$withBase('/git-flow.png')" alt="分支策略">

## 分支说明
git-flow整体上来说分为功能分支、develop分支、预发布分支、master分支和补丁分支。

* master 主分之(生产环境分支)，确保任何时刻该分之上的代码都是可发布的稳定的，不允许直接提交代码到该分支。为实现更严格的控制可以添加权限，只有主程序员才可操作该分支，普通开发员无权限
* develop 开发分支，该分支上的代码是开发完成且经过测试(自测)的代码。在多人协作开发的场景下不建议直接在该分支上提交代码应该配合功能分支、预发布分支和补丁分支来进行代码的合并
* feature/FEATURE_NAME 功能分支(例如：feature/IP-120)
* release/RELEASE_NAME预发布分支(例如：release/v1.3.0)
* hotfix/HOTFIX_NAME 补丁分支(例如：hotfix/IP-121)
* Semantic version版本标签(例如：v1.3.1)

分支类型 | 定义 | 作用 | 合并关系 | 建立时机 | 初始代码来源
-|-|-|-|-|-|
master | 主分支 | 记录每一个正式发布版本，TAG所在分支 | 允许来自release和hotfix分支的合并 | 仓库初始化 | 仓库初始化
develop | 开发分支 | 保持最新的经过自测的代码 | 允许来自feature、release和hotfix分支的合并 | master创建完成后 | master
release/RELEASE_NAME | 预发布分支 | 表示预发布在测试QA环境的分支，待测试人员进行测试 | 不允许来自任何分支的合并 | develop上代码满足发布要求 | 推荐使用develop上最新的commit
feature/FEATURE_NAME | 功能分支 | 开发独立的功能需求 | 不允许来自任何分支的合并 | 有独立的新功能需求时 | 推荐使用develop上最新的commit
hotfix/HOTFIX_NAME | 补丁分支 | 修复已发布版本的bug | 不允许来自任何分支的合并 | 已发布版本出现BUG时 | master(或master上的TAG)

::: tip 提示
* 远程仓库存在两个固定的分支master和develop，其他相关分支视情况而定在大部分情况下不会将功能分支、补丁分支和预发布分支上传到远程仓库
* 多人协作团队建议不直接在develop上提交代码
* 单人开发维护的项目可以适当的进行精简
* 使用命令行工具时使用`git merge --no-ff`进行分支合并
* 如果需要同步最新的代码可以使用`git rebase`来代替`git merge`
* 可以使用SourceTree图形化工具来进行管理，SourceTree提供gitflow的功能符合上述提及的分支管理策略的规范。使用SourceTree提供的gitflow功能在补丁分支使用时可以与GitHub的issue关联，如果确定修复了某个issue可以在提交日志中写`fix #ISSUE_NO`或`close #ISSUE_NO`等信息来直接关闭某个issue
:::