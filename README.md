# reminder


A user signs up to use the app
    Data sets to gather registration info
        Password: "";
        Username: "";
        Phone#: "";
        RestrQues: "";
        Email: "";
    Authentification Verification
        *Sends text to user to verify account*
        *Compose generic email with button that verfies account*
        2FA: Email
    Set up basic recovery means
        Text/Email user when password is forgotten

Primary Function
    Set up online phone that takes input
        Program phone to send confirmed users two messages:
            9AM: Remember to Grind
            9PM: Did you Grind today? [link]
        2nd Message contains a link that leads to site
            Webpage contains two buttons
            Buttons say "Yes" & "No"
            If "Yes", leads to page with streak system
            If "No", get a message of fatherly disappoint

After they sign up, every day at 9am they should receive a notification that says "Remember to grind today."
Every day at 9pm they should receive a notification that says "Did you grind today?".  That notification will contain a link which will take us to our web page.
Our web page should have two buttons: "Yes" (if you did grind today) and "No" (if you didnt grind today)
There should be a streak counter at the top of the web page
I'd like y'all to work together to accomplish step number 4.
Let's get two buttons, right in the center of the page, let's create "onClick" handlers on those buttons that are just simple console.logs for now and let's create a commit and push that to our remote repository