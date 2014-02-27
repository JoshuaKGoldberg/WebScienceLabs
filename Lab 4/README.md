Web Science Lab 4 - Josh Goldberg

This is a simple request tool for the public Facebook Graph API.
It takes a page name (such as "coke" or "microsoft") from the user,
requests the http://graph.facebook.com/???? page, and displays the
JSON-encoded result to the user as a bunch of {key: value} pairs.

I made this becaues it's a faster to get simple stuff like
company websites and desriptions from this page than Google. For
URL stuff, I'm using the Linkify plugin for JQuery to auto-detect
and format them.