# WEBSITE with Next.js

## Libraries
*  Material UI
*  Framer Motion
*  REACT
*  Lottie Files
*  Nodemailer

## Challenges
*  I had issues where my background wouldn't show on screen
*  I had intermitting issues where Error: Hydration failed because the initial UI does not match what was rendered on the server.  Warning: Expected server HTML to contain a matching div in p.I didn't have any divs in p.  After researching and asking the Techlahoma community, I was able to narrow down which page was causing the hydration error by commenting out each page and seeing which page would fail.  I ended up importing dynamic and exported the footer as a promise to run after everything else renders.
*  I was getting an error with an animation I had on my skills page not being detected in Vercel and causing . I ran an audit, npm audit fix, then npm run build, then was able to preview my website.
*  I found this video helpful when setting up my API for Nodemailer [Video](https://www.youtube.com/watch?v=t2LvPXHLrek)
