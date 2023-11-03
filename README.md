# WEBSITE with Next.js

## Libraries
*  Material UI
*  Framer Motion
*  REACT
*  Lottie Files
*  Nodemailer

## Challenges
*  I had issues where my background image wouldn't fill the entire screen for all screen sizes and I also needed to make my background darker. My original idea was to use a body with background-color: rgb(70, 60, 60) and body::before setting the opacity to 0.35 and adjust the height, overflow, position: absolute, and background-size: cover.  I later decided to pull my image into Canva, overlay a square over my image, then adjust my transparency.  This gave me the effect I was looking for and allowed me the ability to remove unnecessary code. 
*  I had intermitting issues where Error: Hydration failed because the initial UI does not match what was rendered on the server.  Warning: Expected server HTML to contain a matching div in p.I didn't have any divs in p.  After researching and asking the Techlahoma community, I was able to narrow down which page was causing the hydration error by commenting out each page and seeing which page would fail.  I ended up importing dynamic and exported the footer as a promise to run after everything else renders.
*  I was getting an error with an animation I had on my skills page not being detected in Vercel and causing . I ran an audit, npm audit fix, then npm run build, then was able to preview my website.
*  I found this video helpful when setting up my API for Nodemailer [Video](https://www.youtube.com/watch?v=t2LvPXHLrek)
*  I was unable to send emails from the contacts page locally, but not able to in production. Just like my database, I needed to add my environment varibles for email and email password in Vercel.
