
import React from 'react'
import { Amplify } from 'aws-amplify';
// import config from '';
Amplify.configure(config);

function page() {
    return (
        <div>Hello world</div>
    )
}

export default page