# Setup

1. Initialised project as npm module using `npm init`
2. Followed the steps on website below to install react and typescript packages
   Reference : https://parceljs.org/recipes.html
3. Allows typescript to work with react, create a tsconfig.json with the following configuration

```
{
    "compilerOptions": {
        "esModuleInterop": true,
        "jsx": "react"
    }
}
```
