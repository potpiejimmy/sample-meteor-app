# sample-meteor-app
Sample Meteor Angular 2 App with PrimeNG Datatable

To install, do the following:

Install [Meteor](https://www.meteor.com/install), then open a command shell in the cloned project folder:

    cd sample-meteor-app
    meteor create .
    meteor remove blaze-html-templates
    meteor add angular2-compilers barbatus:angular2-runtime
    meteor npm install
    sudo npm install typings -g
    typings install
    typings install registry:env/meteor --global
    
And for now, also do this:

    mkdir public
    cp -a node_modules/primeui public

To start, simply call

    meteor
    
You should see an empty PrimeNG datatable. While running, open a second terminal and watch Meteor magically updating the PrimeNG datatable on database changes:

    meteor mongo
    db.parties.insert({"name":"Fetzisch","description":"Celebrate now!","location":"ZEIL 1A, FRANKFURT"});
    
IF THIS CRAZY SHIT DOESN'T BLOW YOUR MIND I DON'T KNOW WHAT DOES... LOL :D
