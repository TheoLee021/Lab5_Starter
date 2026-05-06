# Lab 5 - Starter
Name: Theo Lee

## GitHub Pages
- Expose (Party Horn): https://theolee021.github.io/Lab5_Starter/expose.html
- Explore (Speech Synthesis): https://theolee021.github.io/Lab5_Starter/explore.html

## Check Your Understanding
1) Would you use a unit test to test the "message" feature of a messaging application?

No, I would not use a unit test alone for the "message" feature. Sending a message touches a lot of moving parts: the UI input, the network call, storing it, and showing it to the other user. A unit test only checks one piece in isolation, so it can't really tell you whether the whole flow works. Something like an integration or end-to-end test is a better fit here.

2) Would you use a unit test to test the "max message length" feature of a messaging application?

Yes. The 80-character rule is a small, self-contained piece of logic with no outside dependencies, so it's easy to check with a bunch of boundary inputs like 79, 80, 81, and empty strings. That kind of pure validation logic is what unit tests are best at.