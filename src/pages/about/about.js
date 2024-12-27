import React from "react";

import "./styles.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const About = () => {

  return (
    <div className="aboutPage">
   
        <ContentWrapper>
    
                <div className="pageTitle">
                About us
                </div>
             <div className="bodyText">
             Lorem ipsum is placeholder text commonly used in graphic design, publishing, and web development to demonstrate the visual form of a document or typeface without relying on meaningful content.

Here's a sample of lorem ipsum text:

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</div>
   <div className="bodyText">
Key characteristics of lorem ipsum:

It resembles Latin: It's derived from a passage in Cicero's "De finibus bonorum et malorum" (On the Ends of Good and Evil), but the words have been altered and scrambled to make it nonsensical.
It has a natural-looking distribution of letters: This makes it useful for showing how text will flow on a page or in a design.
It's readily available: Many online generators can create different lengths of lorem ipsum text.
Why is it used?
</div>
   <div className="bodyText">
Focus on layout: It allows designers and developers to focus on the visual aspects of a design without being distracted by the content.
Avoidance of copyright issues: Since it's not real text, there are no copyright concerns.
Standard practice: It's a widely recognized and understood placeholder, making it easy to communicate design intentions.
If you need more lorem ipsum text or want to generate custom variations, you can search for "lorem ipsum generator" online. There are many websites that offer this functionality.
             </div>
             
        </ContentWrapper>
     
    </div>
  )
}

export default About
