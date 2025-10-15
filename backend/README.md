# Backend Setup
1. Install `package.json` file
```
npm init -y
```

2. Install all libraries needed
```
npm i mysql express cors nodemon
```

3. Create `Server.js` file for backend server setup
4. In `package.json`, add in `sripts` section:
```
"start": "nodemon Server.js"
```

# Error Occur
1. Undefined to remove access: Process -> CurrentUser for permanetly access
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

2. Database connection failed:  Error: connect ETIMEDOUT
    - Check VirtualBox setting
    > Settings -> Network -> Adapter 1 -> Attached to: NAT -> Bridged

    - 

