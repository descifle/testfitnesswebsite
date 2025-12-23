import { Dispatch, SetStateAction } from "react";

export const onItemFocus = (e: React.FocusEvent<HTMLInputElement, Element>, setState: Dispatch<SetStateAction<any>>, setStateValue: any) => {
    setState(setStateValue);
}

export const onItemBlur = (e: React.FocusEvent<HTMLInputElement, Element>, setState: Dispatch<SetStateAction<any>>, setStateValue: any) => {
    setState(setStateValue);
}

export const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

export const checkPassword = (password: string,
    setError: Dispatch<SetStateAction<string>>,
    element?: HTMLElement) => {

    if (password.length < 7) {
        setError('password is too short');

        if (element) {
            element.focus();
        }

        return false;
    } else {
        setError('');
        return true;
    }
}

export const scrollToElement = (className: string | null, id: string | null) => {
    let element;

    if(className !== null) {
        // scroll to element by classname
        element =  document.querySelector(`.${className}`) as HTMLElement;
    } else {
        // scroll to element by id
        element =  document.querySelector(`#${id}`) as HTMLElement;
    }

    element.scrollIntoView({ behavior:"smooth" })
}

export const importAll = (r: any) => {
    let images: any = [];

    r.keys().forEach((item: any) => {
        images = [...images, r(item)]
    });
    return images;
}

// auth util

export const setItem = (name: string, item: object) => {
    if(item === null || name === null) return false;

    localStorage.setItem(name, JSON.stringify(item));

    return true;
}

export const getItem = (name: string) => {
    const data = localStorage.getItem(name);

    if(data !== null) return JSON.parse(data);
    else return null;
}

export const removeItem = (name: string) => {
    localStorage.removeItem(name);
}