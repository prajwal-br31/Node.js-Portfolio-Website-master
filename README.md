# Portfolio-Website

Portfolio website using Express, Node.js and EJS.
<br/>
Website hosted on AWS can be found here : https://prajwalbr.site/

### Setup for Mac

1. Clone the git repository

   ```
    git clone https://github.com/prajwal-br31/Node.js-Portfolio-Website-master
    ```
   
3. In a command window, cd to root folder of this project and ensure dependencies are installed

    ```
    npm install
    ```

4. Give email username and password details in the index.js file for email - [In server/routes](server/routes/index.js)
  

5. Start development by giving the command
   
    ```
    npm run start
    ```

You can then view the demo application in a browser at localhost:8000.

## Deploying changes into AWS

1. ssh into the EC2 instance with the key
    ```
        ssh -i AWSKey.pem ec2-user@your.public.IP.address
    ```

2. Install the dependencies like node and pm2. Start pm2 process seperately for client and server
    ```
        git clone https://github.com/prajwal-br31/Node.js-Portfolio-Website-master
        cd Node.js-Portfolio-Website-master
        npm install
        <!-- Start production server using pm2-->
        pm2 start server.js
        <!-- Application is now running at http://your.public.ip.address:8000 -->
        <!-- Save pm2 and enable startup on reboot before logging out -->
        pm2 save
        pm2 startup
        logout
    ```

