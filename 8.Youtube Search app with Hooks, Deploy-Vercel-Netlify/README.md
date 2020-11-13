## Custom Hooks
1.Best way to create reusable code in React Project (besides components!).

2.created by extracting hook related code out of function component.

3.custom hooks always makes use of atleast one primitive hook internally.

4.Each custom hook should have one purpose.

5.Data-fetching is a greating thing to try to make it reusable.

## Process fro creating Reusable Hooks
1.Identify each line of code related to some single purpose.

2.Identify the inputs to that code.

3.Identify the outputs to that code.

4.Extract all of the code into a separate function , receiving the inputs as arguments and returning the outputs.

## Deployment

1.Deployment Bundle> index.html,bundle.js,index.css,image.jpg,...
2.Vercel> in the project directory run
        ->npm install -g vercel
        ->vercel login
        --email
        ->vercel
        --enter and config options.can do with default
        --get deplyed url  abcd.vercel.app
        --now again after changes to redeploy run below
        ->vercel --prod
        --get new url
3.Netlify>
        a)create a github repo for the project
        b)commit changes to the project locally
        c)link your project to the new repo
        d)push your code to github
        e)sign up for an account at netlify.com
        f)link the github account,select the repo you want to deploy
        --inside project directory
        ->git add .
        ->git commit -m "ready for deploy"
        ->git remote add origin <git remote origin link>
        ->git push origin master
        --netlify>new site from git>access>deploy
        --after changes again run below
        ->git status
        ->git add .
        ->git commit -m "updated code"
        ->git push origin master
        --netlify automatically detects changes from git repo and deploys new version
