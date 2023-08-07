HOW TO START THE APP:

- Set env variables
- `npm run start`
- Go to /admin and make registration than login, so now you have all headers you need in your localstorage
- Use the app
- also it is possible to run unit tests `npm run test`

Login feature:

- it is mocked
- you can find credentials in `/features/login/utils/api/login.ts`
- it creates pseudo token in localStorge

How whould I realize the realtime notifications on comments ?

I'm not sure what was used on BE to create this WS but I'll say it more common, I would subscribe on server action and
just make my app react on these actions

How whould I realize the comments (in case the api does not work)
classicaly create function that calls the endpoints

details:

- create interface for dody object

handle the error:

if error

- show some popup for user with error discription

else

- make refetch of comments under post to show new comment

  comment stats:
  async function(commentId: string, rate:'up'|'down'){
  await axios('/comments/${commentId}/vote/${rate}', ...) ...

Authorization handle: 1. if we don't describe the auth system on back and we just have auth token, jwt, we can store it in local storage 2. all sensetive requests like login/article creation/comment creation will be sent with Bearer in headers 3. pages like article creation will check if the token is fresh via making request to server

if token is expired

- logout() redirect()
- else redirect to newly created article

logout()

- clear the local storage
- redirect to login page and show popup with error "session expired"

or for better UX we can not just redirect to login page but show popup with 2 buttons: login and go to main page. also for better UX we should cache the info in comment section or article creation in case that server returns "session expired"
so user don't need to write all again, after 200 status we can just clean the cache

Article list:

I've created issue in original git repository about how data look like, so in case if we need to show number of comments BE should be little changed, so it returns list of objects,
Object has pole comments, but there is no need to send all comments, just length of this array, it is possible to make in the DTO, it wont work slow because we have limit on
how long this list will be

It is good to write e2e tests with this scenario:

- Login
- Click avatar
- Go to create article
- Create Article
- Click avatar
- Log out

What should I do next ?

- ci/cd pipeline
- git hooks
- container
