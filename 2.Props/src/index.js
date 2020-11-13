import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";

const App=()=>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 5:00AM" content="Nice Blog Post!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jack" timeAgo="Today at 4:10PM" content="I like the subject"  avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 9:05AM" content="Nice writing"  avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <CommentDetail author="Matt" timeAgo="Today at 11:15PM" content="cool"  avatar={faker.image.avatar()}/>
            <CommentDetail author="Aanna" timeAgo="Yesterday at 7:48AM" content="Learned a lot"  avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);