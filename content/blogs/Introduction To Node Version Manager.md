---
title: Introduction To Node Version Manager
date: 2020-04-14 10:21:18
draft: false
tags: [npm,javascript,nodejs,node]
summary: Node developers and enthusiast, ever wondered how will it be to use different versions of Node for your different applications or ever had issues in installing Node on your fresh Linux machines. Well if you had had these issues then here is the easiest way to solve it, that too in style.
---

![](https://cdn-images-1.medium.com/max/600/1*MW6lLdaO0-OG22HUTA2scA.png)

Hello Node developers and enthusiast, ever wondered how will it be to use different versions of Node for your different applications or ever had issues in installing Node on your fresh Linux machines. Well if you had had these issues then here is the easiest way to solve it, that too in style.

### What Is NVM?

**N**ode **V**ersion **M**anager or NVM is the answer to all of this. It allows the developers to install multiple versions of Node in their machine and at the same time provide them with a very easy seamless switching experience between different versions of Node.

In this article we will go from installing NVM to utilizing it to its full potential, so why wait lets dig in!

### Let’s Install NVM!

First we’ll need to make sure we have what it takes to install NVM, right?

Let’s install the required C++ compilers to make sure that the installation of NVM goes smooth. So make sure you follow the instructions below carefully for your respective machines.

*   Mac users run the following command in a terminal, make sure you hit “Install” when the popup appears.

[https://medium.com/media/e6a24e24ecaa8c57a91b0e779cdc5082/href](https://medium.com/media/e6a24e24ecaa8c57a91b0e779cdc5082/href)

*   Ubuntu or Debian users will have to run the following two commands in there terminal, make sure to type in your password correctly.

[https://medium.com/media/91dd02b6bb01ecd4c98cc472091009cf/href](https://medium.com/media/91dd02b6bb01ecd4c98cc472091009cf/href)

After you have installed the required tools, it’s time we install NVM.

Run the command below in a terminal ( Same command for both Ubuntu and Mac users )

[https://medium.com/media/c060ee9b4eb4f68d9f9effba0d6e2980/href](https://medium.com/media/c060ee9b4eb4f68d9f9effba0d6e2980/href)

**Final step, let’s verify if our installation was successful**

Close the existing terminals and open a new one, and then run the following command.

[https://medium.com/media/3f44eb36cf67c0b542c5f3be5ac0880d/href](https://medium.com/media/3f44eb36cf67c0b542c5f3be5ac0880d/href)

If the command worked you’ll see something like the following

![](https://cdn-images-1.medium.com/max/538/1*vfYF7nOG3H7dqnlUjFhtPw.png)

The command is used to check what version of the nvm is installed

Now its time to NVM 🥳….

### Installing Node

Let’s start with listing all the available Node versions, right from the version v0.1.14. To do so run the following NVM command and it will list out all the Node versions with the LTS releases marked.

[https://medium.com/media/21a9603efcdc06fa94b05c1b52fc0548/href](https://medium.com/media/21a9603efcdc06fa94b05c1b52fc0548/href)

The result of this command will look similar to the following, you might get more recent releases depending on when you are reading this article.

![](https://cdn-images-1.medium.com/max/564/1*I5TXwrg_Ng1FHzObbqQmOA.png)

The latest version being v13.2.0 and the LTS being v12.13.1

Now lets say we wanna try the latest release of Node, hence v13.2.0 ( Your Latest Release maybe different, feel free to try that one ). For doing so run the following command.

[https://medium.com/media/ec8d50cd20f8d9204ae5a086b581f14e/href](https://medium.com/media/ec8d50cd20f8d9204ae5a086b581f14e/href)

You can choose to install another version of Node if you wish too. After running the above command we would get something like the following.

![](https://cdn-images-1.medium.com/max/804/1*Qtqgz7CdNiOmai_fx3KMkw.png)

NVM first downloads the specified version of Node and then sets it up automatically for us. So now lets see what Node version we are using by running the following command.

[https://medium.com/media/720c33975cc963483d3743513ba0da99/href](https://medium.com/media/720c33975cc963483d3743513ba0da99/href)

### What About Multiple Node Versions?

The same command ( nvm install version ), can be used to install any different version of Node alongside any existing installed versions.

For example lets install the latest LTS version of Node, which was v12.13.1 ( we got this info from running “nvm ls-remote” remember? ). So for installing Node v12.13.1 we run the following command.

[https://medium.com/media/28dc739007826891bd0e8db2adab2d2d/href](https://medium.com/media/28dc739007826891bd0e8db2adab2d2d/href)

On running the above command we get the following results, which is similar to what we got earlier.

![](https://cdn-images-1.medium.com/max/800/1*WnzajDKuzLexrvSVoQ5IeQ.png)

This confirms the installation of Node v12.13.1

And now we are using the LTS version of node ( v12.13.1 ).

**But What If I Want To Switch Back To The Version I Installed Earlier?**

No worries NVM got your back. All we need to do is list out the versions of Node installed on our machines and then tell NVM to use one of those installed versions.

For doing so first we list out installed versions of Node by running the following command.

[https://medium.com/media/3a4437363d683760f02bc63785046db6/href](https://medium.com/media/3a4437363d683760f02bc63785046db6/href)

On running the above command we get a list of all installed node versions that are available on our machine. The result looks like the following

![](https://cdn-images-1.medium.com/max/692/1*TYiFQl203mrIj_m17E9loQ.png)

We can clearly see how I have other versions of Node installed too

Now for selecting one of the version of Node from the list of all versions installed on our machine, we need to tell NVM which version to use, and we do so literally by using the following command

[https://medium.com/media/e9b84af3c6fbdf98acce815c0a613d99/href](https://medium.com/media/e9b84af3c6fbdf98acce815c0a613d99/href)

On running the above command we shall get an output like below

![](https://cdn-images-1.medium.com/max/541/1*hniAUgYyZGGYscf92ti5lw.png)

To verify if the Node version currently used by our machine is switched or not, we run the following command

[https://medium.com/media/720c33975cc963483d3743513ba0da99/href](https://medium.com/media/720c33975cc963483d3743513ba0da99/href)

On running the above command we see that our Node version is no more v12.13.1 ( or whichever LTS version you installed ) but its switched to version v13.2.0 ( or whichever latest version you installed )

### Conclusion

NVM or Node Version Manager is a great tool for developers wanting to develop applications that involve the use of different Node versions. The ease and seamless way of installing, managing and switching between different Node versions is just remarkable. It can really help save a lot of time. A special thanks to all the NVM developers, you guys helped me save a lot of time.

NVM YOUR LIFE NODE DEVELOPERS

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=7c2e3f49ebe)

* * *

[Introduction To Node Version Manager](https://medium.com/vit-linux-user-group/introduction-to-node-version-manager-7c2e3f49ebe) was originally published in [VIT Linux User Group](https://medium.com/vit-linux-user-group) on Medium, where people are continuing the conversation by highlighting and responding to this story.