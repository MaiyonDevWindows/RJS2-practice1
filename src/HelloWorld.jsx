import React from 'react'

export default function HelloWorld() {
    let name = "Cee";
    const user = {
        firstName: "John",
        lastName: "Doe"
    };
    const formatName = function (user) {
        return user.firstName + " " + user.lastName;
    };
    return (
        <div>
            <div>{name === "Cee" ? "Xin chào Cee" : `Xin chào ${formatName(user)}`}</div>
            <div>Rất vui được gặp bạn</div>
            {/* Comment trong ReactJS */}
        </div>
    );
}