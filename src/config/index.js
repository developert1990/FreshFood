const LOCAL = process.env.REACT_APP_EXPRESS_LOCAL;
const EC2 = process.env.REACT_APP_EC2;
export const EMAIL_REG_EXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const ZIPCODE_REG_EXP = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
export const NAME_REG_EXP = /^[a-zA-Z]+$/;
export const API = process.env.NODE_ENV === 'development'? LOCAL : EC2;