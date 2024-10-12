this is just a simple counter score for badminton wich is include function increment and dcrement for each site of player, this repository will update by time as long as I upgrade my skill.
check the image below this 👇

![image](https://github.com/user-attachments/assets/66d52445-1552-4254-b9f7-07796c1302ae)

prequisites :
u need local server xampp or similar app

1. first thing first. u need to clone Repository

```sh
    git clone https://github.com/username/badminton-score-counter.git`
    cd badminton-score-counter
```

2. install dependencies

```sh
    npm init -y
    npm install
```

### Database Setup

1. Open xampp, start Apache & MySQL module
2. on browser open localhost server http://localhost/phpmyadmin/
3. run SQL Query, paste code below

   ```sh
        CREATE DATABASE `user_management-tepok-bulu-counter`;
        USE `user_management-tepok-bulu-counter`;
   ```

   ```sh
        CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
   ```

### Run Program

```sh
    npm run tepok-run
```
