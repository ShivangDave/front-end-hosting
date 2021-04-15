# Let's host this app!

### Prerequisites:
- Have your front-end and backend on separate GitHub Repos (given you have a backend)
- We'll be using **Netlify** to host our react app! So consider signing up for an account first.
- If you have a backend, it will be easier if you host that first! We have a guide for that too 😃

> [Picture guide](https://imgur.com/a/Bs9wl8Z)
>
> [Hosted Site](https://infallible-leakey-b064a5.netlify.app)
>
> [Rails API Hosting Guide](https://github.com/ShivangDave/rails-backend-hosting)

### Follow me:

- Step 1:
  - Make sure all of your code has been pushed up. Preferably to `main` branch.
    - Optional: You can also have a separate branch dedicated for just the **production**
  - Additionally, it'd be a good idea to verify that code on your branch works locally.

- Step 2:
  - Login to your `Netlify` account.
  - You may see `New site from Git` button on your dashboard. If you don't that's fine. Click on `Sites` menu option and you should find the button there.
  - Once you click on it, it'll ask you to connect your GitHub account for `Continuous Deployment`.

<p align="center">
  <img src="https://i.imgur.com/FIHlHHL.png" height="300px" />
  <img src="https://i.imgur.com/9wGkuoX.png" height="300px" />
</p>

- Step 3:
  - Once you've authenticated your GitHub account, `Netlify` will ask permissions to access your repos.
  - You have two options:
    1. Access to all the repos
    2. Only to the repo that you want to deploy
    **Choose wisely**
  - Once given the right access, your repo should show up!

<p align="center">
  <img src="https://i.imgur.com/ixnhc8y.png" height="400px" />
  <img src="https://i.imgur.com/MOM1br9.png" height="400px" />
</p>

- Step 4:
  - Click on the repo.
  - Here you can configure `Site Settings`.
    - Here's where you can also select a `branch` that you'd want to continuously deploy (every commit OR diff options)
    - You can also configure which package manager and command you want this site to run. i.e. `npm` or `yarn`
    - It'll also allow you to set environment variables under `Advanced Build Settings`.

<p align="center">
  <img src="https://i.imgur.com/Mqtw2sZ.png" height="500px" />
</p>

- Step 5:
  - Almost done! Only thing left is to click on the `Deploy Site` button.
  - It may take a few minutes based on how many packages you have in your application plus server availability.
  - TADA! Netlify will now try to deploy the application on every commit. You can limit that by changing `build settings`.


- More resources:
  - [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
  - [Netlify Analytics](https://docs.netlify.com/monitor-sites/analytics/)
  - [Netlify Image Optimization](https://docs.netlify.com/large-media/transform-images/)
  - [Netlify Forms](https://docs.netlify.com/forms/setup/)
  - [Additional Build Configurations](https://docs.netlify.com/configure-builds/get-started/)


- Additional tips:
  - By default, `Netlify` will treat **warnings** as **errors**
  - You can disable that by adding a build runtime command suggested [here](https://docs.netlify.com/configure-builds/troubleshooting-tips/#build-fails-on-warning-message)


  <p align="center">
    <img src="https://i.imgur.com/zdGyy4n.png" height="300px" />
    <img src="https://i.imgur.com/1mebMe8.png" height="300px" />
    <img src="https://i.imgur.com/8pkG6k8.png" height="300px" />
    <br />
    <img src="https://i.imgur.com/vM9fwUi.png" height="300px" />
  </p>
