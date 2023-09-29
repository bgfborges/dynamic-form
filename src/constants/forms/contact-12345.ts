export const contactForm = {
    settings: {
        id: "contact-12345",
        submitButton: "Send Message",
        formTitle: "Contact Us"
    },
    fields: [
        {
            type: "text",
            label: "Full Name",
            name: "full_name"
        },
        {
            type: "select",
            label: "Select Priority",
            name: "priority",
            options: ['low', 'middle', 'high']
        },
        {
            type: "email",
            label: "Email Address",
            name: "email"
        },
        {
            type: "textarea",
            label: "Message",
            name: "message"
        }
    ]
}
