export const send = async (email, message) => {
    let feedback = 'Invalid field(s).';
    if (email && message && message.length > 0) {
        const emailValid = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
        feedback = 'Invalid email address.';
        if (emailValid) {
            const options = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, message: message})
            }
            let res = await fetch('/api/message', options);
            res = await res.json();
            feedback = res.response || 'Internal server error.';
        }
    }
    return feedback;
}