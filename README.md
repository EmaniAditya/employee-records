# Employee Records
Mern Stack code for the [Employee Records](https://www.github.com/EmaniAditya/employee-records)


## How To Run
Create the file `mern/server/config.env` with your MongoDB Atlas URI (I ran mongo on docker to test locally otherwise process is the same) and the server port:
```
ATLAS_URI=mongodb://localhost:27017
PORT=5050
```

Start server:
```
cd mern/server
npm install
npm start
```

Start Web server
```
cd mern/client
npm install
npm run dev
```


Push an existing repository from the command line, replace the repo link
```
git remote add origin https://github.com/EmaniAditya/employee-records.git
git branch -M main
git add .
git commit -am "Initial commit"
git push -u origin main
```