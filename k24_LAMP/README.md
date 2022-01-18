# how-to :: Provision a Droplet and Install LAMP
---
## Overview
Allows us to host websites and other apps on easily accessible virtual servers.

### Estimated Time Cost: 1.5 hours

### Prerequisites:

### Github Student Developer Pack:

### Provisioning A Droplet:

### Installing Linux, Apache, Sqlite, Python (LAMP):

### Extra:

1. Initial Server Setup `ssh root@137.184.27.115`
2. Create new user `adduser <user>`
3. admin priviliges `usermod -aG sudo <user>`
4. firewall `ufw app list`
5. enable firewall 
`ufw allow OpenSSH`
`ufw enable`

6. enabling access for regular user, creating new terminal session
`ssh <user>@your_server_ip`

7. Installing lamp
`sudo apt update`
`sudo apt install apache2`

8. Allow traffic 
`sudo ufw app list`
`sudo ufw allow "Apache Full"`

8. SQL installation `sudo apt install mysql-server`

9. install python3 `sudo apt install python3`



### Resources
* [Digital Ocean](https://www.digitalocean.com/)
* [Github Student Developer Pack](https://education.github.com/pack)
* [Installing LAMP Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04)
* [Provisioning Droplet](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04)
* [Sqlite Command Line Stuff](https://sqlite.org/cli.html)



---

Accurate as of (last update): 2021-01-17

#### Contributors:  
Deven Maheshwari, pd1 
Aaron Contreras, pd1
