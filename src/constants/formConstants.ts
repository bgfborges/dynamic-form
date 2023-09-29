import { contactForm } from './forms/contact-12345'
import { loginForm } from './forms/login-56789'

export const REQUEST_FORM_COMPONENT = 'REQUEST_FORM_COMPONENT'
export const SUBMIT_FORM_COMPONENT = 'SUBMIT_FORM_COMPONENT'

export const CONTACT_FORM = 'contact-12345'
export const LOGIN_FORM = 'login-56789'

export const FORM_MAP = {
    [CONTACT_FORM]: contactForm,
    [LOGIN_FORM]: loginForm,
}