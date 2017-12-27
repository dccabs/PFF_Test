# PFF_Test

Clone the repo somewhere on your local machine.

Install node, npm, yarn if you do not have it.

1. Cd to the PFF_test directory after you clone the repository.
2. npm install
3. npm start

The server should boot up on http://localhost:3000/


# Notes
I was getting ``Access-Control-Allow-Origin`` errors when doing an ajax call to the the external JSON file located on Amazon.  It didn't have that header configued.  So as a work around I used the Cors Toggle Chrome Extension so that it allowed me to retrieve and parse the JSON file as desired.

https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim

Once you add the extension click on it in the toolbar to enable it for the page.

## Create react app

I used the create-react-app boiler plate to start the project.  It's a fairly barebones scaffolding app.  However, you may see more directories in the app than are being used.   

## Site Usage
Just select the QB from the dropdown, and it should go to the page that displays the full stats.  You can reach other QB's by using the dropdown to select other QB's.  Nothing fancy there.  

If you'd like to see anything else, please let me know and I'd be glad to demonstrate.  Thanks for the consideration.

-Dan

