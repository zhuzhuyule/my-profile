<div align="right">Language: :us:
<a title="Chinese" href="./README.zh.md">:cn:</a></div>

<h1 align="center">My Profile</h1>

This is a Blocklet application for displaying personal information.

## Features

- [x] Display personal information
- [x] Edit personal information (show edit button when hovering over the card)
- [x] Responsive layout
- [x] Prompt for unsaved changes before leaving
- [ ] Support Markdown for Profile
- [ ] Support image Avatar
- [ ] Support login before editing
- [ ] Floating edit/save buttons

...

## How to start

### Install dependencies

```shell
pnpm install
```

### Start

```shell
blocklet server start
pnpm dev
```


### Stop

```shell
blocklet server stop -f
```

## Technologies

- Express
- Node.js
- Blocklet
- React
- TypeScript
- React Router
- Material UI
- Vite
- Yup

## How to connect with DID Spaces

- Step 1: Set the 'capabilities.didSpace' field in blocklet.yml to 'requiredOnConnect', see 'blocklet.yml#capabilities'
- Step 2: To read and write the DID Space, see api/src/routes/todo-list/index.ts#9
- Step 3: Get data from DID Spaces, see 'src/pages/todo-list.tsx#33'
- Step 4: Write data to DID Spaces, see 'src/pages/todo-list.tsx#51'

## Get help

If you want to learn more about the development of DID Spaces, You can also refer to [DID Spaces development documentation] (https://www.arcblock.io/docs/did-spaces/en/did-spaces-how-to-guides). No matter what you encounter a problem, we welcome you in our official BBS (https://community.arcblock.io/) initiated discussions.
