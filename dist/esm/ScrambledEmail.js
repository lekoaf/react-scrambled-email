import React, { useCallback, useState } from 'react';
import emailScramble from 'email-scramble';
export const ScrambledEmail = ({ email, text, className }) => {
    const [state] = useState(emailScramble.encode(email));
    const onClick = useCallback((e) => {
        e.preventDefault();
        const a = document.createElement('a');
        a.href = `mailto: ${emailScramble.decode(state)}`;
        a.click();
    }, [state]);
    return React.createElement("a", { href: `mailto:${state}`, onClick: onClick, className: className }, text);
};
//# sourceMappingURL=ScrambledEmail.js.map