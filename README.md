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

## Initial [Frontend React APP](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
```
npx create-react-app my-app-name
```
Refer for [More Frontend Execution Detail](my-profile/README.md) after initial setup completed

# Backend setup
> [!NOTE]
> Backend and database setup work on VM machine
> *Frontend (AWS S3 Buckets) -> Backend (Same VM as DB) -> Database (VM)*
> **<ins>Make sure VM run in "Hardless" mode and Power Options is in High Peformance</ins>**

Refer for [More Backend Execution Detail](backend/README.md) after completed the VM and its database server setup.


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