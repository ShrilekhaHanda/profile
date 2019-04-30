import React from 'react'
 
class Likedin extends React.Component {
   
    render() {
        const authurl = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=819gu3i40oucbr&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fheader&state=2522abcde12345&scope=r_basicprofile";
        return (
            
            <div className="App">
                <a href={authurl}><h4>Sign in with Linkedin</h4></a>
            </div>
        );
    }
}
 
export default Likedin;