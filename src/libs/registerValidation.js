import { EMAIL_REG_EXP, NAME_REG_EXP } from '../config';
import { INVALID_CONDITION_PASSWORD_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_FIRSTNAME_MESSAGE, INVALID_LASTNAME_MESSAGE, UNMATCHED_PASSWORD_MESSAGE } from '../constants';


export const registerValidation = ({ firstName, lastName, email, password, confirmPassword, obj }) => {
    const { pwCondition_first, pwCondition_second, pwCondition_third, pwCondition_forth } = obj;
    if (!firstName.match(NAME_REG_EXP)) {
        return { type: 'firstName', error: INVALID_FIRSTNAME_MESSAGE };
    } else if (!lastName.match(NAME_REG_EXP)) {
        return { type: 'lastName', error: INVALID_LASTNAME_MESSAGE };
    } else if (!email.match(EMAIL_REG_EXP)) {
        return { type: 'email', error: INVALID_EMAIL_MESSAGE };
    } else if (password !== confirmPassword) {
        return { type: 'password', error: UNMATCHED_PASSWORD_MESSAGE };
    } else if (!pwCondition_first || !pwCondition_second || !pwCondition_third || !pwCondition_forth) {
        return { type: 'pwCodition', error: INVALID_CONDITION_PASSWORD_MESSAGE };
    }
    return;
}