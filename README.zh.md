<div align="right">语言: <a title="英语" href="./README.md">:us:</a>
:cn:</div>

<h1 align="center">My Profile</h1>

这是一个用于展示个人信息的 Blocklet 应用程序。

## 功能

- [x] 显示个人信息
- [x] 编辑个人信息（鼠标hover到卡片上后显示编辑按钮）
- [x] 响应式布局适配
- [x] 未保存离开提示
- [ ] 支持Markdown编辑Profile
- [ ] 支持图片Avatar
- [ ] 支持登录后才可修改
- [ ] 悬浮编辑/保存按钮

...

## 如何启动

### 安装依赖

```shell
pnpm install
```

### 启动

```shell
blocklet server start
pnpm dev
```


### 停止

```shell
blocklet server stop -f
```

## 技术栈  

- Express
- Node.js
- Blocklet
- React
- TypeScript
- React Router
- Material UI
- Vite
- Yup

## 如何与 DID Spaces 对接的

- 步骤 1：将blocklet.yml 中的 `capabilities.didSpace` 字段设置为 `requiredOnConnect`，请参阅 `blocklet.yml#capabilities`
- 步骤 2：实现读写 DID Space 的功能，请参阅 `api/src/routes/todo-list/index.ts#9`
- 步骤 3：从 DID Spaces 获取数据，请参阅 `src/pages/todo-list.tsx#33`
- 步骤 4：将数据写入 DID Spaces，请参阅 `src/pages/todo-list.tsx#51`

## 获得帮助

  如果你想了解更多有关 DID Spaces 的开发细节，你还可以参考[DID Spaces 的开发文档](https://www.arcblock.io/docs/did-spaces/en/did-spaces-how-to-guides)。不论你遇到什么问题，我们随时欢迎你在我们的[官方论坛](https://community.arcblock.io/)发起讨论。
