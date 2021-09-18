export const emptyUserData = {
    "id": null,
    "name" : "",
    "email" : "",
    "phoneNumber" : null,
    "address":[ {
        "addFirstLine": "",
        "addSecondLine":"",
        "city" : "",
        "state" :"",
        "postalCode": null,
    }],
};

export const profileContent = {
   inputStyle : "align-self-center  d-block border-0 border-bottom border-secondary mt-3",
    inputStyleReadOnly : "  pt-2  mt-3  pb-2 border-0 secondary-color ps-3 text-secondary align-self-center  d-block",
    inputField :[
        {
            label:"Enter your name",
            name:"name",
            type:"name"
        },
        {
            label: "Enter your phone number",
            name: "phoneNumber",
            type: "number"
        },
        {
            label: "Enter email",
            name: "email",
            type: "email"
        },
    ]
}