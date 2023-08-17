# ESLint

## Install (on project root)

```powershell
# init npm 
> npm init --yes
# install eslint
> npm install eslint --save-dev
# configure it (this generate a .eslintrc config file on root file)
> eslint --init 
```

## Add custom rules to eslint config

```json
{
    // ESLint rules ...
    "rules": {
      // show error for constant reassignment
      "no-const-assign": "error" 
    },
    // register globals 
    "globals": {
      // register $ object as global  
      "$": true
    }

}
```

## (Optional) Install extension for editor

### VSCode - Microsoft ESLint

#### Configure extension

Open vscode workspace/user preferences and add:

```json
{
   // Fix on save
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  // Set files to validate
  "eslint.validate": ["javascript"]
}
```
