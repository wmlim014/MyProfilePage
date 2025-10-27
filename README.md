# Frontend setup
## Check `Node.js` Installation
1. Check in Window Command Prompt
```
node -v
```
```
npm -v
```

> [!NOTE]
> If no node/npm version, please download and install node.js from [official website](https://nodejs.org/en/download)

2. Check System Path in *environment and variable*
> add node.js installed location path and restart machine after added

## Initial [Frontend React APP in Vite environment](https://reactrouter.com/start/data/installation)
```
npx create-vite@latest
```
1. Key in a selected project name
2. Select a framework
3. Select a variant:
	- *TypeScript / JavaScript*: most stable, best ecosystem support
	- *TypeScript + React Compiler / JavaScript + React Compiler*: if doing experiments
	- *TypeScript + SWC / JavaScript + SWC*: if need faster builds
<ins>In this case, select "TypeScript"</ins>

4. Select `No` in *Use rolldown-vite (Experimental)?* for:
	- Stability
	- Better documentation and community support
	- Fewer unexpected issues during development
	- Easier to find solutions when you run into problems
5. Install with npm and start now
6. In `package.json` update `dev` in `scripts` as `vite --host`

Refer for [More Frontend Execution Detail](my-profile/README.md) after initial setup completed

# Backend setup
## MySQL Server Setup
1. Download MySQL Installer.
2. Setup MySQL Server (v8.0.x) from MySQL Installer.

> [!NOTE]
> **Track the `DB_HOST_NAME` for MySQL Server**
> Run > cmd > type `ipconfig` > refer to the IPv4 Address for `DB_HOST_NAME`

## MySQL Connections Setup
1. Add new connection in MySQL Workbench.
2. Create new or use existing `SCHEMA` as `DB_NAME` to use.

Refer for [More Backend Execution Detail](backend/README.md) after completed the steps above and its database server setup.

# Common setup
1. [GitHub Cheat Sheet](https://git-scm.com/cheat-sheet)

2. Add `.gitignore` from Git Bash
	- Check current path
```
pwd
```
	- Navigate to project folder that want to add  `.gitignore`
```
cd your/project/path
```
	- In the correct path, add [`.gitignore`](https://docs.github.com/en/get-started/git-basics/ignoring-files)
```
touch .gitignore
```

3. Define current machine IP (IPv4 Address)
```
ipconfig
```