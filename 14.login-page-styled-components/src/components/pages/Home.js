import React from 'react';
import { PageLayout } from 'components/common/PageLayout';

const Home = () => {
    return (
        <PageLayout>
            <h1>Home</h1>
            <p>
                A new wave of JavaScript-based tools are trying to solve these issues at their root, by changing the way you write CSS.
                Styled Components is one of these libraries, and it has quickly attracted a lot of attention due to its mix of innovation and familiarity. So if you use React (and if you don’t, check out my JavaScript study plan and my intro to React), it’s definitely worth taking a look at this new CSS alternative.
                <br/>
                I recently used it to redesign my personal site, and today I wanted to share a few things I learned in the process.

                Components, Styled
                The main thing you need to understand about Styled Components is that its name should be taken quite literally. You are no longer styling HTML elements or components based on their class or HTML element:
                <br/>

                Instead, you’re defining styled components that possesses their own encapsulated styles. Then you’re using these freely throughout your codebase.
            </p>
        </PageLayout>
    );
}

export default Home;
