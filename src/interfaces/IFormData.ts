import { HTMLInputTypeAttribute } from "react";

type TInput = HTMLInputTypeAttribute

type TSelect = 'select'

export interface IField {
    label: string
    type: TInput | TSelect
    options?: string[]
    name: string
}

type IFormSettings = {
    id: string
    submitButton: string
    formTitle: string
}

export interface IFormData {
    settings: IFormSettings
    fields: IField[] | {}
}