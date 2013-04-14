SailsJS / AngularJS / Yeoman Login Demo

This demo app was put together in hopes of learning how to tie together Angular, Sails and Yeoman. Heavily inspired and some code lifted from

https://github.com/sectore/CafeTownsend-Angular-Rails


#How I got here:

Step 1:
Generate new Angular scaffold with Yeoman
```$ mkdir -p ./loginDemo && cd loginDemo && yo angular:app loginDemo```

Step 2:
backup files that need merged
```$ mv package.json package.json.bak && mv .gitignore .gitignore.bak```

Step 3:
Create sails app
```$ sails new .```

Step 4:
Merge package.json
```

```

Step 5: 
Merge .gitignore
```$ cat .gitignore.bak >> .gitignore && rm .gitignore.bak```

Step 6:
Remove unneeded sails assets
```$ rm -rf public && rm -rf assets/js && rm -rf assets/styles```

Step 7:
Install additional packages
```$ npm install mongoose bcrypt sails-mongo --save```

Step 8:
Move angular SPA template into EJS layout

Step 9:
Modify Sails application settings
