# Let's host this app!

### Prerequisites:
- Have your front-end and backend on separate GitHub Repos (given you have a backend)
- We'll be using **Netlify** to host our react app! So consider signing up for an account first.
- If you have a backend, it will be easier if you host that first! We have a guide for that too 😃


### Process:

- Step 1:
  - Make sure all of your code has been pushed up. Preferably to `main` branch. Optional: You can also have a separate branch dedicated for just the **production**
  - Additionally, it'd be a good idea to verify that code on your branch works locally.

- Step 2:
  - Login to your `Netlify` account.
  - You may see `New site from Git` button on your dashboard. If you don't that's fine. Click on `Sites` menu option and you should find the button there.
  - Once you click on it, it'll ask you to connect your GitHub account for `Continuous Deployment`.

- Step 3:
  - Once you've authenticated your GitHub account, `Netlify` will ask permissions to access your repos.
  - You have two options:
    1. Access to all the repos
    2. Only to the repo that you want to deploy
    **Choose wisely**
  - Once given the right access, your repo should show up!

- Step 4:
  - Click on the repo.
  - Here you can configure `Site Settings`.
    - Here's where you can also select a `branch` that you'd want to continuously deploy (every commit OR diff options)
    - You can also configure which package manager and command you want this site to run. i.e. `npm` or `yarn`
    - It'll also allow you to set environment variables under `Advanced Build Settings`.

- Step 5:
  - Almost done! Only thing left is to click on the `Deploy Site` button.
  - It may take a few minutes based on how many packages you have in your application plus server availability.

- Additional tips:
  - By default, `Netlify` will treat **warnings** as **errors**
  - You can disable that by adding an environment variable suggested [here](https://docs.netlify.com/configure-builds/troubleshooting-tips/#build-fails-on-warning-message)
  
