## Challenge Submission

### Chris Young

## Starting the Application

You will need two terminals. In this example, let's say the code was installed in /carralel.

Terminal One:

- cd backend
- yarn start

Terminal Two:

- cd frontend
- yarn start

## First Time Code Use

The first time you run the code, run 'yarn' in both the front and back ends, as well.

## Using the Application

When you first begin the application by navigating to http://localhost:3000, you will see two boxes. The first allows you to sign in and out of the app. The second lists a number of curated articles.

Choosing any article from the list will open a brief description in a new box. Clicking that box will either invite you to sign in or take you to that article, depending on your sign-in status.

Once signed in, you gain a few new abilities. Besides being able to view the articles, it will also show a running list of previous articles you have visited, from least to most recent. Finally, it will reveal a 'plus' button that you can use to add your own articles permanently to the database. It's fun!

## Future Plans

I don't have the time to polish this sample application further. But, if I did, there are a few things I'd focus on.

- There's a large delay, sometimes, in Auth0 updating the useAuth() hook after a change. I'm sure there's a way around it. The result is that sometimes after signing in, it will continue to treat you as a guest when clicking 'View.'
- I'd like things generally to update faster. They will update eventually, and some updates can be 'forced' by switching articles, but it's not elegant. Yet.
- The 'Add an Article' feature has very few guardrails beyond checking for authentication. This would be a large security problem, but could be ameliorated by with type enforcement and one of the packages that sanitizes db input. For this, and a database that barely exists, it wasn't a priority. And I'm out of time!
- The fetch requestes got pretty unwieldly. They'd benefit from some wrapping, and it would make the code easier to read.
- Every once in a while, Auth0 seems to freak out during a refresh, briefly crashing the site. This is rare, and I'm not sure of the exact cause, yet, but it needs fixing.
- Removing history items or articles wouldn't be difficult at all. Most of the code is there already, but there's no mechanism on the front end to do so.
- Creating a new history item sends way too much data, but efforts to pull already-known information within the backend was just taking too long.
- Testing is fairly pathetic. I need to refresh myself with a crash course on finding the line between mocking nothing and testing nothing when it comes to NestJs. The front end is much easier, but I still need to figure out how to stand this up on Netlify and Friday is vanishing quickly. As is, testing is very sparse and that's a little embarassing.
- Clicking View doesn't take you directly to the sign-in page, like the requirements asked for. It would be easy - just stuff in the same code from the Log In button. But as a user I hate getting redirected when it's not clear, and this solution allows for a little sales pitch, too. If this way is not acceptible, obviously it would have to go.
- Getting granular user permissions in would probably be worthwhile if 'add article' is going to stay, but hopefully this works for a sample app.

## Time

There's clearly more polish that could be done, but hopefully something here is representative enough. Regardless of the outcome, thank you for taking a look, and for your time and consideration generally.

- Chris
